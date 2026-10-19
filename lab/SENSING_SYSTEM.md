# Kisi Poultry House Sensing System — Master Plan

A single, offline-first, solar-powered system to **measure the things that keep birds
alive and productive, and raise an alarm the moment anything goes wrong**, starting in a
brooder and scaling to a full poultry house.

> **Status:** Working master plan for review. Target ranges are practical guides and must
> be confirmed with a poultry vet for the breed and age. All prices are **USD estimates**
> to verify locally (and in Naira) before buying. This is a measurement/automation plan,
> not a veterinary, feed, or electrical engineering spec. pH, medication, vaccination and
> feed-formulation decisions must be reviewed by qualified professionals.

This is the **only plan document** for the lab. The one other file,
`poultry_research_diagnostics_genetics_plan.pdf`, is kept as background reference.
Remote viewing (cameras over the internet) is **deliberately shelved**; the design leaves
a clean door open to add it later with no rework.

### Decisions locked (owner, v2)
1. **Build path:** the **hybrid** — a proven Inkbird-type thermostat controls/alarms the
   heat plate, and an ESP32 node handles all measurement, logging and whole-house alarms.
2. **Water quality:** fit **pH and TDS probes now**, in the first build (not deferred).
3. **Off-site SMS:** include it now, but aimed at **local staff phones**, not the owner in
   the US. Local SMS is about ₦4 each (negligible); international SMS to the US is pricey
   and unreliable, so owner notification waits for the future internet/4G layer. SMS is for
   genuine exceptions only, mainly a night / out-of-earshot backup to the on-site siren.
4. **Temp/humidity spots:** **3** (heat zone, middle, far corner) for a real heat map.
5. **Feed:** start **manual** (platform scale); add load cells under a hopper in Phase 3.
6. **Water quality location:** a **header tank** will be installed to feed the drinker line;
   the pH, TDS and water-temp probes sit in that tank and serve the whole line.

---

## 1. Principles (what makes this design the right one)

1. **Offline-first.** There is no internet at the house. All measuring, logging and
   alarming happen **on site**, with no cloud needed.
2. **"Knowing when something is off" is local.** A screen shows live numbers; a buzzer,
   light or siren fires when a reading leaves its safe band. An optional **SMS text (2G,
   not internet)** can reach a phone off-site.
3. **Runs on the existing solar.** Low-power parts, a battery buffer, 24/7 operation
   through night and cloudy days.
4. **One recipe, brooder to full house.** The same controller node repeats per house;
   only the alarm thresholds change with bird age.
5. **Nothing is wasted when internet arrives.** The controller already has WiFi; the day a
   link exists, it starts pushing the same data to a dashboard and to remote cameras.
6. **Proven hardware for life-critical jobs; DIY for the data.** The heat plate is
   controlled by a purpose-built thermostat, not a hobby circuit. The DIY node handles
   measurement and logging around it.
7. **Prototype in the US, deploy in Nigeria.** Every part is bought and bench-tested in the
   US first, then shipped and installed.

---

## 2. What we measure, why, and when to alarm

Five things matter most: **temperature, humidity, light, water (quantity + quality), and
feed (quantity, quality later).**

| Parameter | Why it matters | Brooder target (guide) | Grown-bird target (guide) | Alarm when |
|---|---|---|---|---|
| **Temperature** | The #1 killer/limiter. Chicks cannot regulate heat; adults suffer heat stress. | Wk1 ~33–35°C, stepping down ~2–3°C/wk to ~24°C by wk4 (at chick level) | Comfort ~18–24°C; stress rises above ~28–30°C | Outside the week's band, or rising past heat-stress line |
| **Humidity** | Too dry stresses chicks and dusts the air; too damp breeds mould and ammonia. | ~55–65% early, settling ~50–60% | ~50–70% | <40% or >75% |
| **Light (lux)** | Drives feeding, activity and development; uneven light causes piling and pecking. | Bright and long early (set with specialist), even across floor | Programme by age/stage | Dark patches, or level far off the set programme |
| **Water quantity** | A **sudden drop is the best cheap early disease warning**; also welfare. | Rises steadily with age; watch the trend | Trend vs flock size | Sudden fall (or runaway rise = leak) vs recent days |
| **Water quality: pH** | Affects gut health and the effectiveness of vaccines/medicines in water. | ~6.0–8.0 (many aim ~6.5–7.5) | Same | Outside band |
| **Water quality: TDS/salts, temp (later turbidity)** | High dissolved solids/dirty or hot water cuts intake and carries risk. | TDS ideally <1000 ppm; cool water | Same | TDS high, water hot, visibly dirty |
| **Feed quantity** | Intake trend drives growth, feed conversion, cost; a drop flags trouble. | Daily intake by age | Daily intake by age | Sudden drop vs recent days |
| **Feed quality (later)** | Mould/mycotoxins and wrong formulation cause the exact losses in the PDF. | Dry, no mould; formulate on nutrients | Same | Moisture high / visible mould → lab |

