# Renders the Taco logo (transparent PNG, several sizes) and the Instagram
# banner from social/assets/*.html into social/assets/*.png.
# Drives headless Chrome/Edge - no Node needed.  Usage:  pwsh social/make-brand-assets.ps1

$ErrorActionPreference = "Stop"
$root   = Split-Path -Parent $MyInvocation.MyCommand.Path
$assets = Join-Path $root "assets"

$candidates = @(
  "$env:ProgramFiles\Google\Chrome\Application\chrome.exe",
  "${env:ProgramFiles(x86)}\Google\Chrome\Application\chrome.exe",
  "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe",
  "$env:ProgramFiles\Microsoft\Edge\Application\msedge.exe"
)
$browser = $candidates | Where-Object { Test-Path $_ } | Select-Object -First 1
if (-not $browser) { throw "No Chrome or Edge found. Install one, or edit this script." }
Write-Host "Using $browser"

# Chrome screenshots the page's content box, so the .stage / .banner elements
# must carry the exact pixel size we want. window-size just needs to be big enough.
function Shot($htmlName, $outName, $canvas, $transparent) {
  $url = "file:///" + ((Join-Path $assets $htmlName) -replace '\\','/')
  $out = Join-Path $assets $outName
  $args = @(
    "--headless=new", "--disable-gpu", "--hide-scrollbars",
    "--allow-file-access-from-files", "--force-device-scale-factor=1",
    "--window-size=$canvas",
    "--screenshot=$out"
  )
  if ($transparent) { $args += "--default-background-color=00000000" }
  $args += $url
  & $browser @args 2>$null
  # Headless Chrome flushes the file just after exit; wait until it's readable.
  for ($i = 0; $i -lt 40 -and -not (Test-Path $out); $i++) { Start-Sleep -Milliseconds 100 }
  Start-Sleep -Milliseconds 200
  Write-Host ("  -> assets/{0}" -f $outName)
}

# High-quality transparent downscale of a PNG.
function Resize($srcName, $outName, $size) {
  Add-Type -AssemblyName System.Drawing
  $src = [System.Drawing.Image]::FromFile((Join-Path $assets $srcName))
  $bmp = New-Object System.Drawing.Bitmap $size, $size
  $g   = [System.Drawing.Graphics]::FromImage($bmp)
  $g.InterpolationMode  = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.SmoothingMode      = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
  $g.PixelOffsetMode    = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $g.Clear([System.Drawing.Color]::Transparent)
  $g.DrawImage($src, 0, 0, $size, $size)
  $bmp.Save((Join-Path $assets $outName), [System.Drawing.Imaging.ImageFormat]::Png)
  $g.Dispose(); $bmp.Dispose(); $src.Dispose()
  Write-Host ("  -> assets/{0}  ({1}x{1})" -f $outName, $size)
}

# Transparent square logo at full size, then crisp downscales.
# Capture == window size in headless Chrome, so window must be the exact target.
Shot "logo.html" "dede-1024.png" "1024,1024" $true
Resize "dede-1024.png" "dede-512.png" 512
Resize "dede-1024.png" "dede-256.png" 256

# Instagram landscape / link-in-bio banner (1.91:1, opaque green field).
Shot "ig-banner.html" "ig-banner.png" "1080,566" $false

Write-Host "Done. PNGs are in social/assets/."
