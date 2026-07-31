# Renders every social/posts/*.html into a 1080x1080 PNG in social/images/.
# No Node needed - it drives headless Chrome (or Edge) to screenshot each page.
# Usage (from the repo root or anywhere):  pwsh social/render.ps1

$ErrorActionPreference = "Stop"
$root   = Split-Path -Parent $MyInvocation.MyCommand.Path
$posts  = Join-Path $root "posts"
$images = Join-Path $root "images"
New-Item -ItemType Directory -Force -Path $images | Out-Null

# Find a Chromium-based browser.
$candidates = @(
  "$env:ProgramFiles\Google\Chrome\Application\chrome.exe",
  "${env:ProgramFiles(x86)}\Google\Chrome\Application\chrome.exe",
  "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe",
  "$env:ProgramFiles\Microsoft\Edge\Application\msedge.exe"
)
$browser = $candidates | Where-Object { Test-Path $_ } | Select-Object -First 1
if (-not $browser) { throw "No Chrome or Edge found. Install one, or edit this script." }
Write-Host "Using $browser"

Get-ChildItem -Path $posts -Filter *.html | Sort-Object Name | ForEach-Object {
  $out = Join-Path $images ($_.BaseName + ".png")
  $url = "file:///" + ($_.FullName -replace '\\','/')
  & $browser --headless=new --disable-gpu --hide-scrollbars --allow-file-access-from-files `
    --force-device-scale-factor=1 --window-size=1080,1080 `
    --screenshot="$out" $url 2>$null
  Write-Host ("  {0} -> images/{1}.png" -f $_.Name, $_.BaseName)
}
Write-Host "Done. PNGs are in social/images/ (1080x1080, ready for Instagram)."