Ranges are **starting guides to confirm with a vet/breed guide**, then set as the node's
thresholds. The alarm logic is simple: each reading has a safe band; leave it and the node
reacts.

---

## 3. System architecture (fully offline)

```
     EXISTING SOLAR ──► BATTERY + CHARGE CONTROLLER ──► 5V/3.3V (buck regulator)
                                                             │ 24/7 power
                                                             ▼
   ┌──────────────────────── CONTROLLER NODE (ESP32) ───────────────────────┐
   │  reads sensors every few minutes, checks each against its safe band     │
   │                                                                         │
   │  INPUTS                        OUTPUTS (all local, no internet)         │
   │  • Temp/humidity  (SHT31)      • OLED/LCD screen: live readings + status│
   │  • Light / lux    (BH1750)     • Buzzer + LED: warning                  │
   │  • Water flow     (YF-S201)    • 12V siren/strobe: critical             │
   │  • Water pH       (pH probe)   • SD card: timestamped CSV log           │
   │  • Water TDS/temp (TDS+DS18B20)• (optional) SIM800L: SMS text, 2G       │
   │  • Feed weight    (load cell)  • (future) WiFi push when internet exists│
   │  • RTC clock (DS3231) for accurate timestamps                           │
   └─────────────────────────────────────────────────────────────────────────┘

   ALONGSIDE (proven, standalone):
     HEAT PLATE ──► THERMOSTAT CONTROLLER (Inkbird-type): switches plate on/off
                    AND alarms on out-of-range. Life-critical job, not DIY'd.

   HUMAN LOOP:
     Staff read the screen / respond to alarms, and once a day copy the key numbers
     into the records app (records.kisi.africa) from anywhere with phone signal.
```

Two independent safety layers on temperature: the **thermostat controls and guards the
heat plate**, and the **node measures and logs** the same temperature and alarms too. If
one fails, the other still protects the chicks.

---

## 4. How we measure each parameter (sensor + method + manual fallback)

| Parameter | Automated sensor | How it is placed/read | Manual fallback |
|---|---|---|---|
| Temperature | **SHT31** (accurate, I2C); or DHT22 (cheaper) | At **chick/bird height**, 1–3 spots (heat zone, middle, far corner) | Min/max thermometers read by eye |
| Humidity | Same SHT31 (temp+RH in one chip) | Same spots | Cheap hygrometer |
| Light (lux) | **BH1750** digital lux sensor | At bird height; fixed points for comparable readings | Handheld lux meter, manual log |
| Water quantity | **YF-S201 Hall-effect flow sensor** inline on the supply | Counts litres through the line; node totals per day | Mechanical water meter read daily |
| Water pH | **Gravity analog pH probe + module** | Probe in the header tank / drinker line; **needs regular calibration** | Handheld pH pen, manual |
| Water TDS/salts | **TDS (EC) sensor** | In the tank; flags salty/hard/dirty water | TDS pen, manual |
| Water temperature | **DS18B20** waterproof probe | In the tank; hot water cuts intake | Thermometer in a cup of the water |
| Feed quantity | **Load cells + HX711** under the feed hopper/feeder | Daily weight drop = feed eaten | Platform scale: weigh offered vs leftover |
| Feed quality (later) | **Grain moisture meter**; lab analysis for nutrients/mycotoxins | Sample each batch; dry + no mould | Visual/smell check; retain batch samples |

