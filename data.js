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
            name: "Mechanical Mouse",
            desc: "An early mouse design that uses a rubberized ball on the underside to track hand movements. As the ball rolls over a surface, it rotates two internal rollers oriented at right angles to detect X and Y axis coordinate shifts.",
            features: [
                  "Weighted rubber-coated steel ball",
                  "Dual optomechanical internal rollers",
                  "Optical encoder wheels with slot sensors"
            ],
            pros: [
                  "Simple driverless operation",
                  "Highly durable chassis",
                  "Inexpensive historical standard"
            ],
            cons: [
                  "Prone to dirt and lint clogging",
                  "Requires frequent cleaning of rollers",
                  "Low resolution (typically 400 DPI)"
            ],
            users: [
                  "Retro computing hobbyists",
                  "Legacy system operators",
                  "Students learning engineering history"
            ],
            apps: [
                  "Vintage systems navigation",
                  "Retro arcade emulation"
            ]
      },
      {
            name: "Optical Mouse",
            desc: "Uses a light-emitting diode (LED), typically red or infrared, and a low-resolution CMOS camera sensor to capture images of the surface beneath it. An onboard DSP analyzes sequential pictures to calculate coordinate changes.",
            features: [
                  "Red or infrared LED emitter",
                  "Low-resolution CMOS image sensor array",
                  "Integrated Digital Signal Processor (DSP)"
            ],
            pros: [
                  "No physical moving parts to clean",
                  "Excellent tracking consistency on standard mousepads",
                  "Highly affordable mass production"
            ],
            cons: [
                  "Cannot track on glass or highly reflective surfaces",
                  "Low tracking resolution compared to laser sensors"
            ],
            users: [
                  "Office workers",
                  "Students",
                  "General computer users"
            ],
            apps: [
                  "Daily desktop use",
                  "Basic productivity tasks",
                  "School lab workstations"
            ]
      },
      {
            name: "Laser Mouse",
            desc: "An advanced optical mouse that utilizes an invisible laser diode instead of an LED. The laser illuminates microscopic surface crevices, providing significantly higher tracking sensitivity and resolution.",
            features: [
                  "Invisible laser diode light source",
                  "High-precision optical lens group",
                  "Extreme DPI sensitivity control"
            ],
            pros: [
                  "Tracks on glass, lacquer, and highly reflective desks",
                  "Very high DPI resolution (up to 16,000+)",
                  "Precise tracking on variable materials"
            ],
            cons: [
                  "Can experience tracking jitter on cloth pads due to over-sensitivity"
            ],
            users: [
                  "Graphic designers",
                  "Multi-monitor workspace operators",
                  "Business travelers working without pads"
            ],
            apps: [
                  "Precision CAD layouts",
                  "Photo editing",
                  "Mobile computing without mousepads"
            ]
      },
      {
            name: "Wired Mouse",
            desc: "Connects directly to the host computer using a physical USB or legacy PS/2 cable. It draws power directly from the bus interface, providing uninterrupted connection with zero wireless latency.",
            features: [
                  "Direct USB Type-A or Type-C bus connection",
                  "Bus-powered architecture",
                  "Continuous polling rate support"
            ],
            pros: [
                  "No batteries or recharging required",
                  "Zero risk of wireless signal interference",
                  "Extremely low input latency (sub-1ms)"
            ],
            cons: [
                  "Cable drag and clutter",
                  "Restricted physical range of motion"
            ],
            users: [
                  "Competitive gamers",
                  "Static desktop users",
                  "System administrators"
            ],
            apps: [
                  "Competitive esports",
                  "Desktop workstation control",
                  "Server room terminal navigation"
            ]
      },
      {
            name: "Wireless Mouse",
            desc: "Communicates with the host computer using radio frequency (RF) signals, typically in the 2.4GHz band via a small USB dongle receiver. This provides complete freedom of motion without cable drag.",
            features: [
                  "2.4GHz RF wireless communication",
                  "USB nano-dongle receiver",
                  "Integrated battery cell compartment"
            ],
            pros: [
                  "Eliminates cable clutter and drag",
                  "High range of motion (up to 10 meters)",
                  "Clean aesthetic for workspaces"
            ],
            cons: [
                  "Requires battery recharging or replacement",
                  "Risk of losing the small USB dongle",
                  "Potential wireless interference"
            ],
            users: [
                  "Office professionals",
                  "Travelers",
                  "Minimalist desk enthusiasts"
            ],
            apps: [
                  "Presentation controls",
                  "Laptop utility on the go",
                  "Clean home-office setups"
            ]
      },
      {
            name: "Bluetooth Mouse",
            desc: "Uses standard Bluetooth wireless protocols to pair directly with the host computer's built-in Bluetooth transceiver. This removes the need for any USB dongle receiver, saving USB ports.",
            features: [
                  "Direct Bluetooth pairing protocols",
                  "Multi-device connection switcher",
                  "Low-power standby states"
            ],
            pros: [
                  "No USB receiver dongle required",
                  "Saves valuable USB ports on thin laptops",
                  "Seamless switching between laptop, tablet, and PC"
            ],
            cons: [
                  "Slightly higher latency than 2.4GHz RF wireless",
                  "Requires a Bluetooth-compatible host controller"
            ],
            users: [
                  "Laptop and tablet users",
                  "Mobile professionals",
                  "Dual-device creators"
            ],
            apps: [
                  "Travel computing",
                  "Tablet navigation",
                  "Coffee-shop remote work"
            ]
      },
      {
            name: "Gaming Mouse",
            desc: "A high-performance mouse designed specifically for competitive video games. It features custom high-speed optical sensors, high polling rates, programmable side buttons, and adjustable weight systems.",
            features: [
                  "Ultra-high DPI optical sensors (up to 30,000+)",
                  "High polling rates (1,000Hz to 8,000Hz)",
                  "Programmable side buttons and RGB profiles"
            ],
            pros: [
                  "Extremely low response latency",
                  "Highly customizable controls and macros",
                  "Durable primary buttons using optical switches"
            ],
            cons: [
                  "Premium cost",
                  "Requires specialized setup software",
                  "Aesthetics can be polarizing"
            ],
            users: [
                  "Competitive esports players",
                  "PC gamers",
                  "Power users mapping macros"
            ],
            apps: [
                  "FPS and MMO gaming",
                  "Fast-paced interface control",
                  "Macro-heavy workflows"
            ]
      },
      {
            name: "Vertical Mouse",
            desc: "An ergonomic mouse sculpted to place the human hand in a vertical handshake position. This design minimizes forearm pronation and wrist twisting, reducing muscle strain.",
            features: [
                  "Handshake grip angle (57 to 60 degrees)",
                  "Large integrated thumb rest contour",
                  "Top/side main click button alignment"
            ],
            pros: [
                  "Prevents carpal tunnel syndrome",
                  "Relieves wrist and forearm fatigue",
                  "Promotes better desk posture"
            ],
            cons: [
                  "Steep initial learning curve",
                  "Bulky dimensions make it hard to pack",
                  "Poorly suited for fast-paced gaming"
            ],
            users: [
                  "Users with wrist strain/RSI",
                  "Coders",
                  "Office administrators"
            ],
            apps: [
                  "Long coding sessions",
                  "Data entry",
                  "Daily office operations"
            ]
      },
      {
            name: "Trackball Mouse",
            desc: "A stationary input device featuring a large exposed ball that is rotated using the thumb or fingers. Since the mouse chassis remains stationary, it tracks cursor coordinates without physical hand displacement.",
            features: [
                  "Stationary heavy base chassis",
                  "Large rolling trackball supported by bearings",
                  "Thumb or finger tracking configuration"
            ],
            pros: [
                  "Requires zero desk space to slide",
                  "Drastically reduces wrist movement fatigue",
                  "Extremely precise single-pixel adjustments"
            ],
            cons: [
                  "Requires periodic cleaning of roller bearings",
                  "Not suited for fast multi-directional sweeps"
            ],
            users: [
                  "CAD designers",
                  "Sound engineers",
                  "Users with limited physical mobility"
            ],
            apps: [
                  "Audio mixing consoles",
                  "Industrial CAD layout design",
                  "Compact workstations"
            ]
      },
      {
            name: "Ergonomic Mouse",
            desc: "A mouse sculpted to fit the natural curves of the human hand, providing support for the palm, fingers, and thumb to minimize fatigue during long sessions.",
            features: [
                  "Contoured palm support",
                  "Dedicated thumb rest",
                  "Textured grip surfaces"
            ],
            pros: [
                  "Reduces muscle strain and fatigue",
                  "Provides comfortable hand rest"
            ],
            cons: [
                  "Often designed exclusively for right-handed users",
                  "Slightly bulky"
            ],
            users: [
                  "Daily productivity",
                  "Long office shifts",
                  "Ergonomic workspace designs"
            ],
            apps: [
                  "Daily office operations",
                  "Coding",
                  "General office productivity"
            ]
      },
      {
            name: "Travel Mouse",
            desc: "A small, lightweight mouse designed for portability and use on the go with laptops or mobile devices.",
            features: [
                  "Ultra-compact pocketable size",
                  "Retractable cable or wireless",
                  "Low-profile lightweight build"
            ],
            pros: [
                  "Extremely easy to pack and carry",
                  "Lightweight design"
            ],
            cons: [
                  "Uncomfortable for long-term use",
                  "Fewer features and buttons"
            ],
            users: [
                  "Business travel",
                  "Coffee shop remote work",
                  "Laptop bags"
            ],
            apps: [
                  "Travel computing",
                  "Mobile workspace productivity"
            ]
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
            desc: "Features individual, self-contained physical switches beneath every key. Each keycap houses a plastic stem, a metal leaf contact, and a spring that determines actuation force and feedback.",
            features: [
                  "Individual mechanical key switches",
                  "Customizable spring weights and stems",
                  "Metal switch plate stabilizer boards"
            ],
            pros: [
                  "Highly tactile and satisfying typing feedback",
                  "Extremely durable (rated for 50M+ keystrokes)",
                  "Highly customizable and repairable keycaps/switches"
            ],
            cons: [
                  "Louder click/clack sound profiles",
                  "Heavier chassis and premium pricing"
            ],
            users: [
                  "Writers",
                  "Software developers",
                  "Competitive gamers"
            ],
            apps: [
                  "Long typing sessions",
                  "Coding",
                  "Gaming setups"
            ]
      },
      {
            name: "Membrane Keyboard",
            desc: "Uses a continuous flexible membrane sheet printed with electrical circuit traces. Pressing a key pushes a rubber dome down, bridging a connection between the top and bottom membrane layers.",
            features: [
                  "Flexible silicone rubber dome sheet",
                  "Layered plastic membrane circuits",
                  "Silent travel actuation"
            ],
            pros: [
                  "Highly silent typing sound profile",
                  "Spill-resistant circuit layouts",
                  "Very light and inexpensive to manufacture"
            ],
            cons: [
                  "Mushy and soft typing feedback",
                  "Wears out faster (rated for ~5M keystrokes)"
            ],
            users: [
                  "Office employees",
                  "School labs",
                  "Casual home computer users"
            ],
            apps: [
                  "Quiet office environments",
                  "Standard school kiosks",
                  "Budget desktop setups"
            ]
      },
      {
            name: "Scissor Switch Keyboard",
            desc: "An adaptation of membrane technology that connects keycaps using two interlocking plastic pieces in a scissor-like structure. This design stabilizes short travel key presses.",
            features: [
                  "Interlocking plastic scissor linkages",
                  "Short key travel distance (typically 1-2mm)",
                  "Low-profile keycap mountings"
            ],
            pros: [
                  "Crisp, quick key actuation feel",
                  "Silent and compact structure",
                  "Allows thin, modern laptop designs"
            ],
            cons: [
                  "Prone to damage if debris gets under scissor joints",
                  "Minimal key travel feedback"
            ],
            users: [
                  "Laptop users",
                  "Journalists",
                  "Minimalist workstation designers"
            ],
            apps: [
                  "Ultrabook integration",
                  "Compact travel workspaces",
                  "Fast office typing"
            ]
      },
      {
            name: "Chiclet Keyboard",
            desc: "Features flat, rectangular keys with rounded edges and small gaps between them, resembling chiclet gum. They typically use scissor switches underneath to provide a thin profile.",
            features: [
                  "Flat rectangular key designs",
                  "Gapped key spacing layout",
                  "Low-profile surface alignment"
            ],
            pros: [
                  "Modern, clean aesthetic profile",
                  "Reduces accidental key-overlap presses",
                  "Easy to wipe down and keep clean"
            ],
            cons: [
                  "Flat keys offer minimal finger contour support",
                  "Shallow keypress depth"
            ],
            users: [
                  "Modern laptop buyers",
                  "General office workers",
                  "Aesthetic enthusiasts"
            ],
            apps: [
                  "Ultrabook integration",
                  "Stylish desktop setups",
                  "Quick document drafting"
            ]
      },
      {
            name: "Optical Keyboard",
            desc: "Uses infrared light beams underneath each key switch. When a key is depressed, it blocks or opens a light path, which triggers key register detection instantaneously.",
            features: [
                  "Infrared light beam sensor array",
                  "Contactless key trigger design",
                  "Zero mechanical debounce latency"
            ],
            pros: [
                  "Near-instant response latency (under 0.2ms)",
                  "No physical electrical contacts to wear out",
                  "Extremely durable (100M+ keystrokes)"
            ],
            cons: [
                  "Very expensive pricing",
                  "High power consumption for continuous light beams"
            ],
            users: [
                  "Competitive esports players",
                  "Gamers",
                  "Extreme hardware enthusiasts"
            ],
            apps: [
                  "Competitive gaming tournaments",
                  "High-speed input rigs"
            ]
      },
      {
            name: "Gaming Keyboard",
            desc: "A keyboard built specifically for video game play. It features mechanical or optical switches, RGB backlighting, macro programming keys, and high key rollover (NKRO).",
            features: [
                  "N-Key Rollover (NKRO) anti-ghosting",
                  "Customizable per-key RGB backlighting",
                  "Programmable macro profiles"
            ],
            pros: [
                  "Supports simultaneous key presses without signal loss",
                  "Fast actuation profiles",
                  "Sturdy, metal-reinforced chassis design"
            ],
            cons: [
                  "Polarizing aggressive aesthetic styles",
                  "Requires control software in system memory"
            ],
            users: [
                  "Gamers",
                  "Streamers",
                  "Custom PC builders"
            ],
            apps: [
                  "Video game setups",
                  "Streaming setups",
                  "Macro automation environments"
            ]
      },
      {
            name: "Ergonomic Keyboard",
            desc: "Features a split layout or wave-shaped design, angling keys to align with the natural posture of the human forearms and wrists. This design prevents pronation.",
            features: [
                  "Split or angled key groupings",
                  "Integrated padded wrist support rests",
                  "Tented chassis orientation options"
            ],
            pros: [
                  "Reduces repetitive strain injuries (RSI)",
                  "Aligns arms and shoulders naturally",
                  "Alleviates long-term wrist fatigue"
            ],
            cons: [
                  "Requires typing retraining",
                  "Occupies a large physical desk footprint"
            ],
            users: [
                  "Heavy typists",
                  "Coders",
                  "RSI sufferers"
            ],
            apps: [
                  "Long typing sessions",
                  "Coding workspaces",
                  "Ergonomic desk layouts"
            ]
      },
      {
            name: "Wireless Keyboard",
            desc: "Communicates with the host PC using standard 2.4GHz radio frequency (RF) bands via a compact USB receiver. This design allows physical range without cables.",
            features: [
                  "2.4GHz RF wireless signal transmission",
                  "Compact USB receiver dongle",
                  "Internal rechargeable battery or cells"
            ],
            pros: [
                  "Keeps the desk clean and clutter-free",
                  "Convenient for lap typing or long-range control",
                  "Flexible positioning"
            ],
            cons: [
                  "Requires battery charging or replacements",
                  "Risk of wireless signal drops or lost receivers"
            ],
            users: [
                  "Home office users",
                  "HTPC owners",
                  "Clean desk lovers"
            ],
            apps: [
                  "Home theater PCs",
                  "Clean workspace layouts",
                  "Presentations"
            ]
      },
      {
            name: "Bluetooth Keyboard",
            desc: "Uses standard Bluetooth pairing protocols to connect directly to the built-in Bluetooth receivers of laptops, tablets, and smartphones. This saves USB ports.",
            features: [
                  "Direct Bluetooth pairing protocols",
                  "Multi-device connection toggle buttons",
                  "Slim, energy-efficient architecture"
            ],
            pros: [
                  "No USB receiver dongle required",
                  "Works seamlessly with tablets, phones, and laptops",
                  "Easy multi-device switching"
            ],
            cons: [
                  "Slightly higher input latency than 2.4GHz wireless",
                  "Slow wakeup times from standby power save"
            ],
            users: [
                  "Mobile writers",
                  "Tablet users",
                  "Multi-device workspace creators"
            ],
            apps: [
                  "Travel writing",
                  "Tablet note-taking",
                  "Multi-device office control"
            ]
      },
      {
            name: "Multimedia Keyboard",
            desc: "Features dedicated media buttons, dials, and shortcut keys. These controls let users adjust volume, play/pause music, open calculators, and control browsers instantly.",
            features: [
                  "Dedicated volume knobs or dials",
                  "Play, pause, skip, and mute buttons",
                  "Browser and system shortcut hotkeys"
            ],
            pros: [
                  "Instant media controls without tab switching",
                  "Improves overall desk workflow efficiency",
                  "Tactile control knobs"
            ],
            cons: [
                  "Slightly larger physical size",
                  "Fringe buttons might not work on all operating systems"
            ],
            users: [
                  "Music listeners",
                  "Video editors",
                  "Office administrators"
            ],
            apps: [
                  "Media playback control",
                  "Video editing workflows",
                  "General multitasking desks"
            ]
      },
      {
            name: "Flexible Keyboard",
            desc: "Constructed from flexible silicone rubber, allowing the keyboard to be rolled up or folded for travel. It is highly resistant to water, dust, and physical impact.",
            features: [
                  "Silicone rubber physical construction",
                  "Roll-up collapsible frame design",
                  "Sealed dust and water-resistant shell"
            ],
            pros: [
                  "Highly portable and rollable design",
                  "Waterproof and easy to clean with soap",
                  "Extremely drop-resistant"
            ],
            cons: [
                  "Mushy and difficult typing feel",
                  "Requires a flat, solid surface to register keypresses"
            ],
            users: [
                  "Industrial technicians",
                  "Outdoor workers",
                  "Adventure travelers"
            ],
            apps: [
                  "Dirty workshop environments",
                  "Fieldwork setups",
                  "Compact travel packs"
            ]
      },
      {
            name: "Virtual Keyboard",
            desc: "An input method that renders a keyboard interface on a screen. It registers typing inputs using touchscreen taps, mouse clicks, or light projection.",
            features: [
                  "On-screen touchscreen layout rendering",
                  "Optional laser projection hardware",
                  "Software-based key mappings"
            ],
            pros: [
                  "No physical desk footprint required",
                  "Easy layout and language switching",
                  "Cannot gather dirt or suffer mechanical failures"
            ],
            cons: [
                  "Offers no physical tactile feedback",
                  "Slower typing speeds than physical keyboards"
            ],
            users: [
                  "Tablet and smartphone users",
                  "Public information kiosk visitors",
                  "Security-conscious users avoiding keyloggers"
            ],
            apps: [
                  "Touchscreen tablets",
                  "Banking ATM screen systems",
                  "Mobile device travel inputs"
            ]
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
            name: "Inkjet Printer",
            desc: "Creates images by spraying microscopic droplets of liquid ink through tiny printhead nozzles onto paper. It uses liquid ink cartridges to blend primary colors.",
            features: [
                  "Microscopic nozzle printheads",
                  "Liquid CMYK dye/pigment ink tanks",
                  "Precision stepping motor systems"
            ],
            pros: [
                  "Excellent high-resolution color photo prints",
                  "Low initial printer purchase cost",
                  "Compact desktop physical sizing"
            ],
            cons: [
                  "High ongoing cost of ink replacements",
                  "Printheads can clog if not used frequently",
                  "Slower print speeds than lasers"
            ],
            users: [
                  "Home users",
                  "Photographers",
                  "Small craft offices"
            ],
            apps: [
                  "Family photo printing",
                  "Color document printing",
                  "Art prints"
            ]
      },
      {
            name: "Laser Printer",
            desc: "Uses a laser beam to project a static charge image onto a rotating photosensitive drum. This drum attracts dry toner powder, transferring it to paper using heat and pressure rollers.",
            features: [
                  "Rotating photosensitive drum unit",
                  "Dry powdered toner cartridges",
                  "High-temperature fuser rollers"
            ],
            pros: [
                  "Extremely fast page print speeds",
                  "Low cost per page printed",
                  "Toner powder does not dry out or clog"
            ],
            cons: [
                  "High initial purchase cost",
                  "Bulky dimensions",
                  "Poor color blending for professional photo prints"
            ],
            users: [
                  "Offices",
                  "Schools",
                  "High-volume document environments"
            ],
            apps: [
                  "Text document printing",
                  "Invoices and reports",
                  "High-volume text work"
            ]
      },
      {
            name: "Dot Matrix Printer",
            desc: "An impact printer that uses pins to strike an ink-soaked ribbon against paper, similar to a typewriter. This mechanical impact leaves dot patterns that form characters.",
            features: [
                  "Striking pin printhead (9 or 24 pins)",
                  "Ink ribbon cartridges",
                  "Tractor feed continuous paper rollers"
            ],
            pros: [
                  "Prints multi-part carbon copy documents",
                  "Extremely low operating costs",
                  "Highly durable hardware"
            ],
            cons: [
                  "Very loud operation sound levels",
                  "Slow and low-resolution print quality"
            ],
            users: [
                  "Logistics warehouses",
                  "Retail bill desks",
                  "Bank branch operations"
            ],
            apps: [
                  "Carbon copy shipping slips",
                  "Multipart invoicing",
                  "Industrial inventory logging"
            ]
      },
      {
            name: "Thermal Printer",
            desc: "Uses heated printhead elements to activate a chemical reaction in heat-sensitive paper, turning it black. This design prints text and graphics without using ink or toner.",
            features: [
                  "Heated pixel element printheads",
                  "Heat-sensitive thermal roll paper",
                  "Contactless inkless system"
            ],
            pros: [
                  "Requires zero ink or toner replacements",
                  "Extremely fast, quiet receipt printing",
                  "Compact, highly reliable mechanism"
            ],
            cons: [
                  "Thermal printouts fade over time with heat/light",
                  "Only prints in single color (usually black)"
            ],
            users: [
                  "Retail stores",
                  "Shipping departments",
                  "Ticketing terminals"
            ],
            apps: [
                  "Cash register receipts",
                  "Shipping barcodes and labels",
                  "Event ticket printing"
            ]
      },
      {
            name: "LED Printer",
            desc: "Similar to a laser printer, but uses a solid-state LED array instead of a laser beam to charge the photosensitive drum. This design simplifies construction by removing moving mirrors.",
            features: [
                  "Solid-state LED strip light source",
                  "Fewer internal moving drum components",
                  "Photosensitive drum toner transfer"
            ],
            pros: [
                  "Highly reliable with fewer moving parts",
                  "Fast document printing output",
                  "Compact interior layout design"
            ],
            cons: [
                  "Repairs can be difficult",
                  "Lower choice of replacement cartridges"
            ],
            users: [
                  "Business offices",
                  "Corporate environments",
                  "Network printer systems"
            ],
            apps: [
                  "Office document printing",
                  "Corporate networks",
                  "Medium-volume workspaces"
            ]
      },
      {
            name: "All-in-One Printer",
            desc: "A multifunction device that combines printing, scanning, copying, and faxing into a single physical unit. This consolidates office equipment.",
            features: [
                  "Flatbed scanner glass and sensor",
                  "Automatic Document Feeder (ADF)",
                  "Integrated copiers and modems"
            ],
            pros: [
                  "Consolidates multiple office devices",
                  "Saves desk space and power outlets",
                  "Centralized device software drivers"
            ],
            cons: [
                  "If one function fails, the entire machine may require repair",
                  "Lower performance than dedicated machines"
            ],
            users: [
                  "Home offices",
                  "Small businesses",
                  "Administrative departments"
            ],
            apps: [
                  "Document scanning and copying",
                  "Multi-page faxing",
                  "Daily office printing"
            ]
      },
      {
            name: "Photo Printer",
            desc: "A specialized inkjet printer designed specifically to print high-fidelity photographs. It often uses extra ink cartridges (like light cyan and magenta) for color accuracy.",
            features: [
                  "Extended color ink systems (6 to 12 inks)",
                  "Direct camera/SD card connection ports",
                  "Optimized photo paper feed rollers"
            ],
            pros: [
                  "Stunning, professional gallery-grade prints",
                  "Excellent color accuracy and gradients",
                  "Direct printing without PCs"
            ],
            cons: [
                  "Extremely high ink consumption and paper costs",
                  "Very slow printing speeds"
            ],
            users: [
                  "Professional photographers",
                  "Graphic designers",
                  "Photo hobbyists"
            ],
            apps: [
                  "Professional photo printing",
                  "Portfolio generation",
                  "Gallery exhibition printing"
            ]
      },
      {
            name: "Portable Printer",
            desc: "A compact, battery-powered printer designed to let mobile professionals print documents or photos directly from laptops or phones while traveling.",
            features: [
                  "Rechargeable lithium battery pack",
                  "Bluetooth or Wi-Fi Direct connections",
                  "Ultra-slim folding chassis designs"
            ],
            pros: [
                  "Print from anywhere without power cables",
                  "Lightweight, easy to pack",
                  "Direct mobile printing"
            ],
            cons: [
                  "Limited paper tray capacity",
                  "Higher cost per page than desktop models"
            ],
            users: [
                  "Sales representatives",
                  "Field technicians",
                  "Mobile workers"
            ],
            apps: [
                  "Invoice printing in transit",
                  "Field receipt prints",
                  "Contracts signed on-site"
            ]
      },
      {
            name: "3D Printer",
            desc: "Creates three-dimensional physical objects layer-by-layer by melting and extruding plastic filaments, or by curing liquid resin using ultraviolet light.",
            features: [
                  "Heated extruder nozzle assembly",
                  "3-axis computer-controlled gantry",
                  "Thermoplastic filaments (PLA/ABS) or resin"
            ],
            pros: [
                  "Creates custom physical prototypes",
                  "Inexpensive production of unique replacement parts",
                  "Improves engineering workflows"
            ],
            cons: [
                  "Requires complex CAD software files",
                  "Extremely slow print times (often hours per model)"
            ],
            users: [
                  "Engineers",
                  "Designers",
                  "Hobbyists and makers"
            ],
            apps: [
                  "Prototype design modeling",
                  "Custom component fabrication",
                  "Educational engineering labs"
            ]
      },
      {
            name: "Plotter",
            desc: "A large-format printer that uses vector pens to draw continuous, high-precision lines onto massive paper rolls. This design is optimized for architectural blueprints.",
            features: [
                  "Moving physical pen holder assemblies",
                  "Wide roll feed systems (24 to 60+ inches)",
                  "Vector graphics rendering engines"
            ],
            pros: [
                  "Prints continuous, unbroken vector lines",
                  "Excellent for massive blueprints and banners",
                  "High-precision line scaling"
            ],
            cons: [
                  "Massive physical footprint and cost",
                  "Extremely slow raster image print times"
            ],
            users: [
                  "Architects",
                  "Civil engineers",
                  "Large banner print shops"
            ],
            apps: [
                  "Architectural blueprint drawing",
                  "Mechanical blueprint drafting",
                  "Large-format maps and banners"
            ]
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
            name: "Analog Joystick",
            desc: "Tracks direction and degree of tilt along a continuous range of movement, typically using internal potentiometers to measure changes in voltage. This allows for precise control.",
            features: [
                  "Dual axis potentiometers",
                  "Continuous voltage change sensors",
                  "Spring center return systems"
            ],
            pros: [
                  "Precise control of speed and angle",
                  "Perfect for flight simulators",
                  "Fluid directional control"
            ],
            cons: [
                  "Mechanical potentiometers wear out and drift",
                  "Requires digital calibration"
            ],
            users: [
                  "Gamers",
                  "Drone pilots",
                  "Simulation enthusiasts"
            ],
            apps: [
                  "Flight simulation",
                  "Drone flight control",
                  "Precision space sims"
            ]
      },
      {
            name: "Digital Joystick",
            desc: "Registers directional inputs as simple on/off signals using physical microswitches in four or eight set directions. It lacks analog tilt angle detection.",
            features: [
                  "Four main direction microswitches",
                  "Tactile click feedback switches",
                  "On/off digital signals"
            ],
            pros: [
                  "Extremely responsive direction clicks",
                  "Simple design with high durability",
                  "Inexpensive to build"
            ],
            cons: [
                  "No gradient or speed sensitivity control",
                  "Limited to discrete directions"
            ],
            users: [
                  "Retro arcade gamers",
                  "Industrial machine operators",
                  "Kiosk developers"
            ],
            apps: [
                  "Classic arcade games",
                  "Industrial machinery control",
                  "Information kiosk menus"
            ]
      },
      {
            name: "Flight Stick",
            desc: "A specialized joystick modeled after aircraft controls. It features a heavy base, complex hand grips, throttle levers, and multiple customizable buttons for flight simulation.",
            features: [
                  "Ergonomic aircraft-style hand grips",
                  "Integrated HAT switches for panning",
                  "Integrated throttle controls"
            ],
            pros: [
                  "Realistic flight simulation feel",
                  "Plenty of programmable control mappings",
                  "Sturdy base prevents desk slips"
            ],
            cons: [
                  "Bulky desktop physical footprint",
                  "Very expensive specialized gear"
            ],
            users: [
                  "Flight simulation pilots",
                  "Space game players",
                  "Aviation students"
            ],
            apps: [
                  "Flight simulators",
                  "Space combat simulators",
                  "Drone training systems"
            ]
      },
      {
            name: "Arcade Joystick",
            desc: "Features a heavy-duty ball-top or bat-top handle mounted above a flat metal plate. It uses microswitches to capture directions, designed to survive intense arcade play.",
            features: [
                  "Ball-top or bat-top handle designs",
                  "Heavy-duty direction microswitches",
                  "Restricter gates (square/octagonal)"
            ],
            pros: [
                  "Industrial-grade physical durability",
                  "Satisfying tactile clicking feel",
                  "Optimal for rapid inputs"
            ],
            cons: [
                  "Requires a flat surface or mount",
                  "Lacks analog precision"
            ],
            users: [
                  "Fighting game competitors",
                  "Arcade cabinet builders",
                  "Retro gamers"
            ],
            apps: [
                  "Fighting games",
                  "Arcade cabinet interfaces",
                  "Emulation consoles"
            ]
      },
      {
            name: "Gamepad Joystick",
            desc: "Small thumb-operated analog joysticks integrated directly into standard console controllers, allowing convenient navigation within gamepads.",
            features: [
                  "Thumb-sized rubberized thumbsticks",
                  "Integrated click button switch (L3/R3)",
                  "Compact interior potentiometers"
            ],
            pros: [
                  "Easy to operate with thumbs",
                  "Consolidated controller design",
                  "Saves space"
            ],
            cons: [
                  "Short throw distance reduces fine accuracy",
                  "Prone to controller drift"
            ],
            users: [
                  "Console gamers",
                  "PC gamers",
                  "Casual users"
            ],
            apps: [
                  "Console gaming setups",
                  "General gaming controllers",
                  "Smart TV navigation"
            ]
      },
      {
            name: "Gamepad Joystick",
            desc: "Small thumb-operated analog joysticks integrated directly into standard console controllers, allowing convenient navigation within gamepads.",
            features: [
                  "Thumb-sized rubberized thumbsticks",
                  "Integrated click button switch (L3/R3)",
                  "Compact interior potentiometers"
            ],
            pros: [
                  "Easy to operate with thumbs",
                  "Consolidated controller design",
                  "Saves space"
            ],
            cons: [
                  "Short throw distance reduces fine accuracy",
                  "Prone to controller drift"
            ],
            users: [
                  "Console gamers",
                  "PC gamers",
                  "Casual users"
            ],
            apps: [
                  "Console gaming setups",
                  "General gaming controllers",
                  "Smart TV navigation"
            ]
      },
      {
            name: "Hall Effect Joystick",
            desc: "Uses contactless magnetic sensors to measure joystick position instead of carbon potentiometers. This design completely eliminates friction wear and joystick drift.",
            features: [
                  "Neodymium permanent magnets",
                  "Hall effect semiconductor sensors",
                  "Frictionless interior movement"
            ],
            pros: [
                  "Virtually immune to joystick drift",
                  "Extremely long operational lifespan",
                  "Highly consistent return-to-center accuracy"
            ],
            cons: [
                  "Premium pricing",
                  "Rarely included in standard controllers"
            ],
            users: [
                  "Pro gamers",
                  "Industrial machine controls",
                  "High-budget simulator builds"
            ],
            apps: [
                  "Competitive gaming tournaments",
                  "Industrial robotics",
                  "Premium simulator cockpits"
            ]
      },
      {
            name: "USB Joystick",
            desc: "Connects directly using a standard wired USB plug, using driverless USB HID protocols to register buttons and axes instantly on PCs.",
            features: [
                  "Wired USB bus connector",
                  "USB HID class device standard",
                  "Bus power architecture"
            ],
            pros: [
                  "Plug-and-play driverless setup",
                  "No battery delays or charging",
                  "Low transmission latency"
            ],
            cons: [
                  "Cable limits physical range",
                  "Occupies a USB port"
            ],
            users: [
                  "PC gamers",
                  "Simulator pilots",
                  "Classroom learners"
            ],
            apps: [
                  "PC simulator setups",
                  "Educational control labs",
                  "Desktop gaming"
            ]
      },
      {
            name: "Wireless Joystick",
            desc: "Uses Bluetooth or 2.4GHz RF signals to transmit directional inputs to the PC, removing cord clutter from flight control desks.",
            features: [
                  "2.4GHz RF or Bluetooth wireless chipsets",
                  "Internal rechargeable battery packs",
                  "Low-latency wireless protocols"
            ],
            pros: [
                  "Keeps the gaming desk clean and uncluttered",
                  "Allows comfortable seating distance from screen",
                  "Easy storage"
            ],
            cons: [
                  "Requires battery recharging or swaps",
                  "Wireless interference risks"
            ],
            users: [
                  "Couch gamers",
                  "Minimalist workstation users",
                  "Sim pilots"
            ],
            apps: [
                  "Living room gaming setups",
                  "Remote control terminals",
                  "Wireless sim rigs"
            ]
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
            name: "CRT Monitor",
            desc: "An older monitor design that uses a cathode ray tube to fire electron beams at a phosphorescent screen, creating images row-by-row.",
            features: [
                  "Cathode ray electron guns",
                  "Phosphor-coated screen panels",
                  "Heavy glass tube vacuum housing"
            ],
            pros: [
                  "Near-zero display motion blur",
                  "Excellent native contrast and black levels",
                  "Zero input lag (instant response)"
            ],
            cons: [
                  "Extremely heavy, deep, and bulky",
                  "High power usage and heat output",
                  "Flicker can cause eye strain"
            ],
            users: [
                  "Retro gaming hobbyists",
                  "VCR editors",
                  "Classic system technicians"
            ],
            apps: [
                  "Retro console gaming",
                  "Legacy video format editing",
                  "Server diagnostics"
            ]
      },
      {
            name: "LCD Monitor",
            desc: "Uses a liquid crystal layer sandwiched between polarized filters, backed by a light source (like fluorescent lamps or LEDs) to render images.",
            features: [
                  "Nematic liquid crystal panel layer",
                  "Polarizing light filters",
                  "Fluorescent (CCFL) or LED backlights"
            ],
            pros: [
                  "Thin, lightweight frame designs",
                  "Sharp image rendering at native resolutions",
                  "Energy efficient compared to CRTs"
            ],
            cons: [
                  "Limited viewing angles and black depth",
                  "Backlight bleeding issues"
            ],
            users: [
                  "General office workers",
                  "Students",
                  "Budget computer builders"
            ],
            apps: [
                  "Office document work",
                  "Web browsing",
                  "School lab displays"
            ]
      },
      {
            name: "LED Monitor",
            desc: "An LCD monitor that uses Light Emitting Diodes (LEDs) for its backlight instead of cold cathode fluorescent lamps (CCFLs), improving contrast.",
            features: [
                  "LED backlight array (edge or direct lit)",
                  "Liquid crystal display pixel layer",
                  "Energy-saving control units"
            ],
            pros: [
                  "Improved contrast and brightness levels",
                  "Thinner frame design than CCFL LCDs",
                  "Low power consumption profiles"
            ],
            cons: [
                  "Still suffers from light bleed in dark scenes",
                  "Limited contrast compared to OLEDs"
            ],
            users: [
                  "General computer buyers",
                  "Office workers",
                  "Media consumers"
            ],
            apps: [
                  "Office work desk setups",
                  "HD media streaming",
                  "Standard computing"
            ]
      },
      {
            name: "OLED Monitor",
            desc: "Features organic light-emitting diodes where each individual pixel generates its own light. This allows pixels to turn completely off, achieving infinite contrast.",
            features: [
                  "Self-emissive organic pixel elements",
                  "Pixel-level dimming controls",
                  "Extremely thin display panels"
            ],
            pros: [
                  "Infinite contrast ratios and deep black levels",
                  "Instant pixel response speeds (0.03ms)",
                  "Wide viewing angles with zero color shift"
            ],
            cons: [
                  "Risk of permanent screen burn-in",
                  "Premium cost pricing",
                  "Dimmer peak brightness than LEDs"
            ],
            users: [
                  "Creative color professionals",
                  "Hardcore gamers",
                  "HDR movie consumers"
            ],
            apps: [
                  "Color-accurate video grading",
                  "High-end gaming setups",
                  "HDR cinema watching"
            ]
      },
      {
            name: "QLED Monitor",
            desc: "An LED-backlit LCD monitor that incorporates a quantum dot filter layer to enhance color gamut, brightness, and purity.",
            features: [
                  "Quantum dot nanocrystal film layer",
                  "High-intensity LED backlighting",
                  "Wide color gamut coverage"
            ],
            pros: [
                  "Extremely bright highlights",
                  "Vibrant, highly saturated colors",
                  "No risk of permanent screen burn-in"
            ],
            cons: [
                  "Requires backlighting, meaning blacks are not perfect",
                  "Viewing angles are narrower than OLEDs"
            ],
            users: [
                  "Media consumers",
                  "Gamers in bright rooms",
                  "Casual desktop users"
            ],
            apps: [
                  "HDR media playback",
                  "Gaming in well-lit rooms",
                  "General multitasking"
            ]
      },
      {
            name: "IPS Monitor",
            desc: "Uses In-Plane Switching liquid crystal technology. It is optimized to deliver superior color accuracy, consistency, and wide viewing angles.",
            features: [
                  "In-Plane Switching crystal alignments",
                  "Wide viewing angles (up to 178 degrees)",
                  "Accurate color spectrum profiles"
            ],
            pros: [
                  "Exceptional color reproduction and accuracy",
                  "Wide viewing angles with no color washout",
                  "Ideal for photography and design"
            ],
            cons: [
                  "Slower pixel response times than TN panels",
                  "Commonly suffers from 'IPS glow' in dark rooms"
            ],
            users: [
                  "Photographers",
                  "Graphic designers",
                  "General office workers"
            ],
            apps: [
                  "Photo editing workflows",
                  "Desktop design",
                  "Multi-monitor business setups"
            ]
      },
      {
            name: "TN Monitor",
            desc: "Uses Twisted Nematic liquid crystal technology, optimized for fast pixel response times and refresh rates at a very low manufacturing cost.",
            features: [
                  "Twisted Nematic crystal alignments",
                  "Ultra-fast pixel response times (1ms or lower)",
                  "High native refresh rate capability"
            ],
            pros: [
                  "Low retail pricing",
                  "Extremely low motion blur",
                  "Highly responsive gaming panel"
            ],
            cons: [
                  "Poor color accuracy and saturation",
                  "Very narrow viewing angles (colors distort when tilted)"
            ],
            users: [
                  "Competitive gamers",
                  "Budget office builders",
                  "Data terminal operators"
            ],
            apps: [
                  "Esports gaming",
                  "System command terminals",
                  "Budget workstations"
            ]
      },
      {
            name: "VA Monitor",
            desc: "Uses Vertical Alignment liquid crystal technology. It provides a middle ground between TN and IPS, featuring high contrast ratios and deep blacks.",
            features: [
                  "Vertical Alignment crystal systems",
                  "High static contrast ratio (3000:1 to 5000:1)",
                  "Deep black pixel states"
            ],
            pros: [
                  "Excellent contrast ratios, much better than IPS/TN",
                  "Great dark room movie viewing",
                  "Affordable curved monitor options"
            ],
            cons: [
                  "Slower pixel response times leading to dark smearing",
                  "Narrower viewing angles than IPS"
            ],
            users: [
                  "Media consumers",
                  "Casual gamers",
                  "General office workers"
            ],
            apps: [
                  "Dark-room movie watching",
                  "General office work",
                  "Story-driven gaming"
            ]
      },
      {
            name: "Curved Monitor",
            desc: "Features a display panel bent with a set radius (like 1800R or 1000R). This keeps all points of the screen at an equal distance from the user's eyes.",
            features: [
                  "Curved display panel glass/matrix",
                  "Standard radius ratings (e.g., 1500R, 1000R)",
                  "Panoramic viewer wrapping"
            ],
            pros: [
                  "Reduces eye movement fatigue",
                  "Provides an immersive field of view",
                  "Minimizes glare at screen edges"
            ],
            cons: [
                  "Distorts straight lines (bad for CAD and drawing)",
                  "Best viewed from a single central position"
            ],
            users: [
                  "Gamers",
                  "Spreadsheet multitaskers",
                  "Sim pilots"
            ],
            apps: [
                  "Panoramic gaming",
                  "Multi-window office workflows",
                  "Simulated flight desks"
            ]
      },
      {
            name: "Touchscreen Monitor",
            desc: "Includes touch sensors (usually capacitive) on top of the panel, letting users interact directly with the computer using finger taps or stylus pens.",
            features: [
                  "Capacitive touch sensor glass layer",
                  "Multi-touch input registry (up to 10 points)",
                  "Scratch-resistant glass screen"
            ],
            pros: [
                  "Intuitive interaction without keyboard/mouse",
                  "Excellent for interactive presentation panels",
                  "Speeds up certain retail workflows"
            ],
            cons: [
                  "Attracts fingerprints and smudges easily",
                  "Causes arm strain if used upright ('gorilla arm')"
            ],
            users: [
                  "Retail cashier operators",
                  "Creative designers",
                  "Interactive kiosk users"
            ],
            apps: [
                  "Point of Sale (POS) terminals",
                  "Creative drawing",
                  "Interactive public exhibits"
            ]
      },
      {
            name: "Ultrawide Monitor",
            desc: "Features a wider aspect ratio (usually 21:9 or 32:9) compared to standard 16:9 displays. This provides massive horizontal screen space without needing dual monitors.",
            features: [
                  "Cinematic aspect ratios (21:9 or 32:9)",
                  "Extra-wide pixel resolution formats",
                  "Multi-window split software compatibility"
            ],
            pros: [
                  "Replaces dual-monitor setups seamlessly",
                  "Immense horizontal timeline space",
                  "Cinematic field of view for movies and games"
            ],
            cons: [
                  "Not all software supports 21:9 resolution natively",
                  "Requires high GPU power for gaming"
            ],
            users: [
                  "Video editors",
                  "Financial analysts",
                  "Programmers multitasking"
            ],
            apps: [
                  "Video timeline editing",
                  "Multi-column spreadsheets",
                  "Panoramic gaming rigs"
            ]
      },
      {
            name: "Gaming Monitor",
            desc: "A monitor built specifically for gaming. It features high refresh rates (144Hz to 360Hz+), variable refresh rate tech (G-Sync/FreeSync), and low input lag.",
            features: [
                  "High refresh rates (144Hz to 360Hz+)",
                  "Variable Refresh Rate (VRR) chipsets",
                  "Low response times (0.5ms to 1ms)"
            ],
            pros: [
                  "Buttery smooth motion rendering",
                  "Eliminates screen tearing and stutter",
                  "Ultra-low input response delay"
            ],
            cons: [
                  "Premium cost",
                  "Lower color accuracy on budget gaming models"
            ],
            users: [
                  "Gamers",
                  "Streamers",
                  "Esports competitors"
            ],
            apps: [
                  "Fast-paced video gaming",
                  "High-frame-rate simulations",
                  "Gaming setups"
            ]
      },
      {
            name: "Portable Monitor",
            desc: "A slim, lightweight monitor designed to connect to laptops via USB-C, providing a secondary screen for travelers without needing power bricks.",
            features: [
                  "Ultra-slim folding cover chassis",
                  "Single USB-C cable power and video input",
                  "Lightweight build"
            ],
            pros: [
                  "Highly portable and fits in laptop bags",
                  "Easy secondary screen setup anywhere",
                  "Draws power from host device"
            ],
            cons: [
                  "Small screen sizes (typically 13-15 inches)",
                  "Quiet built-in speakers"
            ],
            users: [
                  "Traveling professionals",
                  "Remote workers",
                  "On-the-go programmers"
            ],
            apps: [
                  "Mobile dual-screen setups",
                  "Coffee shop client presentations",
                  "Laptop travel extension"
            ]
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
            name: "Stereo Speaker",
            desc: "A dual-channel audio system consisting of left and right speakers. This setup creates a sense of spatial direction by projecting different audio channels.",
            features: [
                  "Dual channel configuration (left/right)",
                  "Passive or active crossover circuits",
                  "Spatial soundstage positioning"
            ],
            pros: [
                  "Accurate, natural music soundstage",
                  "Simple physical connection setups",
                  "Widely supported audio format"
            ],
            cons: [
                  "Lacks surround sound depth for films",
                  "Requires correct symmetrical placement for optimal sound"
            ],
            users: [
                  "Music listeners",
                  "Casual gamers",
                  "General desktop users"
            ],
            apps: [
                  "Hi-Fi music listening",
                  "Casual desktop audio",
                  "Home stereo setups"
            ]
      },
      {
            name: "Computer Speaker",
            desc: "Active speakers designed specifically to sit next to a PC monitor, featuring built-in amplifiers and convenient front volume controls.",
            features: [
                  "Integrated audio amplifier boards",
                  "Front-facing volume control dials",
                  "Headphone passthrough audio jacks"
            ],
            pros: [
                  "Easy plug-and-play desktop setup",
                  "Compact size fits under monitors",
                  "Budget-friendly options"
            ],
            cons: [
                  "Small drivers limit bass response",
                  "Short cabling restricts placement options"
            ],
            users: [
                  "Desktop PC owners",
                  "Office employees",
                  "Students"
            ],
            apps: [
                  "Desktop PC audio",
                  "Video calling",
                  "Casual media streaming"
            ]
      },
      {
            name: "Bookshelf Speaker",
            desc: "Compact speakers designed to rest on bookshelves, tables, or stands. They are built to provide high-quality audio in small to medium-sized rooms.",
            features: [
                  "Standard two-way driver systems (woofer + tweeter)",
                  "High-density wooden speaker enclosures",
                  "Passive or active speaker configurations"
            ],
            pros: [
                  "Outstanding, rich sound fidelity for their size",
                  "Robust wood-cabinet acoustics",
                  "High-quality component construction"
            ],
            cons: [
                  "Requires an external amplifier if passive",
                  "Occupies physical shelf space"
            ],
            users: [
                  "Audiophiles",
                  "Home studio recorders",
                  "Home audio fans"
            ],
            apps: [
                  "Hi-Fi home listening",
                  "Music mixing",
                  "Home theater front speakers"
            ]
      },
      {
            name: "Portable Speaker",
            desc: "A small speaker powered by internal batteries. It is designed to be easily carried in bags and withstand outdoor use.",
            features: [
                  "Integrated rechargeable battery",
                  "Rugged shock-resistant rubber casing",
                  "Compact, lightweight build"
            ],
            pros: [
                  "Highly portable and easy to pack",
                  "Resilient against drops and water",
                  "No power outlets required"
            ],
            cons: [
                  "Limited maximum volume and bass depth",
                  "Battery capacity degrades over time"
            ],
            users: [
                  "Travelers",
                  "Outdoor workers",
                  "Campers"
            ],
            apps: [
                  "Outdoor picnics",
                  "Travel hotel rooms",
                  "Portable audio playback"
            ]
      },
      {
            name: "Bluetooth Speaker",
            desc: "A wireless speaker that uses Bluetooth technology to receive audio signals from paired smartphones, tablets, or laptops.",
            features: [
                  "Bluetooth receiver antennas",
                  "Wireless audio codec support (AAC/SBC)",
                  "Built-in playback control buttons"
            ],
            pros: [
                  "Quick and easy wireless connection setups",
                  "Eliminates audio input cables",
                  "Compatible with all mobile devices"
            ],
            cons: [
                  "Slightly compressed audio quality",
                  "Wireless range limits connection stability"
            ],
            users: [
                  "Mobile device users",
                  "Casual listeners",
                  "Teens and students"
            ],
            apps: [
                  "Wireless smartphone music",
                  "Outdoor parties",
                  "Convenient room audio"
            ]
      },
      {
            name: "USB Speaker",
            desc: "Receives both digital audio data and power through a single USB cable. This eliminates the need for separate 3.5mm audio and power cords.",
            features: [
                  "Single USB interface cable",
                  "Onboard digital-to-analog converter (DAC)",
                  "Bus-powered audio amplifier"
            ],
            pros: [
                  "Clean single-cable setup",
                  "Driverless digital audio output",
                  "No wall power outlets required"
            ],
            cons: [
                  "Volume output is limited by USB power limits",
                  "Not compatible with analog-only sources"
            ],
            users: [
                  "Laptop users",
                  "Clean desk enthusiasts",
                  "Office workers"
            ],
            apps: [
                  "Laptop desktop extensions",
                  "Clean workspace setups",
                  "Basic office audio"
            ]
      },
      {
            name: "Smart Speaker",
            desc: "Includes built-in voice assistants (like Google Assistant or Alexa). It uses Wi-Fi to stream music, answer questions, and control smart home devices.",
            features: [
                  "Far-field voice microphone arrays",
                  "Integrated Wi-Fi streaming chips",
                  "Voice assistant software integration"
            ],
            pros: [
                  "Hands-free voice command controls",
                  "Streams directly from internet sources",
                  "Acts as a central smart home hub"
            ],
            cons: [
                  "Privacy concerns with active microphones",
                  "Requires stable home Wi-Fi networks"
            ],
            users: [
                  "Smart home users",
                  "Multitaskers",
                  "Tech-savvy families"
            ],
            apps: [
                  "Voice assistant command centers",
                  "Wi-Fi music streaming",
                  "Smart home hub controls"
            ]
      },
      {
            name: "Soundbar",
            desc: "A long, slim speaker enclosure containing multiple drivers aligned horizontally. It is designed to sit directly beneath a TV, improving audio.",
            features: [
                  "Multi-driver array inside single bar",
                  "Optional wireless external subwoofer",
                  "HDMI ARC / Optical connection ports"
            ],
            pros: [
                  "Slim profile fits neatly under flat TVs",
                  "Easy single-cable connection setup",
                  "Provides virtual surround sound"
            ],
            cons: [
                  "Cannot replicate a true physical surround system",
                  "Limited physical stereo width separation"
            ],
            users: [
                  "TV owners",
                  "Small apartment residents",
                  "Home entertainment fans"
            ],
            apps: [
                  "Living room television audio",
                  "Compact home theaters",
                  "Console gaming audio"
            ]
      },
      {
            name: "Satellite Speaker",
            desc: "Small, compact speakers designed to be mounted on walls or stands, acting as side or rear channels in surround sound configurations.",
            features: [
                  "Small physical driver enclosures",
                  "Wall-mounting bracket interfaces",
                  "Optimized mid-to-high frequency drivers"
            ],
            pros: [
                  "Discrete, compact physical sizes",
                  "Fills surround sound channels perfectly",
                  "Easy wall-mounting integration"
            ],
            cons: [
                  "Lacks low-end bass (must be paired with subwoofers)",
                  "Requires extensive speaker cabling"
            ],
            users: [
                  "Home theater designers",
                  "Movie fans",
                  "Surround audio setups"
            ],
            apps: [
                  "Surround sound system channels",
                  "Home theater speaker setups",
                  "Ambient restaurant audio"
            ]
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
            name: "2.0 Channel System",
            desc: "A two-channel audio configuration containing left and right speakers. It contains no dedicated low-frequency subwoofer channel.",
            features: [
                  "Dual channel configurations (left/right)",
                  "Full-range physical speaker drivers",
                  "Simple connection terminals"
            ],
            pros: [
                  "Simple setup with minimal cable clutter",
                  "Excellent for pure stereo music listening",
                  "Inexpensive configuration"
            ],
            cons: [
                  "Lacks deep sub-bass frequencies",
                  "No surround sound channel separation"
            ],
            users: [
                  "Stereo music listeners",
                  "Office workers",
                  "Casual desktop users"
            ],
            apps: [
                  "Hi-Fi music listening",
                  "Desktop computer setups",
                  "Basic stereo audio"
            ]
      },
      {
            name: "2.1 Channel System",
            desc: "Enhances a standard stereo layout by adding a dedicated subwoofer channel (.1) to handle low-frequency bass sounds.",
            features: [
                  "Left and right speaker satellites",
                  "Dedicated low-frequency subwoofer cabinet",
                  "Active crossover frequency splitters"
            ],
            pros: [
                  "Rich, deep bass for movies and games",
                  "Maintains a compact desktop size",
                  "Excellent value for audio performance"
            ],
            cons: [
                  "Subwoofer adds extra desk/floor footprint",
                  "Potential for muddy bass crossover points"
            ],
            users: [
                  "PC gamers",
                  "Action movie fans",
                  "General music listeners"
            ],
            apps: [
                  "Desktop PC gaming",
                  "Apartment movie watching",
                  "Electronic music listening"
            ]
      },
      {
            name: "5.1 Surround System",
            desc: "A true surround sound setup featuring five channels (front-left, center, front-right, surround-left, surround-right) and a subwoofer.",
            features: [
                  "Three front speaker satellites",
                  "Two rear surround speaker satellites",
                  "Low-frequency subwoofer cabinet"
            ],
            pros: [
                  "Immersive, three-dimensional movie audio",
                  "Clear movie dialogue from center channel",
                  "Industry standard format"
            ],
            cons: [
                  "Requires running multiple speaker cables across rooms",
                  "Higher price and physical footprint"
            ],
            users: [
                  "Home theater owners",
                  "Movie enthusiasts",
                  "Immersive gamers"
            ],
            apps: [
                  "Home theater setups",
                  "Living room movie watching",
                  "Immersive video gaming"
            ]
      },
      {
            name: "7.1 Surround System",
            desc: "Adds two side surround channels to a 5.1 system. This provides a total of seven speaker channels and one subwoofer for seamless audio positioning.",
            features: [
                  "Three front speaker satellites",
                  "Two side surround satellites",
                  "Two rear surround satellites",
                  "Subwoofer unit"
            ],
            pros: [
                  "Exceptional, highly detailed spatial tracking",
                  "Seamless audio pans behind the listener",
                  "Ultimate home cinema audio standard"
            ],
            cons: [
                  "Requires a large room and precise layout",
                  "Very high cost and complex cable setups"
            ],
            users: [
                  "Enthusiast home theater builders",
                  "Audiophiles",
                  "Hardcore simulator gamers"
            ],
            apps: [
                  "Dedicated home theaters",
                  "Precision simulator cockpits",
                  "Premium cinema setups"
            ]
      },
      {
            name: "Home Theater System",
            desc: "A complete packaged audio system designed to recreate the cinema experience at home, containing surround speakers and an AV receiver.",
            features: [
                  "Dedicated multi-channel AV receiver",
                  "Surround speaker satellite array",
                  "High-power active subwoofer"
            ],
            pros: [
                  "Recreates authentic cinema audio quality",
                  "Centralized control of all media inputs",
                  "Powerful room-filling volume"
            ],
            cons: [
                  "Highly complex installation and configuration",
                  "Very high power usage and retail cost"
            ],
            users: [
                  "Movie buffs",
                  "Families building entertainment hubs",
                  "Home design planners"
            ],
            apps: [
                  "Living room cinema setups",
                  "Media room entertainment",
                  "Console gaming hubs"
            ]
      },
      {
            name: "Hi-Fi Audio System",
            desc: "High-Fidelity systems built using premium audio components to reproduce recorded music as close to the original studio recording as possible.",
            features: [
                  "High-fidelity digital-to-analog converters (DAC)",
                  "Premium standalone power amplifiers",
                  "Acoustically tuned cabinet speakers"
            ],
            pros: [
                  "Ultra-pure, transparent audio reproduction",
                  "Reveals micro-details in music tracks",
                  "Extremely low distortion profiles"
            ],
            cons: [
                  "Extremely high audiophile pricing",
                  "Requires high-quality lossless source files"
            ],
            users: [
                  "Audiophiles",
                  "Music collectors",
                  "Studio mixing engineers"
            ],
            apps: [
                  "Critical music listening",
                  "Vinyl record playback",
                  "Studio audio mastering"
            ]
      },
      {
            name: "Professional PA System",
            desc: "Public Address systems designed to amplify speech or live music in massive public spaces, concert halls, and outdoor venues.",
            features: [
                  "High-decibel active line arrays",
                  "Multi-channel audio mixing consoles",
                  "Rugged, road-ready speaker enclosures"
            ],
            pros: [
                  "Projects audio clearly to thousands of listeners",
                  "Extremely rugged, road-durable hardware",
                  "Handles high peak voltage inputs"
            ],
            cons: [
                  "Very large, heavy physical components",
                  "Harsh, unrefined sound for close listening"
            ],
            users: [
                  "Concert organizers",
                  "Public speakers",
                  "Event venues"
            ],
            apps: [
                  "Live concerts",
                  "Corporate conferences",
                  "Outdoor stadium announcements"
            ]
      },
      {
            name: "Wireless Sound System",
            desc: "Uses Wi-Fi networks to stream audio across multiple rooms wirelessly. This system coordinates multi-room playback without audio cables.",
            features: [
                  "Multi-room Wi-Fi audio sync systems",
                  "Dedicated mobile streaming control apps",
                  "Active wireless speaker units"
            ],
            pros: [
                  "Eliminates all long-distance speaker cables",
                  "Seamless whole-home music streaming",
                  "Easy addition of new speakers"
            ],
            cons: [
                  "Requires a fast, stable home Wi-Fi network",
                  "Slightly latency delays between rooms on weak Wi-Fi"
            ],
            users: [
                  "Smart home designers",
                  "Multitasking families",
                  "Minimalist home owners"
            ],
            apps: [
                  "Multi-room home music",
                  "Wireless surround setups",
                  "Ambient home audio"
            ]
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
            name: "LCD Projector",
            desc: "Passes light through three small liquid crystal display panels (Red, Green, Blue) to create images. The colors are combined using a prism before projection.",
            features: [
                  "3-panel LCD projection system (3LCD)",
                  "Internal light-splitting color prism",
                  "Solid-state optical light path"
            ],
            pros: [
                  "Excellent, highly accurate color saturation",
                  "Sharp text rendering for presentations",
                  "No rainbow effect artifacts"
            ],
            cons: [
                  "Lower contrast and black levels than DLP",
                  "Bulkier chassis due to three LCD panels"
            ],
            users: [
                  "Teachers and lecturers",
                  "Business presenters",
                  "Office workers"
            ],
            apps: [
                  "Classroom presentations",
                  "Business office slides",
                  "Standard document projection"
            ]
      },
      {
            name: "DLP Projector",
            desc: "Uses a digital micromirror device chip containing millions of microscopic mirrors. These mirrors tilt toward or away from the light source to project pixels.",
            features: [
                  "Digital Micromirror Device (DMD) chip",
                  "High-speed spinning color filter wheel",
                  "Sealed optics dust protection"
            ],
            pros: [
                  "Exceptional native contrast and black levels",
                  "Smooth, fluid motion rendering",
                  "Compact and sealed light engines"
            ],
            cons: [
                  "Spinning color wheel can cause 'rainbow effect'",
                  "Slightly less saturated color values"
            ],
            users: [
                  "Home theater designers",
                  "Cinema movie viewers",
                  "Action gamers"
            ],
            apps: [
                  "Home theater movies",
                  "Action video gaming",
                  "Movie theater projection"
            ]
      },
      {
            name: "LCoS Projector",
            desc: "Liquid Crystal on Silicon systems combine LCD and DLP technologies, reflecting light off a liquid crystal backplate to achieve ultra-high resolutions.",
            features: [
                  "Liquid Crystal on Silicon reflection panels",
                  "Ultra-high pixel density layouts",
                  "Premium lens projection groups"
            ],
            pros: [
                  "Stunning, color-rich image quality",
                  "Highest contrast levels of all lamp designs",
                  "Virtually invisible pixel structures"
            ],
            cons: [
                  "Extremely expensive retail pricing",
                  "Large, heavy projector cabinet frames"
            ],
            users: [
                  "High-end home cinema owners",
                  "Professional color graders",
                  "Premium commercial venues"
            ],
            apps: [
                  "High-end home theaters",
                  "Commercial screening rooms",
                  "Color grading displays"
            ]
      },
      {
            name: "LED Projector",
            desc: "Utilizes individual Red, Green, and Blue light-emitting diodes as the light source instead of a traditional high-pressure mercury lamp.",
            features: [
                  "RGB solid-state LED arrays",
                  "Mercury-free projection light source",
                  "Instant power-on/off cooling circuits"
            ],
            pros: [
                  "Extremely long lamp life (20,000+ hours)",
                  "Low power consumption and heat output",
                  "Vibrant color reproduction"
            ],
            cons: [
                  "Lower maximum brightness output (ANSI lumens)",
                  "Dim projection on massive screens"
            ],
            users: [
                  "Casual movie watchers",
                  "Mobile presenters",
                  "Eco-conscious buyers"
            ],
            apps: [
                  "Bedroom movies",
                  "Small meeting rooms",
                  "Eco-friendly workspaces"
            ]
      },
      {
            name: "Laser Projector",
            desc: "Uses a solid-state laser light source to project images. It offers incredible brightness, color accuracy, and instant-on capabilities.",
            features: [
                  "Solid-state laser diode engine",
                  "High ANSI lumens output ratings",
                  "Instant-on direct light projection"
            ],
            pros: [
                  "Exceptional brightness levels (ANSI lumens)",
                  "Ultra-long life with no lamp swaps",
                  "Outstanding color spectrum coverage"
            ],
            cons: [
                  "Very high initial purchase cost",
                  "Safety caution around high-power laser beams"
            ],
            users: [
                  "Large auditorium planners",
                  "Professional home theater builders",
                  "Art galleries"
            ],
            apps: [
                  "Large auditorium presentations",
                  "High-end home cinemas",
                  "Museum art exhibitions"
            ]
      },
      {
            name: "Portable Projector",
            desc: "A compact, lightweight projector designed to run on battery power, allowing users to project presentations or movies on the go.",
            features: [
                  "Integrated rechargeable battery",
                  "Pico/pocket physical dimensions",
                  "Built-in media streaming software"
            ],
            pros: [
                  "Project anywhere without power cords",
                  "Extremely lightweight and portable",
                  "Direct wireless smartphone pairing"
            ],
            cons: [
                  "Very low brightness (dim room required)",
                  "Quiet internal built-in speaker"
            ],
            users: [
                  "Business travelers",
                  "Campers",
                  "Casual bedroom viewers"
            ],
            apps: [
                  "Travel presentations",
                  "Outdoor backyard movies",
                  "Hotel room displays"
            ]
      },
      {
            name: "Short Throw Projector",
            desc: "Features a specialized wide-angle lens, allowing it to project a large image from a short distance (typically 3 to 8 feet) from the wall.",
            features: [
                  "Wide-angle projection lens group",
                  "Optimized optical offset designs",
                  "Standard desktop setups"
            ],
            pros: [
                  "Large screen sizes in cramped rooms",
                  "Presenter does not block the light beam",
                  "Easy desktop placement"
            ],
            cons: [
                  "Requires a perfectly flat projection screen",
                  "Image corners can suffer slight distortion"
            ],
            users: [
                  "Small apartment owners",
                  "Classroom teachers",
                  "Game rooms"
            ],
            apps: [
                  "Small living room theater",
                  "Interactive classrooms",
                  "Close-up gaming screens"
            ]
      },
      {
            name: "Ultra Short Throw Projector",
            desc: "Uses a unique curved mirror optical lens system to project a massive screen from just inches away from the wall.",
            features: [
                  "Curved reflection mirror lens systems",
                  "Extreme wide-angle optical paths",
                  "Credenza/TV console placement alignment"
            ],
            pros: [
                  "Sits directly against the projection wall",
                  "Completely eliminates presenter shadow cast",
                  "Replaces standard living room TVs easily"
            ],
            cons: [
                  "Very high retail pricing",
                  "Requires expensive tensioned screens to avoid distortions"
            ],
            users: [
                  "Modern living room cinema owners",
                  "Corporate boardroom planners",
                  "Tech fans"
            ],
            apps: [
                  "Living room television replacement",
                  "Corporate boardroom screens",
                  "Aesthetic clean setups"
            ]
      },
      {
            name: "Home Theater Projector",
            desc: "Projectors tuned specifically for home cinema use, focusing on high contrast ratios, color accuracy, and quiet fan operation.",
            features: [
                  "Cinema color calibration standards (Rec. 709)",
                  "Dynamic iris contrast enhancers",
                  "Low-noise silent cooling fans"
            ],
            pros: [
                  "Stunning cinematic movie quality",
                  "True-to-life theater color reproduction",
                  "Quiet operation does not disrupt films"
            ],
            cons: [
                  "Low brightness limits performance in lit rooms",
                  "Requires dedicated dark home theater rooms"
            ],
            users: [
                  "Movie buffs",
                  "Dedicated home theater owners",
                  "Media room designers"
            ],
            apps: [
                  "Home theater movies",
                  "Immersive movie screening",
                  "Gaming sessions in dark rooms"
            ]
      },
      {
            name: "Business Projector",
            desc: "Optimized to project presentations and text spreadsheets in bright office conference rooms. It prioritizes high brightness over deep contrast.",
            features: [
                  "High brightness ANSI lumens output",
                  "HDMI, VGA, and legacy video inputs",
                  "Keystone correction adjustment rings"
            ],
            pros: [
                  "Visible in bright, fluorescent conference rooms",
                  "Sharp text rendering for presentations",
                  "Robust input port selection"
            ],
            cons: [
                  "Poor contrast and black levels in dark rooms",
                  "Loud cooling fan sound levels"
            ],
            users: [
                  "Corporate managers",
                  "Office administrators",
                  "Event presenters"
            ],
            apps: [
                  "Corporate boardroom presentations",
                  "Office spreadsheet displays",
                  "Conference lectures"
            ]
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
            name: "SATA External SSD",
            desc: "Utilizes a SATA interface inside the enclosure. It offers a major speed boost over external hard drives, capped by the SATA interface limit.",
            features: [
                  "SATA III controller bridge board",
                  "Standard solid-state flash memory",
                  "Legacy system compatibility"
            ],
            pros: [
                  "Highly affordable price per gigabyte",
                  "Reliable solid-state architecture",
                  "Runs cool during data transfers"
            ],
            cons: [
                  "Speeds are capped at ~550 MB/s due to SATA limit"
            ],
            users: [
                  "Students",
                  "Office workers backing up files",
                  "Casual computer users"
            ],
            apps: [
                  "Standard document backups",
                  "Media file transfers",
                  "General storage expansions"
            ]
      },
      {
            name: "NVMe External SSD",
            desc: "Utilizes a high-speed NVMe PCIe SSD inside the enclosure, delivering read and write speeds that exceed standard SATA drives.",
            features: [
                  "NVMe M.2 SSD storage board",
                  "PCIe-to-USB bridge controller chip",
                  "High-speed USB 3.2 Gen 2x2 protocols"
            ],
            pros: [
                  "Extremely fast transfer speeds (1000 - 2000+ MB/s)",
                  "Drastically reduces massive file transfer times",
                  "Compact physical stick form factors"
            ],
            cons: [
                  "Premium pricing",
                  "Can run hot under heavy write workloads"
            ],
            users: [
                  "Video editors",
                  "Creative professionals",
                  "Tech power users"
            ],
            apps: [
                  "Direct 4K video editing",
                  "Massive database transfers",
                  "Fast operating system backups"
            ]
      },
      {
            name: "USB External SSD",
            desc: "A standard portable SSD that connects using USB-A or USB-C ports, using standard USB protocols for plug-and-play compatibility.",
            features: [
                  "Standard USB Type-C physical port",
                  "USB Mass Storage class firmware",
                  "Universal system bus compatibility"
            ],
            pros: [
                  "Plug-and-play on all computers",
                  "No special drivers required",
                  "Widely compatible across devices"
            ],
            cons: [
                  "Speeds depend on the host computer's USB port version"
            ],
            users: [
                  "Office workers",
                  "Students",
                  "General PC users"
            ],
            apps: [
                  "Cross-platform file transfers",
                  "General data backups",
                  "Secondary storage expansion"
            ]
      },
      {
            name: "Thunderbolt External SSD",
            desc: "Designed to connect to Thunderbolt ports, linking the external drive directly to the computer's PCIe lanes for unmatched speeds.",
            features: [
                  "Dedicated Intel Thunderbolt controller chip",
                  "Direct PCIe lane bus mapping",
                  "Thunderbolt 3/4 cable interface"
            ],
            pros: [
                  "Blazing fast transfer speeds (up to 3200+ MB/s)",
                  "Direct, latency-free file access",
                  "Highly stable for direct OS booting"
            ],
            cons: [
                  "Extremely expensive pricing",
                  "Not compatible with standard USB-only ports"
            ],
            users: [
                  "Professional videographers",
                  "Creative editors",
                  "Enthusiasts requiring top speed"
            ],
            apps: [
                  "Uncompressed 8K video editing",
                  "Virtual machine hosting",
                  "External OS boot drives"
            ]
      },
      {
            name: "Rugged External SSD",
            desc: "Features a heavy-duty, shock-resistant outer shell (usually silicone or metal) that protects the SSD from drops, dust, water, and extreme weather.",
            features: [
                  "Shock-resistant silicone protective bumper",
                  "IP65/IP67 water and dust ingress rating",
                  "Reinforced internal PCB mounts"
            ],
            pros: [
                  "Protects data from outdoor drops and rain",
                  "Extremely durable for travel",
                  "Reliable in harsh field conditions"
            ],
            cons: [
                  "Bulkier and heavier design",
                  "Higher cost than standard SSDs"
            ],
            users: [
                  "Travel photographers",
                  "Outdoor field technicians",
                  "Adventure travelers"
            ],
            apps: [
                  "Outdoor photoshoot backups",
                  "Field data logging",
                  "Travel storage"
            ]
      },
      {
            name: "Portable External SSD",
            desc: "A pocket-sized external solid-state drive that balances speed and size, making it easy to carry in pocket folders or laptop bags.",
            features: [
                  "Ultra-compact physical designs",
                  "Lightweight aluminum chassis shell",
                  "USB bus power capability"
            ],
            pros: [
                  "Extremely easy to carry and pack",
                  "Draws power from the host computer",
                  "Sturdy, shock-safe casing"
            ],
            cons: [
                  "Easy to misplace due to small size",
                  "Short cable lengths"
            ],
            users: [
                  "Business travelers",
                  "Students",
                  "Remote workers"
            ],
            apps: [
                  "Daily file transfers",
                  "Portable presentations",
                  "Laptop travel extension"
            ]
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
            name: "Ethernet Adapter",
            desc: "A wired network interface controller that uses an RJ-45 port to establish a direct, physical cable connection to local networks.",
            features: [
                  "RJ-45 physical ethernet port",
                  "Wired physical media access control (MAC)",
                  "Integrated magnetic isolation modules"
            ],
            pros: [
                  "Highly stable, reliable network speeds",
                  "Low connection latency",
                  "Free from wireless signal drops"
            ],
            cons: [
                  "Requires running physical network cables",
                  "Restricts movement"
            ],
            users: [
                  "Desktop PC users",
                  "Gamers",
                  "Corporate office desks"
            ],
            apps: [
                  "Workplace network connections",
                  "Online gaming",
                  "Server terminal management"
            ]
      },
      {
            name: "PCIe Network Adapter",
            desc: "An expansion card that plugs directly into a computer motherboard's PCIe slot, offering high-speed network connections.",
            features: [
                  "PCI Express motherboard interface connector",
                  "Dedicated network controller chipset",
                  "External antenna or RJ-45 ports"
            ],
            pros: [
                  "Uses direct motherboard bus lanes for speed",
                  "Excellent heat dissipation with metal heatsinks",
                  "Free up external USB ports"
            ],
            cons: [
                  "Requires opening the computer case to install",
                  "Not compatible with laptops"
            ],
            users: [
                  "Desktop PC builders",
                  "Power users",
                  "Workstation operators"
            ],
            apps: [
                  "High-performance desktop PCs",
                  "Home server builds",
                  "Network intensive workstations"
            ]
      },
      {
            name: "USB Network Adapter",
            desc: "A compact dongle that plugs into a USB port, providing an ethernet port or wireless network connection instantly.",
            features: [
                  "Standard USB Type-A or Type-C connector",
                  "Compact dongle design",
                  "Plug-and-play driver firmware"
            ],
            pros: [
                  "Easy, driverless plug-and-play installation",
                  "Works on both laptops and desktops",
                  "Saves time on hardware upgrades"
            ],
            cons: [
                  "Slightly higher latency than internal PCIe cards",
                  "Protrudes from the USB port"
            ],
            users: [
                  "Thin laptop users lacking ethernet ports",
                  "Students",
                  "General office workers"
            ],
            apps: [
                  "Adding ethernet to thin laptops",
                  "Quick network repairs",
                  "Travel networking setups"
            ]
      },
      {
            name: "Wireless Network Adapter",
            desc: "Enables a computer to connect to wireless local area networks (Wi-Fi) using radio frequency signals, removing cable runs.",
            features: [
                  "Wireless radio transceiver chips",
                  "External or internal antenna arrays",
                  "Wi-Fi standard protocol support"
            ],
            pros: [
                  "No physical network cable clutter",
                  "Allows computer mobility within range",
                  "Easy connection to home routers"
            ],
            cons: [
                  "Prone to wireless interference and signal blocks",
                  "Slightly higher latency than ethernet"
            ],
            users: [
                  "Home office users",
                  "Laptop users",
                  "Casual web browsers"
            ],
            apps: [
                  "Home Wi-Fi internet access",
                  "Wireless desktop setups",
                  "Mobile computer networking"
            ]
      },
      {
            name: "Wi-Fi Adapter",
            desc: "A specialized wireless network adapter designed specifically to connect to local Wi-Fi router networks using RF signals.",
            features: [
                  "Wi-Fi frequency band support (2.4GHz/5GHz)",
                  "Wireless security encryption modules (WPA3)",
                  "Standard Wi-Fi antennas"
            ],
            pros: [
                  "Easy wireless connection to home routers",
                  "Keeps the computer desk cable-free",
                  "Standard wireless standard support"
            ],
            cons: [
                  "Speeds drop as distance from the router increases",
                  "Susceptible to walls blocking signals"
            ],
            users: [
                  "Home PC users",
                  "Students",
                  "Remote workers"
            ],
            apps: [
                  "Home wireless internet access",
                  "Desktop Wi-Fi upgrades",
                  "Travel laptop networking"
            ]
      },
      {
            name: "Bluetooth Adapter",
            desc: "A small USB transceiver that adds Bluetooth wireless support to PCs, letting them connect to wireless peripherals.",
            features: [
                  "Bluetooth transceiver radio antenna",
                  "USB interface port connector",
                  "Short-range wireless pairing firmware"
            ],
            pros: [
                  "Connects mice, keyboards, and headphones wirelessly",
                  "Tiny, low-profile design",
                  "Saves port space"
            ],
            cons: [
                  "Limited to short distances (typically 10 meters)",
                  "Low data speeds compared to Wi-Fi"
            ],
            users: [
                  "Desktop PC users lacking built-in Bluetooth",
                  "Peripheral users",
                  "Music fans"
            ],
            apps: [
                  "Connecting wireless headphones",
                  "Wireless mouse/keyboard pairing",
                  "Mobile phone file sharing"
            ]
      },
      {
            name: "Dual Band Adapter",
            desc: "A Wi-Fi network adapter that can connect to both the 2.4GHz and 5GHz wireless frequency bands, letting users select the best channel.",
            features: [
                  "Dual frequency radio transmitters (2.4GHz & 5GHz)",
                  "Dynamic frequency band switching",
                  "High-speed wireless channel support"
            ],
            pros: [
                  "Connects to faster 5GHz bands to avoid clutter",
                  "Maintains compatibility with long-range 2.4GHz",
                  "Less signal congestion"
            ],
            cons: [
                  "Higher cost than single-band adapters",
                  "5GHz band has a shorter physical range"
            ],
            users: [
                  "Online gamers",
                  "Video streamers",
                  "Smart home managers"
            ],
            apps: [
                  "High-definition video streaming",
                  "Online gaming setups",
                  "Congested apartment Wi-Fi"
            ]
      },
      {
            name: "Gigabit Ethernet Adapter",
            desc: "A wired ethernet adapter designed to handle data transfer rates up to 1,000 Megabits per second (1 Gbps) over copper network cables.",
            features: [
                  "10/100/1000 Mbps auto-negotiation",
                  "RJ-45 network port connector",
                  "PCIe or USB 3.0 interface bus"
            ],
            pros: [
                  "Blazing fast local file transfer speeds",
                  "Stablest connection for video calls",
                  "Low local network latency"
            ],
            cons: [
                  "Requires Gigabit network routers and Cat5e/6 cables",
                  "Wired cable constraints"
            ],
            users: [
                  "Office professionals",
                  "Gamers",
                  "NAS storage users"
            ],
            apps: [
                  "Fast local file backups",
                  "High-definition video streaming",
                  "Workplace network connections"
            ]
      },
      {
            name: "10 Gigabit Ethernet Adapter",
            desc: "A high-performance network adapter capable of handling network speeds up to 10,000 Megabits per second (10 Gbps) over copper or fiber.",
            features: [
                  "10 Gbps high-speed network controller",
                  "Large passive metal heatsinks",
                  "RJ-45 or SFP+ fiber ports"
            ],
            pros: [
                  "Incredible network transfer speeds",
                  "Drastically cuts down backup times for media servers",
                  "Optimal for corporate servers"
            ],
            cons: [
                  "Extremely expensive pricing",
                  "High power consumption and heat output"
            ],
            users: [
                  "Server administrators",
                  "Enterprise networks",
                  "Video production studios"
            ],
            apps: [
                  "Enterprise servers",
                  "Direct editing off high-speed NAS",
                  "Data center networking"
            ]
      },
      {
            name: "Fiber Network Adapter",
            desc: "A network adapter that uses optical fiber cables instead of copper wires, transmitting data as light pulses for speed and range.",
            features: [
                  "SFP+ optical transceiver ports",
                  "Fiber optic light signal processors",
                  "PCI Express motherboard bus interface"
            ],
            pros: [
                  "Zero electromagnetic interference (EMI) problems",
                  "Handles data transfers over extremely long distances",
                  "Incredibly stable speeds"
            ],
            cons: [
                  "Fragile optical fiber cables",
                  "Requires specialized fiber switch infrastructure"
            ],
            users: [
                  "Data centers",
                  "Telecommunication companies",
                  "High-security government offices"
            ],
            apps: [
                  "Data center uplinks",
                  "High-security networks",
                  "Long-distance server linkages"
            ]
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
            name: "USB 2.0 Flash Drive",
            desc: "Utilizes the older USB 2.0 standard for data transfer. It is a highly compatible and budget-friendly choice for small documents.",
            features: [
                  "USB 2.0 interface bus controller",
                  "Max theoretical bus speed of 480 Mbps",
                  "Classic USB Type-A connector"
            ],
            pros: [
                  "Extremely inexpensive pricing",
                  "Universal compatibility with all legacy hardware",
                  "Simple, reliable design"
            ],
            cons: [
                  "Very slow read/write speeds (typically 10-25 MB/s)",
                  "Slow transfers for large folders"
            ],
            users: [
                  "Students",
                  "Office workers",
                  "Casual users storing text"
            ],
            apps: [
                  "Word document transfers",
                  "Print shop file deliveries",
                  "Basic text backups"
            ]
      },
      {
            name: "USB 3.0 Flash Drive",
            desc: "Utilizes the USB 3.0 standard (often marked by blue plastic inside the connector), offering speeds up to ten times faster than USB 2.0.",
            features: [
                  "USB 3.0 controller bridge chip",
                  "High-speed USB Type-A connector (blue tab)",
                  "Theoretical bus speed of 5 Gbps"
            ],
            pros: [
                  "Fast data transfer speeds (typically 80-150 MB/s)",
                  "Backwards compatible with USB 2.0 ports",
                  "Great value for storage speed"
            ],
            cons: [
                  "Higher cost than USB 2.0 drives",
                  "Speeds throttle down on USB 2.0 ports"
            ],
            users: [
                  "Office workers",
                  "Students",
                  "General computer owners"
            ],
            apps: [
                  "Large document backups",
                  "Photo album transfers",
                  "HD movie file copying"
            ]
      },
      {
            name: "USB 3.1 Flash Drive",
            desc: "An updated standard of USB 3.0, delivering faster transfer rates (up to 10 Gbps theoretical) for quick file management.",
            features: [
                  "USB 3.1 Gen 2 high-speed controller",
                  "Advanced NAND flash memory modules",
                  "USB Type-A physical connector"
            ],
            pros: [
                  "Very fast transfer speeds (up to 300+ MB/s)",
                  "Saves time on massive file backups",
                  "Backward compatible with older ports"
            ],
            cons: [
                  "Runs warm during continuous write tasks",
                  "Requires USB 3.1 ports for maximum speed"
            ],
            users: [
                  "Designers",
                  "Photographers",
                  "Tech enthusiasts"
            ],
            apps: [
                  "Direct media file transfers",
                  "Portable software suites",
                  "Quick system image backups"
            ]
      },
      {
            name: "USB 3.2 Flash Drive",
            desc: "Utilizes the high-speed USB 3.2 Gen 2x2 standard, delivering top-tier flash drive speeds for demanding power users.",
            features: [
                  "USB 3.2 Gen 2x2 flash controller",
                  "High-density multi-channel NAND flash",
                  "Ultra-fast controller bus"
            ],
            pros: [
                  "Top-tier transfer speeds (up to 400+ MB/s)",
                  "Excellent for transferring raw camera footage",
                  "Durable build designs"
            ],
            cons: [
                  "Premium pricing",
                  "Only hits top speed on USB 3.2 Gen 2x2 ports"
            ],
            users: [
                  "Videographers",
                  "System builders",
                  "Power users"
            ],
            apps: [
                  "Direct raw photo backup",
                  "Operating system installer creation",
                  "Large database transfers"
            ]
      },
      {
            name: "USB-C Flash Drive",
            desc: "Features a modern, symmetrical USB Type-C connector, allowing direct connection to smartphones, tablets, and modern laptops.",
            features: [
                  "Symmetrical USB Type-C physical connector",
                  "OTG compatible internal controller",
                  "Slim physical drive design"
            ],
            pros: [
                  "Connects directly to phones, tablets, and thin laptops",
                  "Reversible plug orientation",
                  "High-speed data pathways"
            ],
            cons: [
                  "Cannot connect to older USB Type-A ports without adapters"
            ],
            users: [
                  "Modern laptop users",
                  "Mobile phone creators",
                  "Android tablet users"
            ],
            apps: [
                  "Expanding smartphone storage",
                  "Files sharing between phone and laptop",
                  "Ultrabook database storage"
            ]
      },
      {
            name: "Dual Interface Flash Drive",
            desc: "Features two physical connectors (usually USB-A on one end and USB-C on the other), making it easy to share files between legacy and modern devices.",
            features: [
                  "Dual connectors (USB Type-A and Type-C)",
                  "Swivel or sliding protective cover",
                  "Integrated OTG firmware"
            ],
            pros: [
                  "Seamless file transfers between old and new systems",
                  "No adapters or cables required",
                  "Highly versatile travel storage"
            ],
            cons: [
                  "Swivel hinges can wear out and loosen over time",
                  "Slightly larger physical size"
            ],
            users: [
                  "Cross-platform workers",
                  "IT professionals",
                  "Students"
            ],
            apps: [
                  "Sharing files between old and new PCs",
                  "Cross-platform data backups",
                  "IT field diagnostics support"
            ]
      },
      {
            name: "OTG Flash Drive",
            desc: "USB On-The-Go drives are built to connect directly to mobile phones and tablets, letting users read and write files without needing a PC.",
            features: [
                  "OTG class compliant controller",
                  "Micro-USB or USB-C connector ports",
                  "Low power consumption profiles"
            ],
            pros: [
                  "Access and backup files directly on mobile phones",
                  "No desktop computer required",
                  "Expands mobile storage easily"
            ],
            cons: [
                  "Not supported by older phone models",
                  "Can drain mobile phone batteries quickly"
            ],
            users: [
                  "Mobile phone photographers",
                  "Smartphone power users",
                  "Travelers"
            ],
            apps: [
                  "Backing up phone photos on the go",
                  "Playing movies on tablets",
                  "Expanding mobile phone storage"
            ]
      },
      {
            name: "Secure/Encrypted Flash Drive",
            desc: "Features built-in hardware-based encryption (typically AES 256-bit) to protect data, often requiring a password or physical keypad to unlock.",
            features: [
                  "AES 256-bit hardware encryption chip",
                  "Built-in physical unlock keypad buttons",
                  "Rugged secure epoxy potting"
            ],
            pros: [
                  "Data remains protected if the drive is lost or stolen",
                  "Hardware encryption runs independently of the host OS",
                  "Immune to software keylogger attacks"
            ],
            cons: [
                  "Very expensive pricing",
                  "If you forget the PIN/password, the data is lost permanently"
            ],
            users: [
                  "Government employees",
                  "Corporate executives",
                  "Security professionals"
            ],
            apps: [
                  "Confidential document storage",
                  "Secure key backups",
                  "Sensitive business data travel"
            ]
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
