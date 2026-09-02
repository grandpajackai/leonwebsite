window.LEON_CONTENT = (function () {
  const S = (slug, o) => Object.assign({ slug }, o);

  const en = {
    lang: "EN",
    other: "ES",
    phoneLabel: "Call",
    nav: [
      { slug: "services", label: "Services" },
      { slug: "work", label: "Our Work" },
      { slug: "areas", label: "Service Areas" },
      { slug: "about", label: "About" },
      { slug: "contact", label: "Contact" }
    ],
    strip: ["EPA 608 CERTIFIED", "OSHA 10", "60+ YEARS OF EXPERIENCE", "FULLY INSURED"],
    topbar: "Live answer 24/7 — Miami-Dade, Broward & Palm Beach",
    ctaCall: "Call",
    ctaForm: "Request a crew",
    ctaText: "Text photos of the damage",
    emergency: "ANSWERING LIVE — 24 HOURS, 7 DAYS",
    home: {
      h1a: "Water doesn’t wait.",
      h1b: "Neither do we.",
      sub: "Emergency water, mold, storm and fire damage restoration across South Florida — then the rebuild that puts the house back. One company from the first phone call to the last coat of paint.",
      bullets: ["No trip charge on emergencies", "Direct insurance billing", "Free damage inspection"],
      heroPhoto: "",
      heroImg: "assets/photos/thermal.jpg",
      proofTitle: "Sixty years of doing the whole job",
      proofBody: "Leon has been building and repairing South Florida homes for three generations. That matters most on a water loss: the crew that dries your house is the crew that rebuilds it, so nothing gets lost in the handoff between a mitigation company and a contractor.",
      proofPoints: [
        { h: "One company, whole job", p: "Extraction, drying, mold clearance, rebuild and roof — under one roof and one invoice." },
        { h: "Answered by a person", p: "Day, night, weekend, holiday. You get a human who can dispatch, not a call center script." },
        { h: "Documented for your carrier", p: "Photo log, moisture readings and scope filed the same day the work starts." }
      ],
      servicesTitle: "What we do",
      servicesSub: "Emergency response first, reconstruction second — the same crew all the way through.",
      processTitle: "What the first hours look like",
      processSub: "Most of the cost of water damage happens after the water stops. This is the sequence we run, every time.",
      process: [
        { t: "CALL", h: "Live dispatch", p: "A person answers and walks you through the shutoff while a crew is assigned." },
        { t: "ON SITE", h: "Source stopped, water out", p: "We confirm the leak is stopped, then extract standing water and clear hazards." },
        { t: "DOCUMENT", h: "Moisture map & photo log", p: "Every wet cavity metered and photographed before anything is cut or removed." },
        { t: "DRY", h: "Drying plan running", p: "Equipment sized to the load, readings logged daily, carrier notified same day." },
        { t: "REBUILD", h: "Put back better", p: "Drywall, tile, cabinetry, paint and roof — finished by our own carpenters." }
      ],
      equipTitle: "Trucks stocked before the phone rings",
      equipBody: "Extractors, LGR dehumidifiers, air movers, air scrubbers, thermal cameras and ladders ride with the crew — so the first visit is the one where work actually starts, not the one where we measure and come back.",
      workTitle: "Recent work",
      workSub: "Rebuilds, remodels and repairs from our own job sites.",
      reviewsTitle: "What customers say",
      reviewsNote: "REVIEW SLOTS — PASTE REAL GOOGLE REVIEWS HERE",
      areasTitle: "Where we work",
      claimTitle: "We bill your carrier directly",
      claimBody: "You pay your deductible; we invoice the rest. If a claim comes back underpaid, the daily readings and photo log are what get it reopened — and we join the adjuster call with you.",
      claimPoints: ["Same-day claim opening and adjuster contact", "Scopes in the format carriers accept", "Signed, time-stamped moisture logs every visit"],
      ctaTitle: "Standing in water right now?",
      ctaSub: "Call and we’ll walk you through the shutoff while the truck rolls."
    },
    servicesPage: {
      title: "Services",
      sub: "Emergency restoration and the reconstruction that follows. Every service below is performed by our own crews.",
      groups: [
        { label: "EMERGENCY RESTORATION", items: ["water-extraction", "structural-drying", "mold", "storm", "sewage", "tarping"] },
        { label: "HVAC & INSPECTIONS", items: ["hvac", "thermal-imaging"] },
        { label: "ROOFING & EXTERIOR", items: ["roofing", "roof-cleaning"] },
        { label: "AFTER THE EMERGENCY", items: ["packout", "claims", "rebuild", "commercial"] }
      ]
    },
    workPage: {
      title: "Our work",
      sub: "Photos from our own job sites — rebuilds, remodels and repairs across Miami-Dade, Broward and Palm Beach.",
      captions: ["Bathroom rebuild", "Tile replacement", "Shower waterproofing", "Drywall repair", "Floor leveling", "Bathroom remodel", "Vanity install", "Interior repaint", "Kitchen rebuild", "Cabinet install", "Trim carpentry", "Tile floor install", "Wall finishing", "Dining room rebuild", "Fixture replacement", "Shower tile", "Baseboard replacement", "Bedroom rebuild", "Interior finishing", "Full unit remodel"]
    },
    areasPage: {
      title: "Service areas",
      sub: "Crews dispatch across three counties, 24 hours a day. If you are outside these lines, call anyway — we will tell you honestly whether we can get there.",
      counties: [
        { name: "Miami-Dade County", cities: ["Miami", "Hialeah", "Miami Beach", "Coral Gables", "Doral", "Kendall", "Aventura", "Homestead", "Miami Lakes", "North Miami", "Cutler Bay", "Pinecrest"] },
        { name: "Broward County", cities: ["Fort Lauderdale", "Hollywood", "Pembroke Pines", "Miramar", "Weston", "Plantation", "Davie", "Coral Springs", "Sunrise", "Pompano Beach", "Deerfield Beach", "Coconut Creek"] },
        { name: "Palm Beach County", cities: ["West Palm Beach", "Boca Raton", "Delray Beach", "Boynton Beach", "Jupiter", "Palm Beach Gardens", "Wellington", "Lake Worth", "Royal Palm Beach", "Riviera Beach"] }
      ],
      mapNote: "MAP — THREE-COUNTY COVERAGE AREA · 1120×420"
    },
    aboutPage: {
      title: "Sixty years in South Florida homes",
      sub: "Leon Roofing & Restoration is a family company. Three generations of carpenters, roofers and remodelers who now handle the emergency end of the same work.",
      body: [
        "We started out building and repairing homes, not chasing water losses. That order matters. When a pipe fails at 2am, the people who show up already know how the house is put together — where the water travels, what is load-bearing, what can be dried and what has to come out.",
        "It also means we finish. Most mitigation companies dry a structure, pull their equipment and hand you a contractor list. We hold the job through demolition, drywall, tile, cabinetry, paint and roof, with the same foreman answering the phone the whole way."
      ],
      valuesTitle: "How we work",
      values: [
        { h: "A person answers", p: "Every call, any hour. No queue, no script, no callback promise." },
        { h: "Written before it’s done", p: "Scope, price and drying targets in writing before we start cutting." },
        { h: "Our own crews", p: "Employees, not day labor. The same faces from extraction through final paint." },
        { h: "Honest about coverage", p: "If we think your loss won’t be covered, we tell you before you file." }
      ],
      credsTitle: "Credentials",
      creds: ["EPA 608 Certified", "OSHA 10", "60+ years of experience", "Fully insured"],
      photo: "",
      img: "assets/photos/owner.jpg"
    },
    contactPage: {
      title: "Request a crew",
      sub: "For an active emergency, calling is faster — a person answers 24/7. Use this form for inspections, estimates and claim questions.",
      urgentTitle: "Active emergency?",
      urgentBody: "Water still running, sewage indoors, or a roof open to the sky — call now instead of filling this out.",
      fields: {
        name: "Full name", phone: "Phone", email: "Email", address: "Property address",
        damage: "Type of damage", when: "When did it happen?", carrier: "Insurance carrier",
        claim: "Claim number (if you have one)", role: "You are the…", callback: "Best time to call back",
        photos: "Photos of the damage"
      },
      damageOptions: ["Water / burst pipe", "Storm or flood", "Mold", "Sewage backup", "Fire or smoke", "Roof leak", "Rebuild / remodel", "Not sure"],
      whenOptions: ["Happening right now", "Today", "Within the last 3 days", "Over a week ago", "Not sure"],
      roleOptions: ["Homeowner", "Tenant", "Property manager", "Business owner", "Insurance adjuster"],
      callbackOptions: ["As soon as possible", "Morning", "Afternoon", "Evening"],
      dropNote: "Drag photos here or tap to upload — the more we can see, the better we can prepare",
      submit: "Send request",
      privacy: "We use your details to dispatch and quote the job. We don’t sell or share them.",
      sentTitle: "Request received",
      sentBody: "Someone will call you back. If this is an emergency, call now — a person answers 24/7."
    },
    footer: {
      tag: "Restoration and reconstruction across South Florida.",
      colTitle1: "Emergency",
      colTitle2: "After the emergency",
      colTitle3: "Company",
      legal: "Leon Roofing & Restoration, Inc. · Miami-Dade · Broward · Palm Beach",
      email: "leonroofing.restoration@gmail.com"
    },
    faqTitle: "Common questions",
    includesTitle: "What’s included",
    stepsTitle: "How it goes",
    relatedTitle: "Related services",
    sidebarTitle: "Live answer, 24/7",
    sidebarBody: "A person picks up any hour, any day — Miami-Dade, Broward and Palm Beach.",
    services: [
      S("water-extraction", {
        title: "Emergency water extraction",
        blurb: "Standing water pulled out of floors, pad and cavities — day or night.",
        intro: "Water gets into wall cavities within minutes and into drywall within hours. We arrive with truck-mounted extraction, pull the water out of the assembly instead of just the surface, and set drying on the same visit.",
        photo: "PHOTO — EXTRACTION WAND, WATER LINE ON WALL · 620×420",
        includes: [
          { h: "Source verification", p: "We confirm the leak is stopped before any drying starts." },
          { h: "Truck-mounted extraction", p: "Standing water, carpet pad and sub-floor cavities pulled down to damp." },
          { h: "Moisture mapping", p: "Thermal imaging and pin meters mark the true wet line, room by room." },
          { h: "Category assessment", p: "Clean, grey or black water classified — it decides what can be saved." }
        ],
        steps: [
          { h: "You call", p: "A person answers, gets the address, and talks you through the shutoff." },
          { h: "We arrive", p: "Hazards cleared, source confirmed stopped, extraction begins immediately." },
          { h: "We document", p: "Photos and readings recorded before anything is cut or thrown out." },
          { h: "We set drying", p: "Equipment placed to a written plan, and your carrier notified." }
        ],
        faqs: [
          { q: "Will my insurance cover this?", a: "Sudden and accidental losses — burst supply lines, failed heaters, appliance overflows — are usually covered. Long-term seepage usually isn’t. We document the cause on day one either way and tell you honestly which one you have." },
          { q: "Do you have to tear out the drywall?", a: "Not always. Clean-water losses caught early can often be dried in place with cavity systems. We open walls when the water was contaminated or the readings say the cavity won’t dry." },
          { q: "How fast can you get here?", a: "A person answers 24/7 and we dispatch immediately. We won’t quote you a fake arrival window — we’ll tell you where the nearest crew is when you call." }
        ]
      }),
      S("structural-drying", {
        title: "Structural drying",
        blurb: "Framing, sub-floor and cavity air brought back below dry standard — with the log to prove it.",
        intro: "Extraction is the easy half. Getting framing, sub-floor and cavity air back below dry standard is what actually stops mold, and what a carrier pays for only when you can prove it happened.",
        photo: "PHOTO — AIR MOVERS AND LGR DEHUMIDIFIER RUNNING · 620×420",
        includes: [
          { h: "Psychrometric baseline", p: "Temperature, humidity and grain depression recorded inside, outside and in affected air." },
          { h: "Equipment sized to the load", p: "Air movers and LGR dehumidifiers calculated to the space, not guessed by room count." },
          { h: "Cavity and hardwood systems", p: "Mat and wall systems dry floors and cavities without unnecessary demolition." },
          { h: "Daily monitoring", p: "Same techs, same meters, readings logged until materials match dry standard." }
        ],
        steps: [
          { h: "Baseline", p: "Readings taken on every affected material and on the outside air." },
          { h: "Plan", p: "Written drying plan with equipment count, targets and a dry-by date." },
          { h: "Monitor", p: "Daily visits, readings logged and sent to you and your adjuster." },
          { h: "Sign off", p: "Equipment pulled only when materials hit dry standard, not on a schedule." }
        ],
        faqs: [
          { q: "How long does the equipment stay?", a: "Typically three to five days. Dense materials like hardwood and plaster take longer. We pull equipment on readings, never on a fixed schedule." },
          { q: "Is it loud? Can I stay in the house?", a: "Air movers are loud and the rooms get warm. Most people stay; if the loss is large or contaminated, we’ll tell you plainly that you shouldn’t." },
          { q: "Why does the drying log matter?", a: "It is the evidence that the structure actually reached dry standard. It settles disputes with carriers, buyers, associations and future inspectors." }
        ]
      }),
      S("mold", {
        title: "Mold remediation",
        blurb: "Containment, removal and clearance — done in the right order, with the moisture cause fixed first.",
        intro: "Mold is a symptom. We find and stop the water first, then contain the area under negative air, remove affected materials, and treat what stays — so it doesn’t come back in the same corner next season.",
        photo: "PHOTO — CONTAINMENT BARRIER AND AIR SCRUBBER · 620×420",
        includes: [
          { h: "Moisture cause found first", p: "No remediation starts until the water source is identified and stopped." },
          { h: "Negative-air containment", p: "Sealed work area and HEPA scrubbers so spores don’t travel through the house." },
          { h: "Controlled removal", p: "Affected porous materials bagged and removed; framing cleaned and treated." },
          { h: "Post-remediation verification", p: "Independent clearance testing arranged when the scope calls for it." }
        ],
        steps: [
          { h: "Inspect", p: "Visual assessment plus moisture readings to find the extent, not just the stain." },
          { h: "Contain", p: "Barriers, negative air and protected pathways set before anything is disturbed." },
          { h: "Remove", p: "Affected material out under containment, surfaces HEPA-vacuumed and treated." },
          { h: "Verify", p: "Area dried, cleared, and rebuilt by our own carpenters." }
        ],
        faqs: [
          { q: "Do I need a mold test first?", a: "Often not. If you can see growth and know the water source, testing mostly confirms what’s visible. Testing is worth it for clearance, for disputes, or when the source isn’t obvious." },
          { q: "Can you just spray it?", a: "No. Spraying a surface without removing affected material or fixing the moisture is cosmetic — it will return. We’ll tell you what actually has to come out." },
          { q: "Is mold covered by insurance?", a: "Sometimes, and often with a dollar cap, when it follows a covered water loss that was reported promptly. Long-standing humidity issues generally are not." }
        ]
      }),
      S("storm", {
        title: "Storm & flood cleanup",
        blurb: "Hurricane, surge and flood response — tarping, water out, structure dried, debris gone.",
        intro: "After a named storm the whole county calls at once. We stage crews and equipment before landfall so we can tarp openings, get water out, and start drying while the roads are still clearing.",
        photo: "PHOTO — TARPED ROOF AND CREW CLEARING FLOOD WATER · 620×420",
        includes: [
          { h: "Emergency board-up and tarping", p: "Openings closed first so the next rain band doesn’t double the loss." },
          { h: "Category 3 water handling", p: "Flood and surge water treated as contaminated, with the right PPE and disposal." },
          { h: "Debris removal", p: "Saturated materials, ruined contents and yard debris hauled off the property." },
          { h: "Full documentation", p: "Photos, readings and scope built for a storm claim from the first hour." }
        ],
        steps: [
          { h: "Before the storm", p: "Call to get on the pre-storm list; we stage equipment and crews by county." },
          { h: "First pass", p: "Openings tarped or boarded, standing water extracted, power and safety checked." },
          { h: "Dry out", p: "Contaminated material removed, structure sanitized and dried to standard." },
          { h: "Rebuild", p: "Roof, drywall, floors and finishes rebuilt by our own crews." }
        ],
        faqs: [
          { q: "Do you take pre-storm reservations?", a: "Yes. Call before landfall and we’ll put your address on the priority list for your county." },
          { q: "Is flood damage covered by my homeowner policy?", a: "Usually not — rising water is normally a separate flood policy, while wind-driven rain through a storm-created opening often is covered. We document which one caused your damage." },
          { q: "Can you tarp the roof today?", a: "If it’s safe to be on it, yes. Wind, lightning and rotten decking are the limits, and we’ll tell you when it isn’t safe." }
        ]
      }),
      S("sewage", {
        title: "Sewage backup cleanup",
        blurb: "Category 3 water handled properly: removed, sanitized, verified — not mopped.",
        intro: "A sewage backup is a biohazard, not a mess. Porous materials it touched come out, everything else is cleaned and disinfected under containment, and the structure is dried and verified before anything goes back.",
        photo: "PHOTO — TECH IN FULL PPE, CONTAINED WORK AREA · 620×420",
        includes: [
          { h: "Full PPE and containment", p: "Sealed work zone, negative air and protected exit path to the truck." },
          { h: "Contaminated material removal", p: "Carpet, pad, saturated drywall and affected contents removed and disposed of legally." },
          { h: "Hard-surface sanitation", p: "Structure cleaned, disinfected and deodorized, including subfloor and framing." },
          { h: "Drying and verification", p: "Structure dried to standard and checked before reconstruction begins." }
        ],
        steps: [
          { h: "Stop and isolate", p: "Source stopped, area isolated, occupants kept out of the contaminated zone." },
          { h: "Remove", p: "Waste water extracted, affected porous materials out and bagged." },
          { h: "Sanitize", p: "Antimicrobial applied to all remaining surfaces, air scrubbed throughout." },
          { h: "Dry and rebuild", p: "Structure dried, verified, then rebuilt and refinished." }
        ],
        faqs: [
          { q: "Can I clean it myself?", a: "We don’t recommend it. Category 3 water carries bacteria and viruses; household cleaners and a shop vac don’t make a floor safe, and the moisture left behind grows mold." },
          { q: "Does everything have to be thrown out?", a: "Porous items that absorbed the water do. Hard surfaces, most furniture frames and many contents can be cleaned and salvaged." },
          { q: "How long until we can use the room?", a: "Usually a few days: removal and sanitation first, then drying to standard, then reconstruction." }
        ]
      }),
      S("packout", {
        title: "Contents pack-out",
        blurb: "Inventoried, moved, dried and returned — your belongings tracked the whole way.",
        intro: "When a room has to be gutted or dried aggressively, your belongings shouldn’t be in it. We inventory and photograph everything, move it out, dry and clean what’s salvageable, and bring it back when the space is finished.",
        photo: "PHOTO — LABELED BOXES AND WRAPPED FURNITURE ON PADS · 620×420",
        includes: [
          { h: "Room-by-room inventory", p: "Every item logged and photographed before it moves, with a copy to you." },
          { h: "Careful pack and transport", p: "Furniture wrapped and padded, electronics and documents handled separately." },
          { h: "Cleaning and drying", p: "Salvageable contents dried, cleaned and deodorized off site." },
          { h: "Return and placement", p: "Items brought back and set where they belong once the room is done." }
        ],
        steps: [
          { h: "Assess", p: "We walk the space with you and mark what leaves and what stays." },
          { h: "Inventory", p: "Photographed and logged, item by item, with condition noted." },
          { h: "Store", p: "Held in a controlled space while your home is dried and rebuilt." },
          { h: "Return", p: "Delivered back, unwrapped and placed, with the inventory reconciled." }
        ],
        faqs: [
          { q: "Is pack-out covered by insurance?", a: "Usually yes, as part of a covered loss — and the inventory we build is what supports the contents portion of your claim." },
          { q: "What about things I don’t want touched?", a: "Tell us at the walkthrough. Valuables, firearms, medication and sentimental items are best kept with you." },
          { q: "How long can you store it?", a: "As long as the rebuild takes. The inventory stays open until the last box is back in the house." }
        ]
      }),
      S("claims", {
        title: "Insurance claims help",
        blurb: "Photo log, scope, adjuster calls and direct billing — the paperwork side handled.",
        intro: "Carriers deny what nobody documented. From the first hour we build the file: cause of loss, extent, daily readings and a scope in the format adjusters accept — then we bill the carrier directly.",
        photo: "",
        img: "assets/photos/thermal.jpg",
        includes: [
          { h: "Cause-of-loss documentation", p: "What failed, when, and how far the water travelled — recorded on day one." },
          { h: "Scope your adjuster accepts", p: "Line-item scope and pricing in the format carriers work from." },
          { h: "Direct carrier billing", p: "You pay your deductible; we invoice the insurer for the covered work." },
          { h: "Adjuster meetings", p: "We meet the adjuster on site and walk the damage with them." }
        ],
        steps: [
          { h: "Open", p: "Claim opened the same day, with photos and readings already attached." },
          { h: "Scope", p: "Full scope of mitigation and repair submitted, not a rough estimate." },
          { h: "Negotiate", p: "Supplements and disputes handled with documentation, not argument." },
          { h: "Close", p: "Final invoice, warranty and completion photos delivered to both of you." }
        ],
        faqs: [
          { q: "Should I file before calling you?", a: "Call us first if water is still active — stopping the damage comes first, and we’ll have the documentation ready when you file, often the same day." },
          { q: "What if my claim was underpaid or denied?", a: "Bring us the file. Underpayment is usually a documentation problem, and a complete photo and moisture log is what gets a claim reopened." },
          { q: "Are you a public adjuster?", a: "No. We’re the contractor: we document our own work, scope it properly and deal with your adjuster directly. For coverage disputes we can refer you to licensed professionals." }
        ]
      }),
      S("rebuild", {
        title: "Reconstruction & rebuild",
        blurb: "Drywall, tile, cabinetry, trim and paint — the same company that dried it puts it back.",
        intro: "Most mitigation companies stop when the house is dry. We keep going: framing, drywall, tile, cabinetry, trim, paint and fixtures, finished by our own carpenters, with one foreman on the job start to finish.",
        photo: "PHOTO — FINISHED REBUILT BATHROOM · 620×420",
        includes: [
          { h: "Framing and drywall", p: "Structure repaired, insulated, hung, taped and finished to match." },
          { h: "Tile, flooring and waterproofing", p: "Showers and wet areas rebuilt properly, with waterproofing done right." },
          { h: "Cabinetry and trim", p: "Cabinets, vanities, baseboards and casing installed by our carpenters." },
          { h: "Paint and fixtures", p: "Finish paint, lighting and plumbing fixtures set and tested." }
        ],
        steps: [
          { h: "Scope and price", p: "Written scope, allowances and schedule before demolition ends." },
          { h: "Build", p: "One foreman, our own crews, sequenced trades and a clean site daily." },
          { h: "Walk", p: "Punch walk with you before we call it finished." },
          { h: "Warranty", p: "Written workmanship warranty and completion photos for your file." }
        ],
        faqs: [
          { q: "Can I upgrade while you’re rebuilding?", a: "Yes, and it’s the cheapest time to do it. Insurance pays like-for-like; you pay the difference for the upgrade." },
          { q: "How long does a rebuild take?", a: "A single bathroom is usually two to three weeks after drying; a whole-floor loss runs longer. You get a schedule with the scope." },
          { q: "Do you handle permits?", a: "Yes, where the work requires them, including inspections through close-out." }
        ]
      }),
      S("roofing", {
        title: "Roofing",
        blurb: "Leak repair, tarping, re-roofs and storm damage — three generations of roofing behind it.",
        intro: "Roofing is where this company started. We repair leaks, tarp storm openings and re-roof tile, shingle and flat systems — and because we also do the interior, we fix the ceiling the leak ruined.",
        photo: "PHOTO — CREW ON TILE ROOF, MIAMI SKYLINE · 620×420",
        includes: [
          { h: "Leak diagnosis", p: "We find where water actually enters, not just where it drips inside." },
          { h: "Emergency tarping", p: "Openings covered fast after storms so the interior stops taking on water." },
          { h: "Repairs and re-roofs", p: "Tile, shingle and flat systems repaired or replaced to current code." },
          { h: "Interior repair included", p: "Stained ceilings, insulation and drywall repaired by the same company." }
        ],
        steps: [
          { h: "Inspect", p: "Roof and attic inspected, with photos of what we find." },
          { h: "Report", p: "Written findings, repair options and price — including what can wait." },
          { h: "Repair", p: "Work performed, permitted and inspected where required." },
          { h: "Verify", p: "Water tested where practical, interior damage repaired and painted." }
        ],
        faqs: [
          { q: "Repair or replace?", a: "Depends on the system’s age and how much of it is failing. We’ll show you photos and tell you when a repair is throwing money at a roof that needs replacing." },
          { q: "Will insurance pay for a new roof?", a: "For sudden storm damage, often yes. For age and wear, no. The inspection report tells you which case you’re in." },
          { q: "Do you tarp during a storm?", a: "Only when it’s safe to be on the roof. We won’t put a crew up in lightning or high wind." }
        ]
      }),
      S("commercial", {
        title: "Commercial & property managers",
        blurb: "Multi-unit losses, association work and tenant coordination — with documentation you can forward.",
        intro: "A unit loss in a building is three problems: the water, the neighbours and the paperwork. We work directly with managers and associations, coordinate access, and produce documentation you can forward without editing.",
        photo: "",
        img: "assets/photos/van.jpg",
        includes: [
          { h: "Multi-unit response", p: "Several units and common areas handled at once, with equipment to match." },
          { h: "Tenant coordination", p: "Scheduled access, clear notices and crews who behave in occupied buildings." },
          { h: "Association-ready reporting", p: "Per-unit photo and moisture documentation, separated for board and carrier." },
          { h: "After-hours work", p: "Nights and weekends when a corridor or lobby can’t be closed during the day." }
        ],
        steps: [
          { h: "Call", p: "One point of contact for the whole building, not per unit." },
          { h: "Assess", p: "Affected units mapped, equipment staged, access schedule agreed." },
          { h: "Mitigate", p: "Water out, drying set and monitored across every affected unit." },
          { h: "Report", p: "Per-unit documentation delivered for the board, carrier and owners." }
        ],
        faqs: [
          { q: "Do you have a master service agreement?", a: "Yes — we can set one up so pricing and terms are agreed before an emergency, and dispatch doesn’t wait on approvals." },
          { q: "Can you handle several units at once?", a: "Yes. We stage equipment by building and add crews rather than queuing units." },
          { q: "Who gets the documentation?", a: "Whoever you name: management, the board, the carrier, and individual owners, each with what they need." }
        ]
      }),
      S("tarping", {
        title: "Emergency tarping & board-up",
        blurb: "Roof openings covered and windows boarded the same day — before the next rain band.",
        intro: "After a storm, the second loss comes from the sky staying open. We tarp roof openings, board broken windows and doors, and secure the property so the interior stops taking on water while the claim gets sorted.",
        photo: "PHOTO — CREW SECURING BLUE TARP OVER A DAMAGED ROOF SECTION · 620×420",
        includes: [
          { h: "Same-day tarping", p: "Roof openings covered and battened down to hold through the next storm." },
          { h: "Window and door board-up", p: "Broken openings closed with plywood cut and fastened properly, not taped." },
          { h: "Interior protection", p: "Plastic, containment and water diversion inside so the damage stops spreading." },
          { h: "Documented for the claim", p: "Photos of the opening and the cause recorded before we cover it." }
        ],
        steps: [
          { h: "Call", p: "We take the address and ask what you can see from the ground — no climbing." },
          { h: "Assess", p: "Roof and interior checked; we tell you if it is safe to work today." },
          { h: "Secure", p: "Openings tarped or boarded and the interior protected from the next rain." },
          { h: "Repair", p: "Permanent roof and interior repairs scheduled with the same company." }
        ],
        faqs: [
          { q: "Does insurance pay for tarping?", a: "Usually yes. Carriers expect you to mitigate further damage, and emergency tarping is normally a covered expense on a storm claim — we document it so it gets paid." },
          { q: "How long does a tarp last?", a: "A properly installed tarp holds for weeks, not days. It is a bridge to the permanent repair, not a substitute for it." },
          { q: "Can you tarp at night?", a: "Only when it is safe. Wet tile, wind and lightning are hard stops — we will board the interior and return at first light." }
        ]
      }),
      S("thermal-imaging", {
        title: "Thermal imaging & leak detection",
        blurb: "Find the water inside the wall before you open it — infrared plus moisture meters.",
        intro: "Stains lie. Water travels along framing and shows up rooms away from the failure. We scan with infrared and confirm with pin and pinless meters, so demolition happens where the water actually is — and nowhere else.",
        photo: "",
        img: "assets/photos/thermal.jpg",
        includes: [
          { h: "Infrared scan", p: "Walls, ceilings and floors scanned for the temperature signature of trapped moisture." },
          { h: "Meter confirmation", p: "Every infrared finding verified with pin and pinless moisture readings." },
          { h: "Plumbing and roof leak tracing", p: "Supply, drain and roof leaks traced to the failure point, not the drip." },
          { h: "Written findings", p: "Annotated images and readings you can hand to an adjuster or a buyer." }
        ],
        steps: [
          { h: "Walk", p: "We map the affected rooms and note what you have already seen." },
          { h: "Scan", p: "Infrared sweep of suspect assemblies, marked as we go." },
          { h: "Verify", p: "Readings taken at every anomaly to rule out shadows and false positives." },
          { h: "Report", p: "Findings, photos and a recommended scope delivered same day." }
        ],
        faqs: [
          { q: "Does infrared see through walls?", a: "No — it reads surface temperature. Trapped moisture changes how a surface holds heat, which is what shows up. That is why we confirm every finding with a moisture meter." },
          { q: "Can you find a slab leak this way?", a: "Often yes, especially on hot-water lines. Cold-water slab leaks may also need acoustic listening, which we bring when the scan is inconclusive." },
          { q: "Is the inspection free?", a: "The damage inspection is free. A documented infrared report for a claim, a purchase or a dispute is a paid service, quoted before we start." }
        ]
      }),
      S("hvac", {
        title: "HVAC service & installation",
        blurb: "AC repair, replacement, maintenance and duct work — residential and commercial.",
        intro: "In South Florida the air handler is the second most common source of indoor water damage, right behind supply lines. We service, repair and replace residential and light-commercial systems, and we clean and seal the duct work that moves the air.",
        photo: "PHOTO — TECH SERVICING A CONDENSER UNIT BESIDE A MIAMI HOME · 620×420",
        includes: [
          { h: "Repair and diagnostics", p: "No-cool calls, refrigerant leaks, capacitors, blowers, drain lines and controls." },
          { h: "System replacement", p: "Right-sized straight-cool, heat pump and mini-split systems installed and permitted." },
          { h: "Maintenance plans", p: "Twice-yearly tune-ups with coil cleaning, drain clearing and filter service." },
          { h: "Duct cleaning and sealing", p: "Duct cleaning, sanitizing, sealing and replacement of collapsed or wet runs." },
          { h: "Indoor air quality", p: "UV lights, media filtration and dehumidification for humid, musty houses." },
          { h: "Mini-splits and add-ons", p: "Ductless systems for garages, additions, offices and converted spaces." },
          { h: "Smart thermostats & controls", p: "Thermostats, float switches and leak sensors that shut the system down before it floods." },
          { h: "Commercial after-hours service", p: "Package units and split systems serviced at night so tenant spaces stay open." }
        ],
        steps: [
          { h: "Diagnose", p: "Full system check with readings, not a guess and a part swap." },
          { h: "Quote", p: "Repair-versus-replace options in writing, with efficiency and cost side by side." },
          { h: "Install", p: "Permitted installation, condensate handled properly, old equipment hauled away." },
          { h: "Maintain", p: "Scheduled service so the next failure is not a flooded hallway." }
        ],
        faqs: [
          { q: "Why does my air handler leak water?", a: "Almost always a clogged condensate drain or a dirty coil freezing and thawing. Both are cheap to service and expensive to ignore — a blocked drain can soak a ceiling overnight." },
          { q: "Do you do commercial systems?", a: "Light commercial: package units, split systems and mini-splits for offices, retail, restaurants and multi-unit buildings. We also handle after-hours service so a tenant space is not down during business hours." },
          { q: "Repair or replace?", a: "As a rule, a system over twelve years old needing a major component is worth replacing. We show you the numbers both ways and let you decide." }
        ]
      }),
      S("roof-cleaning", {
        title: "Roof cleaning & soft wash",
        blurb: "Algae, mold and stains removed with low pressure — without stripping tile or shingle.",
        intro: "Black streaks and green growth are not just cosmetic: they hold moisture against tile and shingle and shorten the life of the roof. We soft wash with low pressure and the right solution, so the roof gets clean without losing granules or cracking tile.",
        photo: "PHOTO — HALF-CLEANED TILE ROOF SHOWING THE LINE · 620×420",
        includes: [
          { h: "Low-pressure soft wash", p: "Cleaning solution does the work — no pressure washer chewing up your roof." },
          { h: "Tile, shingle and flat", p: "Method matched to your roof system and its age." },
          { h: "Gutter and fascia cleaning", p: "Gutters flushed and fascia wiped down as part of the job." },
          { h: "Plant and surface protection", p: "Landscaping, screens and pool areas covered and rinsed after." }
        ],
        steps: [
          { h: "Inspect", p: "Roof condition checked first — a failing roof gets a repair quote, not a wash." },
          { h: "Protect", p: "Plants, screens and surrounding surfaces covered before anything is applied." },
          { h: "Wash", p: "Solution applied and rinsed at low pressure, working in sections." },
          { h: "Rinse", p: "Everything below the roof rinsed clean, gutters flushed, site left tidy." }
        ],
        faqs: [
          { q: "Will pressure washing damage my roof?", a: "High pressure will — it strips shingle granules and forces water under tile. That is why we soft wash instead." },
          { q: "How often should a roof be cleaned?", a: "In South Florida, every two to four years depending on tree cover and shade. Shaded north slopes grow back fastest." },
          { q: "Do you also fix what you find?", a: "Yes. If we find cracked tile, failed flashing or a soft deck while cleaning, we photograph it and quote the repair." }
        ]
      })
    ]
  };

  const es = {
    lang: "ES",
    other: "EN",
    phoneLabel: "Llame",
    nav: [
      { slug: "services", label: "Servicios" },
      { slug: "work", label: "Trabajos" },
      { slug: "areas", label: "Áreas" },
      { slug: "about", label: "Nosotros" },
      { slug: "contact", label: "Contacto" }
    ],
    strip: ["CERTIFICADO EPA 608", "OSHA 10", "MÁS DE 60 AÑOS DE EXPERIENCIA", "TOTALMENTE ASEGURADOS"],
    topbar: "Contestamos en vivo 24/7 — Miami-Dade, Broward y Palm Beach",
    ctaCall: "Llame",
    ctaForm: "Solicitar una cuadrilla",
    ctaText: "Envíe fotos del daño",
    emergency: "CONTESTAMOS EN VIVO — 24 HORAS, 7 DÍAS",
    home: {
      h1a: "El agua no espera.",
      h1b: "Nosotros tampoco.",
      sub: "Restauración de emergencia por agua, moho, tormenta e incendio en todo el sur de la Florida — y la reconstrucción que devuelve la casa a su estado. Una sola empresa desde la primera llamada hasta la última capa de pintura.",
      bullets: ["Sin cargo por visita en emergencias", "Facturamos directo a su seguro", "Inspección de daños gratis"],
      heroPhoto: "",
      heroImg: "assets/photos/thermal.jpg",
      proofTitle: "Sesenta años haciendo el trabajo completo",
      proofBody: "Leon construye y repara casas en el sur de la Florida desde hace tres generaciones. Eso importa más en un daño por agua: la cuadrilla que seca su casa es la misma que la reconstruye, así nada se pierde entre la empresa de mitigación y el contratista.",
      proofPoints: [
        { h: "Una empresa, todo el trabajo", p: "Extracción, secado, moho, reconstrucción y techo — con una sola factura." },
        { h: "Contesta una persona", p: "Día, noche, fin de semana y feriados. Habla con alguien que puede despachar." },
        { h: "Documentado para su seguro", p: "Fotos, lecturas de humedad y presupuesto enviados el mismo día." }
      ],
      servicesTitle: "Lo que hacemos",
      servicesSub: "Primero la emergencia, después la reconstrucción — con la misma cuadrilla de principio a fin.",
      processTitle: "Las primeras horas",
      processSub: "La mayor parte del costo de un daño por agua ocurre después de que el agua se detiene. Esta es la secuencia que seguimos, siempre.",
      process: [
        { t: "LLAMADA", h: "Despacho en vivo", p: "Una persona contesta y le indica cómo cerrar el agua mientras asignamos cuadrilla." },
        { t: "LLEGADA", h: "Fuente cerrada, agua afuera", p: "Confirmamos que la fuga esté cerrada, extraemos el agua y despejamos peligros." },
        { t: "REGISTRO", h: "Mapa de humedad y fotos", p: "Cada cavidad mojada medida y fotografiada antes de cortar o retirar nada." },
        { t: "SECADO", h: "Plan de secado en marcha", p: "Equipo calculado para el espacio, lecturas diarias y su aseguradora notificada." },
        { t: "RECONSTRUIR", h: "Devolverlo mejor", p: "Drywall, azulejo, gabinetes, pintura y techo — por nuestros propios carpinteros." }
      ],
      equipTitle: "Camiones cargados antes de que suene el teléfono",
      equipBody: "Extractores, deshumidificadores LGR, ventiladores, purificadores de aire, cámaras térmicas y escaleras viajan con la cuadrilla — así la primera visita es donde empieza el trabajo, no donde solo medimos y volvemos después.",
      workTitle: "Trabajos recientes",
      workSub: "Reconstrucciones, remodelaciones y reparaciones de nuestras propias obras.",
      reviewsTitle: "Lo que dicen los clientes",
      reviewsNote: "ESPACIOS PARA RESEÑAS — PEGUE AQUÍ RESEÑAS REALES DE GOOGLE",
      areasTitle: "Dónde trabajamos",
      claimTitle: "Facturamos directo a su aseguradora",
      claimBody: "Usted paga su deducible; nosotros facturamos el resto. Si el reclamo vuelve mal pagado, las lecturas diarias y el registro fotográfico son lo que logra reabrirlo — y acompañamos la llamada con el ajustador.",
      claimPoints: ["Reclamo abierto y ajustador contactado el mismo día", "Presupuestos en el formato que aceptan las aseguradoras", "Registros de humedad firmados y fechados en cada visita"],
      ctaTitle: "¿Tiene agua en casa ahora mismo?",
      ctaSub: "Llame y le indicamos cómo cerrar el agua mientras sale el camión."
    },
    servicesPage: {
      title: "Servicios",
      sub: "Restauración de emergencia y la reconstrucción que sigue. Todo lo de abajo lo hacen nuestras propias cuadrillas.",
      groups: [
        { label: "RESTAURACIÓN DE EMERGENCIA", items: ["water-extraction", "structural-drying", "mold", "storm", "sewage", "tarping"] },
        { label: "AIRE ACONDICIONADO E INSPECCIONES", items: ["hvac", "thermal-imaging"] },
        { label: "TECHOS Y EXTERIOR", items: ["roofing", "roof-cleaning"] },
        { label: "DESPUÉS DE LA EMERGENCIA", items: ["packout", "claims", "rebuild", "commercial"] }
      ]
    },
    workPage: {
      title: "Nuestros trabajos",
      sub: "Fotos de nuestras propias obras — reconstrucciones, remodelaciones y reparaciones en Miami-Dade, Broward y Palm Beach.",
      captions: ["Reconstrucción de baño", "Cambio de azulejo", "Impermeabilización de ducha", "Reparación de drywall", "Nivelación de piso", "Remodelación de baño", "Instalación de vanidad", "Repintado interior", "Reconstrucción de cocina", "Instalación de gabinetes", "Carpintería de acabados", "Instalación de piso", "Acabado de paredes", "Reconstrucción de comedor", "Cambio de accesorios", "Azulejo de ducha", "Cambio de zócalos", "Reconstrucción de cuarto", "Acabados interiores", "Remodelación completa"]
    },
    areasPage: {
      title: "Áreas de servicio",
      sub: "Despachamos cuadrillas en tres condados, 24 horas al día. Si está fuera de estas zonas, llame igual — le diremos con honestidad si podemos llegar.",
      counties: [
        { name: "Condado de Miami-Dade", cities: ["Miami", "Hialeah", "Miami Beach", "Coral Gables", "Doral", "Kendall", "Aventura", "Homestead", "Miami Lakes", "North Miami", "Cutler Bay", "Pinecrest"] },
        { name: "Condado de Broward", cities: ["Fort Lauderdale", "Hollywood", "Pembroke Pines", "Miramar", "Weston", "Plantation", "Davie", "Coral Springs", "Sunrise", "Pompano Beach", "Deerfield Beach", "Coconut Creek"] },
        { name: "Condado de Palm Beach", cities: ["West Palm Beach", "Boca Raton", "Delray Beach", "Boynton Beach", "Jupiter", "Palm Beach Gardens", "Wellington", "Lake Worth", "Royal Palm Beach", "Riviera Beach"] }
      ],
      mapNote: "MAPA — COBERTURA DE TRES CONDADOS · 1120×420"
    },
    aboutPage: {
      title: "Sesenta años en las casas del sur de la Florida",
      sub: "Leon Roofing & Restoration es una empresa familiar. Tres generaciones de carpinteros, techadores y remodeladores que hoy atienden la parte de emergencia del mismo trabajo.",
      body: [
        "Empezamos construyendo y reparando casas, no persiguiendo daños por agua. Ese orden importa. Cuando una tubería falla a las dos de la mañana, quien llega ya sabe cómo está armada la casa: por dónde viaja el agua, qué es estructural, qué se puede secar y qué tiene que salir.",
        "También significa que terminamos. La mayoría de las empresas de mitigación secan la estructura, retiran su equipo y le entregan una lista de contratistas. Nosotros seguimos con la demolición, el drywall, el azulejo, los gabinetes, la pintura y el techo, con el mismo capataz contestando el teléfono todo el tiempo."
      ],
      valuesTitle: "Cómo trabajamos",
      values: [
        { h: "Contesta una persona", p: "Cada llamada, a cualquier hora. Sin cola, sin guion, sin promesa de devolver la llamada." },
        { h: "Por escrito antes de empezar", p: "Alcance, precio y metas de secado por escrito antes de cortar nada." },
        { h: "Cuadrillas propias", p: "Empleados, no jornaleros. Las mismas caras desde la extracción hasta la pintura." },
        { h: "Honestos sobre la cobertura", p: "Si creemos que su pérdida no será cubierta, se lo decimos antes de reclamar." }
      ],
      credsTitle: "Credenciales",
      creds: ["Certificado EPA 608", "OSHA 10", "Más de 60 años de experiencia", "Totalmente asegurados"],
      photo: "",
      img: "assets/photos/owner.jpg"
    },
    contactPage: {
      title: "Solicitar una cuadrilla",
      sub: "Si la emergencia es activa, llamar es más rápido — contesta una persona 24/7. Use este formulario para inspecciones, presupuestos y dudas de reclamos.",
      urgentTitle: "¿Emergencia activa?",
      urgentBody: "Si el agua sigue corriendo, hay aguas negras adentro o el techo está abierto, llame ahora en vez de llenar esto.",
      fields: {
        name: "Nombre completo", phone: "Teléfono", email: "Correo electrónico", address: "Dirección de la propiedad",
        damage: "Tipo de daño", when: "¿Cuándo ocurrió?", carrier: "Aseguradora",
        claim: "Número de reclamo (si lo tiene)", role: "Usted es…", callback: "Mejor hora para llamarle",
        photos: "Fotos del daño"
      },
      damageOptions: ["Agua / tubería rota", "Tormenta o inundación", "Moho", "Aguas negras", "Incendio o humo", "Fuga de techo", "Reconstrucción / remodelación", "No estoy seguro"],
      whenOptions: ["Está pasando ahora", "Hoy", "En los últimos 3 días", "Hace más de una semana", "No estoy seguro"],
      roleOptions: ["Dueño de casa", "Inquilino", "Administrador de propiedad", "Dueño de negocio", "Ajustador de seguros"],
      callbackOptions: ["Lo antes posible", "Mañana", "Tarde", "Noche"],
      dropNote: "Arrastre fotos aquí o toque para subir — mientras más veamos, mejor nos preparamos",
      submit: "Enviar solicitud",
      privacy: "Usamos sus datos para despachar y cotizar el trabajo. No los vendemos ni los compartimos.",
      sentTitle: "Solicitud recibida",
      sentBody: "Le vamos a llamar. Si es una emergencia, llame ahora — contesta una persona 24/7."
    },
    footer: {
      tag: "Restauración y reconstrucción en todo el sur de la Florida.",
      colTitle1: "Emergencia",
      colTitle2: "Después de la emergencia",
      colTitle3: "Empresa",
      legal: "Leon Roofing & Restoration, Inc. · Miami-Dade · Broward · Palm Beach",
      email: "leonroofing.restoration@gmail.com"
    },
    faqTitle: "Preguntas frecuentes",
    includesTitle: "Qué incluye",
    stepsTitle: "Cómo funciona",
    relatedTitle: "Servicios relacionados",
    sidebarTitle: "Contestamos en vivo, 24/7",
    sidebarBody: "Una persona contesta a cualquier hora, cualquier día — Miami-Dade, Broward y Palm Beach.",
    services: [
      S("water-extraction", {
        title: "Extracción de agua de emergencia",
        blurb: "Agua estancada sacada de pisos, base y cavidades — de día o de noche.",
        intro: "El agua entra en las cavidades de pared en minutos y en el drywall en horas. Llegamos con extracción montada en camión, sacamos el agua del interior de la estructura y no solo de la superficie, y colocamos el secado en la misma visita.",
        photo: "FOTO — BOQUILLA DE EXTRACCIÓN, LÍNEA DE AGUA EN LA PARED · 620×420",
        includes: [
          { h: "Verificación de la fuente", p: "Confirmamos que la fuga esté cerrada antes de empezar a secar." },
          { h: "Extracción con camión", p: "Agua estancada, base de alfombra y cavidades del piso extraídas a fondo." },
          { h: "Mapa de humedad", p: "Cámara térmica y medidores marcan la línea real de humedad, cuarto por cuarto." },
          { h: "Clasificación del agua", p: "Agua limpia, gris o negra — define qué se puede salvar." }
        ],
        steps: [
          { h: "Usted llama", p: "Contesta una persona, toma la dirección y le indica cómo cerrar el agua." },
          { h: "Llegamos", p: "Despejamos peligros, confirmamos la fuente y empezamos la extracción." },
          { h: "Documentamos", p: "Fotos y lecturas antes de cortar o desechar nada." },
          { h: "Colocamos secado", p: "Equipo instalado con plan escrito y su aseguradora notificada." }
        ],
        faqs: [
          { q: "¿Lo cubre mi seguro?", a: "Las pérdidas súbitas y accidentales — tuberías rotas, calentadores fallados, desbordes de electrodomésticos — normalmente sí. La filtración de años normalmente no. Documentamos la causa el primer día y le decimos con honestidad cuál es su caso." },
          { q: "¿Hay que romper el drywall?", a: "No siempre. Con agua limpia detectada a tiempo se puede secar en sitio con sistemas de cavidad. Abrimos paredes cuando el agua estaba contaminada o las lecturas dicen que la cavidad no va a secar." },
          { q: "¿Qué tan rápido llegan?", a: "Contesta una persona 24/7 y despachamos de inmediato. No prometemos un tiempo falso de llegada: al llamar le decimos dónde está la cuadrilla más cercana." }
        ]
      }),
      S("structural-drying", {
        title: "Secado estructural",
        blurb: "Estructura, piso y aire de cavidad devueltos al estándar seco — con el registro que lo prueba.",
        intro: "La extracción es la mitad fácil. Devolver la madera, el piso y el aire de cavidad por debajo del estándar seco es lo que realmente detiene el moho, y lo que una aseguradora paga solo cuando se puede probar.",
        photo: "FOTO — VENTILADORES Y DESHUMIDIFICADOR LGR TRABAJANDO · 620×420",
        includes: [
          { h: "Línea base psicrométrica", p: "Temperatura y humedad registradas adentro, afuera y en el aire afectado." },
          { h: "Equipo calculado", p: "Ventiladores y deshumidificadores calculados al espacio, no adivinados por cuartos." },
          { h: "Sistemas de cavidad y madera", p: "Sistemas de tapetes y pared secan pisos y cavidades sin demolición innecesaria." },
          { h: "Monitoreo diario", p: "Mismos técnicos, mismos medidores, lecturas hasta alcanzar el estándar seco." }
        ],
        steps: [
          { h: "Línea base", p: "Lecturas de cada material afectado y del aire exterior." },
          { h: "Plan", p: "Plan de secado escrito con equipo, metas y fecha estimada de secado." },
          { h: "Monitoreo", p: "Visitas diarias con lecturas enviadas a usted y a su ajustador." },
          { h: "Cierre", p: "Retiramos el equipo cuando los materiales llegan al estándar, no por calendario." }
        ],
        faqs: [
          { q: "¿Cuánto tiempo se queda el equipo?", a: "Normalmente de tres a cinco días. Materiales densos como madera y yeso tardan más. Retiramos por lecturas, nunca por calendario fijo." },
          { q: "¿Hace ruido? ¿Podemos quedarnos?", a: "Los ventiladores son ruidosos y los cuartos se calientan. La mayoría se queda; si la pérdida es grande o contaminada, le decimos claramente que no debería." },
          { q: "¿Por qué importa el registro de secado?", a: "Es la evidencia de que la estructura realmente llegó al estándar seco. Resuelve disputas con aseguradoras, compradores, asociaciones e inspectores futuros." }
        ]
      }),
      S("mold", {
        title: "Remediación de moho",
        blurb: "Contención, remoción y verificación — en el orden correcto y arreglando primero la humedad.",
        intro: "El moho es un síntoma. Primero encontramos y detenemos el agua, luego contenemos el área con presión negativa, retiramos el material afectado y tratamos lo que se queda — para que no vuelva en la misma esquina la próxima temporada.",
        photo: "FOTO — BARRERA DE CONTENCIÓN Y PURIFICADOR DE AIRE · 620×420",
        includes: [
          { h: "Primero la causa", p: "No se remedia nada hasta identificar y detener la fuente de agua." },
          { h: "Contención con presión negativa", p: "Área sellada y filtros HEPA para que las esporas no viajen por la casa." },
          { h: "Remoción controlada", p: "Material poroso afectado embolsado y retirado; estructura limpiada y tratada." },
          { h: "Verificación posterior", p: "Prueba de liberación independiente cuando el alcance lo requiere." }
        ],
        steps: [
          { h: "Inspección", p: "Evaluación visual y lecturas de humedad para hallar la extensión real." },
          { h: "Contención", p: "Barreras, presión negativa y rutas protegidas antes de mover nada." },
          { h: "Remoción", p: "Material afuera bajo contención, superficies aspiradas con HEPA y tratadas." },
          { h: "Verificación", p: "Área secada, liberada y reconstruida por nuestros carpinteros." }
        ],
        faqs: [
          { q: "¿Necesito una prueba de moho primero?", a: "Muchas veces no. Si se ve el crecimiento y se conoce la fuente, la prueba confirma lo visible. Vale la pena para liberación, para disputas o cuando la fuente no es obvia." },
          { q: "¿No se puede solo rociar?", a: "No. Rociar sin retirar el material afectado ni arreglar la humedad es cosmético — va a volver. Le decimos qué tiene que salir de verdad." },
          { q: "¿El seguro cubre el moho?", a: "A veces, y con frecuencia con un límite en dólares, cuando sigue a una pérdida de agua cubierta y reportada a tiempo. La humedad de años generalmente no." }
        ]
      }),
      S("storm", {
        title: "Limpieza por tormenta e inundación",
        blurb: "Huracán, marejada e inundación — cubrimos, sacamos el agua, secamos y retiramos escombros.",
        intro: "Después de una tormenta con nombre, el condado entero llama al mismo tiempo. Preparamos cuadrillas y equipo antes de que toque tierra para cubrir aperturas, sacar el agua y empezar el secado mientras las calles todavía se despejan.",
        photo: "FOTO — TECHO CUBIERTO Y CUADRILLA SACANDO AGUA · 620×420",
        includes: [
          { h: "Cubrimiento de emergencia", p: "Cerramos aperturas primero para que la próxima lluvia no duplique el daño." },
          { h: "Agua categoría 3", p: "Inundación y marejada tratadas como contaminadas, con el equipo y desecho correctos." },
          { h: "Retiro de escombros", p: "Materiales saturados, contenidos arruinados y escombros retirados de la propiedad." },
          { h: "Documentación completa", p: "Fotos, lecturas y alcance armados para un reclamo de tormenta desde la primera hora." }
        ],
        steps: [
          { h: "Antes de la tormenta", p: "Llame para entrar en la lista previa; preparamos equipo y cuadrillas por condado." },
          { h: "Primera pasada", p: "Aperturas cubiertas, agua extraída, electricidad y seguridad revisadas." },
          { h: "Secado", p: "Material contaminado retirado, estructura sanitizada y secada al estándar." },
          { h: "Reconstrucción", p: "Techo, drywall, pisos y acabados reconstruidos por nuestras cuadrillas." }
        ],
        faqs: [
          { q: "¿Aceptan reservas antes de la tormenta?", a: "Sí. Llame antes de que toque tierra y ponemos su dirección en la lista prioritaria de su condado." },
          { q: "¿Mi póliza cubre inundación?", a: "Normalmente no — el agua que sube suele requerir póliza de inundación aparte, mientras la lluvia empujada por viento a través de una apertura causada por la tormenta con frecuencia sí se cubre. Documentamos cuál causó su daño." },
          { q: "¿Pueden cubrir el techo hoy?", a: "Si es seguro subir, sí. Viento, rayos y madera podrida son el límite, y le diremos cuando no sea seguro." }
        ]
      }),
      S("sewage", {
        title: "Limpieza de aguas negras",
        blurb: "Agua categoría 3 tratada como se debe: retirada, sanitizada y verificada — no trapeada.",
        intro: "Un retorno de aguas negras es un riesgo biológico, no un desorden. El material poroso que tocó sale, el resto se limpia y desinfecta bajo contención, y la estructura se seca y verifica antes de reponer nada.",
        photo: "FOTO — TÉCNICO CON EQUIPO DE PROTECCIÓN, ÁREA CONTENIDA · 620×420",
        includes: [
          { h: "Protección y contención total", p: "Zona sellada, presión negativa y ruta protegida hasta el camión." },
          { h: "Retiro de material contaminado", p: "Alfombra, base, drywall saturado y contenidos afectados retirados y desechados legalmente." },
          { h: "Sanitización de superficies", p: "Estructura limpiada, desinfectada y desodorizada, incluyendo subpiso y madera." },
          { h: "Secado y verificación", p: "Estructura secada al estándar y revisada antes de reconstruir." }
        ],
        steps: [
          { h: "Detener y aislar", p: "Fuente cerrada, área aislada y ocupantes fuera de la zona contaminada." },
          { h: "Retirar", p: "Agua residual extraída, material poroso afectado embolsado y retirado." },
          { h: "Sanitizar", p: "Antimicrobiano en todas las superficies restantes y aire filtrado." },
          { h: "Secar y reconstruir", p: "Estructura secada, verificada y luego reconstruida y terminada." }
        ],
        faqs: [
          { q: "¿Puedo limpiarlo yo?", a: "No lo recomendamos. El agua categoría 3 carga bacterias y virus; los limpiadores caseros y una aspiradora no dejan un piso seguro, y la humedad que queda genera moho." },
          { q: "¿Hay que botar todo?", a: "Lo poroso que absorbió agua sí. Superficies duras, la mayoría de las estructuras de muebles y muchos contenidos se pueden limpiar y salvar." },
          { q: "¿Cuándo podemos usar el cuarto?", a: "Normalmente unos días: primero remoción y sanitización, luego secado al estándar, luego reconstrucción." }
        ]
      }),
      S("packout", {
        title: "Retiro de contenidos",
        blurb: "Inventariado, movido, secado y devuelto — sus pertenencias rastreadas todo el camino.",
        intro: "Cuando un cuarto tiene que demolerse o secarse de forma agresiva, sus pertenencias no deben estar ahí. Inventariamos y fotografiamos todo, lo sacamos, secamos y limpiamos lo salvable, y lo devolvemos cuando el espacio está terminado.",
        photo: "FOTO — CAJAS ETIQUETADAS Y MUEBLES ENVUELTOS · 620×420",
        includes: [
          { h: "Inventario cuarto por cuarto", p: "Cada artículo registrado y fotografiado antes de moverlo, con copia para usted." },
          { h: "Empaque y transporte cuidado", p: "Muebles envueltos y protegidos; electrónicos y documentos aparte." },
          { h: "Limpieza y secado", p: "Contenidos salvables secados, limpiados y desodorizados fuera de sitio." },
          { h: "Devolución y colocación", p: "Todo regresa y se coloca en su lugar cuando el cuarto está listo." }
        ],
        steps: [
          { h: "Evaluar", p: "Recorremos el espacio con usted y marcamos qué sale y qué se queda." },
          { h: "Inventariar", p: "Fotografiado y registrado, artículo por artículo, con su condición." },
          { h: "Guardar", p: "Almacenado en espacio controlado mientras secamos y reconstruimos." },
          { h: "Devolver", p: "Entregado, desempacado y colocado, con el inventario conciliado." }
        ],
        faqs: [
          { q: "¿El seguro cubre el retiro de contenidos?", a: "Normalmente sí, como parte de una pérdida cubierta — y el inventario que armamos es lo que respalda la parte de contenidos de su reclamo." },
          { q: "¿Y las cosas que no quiero que toquen?", a: "Díganos en el recorrido. Valores, armas, medicamentos y objetos sentimentales es mejor que se queden con usted." },
          { q: "¿Cuánto tiempo pueden guardarlo?", a: "El tiempo que tome la reconstrucción. El inventario queda abierto hasta que la última caja regrese." }
        ]
      }),
      S("claims", {
        title: "Ayuda con el reclamo",
        blurb: "Registro fotográfico, alcance, llamadas con el ajustador y facturación directa.",
        intro: "Las aseguradoras niegan lo que nadie documentó. Desde la primera hora armamos el expediente: causa de la pérdida, extensión, lecturas diarias y un alcance en el formato que aceptan los ajustadores — y facturamos directo a la aseguradora.",
        photo: "",
        img: "assets/photos/thermal.jpg",
        includes: [
          { h: "Documentación de la causa", p: "Qué falló, cuándo y hasta dónde viajó el agua — registrado el primer día." },
          { h: "Alcance que su ajustador acepta", p: "Alcance y precios por partida en el formato con el que trabajan las aseguradoras." },
          { h: "Facturación directa", p: "Usted paga su deducible; nosotros facturamos a la aseguradora lo cubierto." },
          { h: "Reuniones con el ajustador", p: "Nos vemos con el ajustador en sitio y recorremos el daño con él." }
        ],
        steps: [
          { h: "Abrir", p: "Reclamo abierto el mismo día, con fotos y lecturas ya adjuntas." },
          { h: "Presupuestar", p: "Alcance completo de mitigación y reparación, no una estimación aproximada." },
          { h: "Negociar", p: "Suplementos y disputas manejados con documentación, no con discusión." },
          { h: "Cerrar", p: "Factura final, garantía y fotos de finalización para usted y la aseguradora." }
        ],
        faqs: [
          { q: "¿Debo reclamar antes de llamarlos?", a: "Llámenos primero si el agua sigue activa — detener el daño va primero, y tendremos la documentación lista cuando reclame, muchas veces el mismo día." },
          { q: "¿Y si mi reclamo fue mal pagado o negado?", a: "Tráiganos el expediente. El pago insuficiente casi siempre es un problema de documentación, y un registro completo de fotos y humedad es lo que logra reabrirlo." },
          { q: "¿Son ajustadores públicos?", a: "No. Somos el contratista: documentamos nuestro trabajo, lo presupuestamos bien y tratamos directo con su ajustador. Para disputas de cobertura podemos referirle profesionales con licencia." }
        ]
      }),
      S("rebuild", {
        title: "Reconstrucción",
        blurb: "Drywall, azulejo, gabinetes, acabados y pintura — la misma empresa que secó, reconstruye.",
        intro: "La mayoría de las empresas de mitigación paran cuando la casa está seca. Nosotros seguimos: estructura, drywall, azulejo, gabinetes, acabados, pintura y accesorios, terminados por nuestros propios carpinteros y con un solo capataz de principio a fin.",
        photo: "FOTO — BAÑO RECONSTRUIDO TERMINADO · 620×420",
        includes: [
          { h: "Estructura y drywall", p: "Estructura reparada, aislada, instalada, sellada y terminada a juego." },
          { h: "Azulejo, pisos e impermeabilización", p: "Duchas y áreas húmedas reconstruidas bien, con impermeabilización correcta." },
          { h: "Gabinetes y acabados", p: "Gabinetes, vanidades, zócalos y marcos instalados por nuestros carpinteros." },
          { h: "Pintura y accesorios", p: "Pintura final, iluminación y plomería instaladas y probadas." }
        ],
        steps: [
          { h: "Alcance y precio", p: "Alcance escrito, asignaciones y cronograma antes de terminar la demolición." },
          { h: "Construir", p: "Un capataz, cuadrillas propias, oficios secuenciados y obra limpia a diario." },
          { h: "Recorrer", p: "Recorrido de detalles con usted antes de darlo por terminado." },
          { h: "Garantía", p: "Garantía escrita de mano de obra y fotos de finalización para su expediente." }
        ],
        faqs: [
          { q: "¿Puedo mejorar cosas durante la reconstrucción?", a: "Sí, y es el momento más económico. El seguro paga equivalente a lo que había; usted paga la diferencia de la mejora." },
          { q: "¿Cuánto tarda una reconstrucción?", a: "Un baño suele ser de dos a tres semanas después del secado; una pérdida de piso completo toma más. Recibe un cronograma con el alcance." },
          { q: "¿Manejan los permisos?", a: "Sí, cuando el trabajo los requiere, incluyendo inspecciones hasta el cierre." }
        ]
      }),
      S("roofing", {
        title: "Techos",
        blurb: "Reparación de fugas, cubrimiento, techos nuevos y daño por tormenta — con tres generaciones detrás.",
        intro: "Los techos son el origen de esta empresa. Reparamos fugas, cubrimos aperturas por tormenta y reemplazamos techos de teja, shingle y planos — y como también hacemos el interior, arreglamos el cielo raso que la fuga arruinó.",
        photo: "FOTO — CUADRILLA EN TECHO DE TEJA, MIAMI DE FONDO · 620×420",
        includes: [
          { h: "Diagnóstico de fugas", p: "Encontramos por dónde entra el agua, no solo dónde gotea adentro." },
          { h: "Cubrimiento de emergencia", p: "Aperturas cubiertas rápido después de una tormenta para detener el daño interior." },
          { h: "Reparaciones y techos nuevos", p: "Teja, shingle y sistemas planos reparados o reemplazados al código actual." },
          { h: "Reparación interior incluida", p: "Cielos manchados, aislamiento y drywall reparados por la misma empresa." }
        ],
        steps: [
          { h: "Inspeccionar", p: "Techo y ático inspeccionados, con fotos de lo que encontramos." },
          { h: "Informar", p: "Hallazgos escritos, opciones y precio — incluyendo qué puede esperar." },
          { h: "Reparar", p: "Trabajo ejecutado, permitido e inspeccionado donde se requiera." },
          { h: "Verificar", p: "Prueba de agua cuando es práctico, daño interior reparado y pintado." }
        ],
        faqs: [
          { q: "¿Reparar o reemplazar?", a: "Depende de la edad del sistema y de cuánto está fallando. Le mostramos fotos y le decimos cuándo una reparación es tirar dinero a un techo que necesita reemplazo." },
          { q: "¿El seguro paga un techo nuevo?", a: "Por daño súbito de tormenta, muchas veces sí. Por edad y desgaste, no. El informe de inspección le dice en cuál caso está." },
          { q: "¿Cubren el techo durante la tormenta?", a: "Solo cuando es seguro subir. No ponemos una cuadrilla arriba con rayos o viento fuerte." }
        ]
      }),
      S("commercial", {
        title: "Comercial y administradores",
        blurb: "Pérdidas de varias unidades, asociaciones y coordinación con inquilinos — con documentación lista para reenviar.",
        intro: "Una pérdida en un edificio son tres problemas: el agua, los vecinos y el papeleo. Trabajamos directo con administradores y asociaciones, coordinamos accesos y entregamos documentación que usted puede reenviar sin editar.",
        photo: "",
        img: "assets/photos/van.jpg",
        includes: [
          { h: "Respuesta multiunidad", p: "Varias unidades y áreas comunes atendidas a la vez, con equipo suficiente." },
          { h: "Coordinación con inquilinos", p: "Accesos programados, avisos claros y cuadrillas que se comportan en edificios ocupados." },
          { h: "Reportes para la asociación", p: "Documentación de fotos y humedad por unidad, separada para junta y aseguradora." },
          { h: "Trabajo fuera de horario", p: "Noches y fines de semana cuando un pasillo o lobby no puede cerrarse de día." }
        ],
        steps: [
          { h: "Llamada", p: "Un solo punto de contacto para todo el edificio, no por unidad." },
          { h: "Evaluación", p: "Unidades afectadas mapeadas, equipo preparado y accesos acordados." },
          { h: "Mitigación", p: "Agua afuera, secado colocado y monitoreado en cada unidad afectada." },
          { h: "Reporte", p: "Documentación por unidad para la junta, la aseguradora y los dueños." }
        ],
        faqs: [
          { q: "¿Tienen acuerdo maestro de servicio?", a: "Sí — podemos dejar precios y términos acordados antes de una emergencia para que el despacho no espere aprobaciones." },
          { q: "¿Pueden atender varias unidades a la vez?", a: "Sí. Preparamos equipo por edificio y agregamos cuadrillas en vez de poner las unidades en fila." },
          { q: "¿Quién recibe la documentación?", a: "Quien usted indique: administración, junta, aseguradora y dueños individuales, cada uno con lo que necesita." }
        ]
      }),
      S("tarping", {
        title: "Cubrimiento y cierre de emergencia",
        blurb: "Aperturas de techo cubiertas y ventanas cerradas el mismo día — antes de la próxima lluvia.",
        intro: "Después de una tormenta, el segundo daño llega porque el techo quedó abierto. Cubrimos aperturas, cerramos ventanas y puertas rotas y aseguramos la propiedad para que el interior deje de recibir agua mientras se resuelve el reclamo.",
        photo: "FOTO — CUADRILLA ASEGURANDO LONA AZUL SOBRE UN TECHO DAÑADO · 620×420",
        includes: [
          { h: "Cubrimiento el mismo día", p: "Aperturas de techo cubiertas y sujetadas para aguantar la próxima tormenta." },
          { h: "Cierre de ventanas y puertas", p: "Aperturas cerradas con madera cortada y fijada bien, no con cinta." },
          { h: "Protección interior", p: "Plástico, contención y desvío de agua adentro para detener el daño." },
          { h: "Documentado para el reclamo", p: "Fotos de la apertura y de la causa antes de cubrirla." }
        ],
        steps: [
          { h: "Llamada", p: "Tomamos la dirección y le preguntamos qué se ve desde el suelo — sin subir." },
          { h: "Evaluación", p: "Revisamos techo e interior y le decimos si es seguro trabajar hoy." },
          { h: "Asegurar", p: "Aperturas cubiertas o cerradas e interior protegido de la próxima lluvia." },
          { h: "Reparar", p: "Reparación permanente de techo e interior con la misma empresa." }
        ],
        faqs: [
          { q: "¿El seguro paga el cubrimiento?", a: "Normalmente sí. Las aseguradoras esperan que usted evite daño adicional, y el cubrimiento de emergencia suele ser un gasto cubierto — lo documentamos para que se pague." },
          { q: "¿Cuánto dura una lona?", a: "Bien instalada aguanta semanas, no días. Es un puente hacia la reparación permanente, no un reemplazo." },
          { q: "¿Cubren de noche?", a: "Solo cuando es seguro. Teja mojada, viento y rayos son límites absolutos: protegemos el interior y volvemos al amanecer." }
        ]
      }),
      S("thermal-imaging", {
        title: "Imagen térmica y detección de fugas",
        blurb: "Encuentre el agua dentro de la pared antes de abrirla — infrarrojo más medidores.",
        intro: "Las manchas engañan. El agua viaja por la estructura y aparece a cuartos de distancia de la falla. Escaneamos con infrarrojo y confirmamos con medidores de humedad, para que la demolición ocurra donde el agua realmente está — y en ningún otro lugar.",
        photo: "",
        img: "assets/photos/thermal.jpg",
        includes: [
          { h: "Escaneo infrarrojo", p: "Paredes, techos y pisos escaneados buscando la firma térmica de la humedad." },
          { h: "Confirmación con medidor", p: "Cada hallazgo infrarrojo verificado con lecturas de humedad." },
          { h: "Rastreo de fugas", p: "Fugas de suministro, drenaje y techo rastreadas hasta el punto de falla." },
          { h: "Informe escrito", p: "Imágenes anotadas y lecturas que puede entregar a un ajustador o comprador." }
        ],
        steps: [
          { h: "Recorrido", p: "Mapeamos los cuartos afectados y anotamos lo que usted ya vio." },
          { h: "Escaneo", p: "Barrido infrarrojo de las áreas sospechosas, marcando sobre la marcha." },
          { h: "Verificación", p: "Lecturas en cada anomalía para descartar falsos positivos." },
          { h: "Informe", p: "Hallazgos, fotos y alcance recomendado el mismo día." }
        ],
        faqs: [
          { q: "¿El infrarrojo ve a través de la pared?", a: "No — lee temperatura de superficie. La humedad atrapada cambia cómo la superficie retiene calor, y eso es lo que aparece. Por eso confirmamos con medidor." },
          { q: "¿Se puede hallar una fuga bajo losa?", a: "Muchas veces sí, sobre todo en agua caliente. Las líneas frías pueden requerir además escucha acústica, que traemos si el escaneo no es concluyente." },
          { q: "¿La inspección es gratis?", a: "La inspección de daños es gratis. Un informe infrarrojo documentado para un reclamo, una compra o una disputa es un servicio pagado, cotizado antes de empezar." }
        ]
      }),
      S("hvac", {
        title: "Servicio e instalación de aire acondicionado",
        blurb: "Reparación, reemplazo, mantenimiento y ductos — residencial y comercial.",
        intro: "En el sur de la Florida el manejador de aire es la segunda causa más común de daño por agua adentro, después de las tuberías. Reparamos, damos servicio y reemplazamos sistemas residenciales y comerciales ligeros, y limpiamos y sellamos los ductos que mueven el aire.",
        photo: "FOTO — TÉCNICO ATENDIENDO UN CONDENSADOR JUNTO A UNA CASA EN MIAMI · 620×420",
        includes: [
          { h: "Reparación y diagnóstico", p: "Falta de frío, fugas de refrigerante, capacitores, sopladores, drenajes y controles." },
          { h: "Reemplazo de sistemas", p: "Sistemas de frío, bomba de calor y mini-split del tamaño correcto, con permiso." },
          { h: "Planes de mantenimiento", p: "Dos servicios al año con limpieza de serpentín, drenaje y filtros." },
          { h: "Limpieza y sellado de ductos", p: "Limpieza, sanitización, sellado y reemplazo de ductos colapsados o mojados." },
          { h: "Calidad del aire interior", p: "Luces UV, filtración y deshumidificación para casas húmedas o con olor." },
          { h: "Mini-splits y añadidos", p: "Sistemas sin ductos para garajes, ampliaciones, oficinas y espacios convertidos." },
          { h: "Termostatos y controles", p: "Termostatos, interruptores de flotador y sensores que apagan el sistema antes de inundar." },
          { h: "Servicio comercial fuera de horario", p: "Unidades de paquete y sistemas divididos atendidos de noche." }
        ],
        steps: [
          { h: "Diagnosticar", p: "Revisión completa con lecturas, no adivinar y cambiar una pieza." },
          { h: "Cotizar", p: "Opciones de reparar o reemplazar por escrito, con eficiencia y costo al lado." },
          { h: "Instalar", p: "Instalación con permiso, condensado bien manejado y equipo viejo retirado." },
          { h: "Mantener", p: "Servicio programado para que la próxima falla no sea un pasillo inundado." }
        ],
        faqs: [
          { q: "¿Por qué gotea agua mi manejadora?", a: "Casi siempre es un drenaje de condensado tapado o un serpentín sucio que se congela y descongela. Ambos son baratos de atender y caros de ignorar: un drenaje tapado puede empapar un cielo raso en una noche." },
          { q: "¿Atienden sistemas comerciales?", a: "Comercial ligero: unidades de paquete, sistemas divididos y mini-splits para oficinas, comercios, restaurantes y edificios de varias unidades. También hacemos servicio fuera de horario." },
          { q: "¿Reparar o reemplazar?", a: "Como regla, un sistema de más de doce años que necesita una pieza mayor conviene reemplazarlo. Le mostramos los números de ambas formas y usted decide." }
        ]
      }),
      S("roof-cleaning", {
        title: "Limpieza de techos",
        blurb: "Algas, moho y manchas removidas con baja presión — sin dañar teja ni shingle.",
        intro: "Las rayas negras y el crecimiento verde no son solo estética: retienen humedad contra la teja y el shingle y acortan la vida del techo. Lavamos con baja presión y la solución correcta, para que el techo quede limpio sin perder granulado ni agrietar tejas.",
        photo: "FOTO — TECHO DE TEJA A MEDIO LIMPIAR MOSTRANDO LA LÍNEA · 620×420",
        includes: [
          { h: "Lavado suave a baja presión", p: "La solución hace el trabajo — sin hidrolavadora dañando su techo." },
          { h: "Teja, shingle y plano", p: "Método ajustado a su sistema de techo y a su edad." },
          { h: "Limpieza de canales y fascia", p: "Canales lavados y fascia limpiada como parte del trabajo." },
          { h: "Protección de plantas", p: "Jardín, mallas y áreas de piscina cubiertas y enjuagadas al final." }
        ],
        steps: [
          { h: "Inspeccionar", p: "Primero revisamos la condición: un techo fallando recibe cotización, no lavado." },
          { h: "Proteger", p: "Plantas, mallas y superficies cubiertas antes de aplicar nada." },
          { h: "Lavar", p: "Solución aplicada y enjuagada a baja presión, por secciones." },
          { h: "Enjuagar", p: "Todo lo de abajo enjuagado, canales lavados y el sitio limpio." }
        ],
        faqs: [
          { q: "¿La hidrolavadora daña el techo?", a: "La presión alta sí — arranca el granulado del shingle y mete agua bajo la teja. Por eso usamos lavado suave." },
          { q: "¿Cada cuánto se limpia un techo?", a: "En el sur de la Florida, cada dos a cuatro años según la sombra y los árboles. Las pendientes al norte vuelven a crecer más rápido." },
          { q: "¿También arreglan lo que encuentran?", a: "Sí. Si vemos teja agrietada, flashing fallado o madera blanda mientras limpiamos, lo fotografiamos y cotizamos la reparación." }
        ]
      })
    ]
  };

  return { en, es };
})();