Notes:
- **pH and TDS probes are consumables** that drift and need calibration solution and
  occasional replacement. Budget for upkeep; a monthly manual pen check keeps them honest.
- **Feed quality cannot be fully automated.** Moisture is sensible on site; true nutrient
  and mycotoxin quality needs a lab (per the PDF). Be honest about this in planning.
- Start with the **big three (temp, humidity, light) + water flow**, then add **pH/TDS**
  and **feed load cells**. The node is designed to take them all from day one.

---

## 5. How we automate, and how we alarm with no internet

**The controller:** an **ESP32** (about $6–10). Chosen because it is cheap, low-power
(runs off solar easily), has many inputs for all these sensors, logs to SD, and already
has **WiFi/Bluetooth** so the exact same node gains remote dashboards/cameras later with no
new hardware. An **RTC (DS3231)** gives every reading an accurate date/time even offline.

**The automation loop (every few minutes, forever):**
1. Read every sensor.
2. Compare each to its safe band for the current bird age.
3. Update the **screen** (live numbers + OK/HIGH/LOW per item).
4. If anything is out of band, **fire the matching alarm**.
5. Write a timestamped line to the **SD card**.

**Alarm tiers (all local, no internet needed):**
- **Watch:** on-screen flag + LED. Minor drift.
- **Warn:** buzzer + flashing light. Staff should check now (e.g. humidity high, light dark patch).
- **Critical:** loud **12V siren/strobe**. Life-threatening (brooder too cold/hot, water stopped).
- **Off-site (included, still no internet):** a **SIM800L GSM module** sends an **SMS text**
  to **local staff phones**, e.g. "HOUSE1 TEMP 29C LOW 04:12". SMS runs on 2G (widely
  available rurally) where there is no data at all, and local SMS costs about ₦4 each, so
  running cost is negligible. Aim it at the people who can physically respond, not the owner
  in the US (international SMS is pricey and unreliable); owner notification waits for the
  future internet/4G layer. Keep it for genuine exceptions only, as a night / out-of-earshot
  backup to the siren. Note: the SIM must stay registered and topped up, and SIM800L needs a
  clean power supply on the bench (a known gotcha).

**Two build paths (pick per how much you want to tinker):**

- **Path A — Buy-and-go (least effort, fastest, most proven):**
  Off-the-shelf alarm units wired to the heat plate and sensors. The anchor is an
  **Inkbird ITC-308** (or similar): it **controls the heat plate** (turns it on below set
  temp, off above) **and alarms** on high/low. Add a standalone humidity alarm, a handheld
  lux meter, a mechanical water meter, a scale, and a pH pen. Reliable and simple, but the
  data lives in separate boxes and is read by hand.
- **Path B — Unified DIY node (one brain, all data, scales to remote):**
  The ESP32 node in §3 reads everything, logs to one SD file, drives one alarm stack,
  optional SMS, and is ready for internet later. More build effort, far better data and
  scaling.

