/**
 * Tech Encyclopedia Seed Database (Restricted & Restructured)
 * Contains strictly curated, highly accurate, and educational information for exactly 11 devices.
 */

const TECH_DATABASE = {
  categories: [
    { id: "input", name: "Input Devices", icon: "keyboard" },
    { id: "output", name: "Output Devices", icon: "monitor" },
    { id: "storage", name: "Storage Devices", icon: "hard_drive" },
    { id: "networking", name: "Networking Devices", icon: "dns" }
  ],
  devices: [
    {
      id: "mouse",
      model3d: "3d/computer_mouse.glb",
      name: "The Computer Mouse",
      category: "input",
      tagline: "Translates hand movements on a physical surface into two-dimensional digital screen coordinates.",
      definition: "An input device that detects spatial motion relative to flat surfaces, converting physical displacement vectors into digital coordinate indicators for graphical user interface navigation.",
      purpose: "To provide a direct, intuitive graphical pointer control system that maps physical human motor movements into digital GUI coordinate offsets.",
      importance: "The mouse is the primary interface conduit for high-precision design, layout, gaming, and spatial navigation, forming the cornerstone of modern Human-Computer Interaction (HCI).",
      quickFacts: {
        "Sensor Standard": "Optical CMOS Sensor Array",
        "Bus Interface": "USB Type-A / C, 2.4GHz RF, Bluetooth LE",
        "Click Actuation": "Mechanical or Optical Microswitches (~50g force)",
        "Glide Coefficient": "Ultra-low friction PTFE skates"
      },
      interestingFacts: "The first prototype constructed in 1964 was built from wood and housed two perpendicular wheels to track displacement along a single axis each. It was nicknamed 'the mouse' because the tail-like connection cord exited the rear of the device.",
      realWorldExamples: "Gamers utilizing 8000Hz polling rate mice for sub-millisecond precision, and CAD designers using multi-button ergonomic trackballs for precision industrial layouts.",
      history: "Invented by Douglas Engelbart in 1964 at the Stanford Research Institute. The prototype used perpendicular wheels inside a wooden casing. Xerox PARC refined this into the optomechanical ball mouse in the 1970s. In 1999, Microsoft introduced the IntelliMouse, replacing the mechanical ball with a solid-state optical sensor, which eliminated tracking failures caused by dust.",
      timeline: [
        { year: "1964", event: "Douglas Engelbart invents the wooden computer mouse prototype." },
        { year: "1972", event: "Xerox PARC designs the ball mouse, allowing multi-axis optomechanical tracking." },
        { year: "1999", event: "Microsoft launches the IntelliMouse, introducing solid-state optical sensors." },
        { year: "2004", event: "Logitech releases the MX1000, the first commercial laser-illuminated mouse." },
        { year: "2020", event: "Introduction of 8000Hz polling rates, bringing input latencies under 0.125ms." }
      ],
      breakthroughs: [
        "Solid-State Optical Sensors: Eliminated rubber balls that gathered dust and caused tracking skips.",
        "Laser Diode Illumination: Allowed tracking on highly reflective and glass surfaces.",
        "High-Speed MCUs: Enabled ultra-fast polling rates (up to 8000Hz) and latency-free wireless channels."
      ],
      oldVsNew: "Legacy mice relied on physical rollers and rubber balls which decayed, suffered from lint clogging, and had a maximum tracking resolution of 400 DPI. Modern mice use high-speed infrared cameras tracking micro-imperfections of surfaces at up to 26,000 DPI with zero friction.",
      types: [
        {
          name: "Optical Mouse",
          desc: "Uses an LED light source (often red or infrared) and a tiny camera to snap surface snapshots and calculate movement.",
          pros: ["Zero moving tracking parts", "Excellent consistency on mousepads", "Highly affordable"],
          cons: ["Fails to track on glass or highly reflective surfaces"],
          users: ["Office workers", "Competitive gamers", "General students"],
          apps: ["Daily computing", "Competitive gaming"]
        },
        {
          name: "Laser Mouse",
          desc: "Uses an invisible laser diode to illuminate surfaces, revealing microscopic depth structures.",
          pros: ["Tracks on glass and glossy desks", "Very high resolution capabilities"],
          cons: ["Prone to tracking jitter on fabric pads due to excessive sensitivity"],
          users: ["Business travelers", "Office professionals without mousepads"],
          apps: ["Laptop utility", "Glass-desk workstations"]
        },
        {
          name: "Vertical Ergonomic Mouse",
          desc: "Angled shell (typically 57 degrees) that forces a natural 'handshake' grip, reducing forearm pronation.",
          pros: ["Prevents carpal tunnel syndrome", "Relieves muscle strain"],
          cons: ["Steep learning curve", "Bulky and heavier to transport"],
          users: ["Coders", "Office professionals", "Users with wrist injuries"],
          apps: ["Long office shifts", "Software development"]
        }
      ],
      architecture: {
        description: "Modern mice mount an optoelectronic sensor, a DSP, mechanical primary click microswitches, a rotary scroll wheel encoder, and an MCU on a single PCB.",
        hotspots: [
          { x: 30, y: 20, title: "Illumination Source", desc: "Infrared LED or VCSEL laser casting light at an angle." },
          { x: 50, y: 50, title: "CMOS Sensor & DSP", desc: "Captures microscopic snapshots of the tracking surface." },
          { x: 20, y: 80, title: "Microswitches", desc: "Provide tactile primary left/right clicks." }
        ]
      },
      componentsDetail: [
        { name: "CMOS Sensor", purpose: "Captures surface images", working: "Takes up to 20,000 microscopic snapshots per second of the surface beneath the mouse.", importance: "Determines the maximum speed and tracking consistency of the pointer." },
        { name: "Digital Signal Processor (DSP)", purpose: "Calculates movement vectors", working: "Runs optical flow algorithms comparing consecutive snapshots to deduce distance and direction offsets.", importance: "Converts optical pictures into numerical data lines near-instantaneously." },
        { name: "Microcontroller (MCU)", purpose: "Packages and transmits data packets", working: "Collects coordinate records from the DSP, checks button states, and builds USB reports.", importance: "Coordinates communication, polling rates, and power consumption profiles." }
      ],
      externalComponents: [
        { name: "PTFE Skates", purpose: "Reduce friction", desc: "Ultra-slick Teflon pads placed on the base of the mouse shell to ensure smooth sliding." }
      ],
      workingPrinciple: "A computer mouse calculates movement vectors by scanning the physical surface below it. An LED or laser diode casts light at a shallow angle to reveal micro-textures. These reflections are focused onto a CMOS sensor array, which captures thousands of surface snapshots per second. An onboard Digital Signal Processor (DSP) uses optical flow algorithms to compare consecutive images, computing distance and direction coordinate changes (delta X/Y). The microcontroller (MCU) packages these coordinates along with button click statuses, sending data packets to the CPU at standard polling intervals.",
      workingSteps: [
        { title: "Surface Illumination", desc: "An LED casts light at a shallow angle to reveal surface texture shadows." },
        { title: "Snapshot Capture", desc: "The CMOS sensor takes thousands of microscopic images per second." },
        { title: "Optical Flow Analysis", desc: "The onboard DSP compares images, calculating coordinate shifts (delta X and Y)." },
        { title: "Packet Transmission", desc: "The MCU sends USB report packets containing delta coordinate values at set polling intervals." }
      ],
      specs: {
        "DPI": "800 - 26,000 DPI (Counts Per Inch)",
        "Polling Rate": "125Hz - 8000Hz (Reports Per Second)",
        "Sensor Type": "Optical CMOS or Laser Diode",
        "Wired/Wireless": "Wired (USB), 2.4GHz RF, Bluetooth LE",
        "Interface": "USB Type-A, USB Type-C",
        "Number of Buttons": "2 to 12+ Programmable Buttons"
      },
      specExplanation: "DPI (Dots Per Inch) determines spatial sensitivity; higher settings map small hand movements to large cursor sweeps on high-res screens. Polling rate defines how often the mouse reports coordinate data to the OS (e.g., 1000Hz means every 1ms), minimizing input latency.",
      applications: [
        "Office Work: Standard spreadsheet work, word processing, and interface navigation.",
        "Competitive Esports: High-speed competitive play requiring ultra-light chassis, high polling rates, and optical switches.",
        "CAD & 3D Modeling: Precision line drawing and mechanical assembly panning.",
        "Graphic Design: Pixel-perfect retouching using high DPI accuracy and side scroll wheels."
      ],
      advantages: [
        "Precise, pixel-perfect pointer control on digital interfaces.",
        "Ergonomically shaped models reduce wrist fatigue and muscle strain.",
        "Customizable buttons map complex macros, boosting software productivity."
      ],
      disadvantages: [
        "Requires flat, clean physical desk space to glide.",
        "Repetitive grip motions can lead to carpal tunnel syndrome.",
        "Optical models require specific non-reflective mousepads to prevent tracking jitter."
      ],
      misconceptions: [
        { myth: "Higher DPI always makes a mouse better and more accurate.", explanation: "Higher DPI only increases sensitivity. Beyond 3200 DPI, tiny hand tremors are amplified, and sensors may introduce smoothing algorithms that add input lag." }
      ],
      decisionTree: {
        question: "What is your primary mouse use case?",
        options: {
          "Competitive Gaming": "Choose an ultralight (<65g) optical mouse with a high polling rate (1000Hz+) and zero angle snapping.",
          "Office Work": "Select an ergonomic shaped vertical mouse with wireless Bluetooth support to prevent strain."
        }
      },
      buyingGuide: {
        budgetGuide: "$15-$40: entry productivity. $50-$100: premium ergonomic vertical or lightweight gaming mice.",
        scenarios: [
          { use: "Daily Office Work", recommendation: "Ergonomic vertical shape, Bluetooth support, multi-device swap buttons." }
        ],
        checklist: ["Check hand size and preferred grip type (claw vs palm vs fingertip).", "Confirm connectivity requirements (Bluetooth for travel vs 2.4GHz RF for gaming)."],
        avoidMistakes: [
          "Using a gaming mouse on bare reflective glass desks without a matte pad."
        ],
        expertAdvice: "Choose a mouse with optical switches to completely avoid double-clicking failures, which are the main cause of mechanical switch wear."
      },
      maintenanceDetail: {
        cleaning: "Wipe shell using a lightly damp microfiber cloth with 70% isopropyl alcohol. Avoid getting liquid inside switches.",
        lifespan: "Typically 3 to 7 years depending on switch quality and daily click cycles."
      },
      troubleshootingSteps: [
        { issue: "Cursor Jumps or Skips", symptoms: "The cursor teleports randomly or freezes during fast sweeps.", steps: ["Inspect and clean the optical sensor lens cavity using compressed air.", "Ensure you are using a clean, non-reflective, solid-color mousepad."] }
      ],
      faq: [
        { q: "What is mouse DPI?", a: "Dots Per Inch. It measures pointer sensitivity—higher values move the cursor further per inch of physical movement." },
        { q: "Wired vs Wireless?", a: "Modern 2.4GHz wireless mice offer the same sub-1ms speed as wired, but require battery recharging." }
      ],
      relatedDevices: ["keyboard", "monitor", "usb_flash"],
      images: {
        overview: [{ url: 'images/mouse.jpg', caption: 'Ergonomic Computer Mouse', description: 'Clean top view of an optical mouse on solid background.', featured: true, order: 0 }]
      }
    },
    {
      id: "keyboard",
      model3d: "3d/gaming_keyboard.glb",
      name: "The Computer Keyboard",
      category: "input",
      tagline: "An array of switches translating mechanical keypresses into alphanumeric and control input codes.",
      definition: "A primary input device containing a grid of alphanumeric, numeric, function, and control keys that actuate electrical switches to send scan codes to the host system.",
      purpose: "To enable direct text entry, command execution, and software control through structured manual key actuations.",
      importance: "The baseline interface for document writing, software development, terminal operations, and shortcut-heavy workflows.",
      quickFacts: {
        "Switch Types": "Mechanical, Membrane, Optical",
        "Polling Rate": "125Hz - 1000Hz",
        "Form Factors": "Full-size (100%), Tenkeyless (80%), Compact (60%)"
      },
      interestingFacts: "The QWERTY layout was invented in the 1870s for early mechanical typewriters. It placed common letters far apart to prevent physical type arms from colliding and jamming.",
      realWorldExamples: "Programmers typing on tactile mechanical keyboards with PBT double-shot keycaps, and copywriters using ergonomic split keyboards.",
      history: "Evolved directly from mechanical typewriters and teleprinter (Teletype) terminals. In the 1960s, computer terminals integrated electric keyboards, and in 1985, IBM released the Model M keyboard, establishing the standard ANSI layout and buckling spring tactile feel used to this day.",
      timeline: [
        { year: "1868", event: "Christopher Sholes invents the typewriter, introducing the QWERTY layout." },
        { year: "1985", event: "IBM releases the Model M, establishing the modern key layout." }
      ],
      breakthroughs: [
        "Mechanical Switches: Provide tactile feedback and high durability.",
        "Key Rollover (NKRO): Allowed simultaneous key presses without signal blocking."
      ],
      oldVsNew: "Legacy typewriters had physical arms that jammed. Modern keyboards use individual mechanical, membrane, or optical sensors with per-key RGB backlighting and wireless Bluetooth communication.",
      types: [
        {
          name: "Mechanical Keyboard",
          desc: "Houses individual physical switches with metal springs under each keycap.",
          pros: ["Tactile feedback", "Extremely durable", "Hotswappable switches"],
          cons: ["Loud clicking noise", "Heavier and more expensive"],
          users: ["Writers", "Gamers", "Developers"],
          apps: ["Long typing sessions", "Coding"]
        }
      ],
      architecture: {
        description: "A keyboard mounts keycaps, mechanical switches, stabilisers, metal switch plates, and a microcontroller board (MCU) on a layered PCB layout.",
        hotspots: [
          { x: 30, y: 30, title: "Keycap", desc: "Molded plastic cap printed with the letter or function." },
          { x: 50, y: 50, title: "Mechanical Switch", desc: "Individually spring-loaded housing closing contacts." }
        ]
      },
      componentsDetail: [
        { name: "Key Switch", purpose: "Close circuit loops", working: "A plastic stem depresses a metal leaf spring to establish contact and send a scan code.", importance: "Determines actuation force and tactility." }
      ],
      externalComponents: [
        { name: "Keycaps", purpose: "Provide finger touch pads", desc: "Removable plastic caps printed with symbols (ABS or PBT plastic)." }
      ],
      workingPrinciple: "A computer keyboard operates using a matrix grid of switch nodes. Under each keycap lies an electrical switch. When a key is depressed, it bridges a column and row wire loop on the keyboard controller's PCB grid. The keyboard microcontroller sweeps this grid thousands of times per second. Upon detecting a bridged connection, it generates a unique binary scan code (Make/Break codes) and transmits it to the operating system, which maps it to characters or commands.",
      workingSteps: [
        { title: "Grid Sweep", desc: "The keyboard microcontroller continuously scans the switch grid matrix." },
        { title: "Actuation", desc: "User depresses a keycap, bridging a circuit row and column." },
        { title: "Scan Code Generation", desc: "The controller identifies the node coordinates and translates them into a scan code." },
        { title: "Host Signal", desc: "Scan code is sent via USB or wireless to the OS interface driver." }
      ],
      specs: {
        "Layout": "QWERTY, AZERTY, Dvorak, Colemak",
        "Switch Type": "Mechanical (Linear/Tactile/Clicky), Membrane, Optical",
        "Interface": "USB Type-A, USB Type-C, Bluetooth LE",
        "Key Rollover": "N-Key Rollover (NKRO) or 6-Key Rollover (6KRO)",
        "Backlighting": "Single-color LED or Per-key RGB",
        "Wireless Technology": "2.4GHz RF, Bluetooth 5.0 LE"
      },
      specExplanation: "Mechanical switches use physical springs and contacts, categorized as linear (smooth), tactile (bumpy), or clicky (audible). Key Rollover (NKRO) defines how many simultaneous key actuations the keyboard can register without dropping signals (ghosting).",
      applications: [
        "Office Work & Data Entry: High-speed typing and database inputs.",
        "Software Engineering: Code construction requiring fast keyboard shortcuts.",
        "PC Gaming: Direct key mapping for rapid character movement controls."
      ],
      advantages: [
        "Extremely fast and accurate alphanumeric entry.",
        "Highly tactile switch response reduces typos and typing fatigue.",
        "Modular keycaps and hotswap switches allow deep custom layouts."
      ],
      disadvantages: [
        "Can cause repetitive strain injuries (RSI) if used without wrist rests.",
        "Mechanical variants generate significant clicking noise.",
        "Vulnerable to liquid spills which short-circuit matrix traces."
      ],
      misconceptions: [
        { myth: "All mechanical keyboards are loud.", explanation: "Only clicky switches (like Blue switches) generate noise. Linear and silent switches (like Red or Brown with dampeners) are quiet and office-appropriate." }
      ],
      decisionTree: {
        question: "What switch feel do you prefer?",
        options: {
          "Quiet and Smooth": "Choose Linear mechanical switches (Red switches).",
          "Tactile and Auditory": "Choose Tactile/Clicky switches (Brown or Blue switches)."
        }
      },
      buyingGuide: {
        budgetGuide: "$15-$40: membrane keyboards. $50-$150: hot-swappable mechanical keyboards with RGB backlighting.",
        scenarios: [
          { use: "Coding", recommendation: "Hot-swappable tactile mechanical keyboard (Brown switches) with PBT keycaps." }
        ],
        checklist: ["Determine preferred form factor (100% full-size vs 80% TKL vs 60% compact).", "Check switch actuation type (silent vs loud clicky)."],
        avoidMistakes: [
          "Buying a non-backlit keyboard for dark workstation rooms."
        ],
        expertAdvice: "Look for hotswappable sockets. They allow you to pull out and replace broken switches in seconds without soldering, multiplying the keyboard's lifetime."
      },
      maintenanceDetail: {
        cleaning: "Remove keycaps with a puller, blow out crumbs using compressed air, and wipe the plate with isopropyl alcohol.",
        lifespan: "Membrane models last 2-5 years; mechanical switches last 50-100 million clicks (10+ years)."
      },
      troubleshootingSteps: [
        { issue: "Key Double-Types or Skips", symptoms: "Pressing 'E' once registers 'EE' or fails to register at all.", steps: ["Remove keycap and blow compressed air into the switch housing.", "For hotswappable models, swap the faulty switch with a working one."] }
      ],
      faq: [
        { q: "What is mechanical keyboard hotswap?", a: "A design feature allowing switches to be pulled out and swapped without soldering." },
        { q: "What is ghosting?", a: "A keyboard limitation where pressing multiple keys simultaneously prevents some keys from registering." }
      ],
      relatedDevices: ["mouse", "monitor", "usb_flash"],
      images: {
        overview: [{ url: 'images/keyboard.jpg', caption: 'Mechanical Keyboard Layout', description: 'Clean top view of a mechanical keyboard on solid background.', featured: true, order: 0 }]
      }
    },
    {
      id: "printer",
      model3d: "3d/printer-_low_poly.glb",
      name: "The Printer",
      category: "output",
      tagline: "Generates physical, hard-copy representations of digital documents and images on paper media.",
      definition: "An output peripheral device that translates digital raster or vector document layouts into physical markings on paper through toner fusion or ink droplets.",
      purpose: "To produce tangible hard copies of electronic text, contracts, photos, and graphical layouts.",
      importance: "The primary tool for archiving legal documents, printing physical blueprints, generating labels, and producing hardcopy reports.",
      quickFacts: {
        "Printing Technology": "Laser (toner) or Inkjet (ink)",
        "Standard Resolution": "1200 x 1200 DPI",
        "Print Speeds": "15 to 40+ Pages Per Minute (PPM)"
      },
      interestingFacts: "Xerox developed the first laser printer in 1969 by modifying a standard office copier. The inventor, Gary Starkweather, was initially fired for working on it, but the project went on to generate billions.",
      realWorldExamples: "Law firms printing contracts with high-speed monochrome laser printers, and graphic studios printing posters using 8-ink wide-format photo printers.",
      history: "Evolved from high-speed impact line printers used in mainframe hubs. Xerox developed the first laser printer in 1969, which fused toner powder using electrostatic charges. In 1984, HP launched the LaserJet, bringing quiet, high-resolution desktop printing to businesses worldwide.",
      timeline: [
        { year: "1969", event: "Gary Starkweather invents laser printing at Xerox PARC." },
        { year: "1984", event: "HP introduces the LaserJet, establishing desktop printing standards." }
      ],
      breakthroughs: [
        "Laser Xerography: Fuses dry toner using heat and static charge at high speeds.",
        "Piezoelectric Inkjet: Uses electrical current to squeeze precise ink droplets through microscopic nozzles."
      ],
      oldVsNew: "Legacy matrix printers hammered carbon ribbons noisily. Modern laser printers silent-melt micro-toner plastic powder using precise light beams at up to 50 PPM.",
      types: [
        {
          name: "Laser Printer",
          desc: "Uses an electrostatic laser beam to draw images on a drum, attracting dry toner powder which is then melted onto paper by heated rollers.",
          pros: ["Ultra-fast print speeds", "Lowest cost per page", "Text does not smudge"],
          cons: ["High initial machine cost", "Poor color photo blending"],
          users: ["Offices", "Schools"],
          apps: ["High-volume document text printing"]
        },
        {
          name: "Inkjet Printer",
          desc: "Sprays microscopic droplets of liquid ink from tiny nozzles directly onto paper.",
          pros: ["Superb color photo transitions", "Cheap upfront cost"],
          cons: ["Expensive replacement cartridges", "Ink smudges if wet", "Nozzles clog if unused"],
          users: ["Photographers", "Home users"],
          apps: ["Photo printing", "Color brochures"]
        }
      ],
      architecture: {
        description: "Contains paper trays, feed rollers, laser exposure assembly, toner hopper, electrostatic drum, fuser assembly, and CPU board.",
        hotspots: [
          { x: 40, y: 40, title: "Electrostatic Drum", desc: "Receives laser graphics and attracts toner powder." },
          { x: 60, y: 70, title: "Fuser Unit", desc: "Heats and melts toner powder directly into paper fibers." }
        ]
      },
      componentsDetail: [
        { name: "Laser Assembly / Print Head", purpose: "Transfer images", working: "Laser selectively discharges static electricity on a rotating drum to attract toner; inkjet uses thermal or piezo charges to spray ink.", importance: "Determines the printer's resolution and sharpness." }
      ],
      externalComponents: [
        { name: "Fuser Assembly", purpose: "Melt toner onto paper", desc: "Heated rollers that squeeze and melt dry toner powder into paper fibers." }
      ],
      workingPrinciple: "Laser printers operate via electrostatic xerography. The printing process starts when the PC sends a page layout file (often PDF or PostScript) to the printer. An internal drum is charged with static electricity. A laser diode sweeps across the drum, discharging charge on areas where text will appear. The drum passes a hopper of toner powder, which clings to the discharged sections. The toner is transferred to paper, which passes through heated fuser rollers at ~200°C, melting and pressing the toner powder permanently into the paper fibers.",
      workingSteps: [
        { title: "Raster Image Process", desc: "Printer processor translates document vector graphics into a high-res bitmap." },
        { title: "Drum Charging", desc: "A primary corona wire applies a uniform negative static charge to the drum." },
        { title: "Laser Exposure", desc: "A laser sweeps the drum, discharging negative charge to map text areas." },
        { title: "Toner Fusing", desc: "Paper picks up attracted toner, passing through fuser rollers that melt it into the fibers." }
      ],
      specs: {
        "Printing Technology": "Laser (Monochrome/Color), Inkjet, Thermal",
        "Resolution (DPI)": "600 x 600 to 4800 x 1200 DPI",
        "Print Speed (PPM)": "15 to 45 Pages Per Minute (PPM)",
        "Duplex Printing": "Automatic double-sided or Manual duplexing",
        "Paper Size Support": "Letter, Legal, A4, Envelopes, Cardstock",
        "Connectivity": "USB, Ethernet (RJ-45), Wi-Fi, Wi-Fi Direct"
      },
      specExplanation: "DPI (Dots Per Inch) determines output sharpness—higher values yield crisper text and detailed photos. Print Speed (PPM) defines how many standard pages are printed per minute. Duplex printing enables automatic double-sided printing, saving paper.",
      applications: [
        "Office Document Archiving: Legal contracts, invoices, and letterheads.",
        "Photo and Graphic Reproduction: Color-rich catalog sheets and glossy photos.",
        "Packaging Labels & Barcodes: Industrial thermal labeling and tracking codes."
      ],
      advantages: [
        "Provides high-contrast physical records.",
        "Laser models print massive volume at low cost.",
        "All-in-one models support scanning and copying."
      ],
      disadvantages: [
        "High running cost due to proprietary ink/toner cartridges.",
        "Inkjet print heads clog if left unused for weeks.",
        "Moving mechanical rollers are prone to paper jams."
      ],
      misconceptions: [
        { myth: "Inkjet printers are cheaper than laser printers.", explanation: "While inkjet machines cost less upfront, their liquid ink cartridges have high markup, leading to a much higher cost per page ($0.15 vs $0.02 for laser). Laser printing is far cheaper in the long run." }
      ],
      decisionTree: {
        question: "What do you print most?",
        options: {
          "Text Documents": "Choose a monochrome laser printer (lowest running cost).",
          "Color Photos": "Choose a high-end photo inkjet printer."
        }
      },
      buyingGuide: {
        budgetGuide: "$50-$100: home inkjet. $120-$300: monochrome laser or ink-tank printers.",
        scenarios: [
          { use: "Home Office", recommendation: "Wireless monochrome laser printer with auto-duplex." }
        ],
        checklist: ["Compare replacement cartridge costs (cost per page).", "Verify table spacing for bulky flatbed assemblies."],
        avoidMistakes: [
          "Buying a cheap inkjet printer for text-only document printing."
        ],
        expertAdvice: "If you print infrequently, avoid inkjet printers. Liquid ink dries up and clogs printhead nozzles, whereas laser toner is dry plastic powder that never dries out."
      },
      maintenanceDetail: {
        cleaning: "Use a dry microfiber cloth to wipe toner dust inside the chassis. Run self-cleaning printhead alignment cycles on inkjet models.",
        lifespan: "Typically 3 to 6 years depending on monthly duty cycles."
      },
      troubleshootingSteps: [
        { issue: "Paper Jam", symptoms: "Printer stops printing, displaying a paper jam alert.", steps: ["Open the access doors and locate the jammed sheet.", "Gently pull the paper in the direction of the paper path to avoid tearing.", "Verify paper guide brackets are set correctly in the tray."] }
      ],
      faq: [
        { q: "What is an ink-tank printer?", a: "A type of inkjet printer that uses large refillable bottles instead of cartridges, reducing ink costs." },
        { q: "Monochrome vs Color?", a: "Monochrome prints only in black toner/ink, ideal for text-heavy documents." }
      ],
      relatedDevices: ["monitor", "external_ssd", "network_adapter"],
      images: {
        overview: [{ url: 'images/printer.jpg', caption: 'Office Document Laser Printer', description: 'Clean view of a modern office laser printer.', featured: true, order: 0 }]
      }
    },
    {
      id: "joystick",
      model3d: "3d/joystick.glb",
      name: "The Flight Joystick",
      category: "input",
      tagline: "A hand-held stick rotating on a pivot to send multi-axis angular coordinates to a computer.",
      definition: "An input device consisting of a physical lever that pivots on a base, translating angular displacement along the X, Y, and Z axes into digital input control signals.",
      purpose: "To provide high-fidelity coordinate control for flight simulators, industrial cranes, and specialized gaming applications.",
      importance: "The primary control system for aviation simulation, remote military drones, CAD panning, and wheelchair navigation.",
      quickFacts: {
        "Axis Count": "3 (Pitch, Roll, Yaw)",
        "Button Count": "10 to 20+ programmable triggers",
        "Sensor Technology": "Hall Effect Magnetic Sensors"
      },
      interestingFacts: "The first mechanical joysticks were columns used to control early aircraft in 1908. The name 'joystick' is believed to originate from the pure 'joy' of early flight pilots controlling their aeroplanes.",
      realWorldExamples: "Military UAV operators piloting reconnaissance drones using dual joystick columns, and industrial crane operators hoisting steel beams.",
      history: "Invented as aviation controls for early aircraft in the 1900s. NASA adapted joysticks for spacecraft controls during the Apollo missions. In the 1980s, computer joysticks became standard peripherals for simulation gaming, transitioning from analog potentiometers to high-precision Hall Effect magnetic sensors.",
      timeline: [
        { year: "1908", event: "Louis Bleriot invents the joystick control column for early aircraft." },
        { year: "1969", event: "Apollo Lunar Module uses hand joysticks for spatial spacecraft navigation." }
      ],
      breakthroughs: [
        "Hall Effect Sensors: Replaced physical contact wipers with magnets, eliminating mechanical wear.",
        "Force Feedback (Haptic): Actuators push back against the lever, simulating aerodynamic wind forces."
      ],
      oldVsNew: "Legacy joysticks used carbon wipers that wore down and drifted. Modern flight sticks use contactless magnetic sensors, dual throttle levers, and haptic force feedback motors.",
      types: [
        {
          name: "Flight Simulator Stick",
          desc: "Simulates flight columns, with specialized triggers, hat switches, and throttle wheels.",
          pros: ["Immense immersion for flight simulators", "High precision"],
          cons: ["Bulky desk space", "Expensive specialized hardware"],
          users: ["Flight simulation enthusiasts", "Drone pilots"],
          apps: ["Flight simulators", "Drone training"]
        }
      ],
      architecture: {
        description: "Consists of a pivoting lever shaft, spring centering tension assembly, Hall Effect magnetic sensors, PCB encoder, and trigger microswitches.",
        hotspots: [
          { x: 50, y: 30, title: "POV Hat Switch", desc: "Multi-directional switch on stick tip for quick camera panning." },
          { x: 50, y: 80, title: "Magnetic Sensors", desc: "Contactless sensors at the base measuring lever tilt angles." }
        ]
      },
      componentsDetail: [
        { name: "Hall Effect Sensor", purpose: "Measure angular displacement", working: "Uses magnets and electrical sensors to measure magnetic field changes as the stick tilts.", importance: "Eliminates deadzones and physical sensor wear." }
      ],
      externalComponents: [
        { name: "Hat Switch", purpose: "Directional view control", desc: "A multi-directional thumb switch located on top of the stick handle." }
      ],
      workingPrinciple: "A flight joystick tracks lever tilt angles using magnetic sensors. As the user tilts the stick, tiny magnets attached to the pivot shaft move closer or further from Hall Effect semiconductor sensors. The sensors detect changes in the magnetic field strength, converting this into analog voltage variations. An onboard analog-to-digital converter (ADC) translates these voltages into raw numerical values for the X (pitch) and Y (roll) axes. A twist axis (yaw) is measured similarly. The controller packages these coordinate inputs alongside button click states and transmits them to the system over USB.",
      workingSteps: [
        { title: "Lever Tilt", desc: "The user tilts the mechanical stick lever along the X or Y axis." },
        { title: "Magnetic Shift", desc: "Internal magnets rotate, altering the magnetic field near Hall Effect sensors." },
        { title: "Signal Conversion", desc: "The microchip ADC converts analog voltage shifts into digital coordinates." },
        { title: "Host Report", desc: "The controller sends USB reports with coordinates to game drivers." }
      ],
      specs: {
        "Axis Count": "2 to 4 axes (Pitch, Roll, Yaw, Throttle)",
        "Button Count": "8 to 24+ physical buttons",
        "Interface": "USB Type-A, USB Type-C",
        "Throttle Control": "Integrated slider wheel or Separated HOTAS throttle lever",
        "Hat Switch": "4-way or 8-way directional switch",
        "Force Feedback": "Motor-driven mechanical haptic feedback"
      },
      specExplanation: "Axis count defines degrees of freedom: Pitch (up/down), Roll (left/right), Yaw (twist axis), and Throttle (speed). Hall Effect sensors use contactless magnets, providing infinite lifespan and preventing the stick-drift common in analog potentiometers.",
      applications: [
        "Aviation Flight Simulation: Training student pilots in cockpit operations.",
        "Drone & UAV Flight Control: Steering drones with remote radio transmitters.",
        "Industrial Crane Operations: Controlling heavy hoisting machinery at construction zones."
      ],
      advantages: [
        "Offers highly realistic flight control feedback.",
        "Hall Effect sensors provide zero-drift precision.",
        "Ergonomic layouts enable multi-button mappings."
      ],
      disadvantages: [
        "Requires significant desk space and dedicated mounting.",
        "Very high cost for premium HOTAS configurations.",
        "Limited to simulation gaming and niche industrial control systems."
      ],
      misconceptions: [
        { myth: "All joysticks wear out and drift over time.", explanation: "Legacy joysticks used carbon potentiometers that degraded due to physical friction. Modern joysticks with Hall Effect magnetic sensors are contactless, meaning they never wear down and maintain zero-drift." }
      ],
      decisionTree: {
        question: "What is your budget and simulation depth?",
        options: {
          "Casual Simulating": "Select a single entry-level stick with integrated throttle slider.",
          "Hardcore Enthusiast": "Choose a dual-unit HOTAS (Hands On Throttle And Stick) setup."
        }
      },
      buyingGuide: {
        budgetGuide: "$30-$70: entry sticks with basic sliders. $150+: complete HOTAS and metal throttle columns.",
        scenarios: [
          { use: "Flight Sim", recommendation: "HOTAS flight stick with dual-throttle quadrant." }
        ],
        checklist: ["Confirm if Hall Effect sensors are used.", "Verify table clamp compatibility."],
        avoidMistakes: [
          "Buying a joystick for standard platformer or first-person shooter games."
        ],
        expertAdvice: "Always check the sensor technology. Avoid potentiometers; buy joysticks that advertise 'Hall Effect Sensors' to prevent stick drift."
      },
      maintenanceDetail: {
        cleaning: "Wipe down handle grips using a cloth dampened with mild soapy water. Keep dust out of the pivot ball socket.",
        lifespan: "5 to 10+ years for magnetic models."
      },
      troubleshootingSteps: [
        { issue: "Stick Drift / Off-Center Axis", symptoms: "The plane rolls or pitches slowly even when the joystick is untouched.", steps: ["Open the game settings and set a small deadzone (e.g. 2%).", "Run the Windows USB game controller calibration wizard."] }
      ],
      faq: [
        { q: "What is HOTAS?", a: "Hands On Throttle And Stick. A two-part setup with a flight stick and separate throttle module." },
        { q: "What does stick drift mean?", a: "An error where axis values offset, causing movement input even when resting." }
      ],
      relatedDevices: ["keyboard", "monitor", "projector"],
      images: {
        overview: [{ url: 'images/joystick.jpg', caption: 'Flight Simulator Joystick', description: 'Front view of a flight simulator joystick.', featured: true, order: 0 }]
      }
    },
    {
      id: "monitor",
      model3d: "3d/monitor.glb",
      name: "The Computer Monitor",
      category: "output",
      tagline: "A high-refresh graphical display translating video card signals into real-time physical light pixels.",
      definition: "An output display device that renders raster video outputs from a GPU onto a flat panel array using Liquid Crystal Display (LCD) or Organic Light Emitting Diode (OLED) technology.",
      purpose: "To provide real-time visual output of the computer interface, software execution, and media.",
      importance: "The essential visual gateway for human-computer interaction, coding, design, and general use.",
      quickFacts: {
        "Panel Types": "IPS, VA, TN, OLED",
        "Standard Resolutions": "1080p, 1440p, 4K UHD",
        "Refresh Rates": "60Hz to 360Hz+"
      },
      interestingFacts: "CRT monitors used guns that fired electron beams at phosphor-coated screens. They needed high voltage and generated electromagnetic fields, which is why old screens degaussed with a loud 'thump'.",
      realWorldExamples: "Visual designers working on high-contrast 4K IPS monitors with 99% DCI-P3 color gamut, and programmers using vertical 27-inch setups.",
      history: "Early monitors adapted heavy cathode-ray tube (CRT) television tech. In the late 1990s, thin Active Matrix Liquid Crystal Displays (LCDs) emerged. LEDs replaced CCFL backlights in the 2000s, and high-contrast OLEDs with self-emissive subpixels became the premium standard in the 2020s.",
      timeline: [
        { year: "1970s", event: "Monitors adapt monochrome CRT television tubes." },
        { year: "1997", event: "LCD monitors enter commercial markets, replacing CRTs." },
        { year: "2010s", event: "IPS panels become standard, offering wide viewing angles." }
      ],
      breakthroughs: [
        "In-Plane Switching (IPS): Enabled wide 178-degree viewing angles and accurate color reproduction.",
        "Active-Matrix OLED: Eliminated backlight panels, achieving true blacks and sub-millisecond pixel response times."
      ],
      oldVsNew: "Heavy CRTs flickered, distorted colors at angles, and weighed 50 pounds. Modern flat monitors are under 10 pounds, display 4K resolution, support HDR, and refresh up to 360Hz.",
      types: [
        {
          name: "IPS Monitor",
          desc: "Uses liquid crystals aligned in parallel to achieve rich color reproduction and wide viewing angles.",
          pros: ["Superb color accuracy", "Wide 178-degree viewing angles"],
          cons: ["Lower contrast ratio (~1000:1)", "IPS glow backlight leakage"],
          users: ["Graphic designers", "Programmers"],
          apps: ["Color-accurate editing", "General office work"]
        },
        {
          name: "OLED Monitor",
          desc: "Uses organic carbon light-emitting diodes where each pixel generates its own light, eliminating backlights.",
          pros: ["Infinite contrast ratio", "Sub-millisecond response times", "True deep blacks"],
          cons: ["Risk of permanent burn-in", "More expensive"],
          users: ["Gamers", "Media consumers"],
          apps: ["HDR gaming", "Movie viewing"]
        }
      ],
      architecture: {
        description: "Houses an LCD or OLED cell matrix, LED backlight array (for LCDs), polarization sheets, control PCB board, and connector ports.",
        hotspots: [
          { x: 30, y: 50, title: "Backlight Diffuser", desc: "Spreads LED light uniformly across the LCD cells." },
          { x: 80, y: 50, title: "Control Board", desc: "Processes HDMI/DisplayPort signals to drive subpixels." }
        ]
      },
      componentsDetail: [
        { name: "TFT Panel Controller", purpose: "Coordinate pixel voltages", working: "Regulates electricity to open or close sub-pixel liquid crystal shutters.", importance: "Determines color depth and panel response latency." }
      ],
      externalComponents: [
        { name: "Display Interface Ports", purpose: "Receive display signals", desc: "HDMI, DisplayPort, and USB-C ports connecting the panel to the GPU." }
      ],
      workingPrinciple: "A monitor operates by controlling light output at the pixel level. In an LED-backlit LCD monitor, a blue LED light source passes through diffuser sheets to create uniform white light. This light travels through a vertical polarizing filter, then through thin-film transistor (TFT) liquid crystal subpixels (Red, Green, Blue). An electric charge changes the rotation angle of the liquid crystals, selectively twisting the light path to block it or let it pass through a second horizontal polarizer. This regulates subpixel brightness, mixing light to display millions of colors.",
      workingSteps: [
        { title: "Signal Input", desc: "GPU transmits digital pixel coordinates over HDMI or DisplayPort." },
        { title: "TFT Charging", desc: "The controller charges individual subpixel transistors." },
        { title: "Crystal Twist", desc: "Liquid crystals twist under voltage, blocking or transmitting polarized backlight." },
        { title: "Pixel Color", desc: "Colored filters merge subpixel lights to produce the final screen image." }
      ],
      specs: {
        "Screen Size": "24 to 32+ inches diagonally",
        "Resolution": "1920x1080 (FHD), 2560x1440 (QHD), 3840x2160 (4K)",
        "Refresh Rate": "60Hz to 240Hz+ (frame updates per second)",
        "Panel Type": "IPS (In-Plane Switching), VA, TN, OLED",
        "Brightness": "250 to 1000+ nits (SDR/HDR peaks)",
        "Response Time": "0.03ms (OLED) to 4ms (IPS) GtG",
        "HDR Support": "HDR400, HDR600, or Dolby Vision",
        "Ports": "DisplayPort, HDMI, USB Type-C (DP Alt Mode)"
      },
      specExplanation: "Resolution defines total pixels on the panel, while Refresh Rate (Hz) measures how many frames the monitor draws per second. Panel Type governs colors, contrast, and response times; IPS excels in viewing angles, VA in contrast, and OLED in speed and blacks.",
      applications: [
        "Graphic Design & Video Editing: Professional color-grading and pixel-precise layout modifications.",
        "Software Development: Panning large script databases across vertical displays.",
        "Esports & Gaming: Ultra-smooth visual updates and low input latency.",
        "General Productivity Work: Word processing, document comparisons, and spreadsheet layouts."
      ],
      advantages: [
        "High color accuracy for design workflows.",
        "High-refresh panels reduce eye strain.",
        "USB-C docking ports charge laptops over a single cable."
      ],
      disadvantages: [
        "OLED panels run a risk of screen burn-in.",
        "Requires significant desk footprint.",
        "High-resolution 4K panels require expensive GPUs."
      ],
      misconceptions: [
        { myth: "Response time is the same as input lag.", explanation: "Response time measures how fast a pixel changes color (GtG). Input lag measures total system delay from clicking a button to seeing the cursor move. A monitor can have 1ms response but 15ms input lag." }
      ],
      decisionTree: {
        question: "What is your main display workload?",
        options: {
          "Design & Text": "Choose an IPS panel monitor (sharp text, accurate colors).",
          "Competitive Esports": "Choose a high-refresh rate (144Hz+) OLED monitor."
        }
      },
      buyingGuide: {
        budgetGuide: "$100-$200: standard 1080p/1440p IPS. $300-$600: high-refresh gaming displays. $800+: premium OLED monitors.",
        scenarios: [
          { use: "Workstation", recommendation: "27-inch 1440p IPS monitor with USB-C power delivery." }
        ],
        checklist: ["Confirm display ports match your GPU outputs.", "Check height adjustment ergonomics."],
        avoidMistakes: [
          "Buying a 4K monitor for esports gaming on a budget GPU."
        ],
        expertAdvice: "Buy a monitor with height, tilt, and swivel ergonomics. Aligning the top of the monitor with your eye level prevents neck strain."
      },
      maintenanceDetail: {
        cleaning: "Gently wipe with a dry microfiber cloth. Never spray window cleaner or alcohol directly on the delicate screen panel coatings.",
        lifespan: "Typically 5 to 10 years."
      },
      troubleshootingSteps: [
        { issue: "No Signal Detected", symptoms: "The screen turns black, display power LED glows amber/red, showing 'No Signal'.", steps: ["Unplug and securely reseat both DisplayPort/HDMI cable ends.", "Verify the monitor input source matches the plugged port.", "Test connecting to another laptop to isolate the GPU."] }
      ],
      faq: [
        { q: "What is IPS glow?", a: "A characteristic glow seen in IPS panels when viewing dark scenes in dark rooms, caused by light escaping the polarizers." },
        { q: "What is G-Sync/FreeSync?", a: "Variable Refresh Rate (VRR) tech that syncs screen refresh with the GPU frame output, eliminating screen tearing." }
      ],
      relatedDevices: ["mouse", "keyboard", "projector"],
      images: {
        overview: [{ url: 'images/monitor.jpg', caption: 'Computer IPS Monitor', description: 'Front view of a widescreen computer monitor.', featured: true, order: 0 }]
      }
    },
    {
      id: "speaker",
      model3d: "3d/speakers_low_poly.glb",
      name: "The Computer Speaker",
      category: "output",
      tagline: "Translates analog electrical sound waves into physical audio air pressure waves.",
      definition: "An output audio peripheral that uses electromagnetic coils to drive a physical cone diaphragm, converting electrical signals into sound waves.",
      purpose: "To produce audible sound, warnings, voice communications, and music from the computer system.",
      importance: "Provides necessary auditory indicators for alerts, video editing references, and general media consumption.",
      quickFacts: {
        "Frequency Response": "50Hz - 20,000Hz (Standard audio band)",
        "Configuration": "Active (powered) bookshelf speakers",
        "Connection Interface": "3.5mm AUX, USB Digital, Bluetooth"
      },
      interestingFacts: "The dynamic speaker design used today was patented in 1925. The core principle of pushing a copper wire coil through a magnetic field hasn't changed in over a century.",
      realWorldExamples: "Audio editors monitoring podcast voice tracks on active studio monitors, and office workers listening to webinars via USB desktop speakers.",
      history: "Developed alongside radio and telephone networks in the early 20th century. Computers initially used tiny motherboard piezo buzzers. In the 1990s, active stereo speakers connecting via 3.5mm ports became standard desktop accessories to support multimedia CD-ROM games.",
      timeline: [
        { year: "1925", event: "Edward Kellogg and Chester Rice invent the dynamic moving-coil speaker." },
        { year: "1990s", event: "Active stereo speakers connect to sound cards, bringing multimedia audio to PCs." }
      ],
      breakthroughs: [
        "Active Amplification: Integrating amplification chips inside speaker shells, eliminating separate amps.",
        "USB DAC integration: Processing audio files digitally within the speaker to bypass noisy motherboard circuits."
      ],
      oldVsNew: "Legacy PC speakers had thin, tinny sound and picked up buzzing interference from phone signals. Modern active speakers feature built-in DACs, Bluetooth LE, and wood-cabinet acoustics.",
      types: [
        {
          name: "Active Bookshelf Speaker",
          desc: "Dual speakers where one cabinet houses the amplifier board, receiving line-level signals directly.",
          pros: ["Rich frequency response", "No external amp needed", "Excellent stereo separation"],
          cons: ["Takes up significant desk space", "Requires a separate wall plug"],
          users: ["Content creators", "Music enthusiasts"],
          apps: ["Video editing", "Music listening"]
        }
      ],
      architecture: {
        description: "Mounts active amplifier PCBs, power transformers, cross-over networks, and physical driver cones inside acoustically sealed cabinets.",
        hotspots: [
          { x: 50, y: 40, title: "Tweeter Driver", desc: "Small driver cone reproducing high-frequency sounds." },
          { x: 50, y: 70, title: "Woofer Driver", desc: "Large driver cone reproducing mid-to-low bass tones." }
        ]
      },
      componentsDetail: [
        { name: "Voice Coil & Magnet", purpose: "Create movement", working: "Electrical current passes through a copper coil suspended in a magnetic field, creating physical vibrations.", importance: "Drives the diaphragm cone to produce sound." }
      ],
      externalComponents: [
        { name: "Volume Control Knob", purpose: "Adjust volume", desc: "Physical potentiometer adjusting pre-amplifier gain levels." }
      ],
      workingPrinciple: "A speaker functions by electromagnetic induction. When an audio file plays, the PC's digital-to-analog converter (DAC) translates binary codes into analog voltage fluctuations. These alternating currents travel to the speaker's voice coil, which is a copper wire spool suspended inside a permanent magnet. The electric current creates a shifting magnetic field that interacts with the permanent magnet, rapidly pushing the voice coil back and forth. The coil drives a glued paper or paper-composite cone diaphragm, pushing air molecules to create pressure waves which are interpreted by human ears as sound.",
      workingSteps: [
        { title: "Analog Signal", desc: "DAC translates digital audio into a continuous alternating voltage wave." },
        { title: "Coil Induction", desc: "Voltage fluctuations pass through the copper voice coil, creating shifting magnetic forces." },
        { title: "Cone Vibration", desc: "The electromagnetic force rapidly pushes and pulls the speaker cone diaphragm." },
        { title: "Wave Propagation", desc: "The vibrating cone compresses and expands surrounding air molecules, launching sound waves." }
      ],
      specs: {
        "Frequency Response": "50Hz - 20,000Hz (Bass to Treble)",
        "Power Output": "10W to 100W RMS (Root Mean Square)",
        "Driver Size": "3-inch Woofers / 0.75-inch Dome Tweeters",
        "Connectivity": "3.5mm TRS AUX, USB, Bluetooth, Optical S/PDIF"
      },
      specExplanation: "Frequency Response defines the range of sound pitches the speaker can reproduce (human hearing ranges from 20Hz to 20,000Hz). Power Output (RMS) measures continuous amplifier output power without distortion, indicating loudness capacity.",
      applications: [
        "Webinar & Voice Listening: Listening to online lectures, meetings, and voice logs.",
        "Creative Audio Monitoring: Panning and grading sound in video projects.",
        "General Media Consumption: Playing music, video games, and movies."
      ],
      advantages: [
        "Provides clear, spatial stereo separation.",
        "Easy connection via plug-and-play USB or AUX cables.",
        "Active designs do not require external audio amplifiers."
      ],
      disadvantages: [
        "Requires desktop space alongside the monitor.",
        "Budget models suffer from audio distortion at high volume.",
        "Active amplifiers produce a faint static hiss when idle."
      ],
      misconceptions: [
        { myth: "Higher peak wattage means better sound quality.", explanation: "Manufacturers often advertise Peak Wattage (PMPO), which is a short burst limit. Real volume is measured by continuous RMS Power. Sound quality is determined by cabinet design, DAC chips, and driver materials." }
      ],
      decisionTree: {
        question: "What is your main desk sound priority?",
        options: {
          "Compact and Simple": "Select a single USB-powered soundbar sitting below the monitor.",
          "Rich Audio Quality": "Select a pair of wooden active bookshelf speakers."
        }
      },
      buyingGuide: {
        budgetGuide: "$15-$30: budget USB speakers. $50-$150: active desktop bookshelf speakers.",
        scenarios: [
          { use: "Video Editing Workspace", recommendation: "Active studio monitor speakers with balanced TRS inputs." }
        ],
        checklist: ["Check space dimensions on your desk.", "Confirm connectivity inputs match your PC output ports."],
        avoidMistakes: [
          "Buying heavy passive speakers without checking if you need an external amplifier."
        ],
        expertAdvice: "For maximum clarity, place speakers on dedicated foam pads tilted upward toward your ears. This aligns high-frequency tweeters with your hearing plane, preventing muddy sound."
      },
      maintenanceDetail: {
        cleaning: "Gently wipe speaker grilles using a dry cloth. Avoid touching delicate dome tweeters.",
        lifespan: "Typically 5 to 12+ years since magnets and copper coils decay very slowly."
      },
      troubleshootingSteps: [
        { issue: "Static Hissing or Buzzing", symptoms: "A continuous hum or buzzing sound is heard when the PC is idle.", steps: ["Unplug the 3.5mm AUX jack and check if the hiss stops.", "Move the speaker power cord away from other power bricks to avoid EMI.", "Switch to a USB connection to bypass noisy motherboard audio chips."] }
      ],
      faq: [
        { q: "What does RMS mean?", a: "Root Mean Square. A standardized measurement of continuous speaker amplifier power." },
        { q: "What is a DAC?", a: "Digital to Analog Converter. The microchip translating computer audio files into physical electrical voltages." }
      ],
      relatedDevices: ["sound_system", "monitor", "projector"],
      images: {
        overview: [{ url: 'images/speaker.jpg', caption: 'Desktop Active Speakers', description: 'Pair of bookshelf active speakers.', featured: true, order: 0 }]
      }
    },
    {
      id: "sound_system",
      model3d: "3d/sound_system.glb",
      name: "The Sound System",
      category: "output",
      tagline: "Generates multi-directional surround sound fields using multi-channel speaker layouts.",
      definition: "A multi-speaker audio configuration driven by an AV receiver or active subwoofer, decoding multi-channel audio tracks into spatial surround sound.",
      purpose: "To create an immersive, spatial audio environment for theaters, studio production, and gaming configurations.",
      importance: "Provides physical spatial surround cues, translating coordinate audio channels into sound directions.",
      quickFacts: {
        "Channels": "5.1 Surround (Center, L/R Front, L/R Rear, Subwoofer)",
        "Formats Decoded": "Dolby Digital, DTS, Dolby Atmos",
        "Subwoofer Type": "Active (powered) dedicated low-end box"
      },
      interestingFacts: "The '.1' in a 5.1 sound system represents the Low Frequency Effects (LFE) channel, which only handles sub-bass tones under 120Hz. It has its own dedicated speaker, the subwoofer.",
      realWorldExamples: "Gamers setting up 5.1 surround sound satellites to hear spatial footstep coordinates, and home theaters using Dolby Atmos arrays.",
      history: "Surround sound started in cinemas in the 1940s (e.g. Disney's Fantasia). Dolby Stereo in the 1970s brought matrix surround sound to theaters, and in the 1990s, Dolby Digital 5.1 became the consumer standard for DVD players and premium home theaters.",
      timeline: [
        { year: "1976", event: "Dolby Stereo introduces surround sound track standards to theaters." },
        { year: "1992", event: "Batman Returns launches Dolby Digital 5.1 audio tracks." }
      ],
      breakthroughs: [
        "Dolby Atmos: Object-based audio routing that dynamically positions sound in 3D space.",
        "HDMI eARC: Allowed uncompressed multi-channel audio transmission from TVs to sound systems."
      ],
      oldVsNew: "Legacy stereo systems only had left and right sound. Modern sound systems support 3D spatial mapping, wireless rear satellites, and intense sub-bass subwoofers.",
      types: [
        {
          name: "5.1 Surround Sound System",
          desc: "A layout containing front left, center, front right, rear left, rear right satellite speakers, and a dedicated subwoofer.",
          pros: ["True physical spatial positioning", "Powerful deep sub-bass"],
          cons: ["Requires complex wire routing around rooms", "Bulky footprint"],
          users: ["Gamers", "Home theater enthusiasts"],
          apps: ["Spatial gaming", "Home cinema"]
        }
      ],
      architecture: {
        description: "Mounts an active multi-channel amplifier, Dolby/DTS decoder chip, digital inputs (HDMI, optical), and multi-channel driver outputs.",
        hotspots: [
          { x: 50, y: 70, title: "Active Subwoofer", desc: "Large cabinet housing the system's power amplifier and bass driver." }
        ]
      },
      componentsDetail: [
        { name: "Surround Decoder Chip", purpose: "Process audio channels", working: "Decodes Dolby/DTS bitstreams into discrete analog channels.", importance: "Ensures correct audio routing to each speaker." }
      ],
      externalComponents: [
        { name: "Surround Speakers (Satellites)", purpose: "Generate spatial sound", desc: "Small satellite speakers placed around the room to project audio." }
      ],
      workingPrinciple: "A multi-channel sound system decodes bitstream formats to achieve surround sound. The computer sends an encoded digital stream (such as Dolby Digital) over HDMI or an optical S/PDIF cable. An audio decoder processor splits this stream into separate tracks: Left Front, Center (for dialog), Right Front, Left Rear (for ambient sounds), Right Rear, and the LFE subwoofer channel. A multi-channel amplifier boosts these signals, sending analog currents to the respective speakers. By playing sound coordinates through specific speakers, the system creates a 3D audio field.",
      workingSteps: [
        { title: "Bitstream Input", desc: "The PC outputs an encoded multi-channel digital audio stream." },
        { title: "Channel Decoding", desc: "The decoder splits the stream into discrete channel outputs." },
        { title: "Amplification", desc: "Multi-channel amplifiers boost individual signals." },
        { title: "Acoustic Output", desc: "Speakers play coordinated sounds, creating an immersive surround sound stage." }
      ],
      specs: {
        "Channel Configuration": "2.1 Stereo or 5.1 / 7.1 Surround Sound Channels",
        "Total RMS Power": "100W to 500W+ RMS (Root Mean Square)",
        "Surround Support": "Dolby Digital, DTS, Dolby Atmos",
        "Connectivity": "HDMI ARC/eARC, Optical S/PDIF, 3.5mm analog inputs",
        "Supported Audio Formats": "FLAC, AAC, MP3, WAV, LPCM"
      },
      specExplanation: "Channel Configuration denotes the number of speakers: 5.1 contains 5 satellites and 1 subwoofer. Surround Support (Dolby/DTS) allows decoding of cinema audio tracks for accurate direction cues.",
      applications: [
        "Spatial Gaming Room: Providing surround cues to pinpoint competitive gaming vectors.",
        "Home Cinema Theatre: Re-creating theater-like surround sound immersion.",
        "Audio Production: Mixing multi-channel spatial tracks for video and games."
      ],
      advantages: [
        "Creates a highly immersive 3D surround sound field.",
        "Dedicated subwoofer provides deep, vibrating bass.",
        "Improves gaming awareness through physical rear audio cues."
      ],
      disadvantages: [
        "Requires routing multiple copper speaker wires around the room.",
        "Can cause noise disturbances to neighbors due to low-frequency bass.",
        "High initial machine cost and complex setup requirements."
      ],
      misconceptions: [
        { myth: "Wireless surround speakers do not need power wires.", explanation: "While wireless speakers receive audio signals over radio frequencies, they still require power cords connected to wall outlets to run their internal amplifiers." }
      ],
      decisionTree: {
        question: "What is your spatial audio priority?",
        options: {
          "Full Room Immersion": "Choose a physical 5.1 or 7.1 satellite speaker system.",
          "Simple Setup": "Choose a virtual surround soundbar with wireless subwoofer."
        }
      },
      buyingGuide: {
        budgetGuide: "$80-$150: budget 5.1 PC speaker sets. $200-$500: dedicated home theater soundbars or AV receiver setups.",
        scenarios: [
          { use: "Home Gaming Room", recommendation: "5.1 PC speaker system with optical input." }
        ],
        checklist: ["Confirm your motherboard has an optical S/PDIF out port.", "Check room mounting space for rear satellite speakers."],
        avoidMistakes: [
          "Placing all 5 speakers in a line on the front desk (rear satellites must be placed behind your ears)."
        ],
        expertAdvice: "Place the subwoofer directly on the floor near a wall or corner. This leverages the walls as acoustic boundaries, naturally reinforcing the sub-bass frequencies."
      },
      maintenanceDetail: {
        cleaning: "Dust speaker cabinets using a dry cloth. Ensure receiver ventilation vents remain free of dust.",
        lifespan: "Typically 6 to 15+ years since high-quality speaker cones last a long time."
      },
      troubleshootingSteps: [
        { issue: "No Sound from Rear Satellites", symptoms: "Sound plays fine from front speakers, but rear speakers are silent.", steps: ["Ensure the media file/game has a native 5.1 audio track.", "Verify the Windows audio settings are set to '5.1 Surround' configuration.", "Test speaker wire connections on the back of the subwoofer/receiver."] }
      ],
      faq: [
        { q: "What does eARC stand for?", a: "Enhanced Audio Return Channel. A high-bandwidth HDMI port for sending uncompressed surround sound." },
        { q: "Passive vs Active surround speakers?", a: "Active speakers have built-in amps; passive speakers require speaker wire links from an AV receiver." }
      ],
      relatedDevices: ["speaker", "monitor", "projector"],
      images: {
        overview: [{ url: 'images/sound system.jpg', caption: 'Surround Sound Speakers', description: 'Surround sound speakers and active subwoofer setup.', featured: true, order: 0 }]
      }
    },
    {
      id: "projector",
      model3d: "3d/video_projector.glb",
      name: "The Projector",
      category: "output",
      tagline: "Projects intense light patterns through lenses to render large-scale video output on wall surfaces.",
      definition: "An output device containing an intense light source (lamp, LED, or laser) that projects digital image frames through focus lenses onto screens or walls.",
      purpose: "To display large-format video layouts, presentations, or home cinema displays on large screens.",
      importance: "Provides massive display scales (up to 150+ inches) at a lower cost than equivalent flat panel televisions.",
      quickFacts: {
        "Light Source": "Metal Halide Lamp, LED, or Solid-State Laser",
        "Brightness Standard": "ANSI Lumens scale",
        "Native Output": "Full HD (1080p) or True 4K UHD"
      },
      interestingFacts: "Early projectors in the 1990s used metal halide bulbs that ran so hot they required heavy cooling fans and could explode if the power was cut before cooling down.",
      realWorldExamples: "Classrooms projecting slide presentations using DLP projectors, and home theaters utilizing 4K laser projectors.",
      history: "Evolved from magic lanterns in the 17th century. Digital projectors emerged in the 1990s using LCD panels. In 1996, Texas Instruments introduced Digital Light Processing (DLP), using millions of tiny mirrors to create highly bright, sharp images.",
      timeline: [
        { year: "1990s", event: "Digital LCD projectors enter boardrooms, replacing slide wheels." },
        { year: "1996", event: "DLP technology introduces MEMS micromirrors to projection markets." }
      ],
      breakthroughs: [
        "DLP Technology: Used microscopic mirror chips to reflect light, improving brightness.",
        "Laser Light Engines: Replaced halide bulbs, offering instant startup and 20,000+ hour lifespans."
      ],
      oldVsNew: "Legacy projectors required dark rooms, took 2 minutes to warm up, and had loud fans. Modern laser projectors run cool, start instantly, project in 4K HDR, and can display 100-inch images from 6 inches away.",
      types: [
        {
          name: "DLP Projector",
          desc: "Uses a micro-mirror chip (DMD) and a spinning color wheel to reflect light through lenses.",
          pros: ["High contrast and sharp pixels", "No dust filters needed", "Cheaper than laser"],
          cons: ["Rainbow effect visible to sensitive users", "Mechanical spinning parts"],
          users: ["Teachers", "Home cinema builders"],
          apps: ["Business slides", "Home theater movies"]
        }
      ],
      architecture: {
        description: "Mounts an intense light engine, image microchip, lens array, focus mechanics, and cooling fans inside an enclosure.",
        hotspots: [
          { x: 30, y: 50, title: "Light Engine", desc: "Laser array or LED providing intense projection light." },
          { x: 70, y: 50, title: "Focus Lens", desc: "Glass lens assembly that focuses light onto screen walls." }
        ]
      },
      componentsDetail: [
        { name: "Imaging Chip (DMD/LCD)", purpose: "Create graphic frames", working: "Passes light through LCD cells or reflects it off microscopic mirrors to form images.", importance: "Determines native projection resolution." }
      ],
      externalComponents: [
        { name: "Focus & Zoom Rings", purpose: "Sharpen images", desc: "Physical rings rotating lenses to sharpen projected pixels at various distances." }
      ],
      workingPrinciple: "A projector works by shining intense light through an imaging chip. In a DLP projector, a laser or LED shines light onto a DMD (Digital Micromirror Device) chip, which houses millions of microscopic hinge-mounted mirrors. Each mirror represents a single pixel. A control chip tilts the mirrors towards the projection lens (to create a bright pixel) or away from it (to create a dark pixel) thousands of times per second. Simultaneously, a color wheel or RGB light source colors the light. The resulting patterns travel through focusing lenses to project a color image.",
      workingSteps: [
        { title: "Light Beam", desc: "An intense laser or lamp shines light towards the imaging optics." },
        { title: "Frame Mapping", desc: "The microchip tilts mirrors or opens LCD gates to draw the image frame." },
        { title: "Color Mix", desc: "Light passes through a color wheel or combines RGB LEDs." },
        { title: "Lens Focus", desc: "The image is projected through a focus lens assembly onto a wall screen." }
      ],
      specs: {
        "Brightness (Lumens)": "2000 to 4500 ANSI Lumens",
        "Native Resolution": "1920x1080 (FHD) or 3840x2160 (4K)",
        "Contrast Ratio": "2,000:1 to 1,000,000:1 Dynamic",
        "Projection Technology": "DLP (Digital Light Processing), LCD, LCoS",
        "Throw Ratio": "1.2:1 (Standard) to 0.25:1 (Ultra Short Throw)",
        "Lamp Life": "5,000 Hours (Halogen) to 25,000+ Hours (Laser/LED)"
      },
      specExplanation: "ANSI Lumens define light brightness; higher values prevent images from looking washed out in daylight. Throw Ratio defines the distance needed from the wall (e.g. Ultra Short Throw projects 100-inch images from inches away).",
      applications: [
        "Home Theater Cinema: Projecting large-scale cinema layouts on dedicated projector screens.",
        "School & Boardroom Slides: Displaying slideshow presentations to large groups.",
        "Large Venue Events: Outdoor movie projection and public display boards."
      ],
      advantages: [
        "Displays massive screen scales (100 to 150 inches) easily.",
        "Compact chassis is easier to transport than huge flat screen TVs.",
        "Reflected light causes less eye fatigue than direct LED backlights."
      ],
      disadvantages: [
        "Ambient daylight washes out images, requiring dark rooms.",
        "Projector cooling fans generate constant noise.",
        "Halogen lamp bulbs lose brightness and must be replaced every few thousand hours."
      ],
      misconceptions: [
        { myth: "Projectors can project clear images on any wall color.", explanation: "Projectors reflect light. Colored or dark walls distort color balance and ruin contrast. For the best quality, always use a matte-white projector screen or specialized screen paint." }
      ],
      decisionTree: {
        question: "How close will the projector sit to the wall?",
        options: {
          "Inches Away": "Choose an Ultra Short Throw (UST) laser projector.",
          "Across the Room": "Choose a standard throw DLP or LCD projector."
        }
      },
      buyingGuide: {
        budgetGuide: "$60-$150: budget portable mini projectors. $300-$800: full HD home theater projectors. $1200+: 4K laser or ultra short throw models.",
        scenarios: [
          { use: "Classroom Slides", recommendation: "3500 ANSI Lumens DLP projector with HDMI connectivity." }
        ],
        checklist: ["Check native resolution (avoid 'supported resolution' labels).", "Verify ANSI Lumens rating is sufficient for ambient lighting."],
        avoidMistakes: [
          "Buying a low-brightness projector for daytime rooms with open windows."
        ],
        expertAdvice: "Always match projector brightness to your room. Dark home theaters only need 1500-2000 Lumens, but offices with open windows require at least 3500 Lumens to remain visible."
      },
      maintenanceDetail: {
        cleaning: "Clean the glass projection lens using lens paper and specialized cleaner fluid. Keep air intake dust filters clean to prevent overheating.",
        lifespan: "Typically 3 to 10+ years depending on lamp/laser light source tech."
      },
      troubleshootingSteps: [
        { issue: "Washed-Out / Dim Image", symptoms: "Colors look faded, white parts look grey, and text is hard to read.", steps: ["Draw curtains or turn off ceiling lights to darken the room.", "Increase the brightness/eco mode setting in the menu.", "On halogen models, check lamp usage hours (bulbs lose brightness as they age)."] }
      ],
      faq: [
        { q: "What does ANSI Lumens mean?", a: "American National Standards Institute. A standardized measure of total light output from a projector." },
        { q: "DLP vs LCD?", a: "DLP offers better contrast and pixel speed; LCD offers richer color saturation and zero rainbow effects." }
      ],
      relatedDevices: ["monitor", "speaker", "sound_system"],
      images: {
        overview: [{ url: 'images/projector.jpg', caption: 'Home Theater Projector', description: 'Digital projector projecting light in action.', featured: true, order: 0 }]
      }
    },
    {
      id: "external_ssd",
      model3d: "3d/ssd_solid-state_drive.glb",
      name: "The External SSD",
      category: "storage",
      tagline: "A portable solid-state storage device transferring massive file directories over high-speed USB channels.",
      definition: "A high-performance portable storage device mounting NAND flash memory modules and an interface bridge chip inside a rugged casing, using USB-C.",
      purpose: "To provide high-speed, portable, and shock-resistant storage backup and file transfer capabilities.",
      importance: "Allows professionals to edit raw 4K video directly off the drive, bypassing slow mechanical disks.",
      quickFacts: {
        "Memory Type": "Non-Volatile NAND Flash cells",
        "Transfer Interface": "USB 3.2 Gen 2 / Thunderbolt 3/4",
        "Form Factor": "Pocket-sized rugged aluminum enclosure"
      },
      interestingFacts: "Unlike mechanical external hard drives, external SSDs can survive drops of up to 10 feet because they contain zero spinning platters or physical read heads to scratch.",
      realWorldExamples: "Videographers recording 4K ProRes video files directly from camera rigs onto attached external SSDs.",
      history: "Developed as flash memory manufacturing costs dropped in the 2010s. Early portable drives were mechanical external HDDs. As NVMe SSDs became standard in PCs, manufacturers designed bridge chips (SATA/NVMe to USB), enabling portable SSDs to reach speeds exceeding 1000 MB/s.",
      timeline: [
        { year: "2010s", event: "Portable external SSDs enter consumer markets, initially using slow SATA interfaces." },
        { year: "2018", event: "USB 3.2 Gen 2 NVMe external SSDs reach transfer speeds of 1050 MB/s." }
      ],
      breakthroughs: [
        "NAND Flash Miniaturization: Allowed terabytes of data to fit on chips smaller than postage stamps.",
        "USB Type-C Bus Standards: Provided enough bandwidth and power to run external NVMe SSDs without external power bricks."
      ],
      oldVsNew: "Legacy external HDDs read at 100MB/s, were heavy, and broke easily if dropped. Modern external SSDs transfer files at 2000MB/s, weigh under 2 ounces, and are shock-resistant.",
      types: [
        {
          name: "Portable NVMe SSD",
          desc: "A pocket-sized drive mounting an M.2 NVMe SSD inside a protective shell with a USB bridge chip.",
          pros: ["Extreme transfer speeds (1000MB/s+)", "Highly shock-resistant", "Small pocket size"],
          cons: ["Higher cost per gigabyte", "Can get hot under constant write loads"],
          users: ["Video editors", "Backup creators"],
          apps: ["Direct video editing", "Fast data transfers"]
        }
      ],
      architecture: {
        description: "Mounts NAND flash memory chips, SSD flash controller, DRAM cache (on premium models), and a SATA/NVMe-to-USB bridge controller on a compact PCB.",
        hotspots: [
          { x: 30, y: 50, title: "NAND Flash Memory", desc: "Non-volatile semiconductor storage chips." },
          { x: 80, y: 50, title: "Bridge Chip", desc: "Translates NVMe data commands into USB protocols." }
        ]
      },
      componentsDetail: [
        { name: "NAND Flash Chips", purpose: "Store non-volatile data", working: "Uses floating gate transistors to store charge state registers even without power.", importance: "Holds the actual file data." }
      ],
      externalComponents: [
        { name: "USB-C Interface Port", purpose: "Connect data cables", desc: "Reversible high-speed connector socket." }
      ],
      workingPrinciple: "An external SSD transfers files using bridge controllers. When the PC requests a file save, the OS driver sends blocks of data over the USB controller. An internal bridge chip (such as ASMedia or JMicron) intercepts these USB packets and translates them into NVMe PCIe commands. The flash memory controller receives these commands and writes the binary data blocks directly into the floating-gate or charge-trap transistors of the NAND flash memory cells, organizing block allocations via flash translation layer (FTL) tables.",
      workingSteps: [
        { title: "OS File Request", desc: "The operating system pushes file data over the USB bus controller." },
        { title: "Command Translation", desc: "An internal bridge chip translates USB commands into NVMe PCIe protocols." },
        { title: "Flash Write", desc: "The controller writes charges into NAND cell transistors, organizing blocks." },
        { title: "Failsafe Cache", desc: "Data passes through a quick write cache to optimize transfer speeds." }
      ],
      specs: {
        "Capacity": "500GB, 1TB, 2TB, 4TB",
        "Interface": "PCIe NVMe Internal / USB 3.2 Gen 2x2 External",
        "Read Speed": "Up to 2000 MB/s",
        "Write Speed": "Up to 2000 MB/s",
        "USB Standard": "USB 3.2 Gen 2, USB 4, Thunderbolt 4",
        "Form Factor": "1.8-inch portable pocket size"
      },
      specExplanation: "Read and Write Speeds define the maximum transfer rates (e.g. 1000MB/s means a 10GB file transfers in 10 seconds). Interface USB standards (like USB 3.2 Gen 2) determine the maximum speed limits of the host connection.",
      applications: [
        "On-the-Go Video Editing: Editing 4K video files directly from the external drive.",
        "System Backup Storage: Backing up operating system directories using fast utilities.",
        "Portable Game Storage: Expanding game consoles or laptop drives with minimal load latency."
      ],
      advantages: [
        "Extremely fast file transfer speeds (up to 20x faster than HDDs).",
        "No moving parts provides silent, shock-proof storage.",
        "Draws very little power, running directly off USB ports."
      ],
      disadvantages: [
        "Significant cost premium over mechanical hard drives.",
        "Subject to write cycle degradation (cells eventually wear out).",
        "Improper disconnects without ejecting can cause index partition corruption."
      ],
      misconceptions: [
        { myth: "External SSDs perform at their maximum speed on any USB port.", explanation: "SSD speed is limited by the host USB port. A 2000MB/s USB 3.2 Gen 2x2 SSD will run at only 40MB/s if plugged into a legacy USB 2.0 port." }
      ],
      decisionTree: {
        question: "What is your primary portable drive requirement?",
        options: {
          "Extreme Speed & Editing": "Choose an NVMe-based external SSD with USB 3.2 Gen 2 connection.",
          "Cheap Bulk Archiving": "Choose a mechanical external HDD (more gigabytes per dollar)."
        }
      },
      buyingGuide: {
        budgetGuide: "$60-$90: 1TB external SSD. $120-$180: 2TB rugged external SSDs with high write speeds.",
        scenarios: [
          { use: "Direct Video Editing", recommendation: "2TB NVMe external SSD supporting USB 3.2 Gen 2 (10Gbps)." }
        ],
        checklist: ["Verify the host device has a USB-C port.", "Check if the drive casing is IP65 water/dust resistant."],
        avoidMistakes: [
          "Buying an external SSD without checking if the package includes a high-speed C-to-C cable."
        ],
        expertAdvice: "For maximum speed, plug the drive directly into the motherboard's Thunderbolt or USB 10Gbps port. Avoid cheap USB hubs, which throttle bandwidth down to USB 2.0 speeds."
      },
      maintenanceDetail: {
        cleaning: "Keep the USB-C socket clear of pocket lint. Blow out ports using compressed air.",
        lifespan: "Typically 5 to 10+ years depending on write volume (TBW rating)."
      },
      troubleshootingSteps: [
        { issue: "Drive Not Detected", symptoms: "Plugging the SSD does not display a volume letter, and the drive is silent.", steps: ["Unplug and plug directly into the motherboard, bypassing hubs.", "Test using a different high-speed USB-C cable.", "Check Disk Management in Windows to see if the partition lacks a drive letter."] }
      ],
      faq: [
        { q: "What is NVMe?", a: "Non-Volatile Memory Express. A high-speed storage communication protocol." },
        { q: "Do external SSDs wear out?", a: "Yes. NAND flash cells degrade after write cycles, measured by the TBW rating, though this takes many years." }
      ],
      relatedDevices: ["usb_flash", "monitor", "printer"],
      images: {
        overview: [{ url: 'images/external ssd.jpeg', caption: 'Portable External SSD', description: 'Pocket external solid state drive.', featured: true, order: 0 }]
      }
    },
    {
      id: "network_adapter",
      name: "The Network Adapter",
      category: "networking",
      tagline: "Translates digital CPU data blocks into physical network wire voltages or radio frequency waves.",
      definition: "An active expansion card or integrated controller chip (NIC) that translates system data frames into physical ethernet signals or radio frequencies.",
      purpose: "To provide host computers with a physical or wireless link to local networks and the internet.",
      importance: "The hardware bridge that enables computers to communicate with routers, printers, and external servers.",
      quickFacts: {
        "Adapter Type": "PCIe Card, USB Dongle, or Integrated Motherboard Chip",
        "Connection Type": "RJ-45 Ethernet (wired) or Wi-Fi radio (wireless)",
        "Transfer Rate": "1 Gbps to 10 Gbps (wired) / Wi-Fi 6/7 speeds"
      },
      interestingFacts: "Early network adapters (NICs) in the 1980s connected via thick coaxial cables, sharing network wires similarly to cable television lines.",
      realWorldExamples: "Gamers installing 10Gbps Ethernet PCIe cards for fast local network file transfers, and laptops using M.2 Wi-Fi cards for wireless access.",
      history: "Developed in the 1970s alongside Ethernet. Early NICs were large expansion cards. Motherboards began integrating Ethernet chips in the late 1990s, and wireless M.2 adapters became standard in laptops in the 2000s.",
      timeline: [
        { year: "1973", event: "Bob Metcalfe invents Ethernet at Xerox PARC." },
        { year: "2000s", event: "Motherboards begin integrating Gigabit Ethernet controllers." }
      ],
      breakthroughs: [
        "Integrated MAC/PHY: Combined media access control and physical link transceivers on single chips.",
        "M.2 Wi-Fi Standards: Shrunk wireless radio boards to fit inside ultra-thin laptops."
      ],
      oldVsNew: "Legacy network cards had slow 10Mbps speeds and occupied huge slots on motherboards. Modern adapters are integrated directly on motherboards, support 2.5Gbps speeds, and handle wireless Wi-Fi connections via tiny M.2 cards.",
      types: [
        {
          name: "Wired Ethernet Adapter (NIC)",
          desc: "Adapter housing an RJ-45 jack, sending data over copper twisted-pair cables.",
          pros: ["Zero wireless interference", "Lowest latency", "Maximum speed reliability"],
          cons: ["Requires physical cabling", "Not portable for mobile devices"],
          users: ["Desktop PC gamers", "Server administrators"],
          apps: ["Competitive gaming", "Server racks"]
        },
        {
          name: "Wireless Wi-Fi Adapter",
          desc: "Adapter utilizing antennas to connect to networks over radio frequencies.",
          pros: ["No cabling needed", "Easy setup"],
          cons: ["Prone to radio interference", "Higher latency than wired"],
          users: ["Laptop users", "Home PC owners"],
          apps: ["Wireless web browsing", "Mobile computing"]
        }
      ],
      architecture: {
        description: "Mounts an Ethernet PHY controller, MAC processor, M.2 or PCIe interface, and antenna terminals.",
        hotspots: [
          { x: 30, y: 50, title: "PHY Controller", desc: "Translates digital bits into analog copper voltages." },
          { x: 80, y: 50, title: "RJ-45 Port", desc: "Physical socket for Ethernet cable connector clips." }
        ]
      },
      componentsDetail: [
        { name: "PHY Transceiver", purpose: "Translate signal voltages", working: "Sends and receives electrical voltage pulses over copper pins.", importance: "Controls connection speeds (e.g. 1Gbps vs 2.5Gbps)." },
        { name: "MAC Processor", purpose: "Manage data frames", working: "Handles network addresses (MAC), checking packet integrity.", importance: "Ensures correct data routing on the motherboards." }
      ],
      externalComponents: [
        { name: "RJ-45 Port Jack", purpose: "Connect Ethernet cables", desc: "Physical socket with clip lock for network cables." }
      ],
      workingPrinciple: "A network adapter translates digital frames into analog physical signals. When the PC requests network transit, the OS driver sends data frames to the adapter's MAC chip, which adds sender/receiver MAC addresses. The physical layer (PHY) chip then converts these frames into electrical voltage pulses (for copper Ethernet wires) or radio frequency patterns (for wireless antennas), pushing them over the media to the router.",
      workingSteps: [
        { title: "Data Queue", desc: "OS hands data blocks to the network adapter driver." },
        { title: "Frame Building", desc: "MAC chip packages data into standard Ethernet frames." },
        { title: "Voltage Shift", desc: "PHY chip translates frames into electrical pulses or radio waves." },
        { title: "Line Transit", desc: "Pulses travel over copper twisted cables directly to routers." }
      ],
      specs: {
        "Ethernet Speed": "100 Mbps, 1 Gbps, 2.5 Gbps, 10 Gbps RJ-45",
        "Wi-Fi Standard": "Wi-Fi 5 (802.11ac), Wi-Fi 6 (802.11ax), Wi-Fi 6E, Wi-Fi 7",
        "Bluetooth Version": "Bluetooth 5.0 to 5.4 (if combo adapter)",
        "Interface": "PCIe x1 Lane, M.2 2230 Slot, USB 3.0",
        "Frequency Bands": "2.4 GHz, 5 GHz, 6 GHz bands"
      },
      specExplanation: "Ethernet speed defines the maximum data transfer rate over physical copper cables. Wi-Fi Standard represents the wireless protocol; Wi-Fi 6 and 7 provide multi-gigabit wireless speeds and reduce lag in busy home networks.",
      applications: [
        "Office PC Connectivity: Connecting workplace desktops to local office LAN servers.",
        "Competitive Esports: Ensuring zero-jitter, low-latency inputs using wired Ethernet links.",
        "Mobile Computing: Allowing laptops to connect wirelessly to coffee shop hotspots."
      ],
      advantages: [
        "Enables network communication.",
        "Wired adapters offer stable, low-latency links.",
        "Wireless adapters provide portability."
      ],
      disadvantages: [
        "Wired models limit physical movement.",
        "Wireless models suffer from wall signal loss.",
        "Requires driver updates to prevent drops."
      ],
      misconceptions: [
        { myth: "Using a 10Gbps network adapter speeds up your 100Mbps internet line.", explanation: "An adapter only speeds up local network transfers (e.g. transfers from local NAS storage). Internet speeds remain limited by your service provider plan." }
      ],
      buyingLogic: "For gaming PCs, choose motherboards with integrated 2.5Gbps Intel controllers. For laptops lacking ports, buy a simple USB-to-Ethernet adapter dongle.",
      decisionTree: {
        question: "Do you need wireless convenience or zero-latency gaming?",
        options: {
          "Wireless Convenience": "Choose an M.2 or PCIe Wi-Fi 6 adapter card with external antennas.",
          "Zero-Latency Gaming": "Choose a wired RJ-45 Gigabit Ethernet adapter card."
        }
      },
      buyingGuide: {
        budgetGuide: "Under $15: USB Ethernet adapters. $20-$40: PCIe Wi-Fi 6 cards. $50+: 10Gbps RJ-45 cards.",
        scenarios: [
          { use: "Workstation LAN", recommendation: "2.5Gbps PCIe Ethernet adapter card." }
        ],
        checklist: ["Check slot compatibility (PCIe vs M.2).", "Confirm driver support (Windows 11)."],
        avoidMistakes: [
          "Buying a PCIe card for a laptop (only fits desktop PC motherboards)."
        ],
        expertAdvice: "Use wired Ethernet instead of Wi-Fi for gaming to remove lag spikes caused by radio channel crowding."
      },
      maintenanceDetail: {
        cleaning: "Keep the Ethernet socket free of dust. Blow out ports with compressed air.",
        lifespan: "Typically 5 to 10+ years."
      },
      troubleshootingSteps: [
        { issue: "Adapter Code 10 / Cannot Start", symptoms: "Network icon shows a warning triangle and no connections appear.", steps: ["Open device manager and locate network adapters.", "Right click and select 'Uninstall Device'.", "Restart PC (Windows will automatically reload stable default drivers)."] }
      ],
      faq: [
        { q: "What is a NIC?", a: "Network Interface Card. The physical network adapter hardware card." },
        { q: "Wired vs Wireless?", a: "Wired offers lower latency and stability, while wireless offers cable-free mobility." }
      ],
      relatedDevices: ["printer", "external_ssd", "usb_flash"],
      images: {
        overview: [{ url: 'images/network adapter.jpg', caption: 'PCIe Wi-Fi Adapter Card', description: 'PCIe wireless network card with antennas.', featured: true, order: 0 }]
      }
    },
    {
      id: "usb_flash",
      model3d: "3d/usb_flash_drive.glb",
      name: "The USB Flash Drive",
      category: "storage",
      tagline: "A ultra-compact, portable storage drive transferring files via USB plug-and-play interfaces.",
      definition: "An ultra-portable, thumb-sized storage device containing NAND flash memory and an integrated controller chip with a male USB interface connector.",
      purpose: "To enable rapid, pocket-sized file storage, transfer, and operating system boot installation.",
      importance: "The universal tool for offline file transfers, quick backup storage, and system booting setups.",
      quickFacts: {
        "Storage Core": "Non-Volatile NAND Flash cells",
        "Connection Plug": "Male USB Type-A or USB Type-C plug",
        "Form Factor": "Ultra-portable thumb-sized stick"
      },
      interestingFacts: "Early USB flash drives in 2000 had a capacity of just 8 Megabytes. Today, standard flash drives can hold 1 Terabyte—over 125,000 times more data.",
      realWorldExamples: "IT support technicians booting OS installer environments from 32GB USB 3.0 flash drives.",
      history: "Developed in the late 1990s as a replacement for low-capacity floppy disks and scratch-prone CD-ROMs. By 2005, USB flash drives had completely replaced floppy drives in PC workstations due to plug-and-play ease.",
      timeline: [
        { year: "2000", event: "Trek Technology and IBM release the first commercial USB flash drives (8MB)." },
        { year: "2008", event: "USB 3.0 standard introduces 5Gbps transfer speeds for flash drives." }
      ],
      breakthroughs: [
        "USB Mass Storage Protocol: Allowed plug-and-play access without installing proprietary drivers.",
        "TLC/QLC Flash Density: Multiplied storage capacity per physical cell block size."
      ],
      oldVsNew: "Legacy 8MB drives took 10 seconds to transfer a single document. Modern USB 3.2 flash drives transfer a 5GB movie file in less than 20 seconds.",
      types: [
        {
          name: "USB 3.0 Flash Drive",
          desc: "A standard thumb drive with a blue-colored USB Type-A connector block.",
          pros: ["Extremely cheap", "Universal compatibility", "Tiny size"],
          cons: ["Slower write speeds than external SSDs", "Easy to lose due to tiny size"],
          users: ["Students", "IT workers", "General users"],
          apps: ["Homework transfer", "Booting OS installers"]
        }
      ],
      architecture: {
        description: "Contains a male USB connector plug, flash memory controller, oscillator, and a NAND flash memory chip on a single PCB.",
        hotspots: [
          { x: 30, y: 50, title: "USB Plug Connector", desc: "Male USB plug inserted directly into host ports." },
          { x: 70, y: 50, title: "NAND Flash Chip", desc: "Storage chip retaining written data blocks." }
        ]
      },
      componentsDetail: [
        { name: "USB Controller Chip", purpose: "Manage data commands", working: "Controls data flows between the USB plug pins and the NAND flash sectors.", importance: "Determines read/write protocol speeds." }
      ],
      externalComponents: [
        { name: "USB Male Plug", purpose: "Physical host link", desc: "Metal connection shroud protecting internal gold contact pins." }
      ],
      workingPrinciple: "A USB flash drive functions by writing data blocks to solid-state memory cells. When inserted, the drive receives 5V power from the host port. When a file is copied, the computer's operating system transmits write requests using the USB Mass Storage protocol. The drive's internal flash controller translates these commands, applying tiny voltages to floating-gate transistors in the NAND flash memory, trapping or releasing electrons to represent binary states (1 and 0).",
      workingSteps: [
        { title: "Insertion Detection", desc: "Drive is inserted, receiving 5V power and initializing communication registers." },
        { title: "Protocol Setup", desc: "Host mounts the drive volume using the USB Mass Storage Standard." },
        { title: "Voltage Trapping", desc: "The controller sends charge to NAND cells, trapping electrons in gates." },
        { title: "Register Table", desc: "The file table is updated, establishing the new file mapping." }
      ],
      specs: {
        "Capacity": "32GB, 64GB, 128GB, 256GB, 512GB",
        "USB Version": "USB 2.0, USB 3.0, USB 3.2 Gen 1 (5Gbps)",
        "Read Speed": "50 MB/s to 400 MB/s",
        "Write Speed": "15 MB/s to 150 MB/s",
        "File System Compatibility": "FAT32, exFAT, NTFS, APFS"
      },
      specExplanation: "USB Version determines the bus speed limit (USB 3.0 is 5Gbps, USB 2.0 is 480Mbps). Capacity defines total storage workspace. File System Compatibility controls OS formatting (exFAT is best for Windows/Mac compatibility).",
      applications: [
        "Operating System Installation: Creating bootable USB drives to load Windows or Linux installers.",
        "School Work Transport: Carrying school homework and presentation files.",
        "Offline File Backup: Keeping copy logs of critical personal documents."
      ],
      advantages: [
        "Extremely compact and lightweight layout.",
        "Plug-and-play operation requires no software drivers.",
        "Highly affordable option for portable storage."
      ],
      disadvantages: [
        "Small size makes it easy to lose or misplace.",
        "Slower write speeds than full external SSDs.",
        "Frequent write cycles degrade flash cells over time."
      ],
      misconceptions: [
        { myth: "USB flash drives are safe for long-term archiving.", explanation: "Flash drives rely on electrical charges trapped in NAND cells. If left unpowered in a drawer for years, the charge can slowly leak away (data rot), corrupting your files. Use HDDs or M-Discs for archiving." }
      ],
      decisionTree: {
        question: "Do you need multi-gigabyte speed or a cheap boot disk?",
        options: {
          "Cheap Boot Disk": "Choose a basic 32GB USB 3.0 flash drive.",
          "High-Speed File Transfer": "Choose a high-speed USB 3.2 flash drive (or external SSD)."
        }
      },
      buyingGuide: {
        budgetGuide: "$5-$15: 32GB to 128GB USB 3.0 flash drives. $20-$40: 256GB+ high-speed drives.",
        scenarios: [
          { use: "OS Boot Drive", recommendation: "32GB USB 3.0 flash drive (type-A plug)." }
        ],
        checklist: ["Check connector type (Type-A vs Type-C).", "Select exFAT formatting for cross-platform support."],
        avoidMistakes: [
          "Buying generic unbranded flash drives (which often display fake capacities and fail instantly)."
        ],
        expertAdvice: "For maximum compatibility, format your flash drive to exFAT. Unlike FAT32 (which limits single files to 4GB), exFAT supports large files and works on both Windows and macOS out-of-the-box."
      },
      maintenanceDetail: {
        cleaning: "Keep the connector free of dust. Wipe the metal shell casing with a dry cloth.",
        lifespan: "Typically 3 to 8 years depending on write/erase cycles."
      },
      troubleshootingSteps: [
        { issue: "Drive Displays Write-Protected", symptoms: "The OS states 'Drive is Write-Protected' and refuses to write or delete files.", steps: ["Check if the flash drive has a physical write-protection toggle switch.", "Run the command line 'diskpart' utility to clear readonly flags.", "Back up files (write-protection often triggers when the flash memory controller detects NAND cell wear)."] }
      ],
      faq: [
        { q: "Why is capacity less than advertised?", a: "PC operating systems calculate storage in binary gibibytes (1024), whereas manufacturers use decimal gigabytes (1000)." },
        { q: "What is exFAT?", a: "Extended File Allocation Table. A file system optimized for flash drives with cross-platform support." }
      ],
      relatedDevices: ["external_ssd", "mouse", "keyboard"],
      images: {
        overview: [{ url: 'images/flash drive.jpg', caption: 'USB Flash Drive', description: 'Compact USB flash drive memory stick.', featured: true, order: 0 }]
      }
    },
    {
      id: "webcam",
      model3d: "3d/webcam.glb",
      name: "The Webcam",
      category: "input",
      tagline: "Captures digital video and images in real time for computer transmission and remote communication.",
      definition: "An optoelectronic input device that utilizes a lens assembly and image sensor to capture continuous optical frames, converting them into compressed digital video streams for real-time host system transmission.",
      purpose: "To provide a real-time digital video input source for remote communication, video conferencing, live streaming, and environmental monitoring.",
      importance: "Webcams are essential for face-to-face remote collaboration, telemedicine, online education, and digital content creation, serving as the visual bridge in modern telecommunication.",
      quickFacts: {
        "Device Type": "Input Device",
        "Primary Function": "Capture digital video",
        "Connection": "USB / USB-C / Wireless",
        "Typical Resolution": "720p, 1080p, 2K, 4K",
        "Typical Frame Rate": "30 FPS, 60 FPS",
        "Common Users": "Students, Professionals, Streamers, Businesses"
      },
      interestingFacts: "The first webcam was created at the University of Cambridge in 1991 to monitor the level of a coffee pot in the Trojan Room computer laboratory, allowing researchers to avoid useless trips.",
      realWorldExamples: "A remote software developer attending a daily standup meeting via Zoom using a 1080p autofocus webcam mounted on top of their monitor.",
      history: "Invented in 1991 at Cambridge to monitor a coffee pot. In 1994, Connectix launched the 'QuickCam', the first commercial webcam, capturing 16 shades of gray at 320x240 resolution. Logitech acquired it in 1998, driving the consumer webcam market. With the rise of USB plug-and-play standards and broadband internet, webcams became standard in laptops and essential for remote work in the 2020s.",
      timeline: [
        { year: "1991", event: "Trojan Room coffee pot webcam goes online at University of Cambridge." },
        { year: "1994", event: "Connectix QuickCam launches as the first commercial webcam." },
        { year: "2003", event: "Apple releases the iSight camera, introducing high-quality external webcams." },
        { year: "2010", event: "HD 720p webcams become standard on consumer markets." },
        { year: "2020", event: "Pandemic triggers massive global demand for high-end webcams and AI tracking cameras." }
      ],
      breakthroughs: [
        "CMOS Active-Pixel Sensors: Reduced power consumption and cost compared to legacy CCD chips.",
        "Auto-exposure & White Balance DSPs: Automatically adjust parameters to preserve image quality in bad lighting.",
        "AI Auto-Framing: Automatically zooms and pans the lens to keep the speaker in the center."
      ],
      oldVsNew: "Legacy webcams captured grain-heavy 320x240 video at a sluggish 15 frames per second, requiring custom drivers. Modern webcams deliver crisp 4K UHD video at 60 FPS with HDR color corrections and plug-and-play USB Video Class (UVC) drivers.",
      types: [
        {
          name: "USB Webcam",
          desc: "The standard consumer webcam that plugs into a computer via USB, using UVC drivers for instant setup.",
          pros: ["Affordable", "Plug-and-play", "Universal compatibility"],
          cons: ["Performance depends on USB bus bandwidth"],
          users: ["Office workers", "Students"],
          apps: ["Zoom meetings", "Online tutoring"]
        },
        {
          name: "Wireless Webcam",
          desc: "Transmits video data wirelessly via Wi-Fi or Bluetooth, often using rechargeable batteries.",
          pros: ["No cables", "Flexible placement"],
          cons: ["Latency potential", "Battery life limitations"],
          users: ["Presenters", "Security monitors"],
          apps: ["Surveillance", "Remote presentations"]
        },
        {
          name: "PTZ Webcam",
          desc: "Pan-Tilt-Zoom camera that can be controlled remotely to adjust its physical viewing angle and optical magnification.",
          pros: ["Wide coverage", "Remote control", "High optical zoom"],
          cons: ["Expensive", "Bulky layout"],
          users: ["Conference coordinators", "Lecture halls"],
          apps: ["Large boardrooms", "Distance learning broadcasts"]
        },
        {
          name: "AI Webcam",
          desc: "Incorporates an onboard neural processing unit for smart auto-tracking, auto-framing, and gesture controls.",
          pros: ["Keeps subject centered", "Auto-focus enhancements"],
          cons: ["Higher price", "Can be resource-heavy"],
          users: ["Content creators", "Streamers", "Active presenters"],
          apps: ["Interactive streaming", "Vlogging"]
        }
      ],
      architecture: {
        description: "A webcam architecture consists of a optical lens group, a CMOS image sensor array, an image signal processor (ISP), and a USB controller interface on a single system board.",
        hotspots: [
          { x: 25, y: 50, title: "Optical Lens Assembly", desc: "Focuses incoming light onto the image sensor." },
          { x: 50, y: 50, title: "CMOS Active-Pixel Sensor", desc: "Converts light photons into electrical voltages." },
          { x: 75, y: 50, title: "Image Signal Processor (ISP)", desc: "Performs color correction, compression, and scaling." }
        ]
      },
      componentsDetail: [
        { name: "CMOS Image Sensor", purpose: "Convert light into electrical signals", working: "Uses millions of photodiode pixels to capture photon levels and output pixel voltages.", importance: "Determines camera resolution, color depth, and low-light noise." },
        { name: "Image Signal Processor (ISP)", purpose: "Process raw visual data", working: "Runs algorithms for demosaicing, auto-exposure, auto-white balance, and video compression (e.g. H.264).", importance: "Corrects color distortion and reduces bandwidth before transmission." },
        { name: "Lens Assembly", purpose: "Focus light onto the sensor", working: "A group of glass or plastic elements that focus light rays and control the field of view.", importance: "Controls focus sharpness and optical distortion levels." }
      ],
      externalComponents: [
        { name: "Privacy Shutter", purpose: "Physical security", desc: "A sliding plastic lens cover that blocks the camera view when not in use, protecting user privacy." },
        { name: "Mounting Clip", purpose: "Physical attachment", desc: "An adjustable clamp base designed to secure the webcam onto the top of monitors or laptops." }
      ],
      workingPrinciple: "A webcam operates by translating light waves into digital video files. Light reflects off a subject and passes through the optical lens elements, which focus it onto a CMOS image sensor array. The CMOS sensor converts the light photons into analog voltages at each pixel location. An integrated analog-to-digital converter (ADC) converts these voltages into raw binary data. The Image Signal Processor (ISP) then demosaics the pixels, adjusts colors, applies noise filters, and compresses the frames into a digital format like MJPEG or H.264. Finally, the USB controller chip packages and streams this video data over a USB connection to the host computer at regular intervals (e.g., 30 FPS).",
      workingSteps: [
        { title: "Light Focusing", desc: "Reflected light passes through the lens, focusing onto the CMOS sensor array." },
        { title: "Photon Conversion", desc: "Each pixel on the CMOS sensor converts incoming photon energy into electrical charges." },
        { title: "Digitization & ISP", desc: "On-chip ADCs digitize the pixel charges, and the ISP applies color correction and compression." },
        { title: "USB Stream", desc: "The USB controller transmits the compressed video packet stream to the host CPU." }
      ],
      specs: {
        "Resolution": "1080p Full HD (1920x1080)",
        "Frame Rate": "30 FPS / 60 FPS",
        "Sensor Type": "1/2.7\" CMOS Sensor",
        "Field of View (FOV)": "78° to 90° Diagonal",
        "Focus": "Autofocus (VCM Motor)",
        "Connection": "USB 2.0 / USB 3.0 Type-A/C"
      },
      specExplanation: "Resolution defines the total pixel density (1080p is crisp, 4K is ultra-sharp). Frame Rate determines motion smoothness (60 FPS feels fluid, 30 FPS is standard). Field of View (FOV) controls the wide-angle camera sweep. Focus systems (Autofocus vs Fixed) determine if close-up objects remain clear.",
      applications: [
        "Video Conferencing: Connecting remote workers via platforms like Zoom, Teams, and Google Meet.",
        "Online Learning: Enabling students to attend interactive remote classroom lectures.",
        "Live Streaming: Broadcasting gameplay and video commentaries directly to Twitch and YouTube."
      ],
      advantages: [
        "Enables personal visual connection across global distances.",
        "Facilitates remote work, remote learning, and online collaboration.",
        "Very compact, portable, and easy to mount on desktop monitors."
      ],
      disadvantages: [
        "Creates potential security and privacy risks if hacked (requires shutter).",
        "High resolutions require significant network upload bandwidth.",
        "Visual quality degrades quickly in poor lighting conditions."
      ],
      misconceptions: [
        { myth: "More megapixels always mean a better webcam picture.", explanation: "While resolution is important, image quality depends heavily on sensor size and lens quality. A 1080p webcam with a large sensor and glass lens will look much better than a cheap 4K webcam with a tiny plastic lens that struggles in low light." }
      ],
      decisionTree: {
        question: "Do you need a camera for basic meetings or high-end streaming?",
        options: {
          "Basic Meetings": "A standard 1080p Fixed Focus USB webcam is sufficient.",
          "High-End Streaming": "Choose a 1080p 60FPS or 4K Auto-Focus webcam."
        }
      },
      buyingGuide: {
        budgetGuide: "$20-$40: 1080p fixed focus webcams. $60-$120: 1080p 60FPS autofocus or basic 4K webcams. $150+: Premium conference PTZ/AI webcams.",
        scenarios: [
          { use: "General Office Work", recommendation: "1080p 30FPS webcam with built-in privacy cover." }
        ],
        checklist: ["Select autofocus for close-up item displays.", "Check if a physical privacy shutter is included."],
        avoidMistakes: ["Buying a 4K webcam without checking if your software/network supports 4K streams."],
        expertAdvice: "Always prioritize lighting over webcam resolution. A standard 1080p webcam with proper ring lighting will look significantly better than a 4K webcam in a dark room."
      },
      maintenanceDetail: {
        cleaning: "Use a dry microfiber cloth to wipe dust off the glass lens. Do not use harsh liquid cleaners.",
        lifespan: "Typically 4 to 8 years depending on usage."
      },
      troubleshootingSteps: [
        { issue: "Webcam Video is Black", symptoms: "The status LED is on, but the camera preview shows a completely black image.", steps: ["Check if the physical privacy shutter is closed over the lens.", "Verify that webcam privacy settings in your OS permit application access.", "Try plugging the webcam directly into a USB port on the motherboard rather than a USB hub."] }
      ],
      faq: [
        { q: "Why does my webcam look grainy in the evening?", a: "Webcams have tiny image sensors. In low light, the camera increases ISO gain, which boosts the sensor signal but also amplifies electrical noise, creating grain." },
        { q: "Do webcams need drivers?", a: "Almost all modern USB webcams conform to the UVC (USB Video Class) standard and require no manual driver installation on Windows or macOS." }
      ],
      relatedDevices: ["monitor", "keyboard", "microphone"],
      images: {
        overview: [{ url: 'images/webcam.jfif', caption: 'HD Video Webcam', description: 'Webcam device mounted on a flat surface.', featured: true, order: 0 }]
      }
    },
    {
      id: "microphone",
      model3d: "3d/microphone.glb",
      name: "The Microphone",
      category: "input",
      tagline: "Converts sound waves into electrical signals, enabling digital audio recording, processing, and transmission.",
      definition: "An acoustic-to-electric transducer input device that detects physical pressure variations in air, converting mechanical sound wave vibrations into analog or digitized electrical audio signals.",
      purpose: "To capture ambient sound waves and convert them into electrical signals for voice recording, real-time communication, and digital audio analysis.",
      importance: "The fundamental audio interface for human-to-computer voice input, enabling telephony, professional recording, voice command processing, and real-time remote collaboration.",
      quickFacts: {
        "Device Type": "Input Device",
        "Primary Function": "Capture audio",
        "Connection": "USB, XLR, 3.5 mm",
        "Common Uses": "Recording, Gaming, Streaming, Meetings, Broadcasting"
      },
      interestingFacts: "The word microphone was first used in 1827 by Sir Charles Wheatstone to describe an acoustic device designed to amplify quiet sounds. The first electronic microphone was invented by Emile Berliner in 1876 for use in Alexander Graham Bell's telephone.",
      realWorldExamples: "A podcast host recording an episode using a professional condenser microphone mounted on a boom arm with a shock mount and pop filter.",
      history: "Emile Berliner invented the carbon microphone in 1876, which was crucial for early telephony. David Edward Hughes improved it in 1878. In 1916, E.C. Wente of Western Electric invented the condenser microphone, providing high fidelity. In 1931, the dynamic microphone was developed by Wente and Thuras. USB microphones emerged in the 2000s, bringing studio-quality audio directly to consumers without separate audio interfaces.",
      timeline: [
        { year: "1876", event: "Emile Berliner invents the carbon transmitter microphone for Bell's telephone." },
        { year: "1916", event: "Albert Wente invents the condenser microphone capsule." },
        { year: "1931", event: "Western Electric introduces the first dynamic microphone (model 618A)." },
        { year: "2005", event: "Introduction of plug-and-play USB studio condenser microphones." }
      ],
      breakthroughs: [
        "Condenser Capsule Technology: Utilized variable electrostatic capacitance for ultra-high sensitivity.",
        "Onboard Analog-to-Digital Converters (ADCs): Enabled high-fidelity digitization inside the microphone casing.",
        "Integrated DSP Noise Cancellation: Dynamically filters background hum and keyboard clicks at the hardware level."
      ],
      oldVsNew: "Legacy carbon microphones had a narrow frequency response (300Hz-3kHz) and high self-noise, making them suitable only for basic voice calls. Modern studio condenser microphones capture a flat 20Hz-20kHz frequency spectrum with virtually zero self-noise, recording high-resolution 24-bit/96kHz digital audio.",
      types: [
        {
          name: "Dynamic Microphone",
          desc: "Uses a wire coil suspended in a magnetic field attached to a diaphragm. Sturdy, handles high sound volumes, and needs no external power.",
          pros: ["Extremely durable", "Handles high SPL", "No phantom power required"],
          cons: ["Less sensitive to quiet details", "Poorer high-frequency response"],
          users: ["Vocalists", "Podcasters", "Stage performers"],
          apps: ["Live concerts", "Radio broadcasting", "Loud sound recording"]
        },
        {
          name: "Condenser Microphone",
          desc: "Uses a capacitor capsule consisting of a thin diaphragm next to a solid backplate. Extremely sensitive with flat frequency response; requires power.",
          pros: ["High detail and sensitivity", "Excellent transient response", "Flat frequency range"],
          cons: ["Fragile construction", "Requires phantom power (48V) or USB power", "Picks up background room noise"],
          users: ["Studio engineers", "Voiceover artists", "Podcasters"],
          apps: ["Vocal recording", "Acoustic instruments", "Voiceovers"]
        },
        {
          name: "USB Microphone",
          desc: "A condenser or dynamic microphone with an integrated pre-amp and ADC, outputting directly to USB.",
          pros: ["No audio interface needed", "Plug-and-play", "Budget-friendly"],
          cons: ["Limited upgradeability", "May pick up digital interference"],
          users: ["Gamers", "Streamers", "Beginner podcasters"],
          apps: ["Voice chat", "Solo podcasting", "Game streaming"]
        },
        {
          name: "Lavalier Microphone",
          desc: "A miniature clip-on microphone used for hands-free operation, commonly used in television and interviews.",
          pros: ["Discreet and small", "Hands-free utility", "Brings microphone close to mouth"],
          cons: ["Higher self-noise than studio mics", "Prone to clothing rub noise"],
          users: ["Journalists", "Presenters", "Videographers"],
          apps: ["Interviews", "Public speaking", "Vlogging"]
        }
      ],
      architecture: {
        description: "A microphone architecture consists of a microphone capsule (diaphragm and backplate), an impedance converter / pre-amplifier circuit, and a connection interface.",
        hotspots: [
          { x: 30, y: 30, title: "Microphone Capsule", desc: "The transducer element converting acoustic energy to electric charge." },
          { x: 50, y: 60, title: "Pre-amplifier / ADC Circuit", desc: "Amplifies the micro-voltage signal and digitizes it." },
          { x: 70, y: 80, title: "Connector Pinout", desc: "Xerox-Lars-Record (XLR) or USB physical interface." }
        ]
      },
      componentsDetail: [
        { name: "Diaphragm", purpose: "Detect sound waves", working: "A thin membrane that vibrates in response to physical air pressure fluctuations.", importance: "Determines the microphone's transient response speed and frequency sensitivity." },
        { name: "Capsule Backplate", purpose: "Create capacitor charge (Condenser)", working: "Provides a fixed conductive plate near the moving diaphragm, creating variable electrostatic capacitance.", importance: "Forms the electrostatic transduction element." },
        { name: "Pre-amplifier", purpose: "Boost microphone signal voltage", working: "Amplifies the minute micro-volt signal from the capsule to a usable line-level voltage.", importance: "Reduces noise floor contribution from the transmission cable." }
      ],
      externalComponents: [
        { name: "Mesh Grille", purpose: "Capsule protection", desc: "A protective metal mesh dome covering the delicate capsule, diffusing plosive wind blasts." },
        { name: "Shock Mount", purpose: "Vibration isolation", desc: "An elastic suspension cradle holding the microphone to isolate it from physical desk vibrations." }
      ],
      workingPrinciple: "A microphone functions as an acoustic-to-electrical transducer. Sound waves (variations in air pressure) strike the thin diaphragm membrane, causing it to vibrate in sync with the sound frequency. In a dynamic microphone, this diaphragm moves a small voice coil suspended inside a magnetic field, inducing an electrical current via electromagnetic induction. In a condenser microphone, the diaphragm acts as one plate of a capacitor; its vibration changes the distance between itself and a fixed backplate, varying the electrical capacitance and generating a tiny voltage offset. This micro-voltage signal is boosted by a pre-amplifier and, in USB microphones, digitized by an ADC chip before being sent to the computer.",
      workingSteps: [
        { title: "Acoustic Pressure", desc: "Sound waves travel through the air and strike the microphone's diaphragm." },
        { title: "Diaphragm Vibration", desc: "The thin membrane vibrates in response to the sound wave frequencies." },
        { title: "Electrical Transduction", desc: "Movement changes the magnetic flux (dynamic) or capacitance (condenser), generating an analog voltage." },
        { title: "Amplification & ADC", desc: "The signal is boosted by a pre-amp and converted into digital bits by the ADC." }
      ],
      specs: {
        "Frequency Response": "20 Hz - 20 kHz",
        "Polar Pattern": "Cardioid, Omnidirectional",
        "Transducer Type": "Electret Condenser / Dynamic",
        "Bit Depth / Sample Rate": "24-bit / 96 kHz",
        "Max SPL": "120 dB SPL",
        "Sensitivity": "-36 dB ± 3 dB (at 1 kHz)"
      },
      specExplanation: "Frequency Response defines the audible range captured (flat 20Hz-20kHz is best for studio recording). Polar Pattern controls the directionality of capture (Cardioid blocks background rear noise, Omnidirectional captures 360° sound). Sample Rate/Bit Depth determine digital resolution.",
      applications: [
        "Voice Recording & Podcasts: Capturing high-quality vocal audio logs and interview speech.",
        "Voice Communications: Enabling voice chat in competitive gaming and virtual meetings.",
        "Music Production: Recording acoustic instruments and vocal tracks in home studios."
      ],
      advantages: [
        "Captures high-quality audio for professional vocal recordings.",
        "Versatile transducer types optimized for various acoustic settings.",
        "Onboard digital conversion simplifies connection setups."
      ],
      disadvantages: [
        "Highly sensitive condenser capsules easily pick up background fan hum.",
        "High-end XLR models require expensive audio interfaces and 48V power.",
        "Prone to plosive pops ('P' and 'B' sounds) without external pop filters."
      ],
      misconceptions: [
        { myth: "Condenser microphones are always better than dynamic microphones.", explanation: "Condenser microphones are more detailed, but they pick up a lot of room echo and background noise. In untreated rooms or loud environments, dynamic microphones (like the Shure SM7B) are often preferred because they naturally reject ambient noise." }
      ],
      decisionTree: {
        question: "Are you recording in a quiet studio or a noisy room?",
        options: {
          "Quiet Studio": "Choose a detailed Condenser USB/XLR microphone.",
          "Noisy Room": "Choose a dynamic microphone to block out ambient room noise."
        }
      },
      buyingGuide: {
        budgetGuide: "$20-$50: Basic USB condenser mics or lapel mics. $70-$150: Mid-range USB studio mics (e.g. Blue Yeti). $200+: XLR microphones and audio interfaces.",
        scenarios: [
          { use: "Podcasting / Streaming", recommendation: "USB condenser or dynamic microphone with built-in headphone jack for zero-latency monitoring." }
        ],
        checklist: ["Ensure the microphone matches your stand mount thread.", "Add a pop filter to block vocal plosives."],
        avoidMistakes: ["Buying an XLR microphone without budget for an audio interface and XLR cable."],
        expertAdvice: "If you don't have acoustic foam on your walls, choose a dynamic microphone. Condenser microphones are extremely sensitive and will capture room echoes, making your audio sound distant and hollow."
      },
      maintenanceDetail: {
        cleaning: "Gently wipe the grille with a damp cloth. Keep the capsule dry. Use a pop filter to block moisture from breath.",
        lifespan: "Typically 5 to 15+ years depending on capsule care."
      },
      troubleshootingSteps: [
        { issue: "Microphone Audio is Too Quiet", symptoms: "The computer receives audio, but the waveform levels are extremely low.", steps: ["Verify that the correct microphone side is facing you (cardioid mics only capture sound from the front).", "Increase the input level / gain in the operating system sound control panel.", "If using an XLR condenser microphone, ensure that 48V phantom power is turned on at the audio interface."] }
      ],
      faq: [
        { q: "What is phantom power?", a: "A 48-volt DC current sent down XLR cables to power the internal active electronics and charge the capacitor plate of condenser microphones." },
        { q: "What is the difference between USB and XLR?", a: "USB microphones digitize audio internally and plug directly into computers. XLR microphones output analog signals and require a separate audio interface to digitize the sound." }
      ],
      relatedDevices: ["speaker", "sound_system", "webcam"],
      images: {
        overview: [{ url: 'images/microphone.jfif', caption: 'Studio Condenser Microphone', description: 'Professional condenser microphone with shock mount.', featured: true, order: 0 }]
      }
    }
  ],
  concepts: [],
  comparisons: []
};

if (typeof window !== "undefined") {
  window.TECH_DATABASE = TECH_DATABASE;
}