**Recommended: a hybrid.** Keep the **Inkbird controlling the heat plate** (never put the
chicks' survival on a breadboard), and run the **ESP32 node** for unified measurement,
logging and whole-house alarms. Best of both: proven safety + unified, scalable data.

---

## 6. Power (off the existing solar)

- The whole node (ESP32 + sensors + screen) draws little, in the order of a few hundred
  milliamps. The **siren and heat plate** are the real loads; the plate should run on its
  own circuit through the thermostat.
- Add a **battery buffer + charge controller** so monitoring and heat **never cut out at
  night or on a cloudy day**. For a brooder this is essential.
- Use a **buck converter** to drop the solar battery's 12V to the 5V/3.3V the node needs.
- Keep the electronics in a **dust- and humidity-proof box**; poultry houses are harsh.

---

## 7. Data: logging and getting it into the records app

- **On site:** the node writes a **timestamped CSV** to SD (temp, humidity, lux, litres,
  pH, TDS, feed weight), one line every few minutes.
- **Into the records app:** once a day, staff copy the **key numbers** (and any alarm
  events, deaths, treatments) into `records.kisi.africa` from anywhere with phone signal.
  The detailed SD log is pulled to a laptop periodically for deeper review and to compare
  batches.
- **Non-negotiable labels:** every record carries **date, time, house ID, batch/flock ID,
  sensor location**. Without synced labels you cannot line up a cold night with a water
  drop, which is the whole point of measuring.

---

## 8. Scaling: brooder → grower → multiple houses

- **Same node, new thresholds.** Moving a batch from brooder to grower age just means
  loading the next temperature/light band. The hardware does not change.
- **One node per house.** Each house gets its own controller and sensor set; the recipe is
  copy-paste. A central laptop can later gather all the SD logs.
- **Water/feed scale up naturally:** the flow sensor and load cells work the same on a big
  house; only the pipe size and hopper change.
- **Remote, when ready:** the ESP32's WiFi means that the day internet (or a 4G router)
  arrives, the nodes push to a shared dashboard and the shelved cameras slot in, with no
  rebuy. The architecture was built for this from the start.

---

## 9. Prototype-in-the-US sequence

1. **Buy one node's worth of parts** (ESP32, SHT31, BH1750, flow sensor, pH + TDS kit,
   load cell + HX711, RTC, SD module, OLED, buzzer/LED, optional SIM800L) plus one
   **Inkbird ITC-308**.
2. **Build it on a breadboard at home.** Get live temp/humidity/light on the screen.
3. **Prove the alarms:** chill a sensor (fridge) to trip the LOW alarm; warm it to trip
   HIGH; blow on the humidity sensor; run water through the flow sensor; dip the pH probe
   in vinegar then baking-soda water to see it swing. Confirm the siren and, if used, the
   **SMS** actually fire.
4. **Calibrate** the pH and TDS probes with their solutions and **write the steps down**.
5. **Box it** dust/humidity-proof; label every wire.
6. **Ship to Nigeria**, wire to the solar battery, mount sensors at bird height, plumb the
   flow sensor and heat-plate thermostat, place the pH/TDS probes in the tank.
7. **Run a brooding batch fully monitored**, then review the SD log.

This de-risks everything: you learn and fix it where parts and support are easy, and only
mounting and plumbing happen on the farm.

---

## 10. Bill of materials (per house node; USD estimates, verify locally)

### Core node (temp, humidity, light, logging, local alarm)
| Item | Est. USD |
|---|---|
| ESP32 controller | $6–12 |
| SHT31 temp/humidity sensor (x1–3) | $5–30 |
| BH1750 light/lux sensor | $3–8 |
| DS3231 real-time clock | $3–6 |
| MicroSD logging module + card | $6–15 |
| OLED/LCD display | $4–12 |
| Buzzer + LEDs + 12V siren/strobe | $8–25 |
| Buck converter (12V→5V) + wiring + dust box | $15–40 |
| **Core node subtotal** | **~$50–150** |

### Heat-plate control + safety (strongly recommended)
| Item | Est. USD |
|---|---|
| Inkbird ITC-308 thermostat controller (controls + alarms heat plate) | $35–45 |

### Water quantity + quality
| Item | Est. USD |
|---|---|
| YF-S201 flow sensor (or mechanical water meter) | $8–25 |
| Gravity analog pH probe + module + calibration solutions | $45–75 |
| TDS/EC sensor | $10–20 |
| DS18B20 waterproof temperature probe | $3–8 |
| **Water subtotal** | **~$65–130** |

### Feed
| Item | Est. USD |
|---|---|
| Load cells + HX711 (under hopper) **or** platform scale to start | $15–90 |
| Grain moisture meter (feed-quality, later) | $20–60 |

### Off-site alerts without internet (optional)
| Item | Est. USD |
|---|---|
| SIM800L GSM module + 2G SIM (SMS) | $8–20 + SMS cost |

**Indicative per-house total:** roughly **$180–450** for a full node (core + heat control +
water + feed + SMS), before shipping/duty. A **minimal first node** (core + Inkbird + flow
meter + manual pH/feed) can start near **$120–200**. These are discussion-stage estimates.

---

## 11. Phased rollout

- **Phase 0 — US bench build (now):** build and prove one node + Inkbird; nail thresholds,
  alarms, calibration. (§9)
- **Phase 1 — Brooder install:** convert the house (curtains, heat plate, chick guard,
  clean-out), mount the node and sensors, plumb flow + heat control, place water probes,
  set the records sheet, name a records lead.
- **Phase 2 — Brood a batch, review:** run 4 weeks fully measured; review the SD log (heat
  curves, water trend, light map, pH, feed) against mortality; fix what the data exposes.
- **Phase 3 — Scale + automate more:** repeat the node to the next house; add feed load
  cells if still manual; add the SMS bridge if not already; when internet comes, switch on
  WiFi dashboards and the shelved cameras.

Stop and review between Phase 2 and Phase 3: spend on more automation only once the data
has earned it (as the PDF advises).

---

## 12. Open decisions for the next round

1. **Tinker level:** Path A (buy-and-go boxes), Path B (unified DIY node), or the
   recommended **hybrid** (Inkbird on the heat plate + ESP32 node for data)?
2. **How many temp/humidity spots:** 1 (heat zone only), or 3 (heat/middle/far) for a real
   heat map?
3. **pH/TDS now or later:** fit the water-quality probes in the first build, or start with a
   manual pH/TDS pen and add probes in Phase 3?
4. **Off-site SMS:** do you want SMS alerts to a phone now (needs a 2G SIM), or are on-site
   alarms enough until internet arrives?
5. **Feed:** load cells under a hopper now, or manual scale to start?
6. **Who is the on-the-ground records lead**, and do they already use the records app on a phone?
7. **Chicks per batch** this house will brood (sizes heat, guard, drinker/feeder counts).
8. Want me to turn the chosen path into a **specific model-by-model shopping list** (US
   purchase links + the bench wiring diagram) so you can order and build the prototype?

---

## 13. Honest limits

- **No sensor diagnoses disease.** A reading is a reason to look and to call the vet, not a
  conclusion. Keep a poultry vet / NVRI in the loop.
- **Someone must act on alarms.** The system shouts; a trained person still has to respond.
  Offline alarms only help if staff are present or SMS reaches someone who can act.
- **pH/TDS probes drift** and need calibration and replacement; treat them as upkeep items.
- **Feed quality is only partly measurable on site;** real nutrient/mycotoxin quality needs
  a lab.
- **Power is the backbone.** Size the battery for night and cloudy days; if the solar fails,
  both the heat and the monitoring fail, so protect that circuit.
- Prices and ranges here are discussion-stage estimates; confirm targets with a vet and
  prices with local vendors before buying.

---

## Appendix A — Shopping list (model-by-model, US purchase)

The hybrid build, one house node, **3 temp/humidity spots, pH + TDS now, manual feed,
SMS to local staff.** Specific parts chosen so the voltages and wiring in Appendix B just
work. Buy the electronics in the **US** (Amazon / Adafruit / DFRobot); buy the **scale,
header tank, plumbing and siren locally in Nigeria** where sensible. Prices are rough USD.

### Brain, clock, logging, display
| Part | Suggested model | Qty | ~USD | Notes |
|---|---|---|---|---|
| Controller | ESP32 DevKit (ESP32-WROOM-32, e.g. HiLetgo) | 1 | $9 | Buy 2; keep a spare. |
| I2C multiplexer | **TCA9548A** | 1 | $7 | Lets 3 identical SHT31 share one bus (they have only 2 addresses). |
| Real-time clock | DS3231 (ZS-042) + coin cell | 1 | $5 | Timestamps while offline. |
| SD logging | MicroSD card module (Catalex) | 1 | $6 | SPI. |
| Memory card | 32GB microSD (name brand) | 1 | $8 | Months of readings. |
| Display | 0.96" I2C OLED (SSD1306) | 1 | $6 | Live numbers + OK/HIGH/LOW. |

### Environment sensors (3 spots)
| Part | Suggested model | Qty | ~USD | Notes |
|---|---|---|---|---|
| Temp/humidity | **SHT31-D** breakout (Adafruit or generic) | 3 | $18–42 | Heat zone / middle / far corner, at bird height. |
| Light / lux | **BH1750** breakout | 1 | $4 | Bird height, fixed point. |

### Water quantity + quality (header tank)
| Part | Suggested model | Qty | ~USD | Notes |
|---|---|---|---|---|
| Flow (litres) | **YF-S201** Hall flow sensor | 1 | $9 | Inline on the tank outlet / supply line. |
| pH | **DFRobot Gravity Analog pH Kit (SEN0161-V2)** + probe | 1 | $40 | Outputs 0–3V, safe for ESP32. Needs calibration buffers. |
| pH buffers | pH 4.0 + 7.0 calibration solution | 1 | $12 | Consumable; recalibrate periodically. |
| TDS / salts | **DFRobot Gravity Analog TDS (SEN0244)** | 1 | $12 | Outputs ~0–2.3V, safe for ESP32. |
| Water temp | **DS18B20** waterproof probe + 4.7k resistor | 1 | $5 | In the tank. |

### Heat-plate control + safety (standalone, not wired to ESP32)
| Part | Suggested model | Qty | ~USD | Notes |
|---|---|---|---|---|
| Thermostat | **Inkbird ITC-308** | 1 | $35 | **Get the 220–240V version with a plug that fits Nigeria** (not the US 110V unit). Plate plugs into it; its own probe sits at chick level. Controls AND alarms. |

### Local alarms
| Part | Suggested model | Qty | ~USD | Notes |
|---|---|---|---|---|
| Buzzer | Active buzzer module | 1 | $3 | Warn tier. |
| Status LEDs | RGB or 3x LED + resistors | 1 | $3 | OK / warn / critical. |
| Relay | 1-channel 5V relay module (opto) | 1 | $5 | ESP32 switches the 12V siren through this. |
| Siren/strobe | 12V DC siren + strobe | 1 | $12 | Buy locally if cheaper. Critical tier. |

### Off-site SMS (to local staff)
| Part | Suggested model | Qty | ~USD | Notes |
|---|---|---|---|---|
| GSM module | **SIM800L** + antenna | 1 | $10 | 2G SMS. Needs its own clean 4V power (below) + a 1000µF cap. |
| SIM | Nigerian prepaid 2G SIM (MTN/Airtel/Glo) | 1 | local | Keep registered (NIN) and topped up. |

### Power (off the existing solar/12V battery)
| Part | Suggested model | Qty | ~USD | Notes |
|---|---|---|---|---|
| Main 5V supply | 12V→5V 3A buck (USB-style or MP1584) | 1 | $8 | Powers ESP32 + sensors. |
| SIM800L supply | Separate 12V→4.1V 2A+ buck | 1 | $6 | SIM800L is fussy; give it its own. |
| Caps | 1000µF + assorted capacitors | 1 | $5 | Smooths SIM800L current bursts. |
| Enclosure | IP65 dust/humidity-proof box + glands | 1 | $15 | Poultry air is harsh. |

### Feed (manual now) + manual backups
| Part | Suggested model | Qty | ~USD | Notes |
|---|---|---|---|---|
| Scale | Digital hanging/platform scale | 1 | $40 | Buy locally. Weigh feed out vs leftover. |
| Min/max thermometers | Cheap dial/digital | 2 | $15 | Dead-simple heat backup. |
| Manual pH/TDS pens | Pocket pH + TDS pen (optional) | 1 | $20 | Cross-check the probes. |

### Prototyping (US bench only)
| Part | Suggested model | Qty | ~USD | Notes |
|---|---|---|---|---|
| Breadboard + jumpers | Half/full breadboard + Dupont kit | 1 | $15 | For the US bench build. |
| Perfboard + terminals | Solderable board + screw terminals | 1 | $10 | For the shipped, rugged version. |

**Rough electronics total (US purchase):** about **$330–430**, before the locally-bought
scale, siren, header tank, plumbing, SIM and shipping/duty. A trimmed first build (2 SHT31
instead of 3, skip the manual pens) lands nearer **$280**.

---

## Appendix B — Bench wiring diagram and build steps

ESP32 pin plan chosen so analog sensors sit on **ADC1** (safe with WiFi on later) and the
I2C devices share one bus through the multiplexer. The **Inkbird is NOT wired here** — it
is a standalone mains device controlling the heat plate.

```
                         ESP32 DevKit
   3V3 ─┬─────────────────────────────────────────── to sensor VCC rails (3.3V parts)
        │
  I2C:  SDA GPIO21 ─┬─ DS3231 RTC (addr 0x68, on main bus)
        SCL GPIO22 ─┼─ OLED display (0x3C, on main bus)
                     └─ TCA9548A multiplexer (0x70)
                          ├─ ch0: SHT31 #1  (heat zone)
                          ├─ ch1: SHT31 #2  (middle)
                          ├─ ch2: SHT31 #3  (far corner)
                          └─ ch3: BH1750 light sensor
  SPI (SD card):
        SCK  GPIO18 ── SD SCK      MISO GPIO19 ── SD MISO
        MOSI GPIO23 ── SD MOSI     CS   GPIO5  ── SD CS
  Pulse:
        GPIO27 ──────── YF-S201 flow signal (interrupt)   [flow VCC = 5V]
  Analog (ADC1 only):
        GPIO34 ──────── pH board analog out   (0–3V, safe)
        GPIO35 ──────── TDS board analog out  (0–2.3V, safe)
  1-Wire:
        GPIO4  ──┬───── DS18B20 data           [4.7k pull-up 3V3→GPIO4]
  Alarms:
        GPIO25 ──────── buzzer module
        GPIO26 ──────── status LED(s)
        GPIO33 ──────── relay IN ──► 12V siren/strobe   [relay + siren on 12V]
  GSM (UART2):
        GPIO17 (TX2) ── SIM800L RX
        GPIO16 (RX2) ── SIM800L TX
        SIM800L VCC ──► its OWN 4.1V buck + 1000µF cap (NOT the ESP32 3V3)
  Power:
        12V battery ─► 5V 3A buck ─► ESP32 5V(VIN) + 5V sensor rail (flow, SD)
        12V battery ─► 4.1V buck   ─► SIM800L
        ALL grounds common (ESP32, bucks, relay, siren, sensors tied together)

  SEPARATE / STANDALONE:
        Mains ─► Inkbird ITC-308 ─► Heat plate      (Inkbird probe at chick level)
```

**Key electrical cautions (built into the part choices above):**
- Analog pH/TDS boards must output **≤3.3V**; the DFRobot SEN0161-V2 and SEN0244 do, so no
  divider is needed. Do not substitute a 5V-output board without a divider.
- **SIM800L gets its own 4.1V supply + big capacitor**, never the ESP32's 3.3V. This is the
  #1 reason DIY SIM800L builds fail.
- The ESP32 GPIO cannot drive a 12V siren; it switches a **relay**, which switches the siren.
- Use **ADC1 pins (32–39)** for analog; ADC2 clashes with WiFi you will add later.

**Build steps (US bench):**
1. Power only the ESP32; flash a blink test.
2. Add the I2C bus: RTC + OLED, confirm the clock and screen.
3. Add the TCA9548A, then the 3 SHT31 + BH1750; show all readings on the OLED.
4. Add the SD module; log a timestamped CSV line every few minutes.
5. Add flow sensor; pour a known volume, confirm litres count right.
6. Add pH + TDS; calibrate pH with the 7.0 then 4.0 buffer; dip in vinegar / baking-soda
   water to watch it swing. Add DS18B20.
7. Add buzzer, LEDs, relay + siren; set safe bands; trip each alarm tier deliberately
   (fridge/warm for temp, breath for humidity).
8. Add SIM800L on its own supply; send a test SMS to a phone; confirm the exception text.
9. Box it (IP65), move to perfboard/terminals, label every wire, write down the final
   settings and calibration steps.
10. Ship; in Nigeria wire to the 12V solar battery, mount the 3 sensors at bird height,
    plumb the flow sensor and place pH/TDS/temp probes in the header tank, set the Inkbird
    with the heat plate, load the staff phone number.

**Firmware:** a single Arduino/ESP32 sketch (read → compare to age-band thresholds →
update OLED → alarm if out of band → log to SD → optional SMS). I can draft that sketch as
the next step once you have the parts.
