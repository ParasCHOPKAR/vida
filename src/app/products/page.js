"use client";

import { useState } from "react";
import "./products.css";

export default function Products() {
  const products = {
  "C.S.S.D. EQUIPMENTS": {
  intro:
    "VIDA – Washer Disinfector with Dryer (Single / Double Door Fully Automatic) is a high-performance system designed to reduce hospital-acquired infections. Built with SS304 and equipped with PLC automation, it ensures safe, efficient washing, rinsing and disinfection of surgical instruments, anesthetic tubing, suction devices, bottles, glassware and metal items used in OT and CSSD.",

  features: [
    "Made with complete SS304 construction, available in 250 / 350 Ltr capacity.",
    "Straight-through model suitable for hospitals, OTs, wards and CSSD centers.",
    "PLC with Ethernet communication and 4” touchscreen HMI.",
    "Fully automatic, time-regulated washing, rinsing and disinfection process.",
    "Powerful water circulation pump for deep cleaning.",
    "Electric heater capable of raising water temperature up to 90°C.",
    "Detachable rotating spray arms for efficient washing.",
    "SS304 chamber with rounded corners for easy cleaning.",
    "Double-wall insulation for noise reduction and temperature stability.",
    "Two water inlets: 1) Normal water, 2) Treated (RO) water.",
    "Comprehensive service, programming and statistical monitoring."
  ],

  programs: [
    "Rapid Program – For lightly soiled items.",
    "Standard Program – For medium-soiled items.",
    "Intensive Care Program – For heavily soiled items.",
    "User Program – Custom cycle based on user preference."
  ],

  specs: [
    "Overall Size (Single Door Washer Disinfector): 750mm (L) x 750mm (B) x 1800mm (H).",

    "VIDA Instrument cum Catheter Dryer (Hot Air Oven):",
    "• Outer Size: 900mm (L) x 825mm (W) x 1800mm (H).",
    "• Inner Size (Instrument): 375mm (L) x 550mm (W) x 1275mm (H).",
    "• Inner Size (Catheter):   375mm (L) x 550mm (W) x 1275mm (H).",
    "• Double Door (Double Chamber) – separate drying sides.",
    "• One side for instruments, other side for catheter / ventilator tubes.",
    "• Both drying chambers operate independently.",
    "• PID humidity control for efficient drying.",
    "• Temperature Range (Instrument): 30°C to 250°C.",
    "• Temperature Range (Catheter): 5°C to 60°C.",
    "• Internal SS304 air circulation & ventilation.",
    "• Toughened glass doors.",
    "• SS304 internal chamber with rounded corners.",
    "• Six perforated SS instrument trays + 3 catheter trays.",
    "• Power Consumption: 2kW (instrument), 1kW (catheter).",
    "• S.S. tubular heaters and SS / MS outer cabinet.",

    "VIDA Liters Capacity Ultrasonic Cleaning Machine:",
    "• Available Tank Sizes: 30L, 50L, 60L, 70L, 100L.",
    "• Ultrasonic Power: 500W / 750W / 1000W.",
    "• Tank Size Options:",
    "   - 400 × 400 × 200 mm",
    "   - 500 × 500 × 200 mm",
    "   - 550 × 550 × 200 mm",
    "   - 750 × 250 × 375 mm",
    "   - 750 × 450 × 300 mm",
    "• Frequency: 45 ± 3 KHz.",
    "• Electric Supply: 230V AC, 50Hz, 2-phase.",
    "• Heater: Raises liquid temperature up to 0–70°C.",
    "• Transducer: Panel-bonded on tank base.",
    "• Accessories: SS lid, wire mesh basket, drain strainer.",
    "• Power Supply: 230V AC, 3-phase with neutral & earthing.",
    "• Tank Material: SS304 (16-gauge), argon-welded, buffed finish.",
    "• Construction: Transducerized tank + ultrasonic generator in SS304 body.",
    "• Built-in cooling fan for long-term operation.",
    "• Ideal for surgical instrument cleaning."
  ],

  images: [
    "/pro_pic/PRO_1_1.png",
    "/pro_pic/pro_1_3.png",
    "/pro_pic/pro_1_4.png",
    "/pro_pic/pro_1_5.png"
  ]
},









  "Automatic Bed Pan Washer": {
  intro:
    "VIDA Fully Automatic Bed Pan Washer / Disinfector is built as per ISO-15883 Standards. It maintains AO value, ensures complete disinfection, and provides a fast operational cycle. Designed to safely clean and disinfect bed pans and urine pots with minimal manual effort.",

  features: [
    "PLC Controller Box",
    "30L Hot Water Tank with instant integrated steam generator",
    "Steamer tank 20L capacity",
    "0.5 HP motor for hot & cold water supply",
    "Soap & disinfectant solution tank",
    "Jet spray pressure cleaning with high-temperature disinfection (80–90°C)",
    "Built-in safety systems with foot-operated door",
    "Fully automatic functioning with precise temperature control",
    "Fast cycle time",
    "Single-phase operation (15 Amp supply)"
  ],

  specs: [
    "Technical Specification:",
    "• Height: 1680 mm",
    "• Width: 750 mm",
    "• Depth: 570 mm",
    "• Cycle Time: ~12 minutes (overall)",

    "Cycle Process:",
    "1. Washing with cold water",
    "2. Washing with hot water",
    "3. Disinfectant rinsing (Disinfection)",
    "4. Steam penetration",
    "5. Final rinse with cold water",

    "Fabrication:",
    "• SS304 body construction",
    "• Internal SS plumbing, SS boiler tank, liquid soap tank & frame",
    "• Automatic ‘Press to Start’ operation with indication lights",
    "• Temperature-controlled process",
    "• Foot-operated door system with additional safety lock",

    "Mounting: On screwed 4 adjustable legs",
    "Loading: Front loading",
    "Capacity: 1 bedpan / 2 urine bottles",
    "Ground Clearance: 140–150 mm (adjustable)"
  ],

  images: [
    "/pro_pic/PRO_2_1.png",
    "/pro_pic/pro_2_2.png",
    "/pro_pic/pro_1_4.png",
  ]
},












"Horizontal Autoclave": {
  intro:
    "VIDA Horizontal Autoclave is a high-performance sterilizer designed for CSSD, hospitals and laboratories. Built using SS316 / SS304 with advanced PLC automation, it delivers reliable, validated steam sterilization cycles.",

  features: [
    "Chamber made from heavy-duty SS316 with 6 mm thickness.",
    "Doors constructed from SS316 with 12 mm thickness.",
    "Jacket built from SS316, 8 mm thickness for durability.",
    "High-performance steam generator (18 kW / 27 kW).",
    "Operates at 121°C / 134°C with pressure levels 20–32 psi.",
    "Hydraulic steam door locking system.",
    "Improved design without bellow-plate locking system.",
    "SS304 hinges and clutch nut assembly.",
    "1 HP or 3 HP vacuum pump for deep vacuum cycles.",
    "PLC-based automation with alarm & monitoring.",
    "Digital HMI (7.5-inch touchscreen) with cycle programming.",
    "Multiple safety systems including temperature sensors & safety valves.",
    "Air-over-steam pulsing pressure system.",
    "Vacuum breaker with 0.3-micron sterile air filter.",
    "Pressure switch to prevent accidental pressure build-up.",
    "Steam trap for fast and complete air removal.",
    "Argon-welded SS joints and SS304 piping with clamp fittings.",
    "Automatic low-water cut-off system for heater safety.",
    "Rapid heating and cooling capability.",
    "Digital multi-level water sensing (6-level accuracy).",
    "Machine interlock prevents start when water is insufficient.",
    "Thermal printer for real-time cycle printouts."
  ],

  specs: [
    "Steam Generator: SS304 plates with argon welding, front SS bush for heater access.",
    "Power Options: 9 kW / 18 kW / 27 kW / 36 kW, 3-phase.",
    "Pressure Rating: Up to 2.2 kg/cm², hydrostatically tested 2 times.",
    "Outgoing piping: SS304 with clamp fittings.",
    "Temperature Sensors: PT-100 (Chamber & Jacket).",
    "Sensors: Pressure & vacuum sensors for chamber / jacket.",
    "Safety: Two safety valves + temperature sensor on jacket.",
    "Exhaust: Pneumatic valve system for steam exhaust.",
    "Vacuum Pump: 1 HP or 3 HP (as per model).",
    "Water Level Indicator: Digital sensor integrated.",
    "",
    "Available Sterilization Cycles:",
    "• VLT Cycle",
    "• Bowie & Dick Cycle",
    "• Warped Cycle",
    "• Unwrapped Cycle",
    "• Flash Cycle",
    "• Customize Cycles (2 numbers)",
    "",
    "Available Chamber Sizes:",
    "Cylindrical:",
    "• 16” × 24”",
    "• 20” × 36”",
    "• 20” × 48”",
    "",
    "Rectangular:",
    "• 2’ × 2’ × 4’",
    "• 2.5’ × 2.5’ × 4’",
    "• 2.5’ × 2.5’ × 5’",
    "• 3’ × 3’ × 6’"
  ],

  images: [
    "/pro_pic/PRO_3_1.png",
    "/pro_pic/PRO_3_2.png",
    "/pro_pic/PRO_3_3.png",
    "/pro_pic/PRO_3_1.png",
    "/pro_pic/PRO_3_4.png",
    "/pro_pic/PRO_3_5.png",
  ]
},












"E.T.O. Sterilizer": {
  intro:
    "VIDA Automatic E.T.O. Sterilizer is designed for sterilizing heat- and moisture-sensitive medical devices. It includes full PLC automation, vacuum cycles, safety systems and a thermal printer for documentation.",

  features: [
    "Automatic E.T.O. Sterilizer with built-in thermal printer.",
    "Available sizes: 12”×12”×24”, 12”×12”×36”, 12”×12”×48”, 12”×12”×54”.",
    "Total cycle time with aeration mode: approx. 6 hours.",
    "Made entirely from SS304 – chamber, body and door (6 mm chamber thickness).",
    "Operates at 1 kg/cm² gas pressure.",
    "Hydraulic pressure tested at 2 kg.",
    "Manual & semi-automatic operating modes.",
    "Automatic mode available if auto cycle does not work.",
    "Pneumatic solenoid valve ensures perfect automation.",
    "Safe cartridge puncturing only after proper negative pressure is built.",
    "Outer wall includes heating arrangement for maintaining temperature.",
    "Fully insulated & powder-coated body.",
    "Manual safety-locking system for door.",
    "Comes with three SS304 trays for easy loading.",
    "Temperature indicator with 0°C to 100°C range.",
    "Pressure indicator with 28” vacuum to 30 psi range.",
    "High-vacuum pump-based vacuuming system.",
    "Exhaust & air break system with sterilizer gas filtration.",
    "Vacuum break air filtered for safety.",
    "Chamber constructed using argon-welded SS304.",
    "Outer body and ETO door made of SS304.",
    "Silicone door gasket for long life.",
    "63 mm pressure gauge & 63 mm vacuum gauge.",
    "Electrical 2/2-way control valve.",
    "Water-ring vacuum pump: 3 HP, 1.5-phase.",
    "Vacuum sensor monitors chamber vacuum.",
    "PT-100 temperature sensor for accurate reading.",
    "PLC control with 4.3-inch HMI & built-in thermal printer.",
    "Supports automatic heat sealing machine for CSSD reels & pouches.",
    "Ensures 8–10 mm medical-standard sealing width.",
    "Used for sealing CSSD packing rolls, pouches, sterilization reels.",
    "High output, uniform sealing, long durability.",
    "PTFE non-stick sealing bands with electronic temperature control.",
    "Adjustable conveyor, cooling block, embossing wheel.",
    "Continuous operation without overheating.",
    "Maintenance-free and operator fatigue reduction.",
    "Smooth and silent performance.",
    "Ideal for heavy CSSD workload.",
    "Cycle printing system included."
  ],

  specs: [
    "Chamber construction: SS304, 6 mm thickness, argon-welded.",
    "Outer body: SS304 (powder coated & insulated).",
    "ETO door: SS304 with manual safety lock.",
    "Operating gas pressure: 1 kg/cm².",
    "Hydraulic pressure test: 2 kg.",
    "Temperature indicator: 0°C to 100°C.",
    "Pressure indicator range: 28” vacuum to 30 psi.",
    "Vacuum system: High-vacuum pump.",
    "Vacuum pump: 3 HP, 1.5-phase water-ring pump.",
    "Cartridge safety: Puncture enabled only after negative pressure achieved.",
    "Control valve: Electric 2/2-way valve.",
    "Sensors: PT-100 temperature sensor & vacuum sensor.",
    "PLC automation: 4.3\" HMI with cycle printing.",
    "",
    "Available Chamber Sizes:",
    "• 12”×12”×24”",
    "• 12”×12”×36”",
    "• 12”×12”×48”",
    "• 12”×12”×54”",
    "",
    "Heat Sealing Machine Specifications:",
    "• Sealing width 8–10 mm (medical standard).",
    "• PTFE sealing bands & cooling fans.",
    "• Adjustable conveyor system.",
    "• Suitable for CSSD reels, pouches & Tyvek material.",
    "• Continuous operation, high efficiency.",
    "• No heater rewinding, maintenance-free.",
    "• Strong sealing consistency, reduced operator fatigue."
  ],

  images: [
    "/pro_pic/PRO_4_1.png",
    "/pro_pic/PRO_4_2.png",
    "/pro_pic/PRO_3_3.png",

  ]
},








"Manual Bed Pan Washer": {
  intro:
    "VIDA Manual Bed Pan Washer includes Conical D.U / Sluice Sinks with platform and inbuilt flush tank. Designed for effective and hygienic cleaning of bed pans, urine pots, sputum mugs, kidney trays and dirty utility materials. Made entirely from SS304 with high-pressure sprinkling nozzles and odor-prevention design.",

  features: [
    "SS 304 quality, 16-gauge, matt-finish pre-polished stainless steel sheet",
    "Three-side half-closed stainless steel panel",
    "6-inch (150mm) back panel on top of the sink",
    "Attached fixed lid with high-pressure water sprinkling nozzles",
    "Air-tight lid prevents bed pan/urine pot odor from escaping",
    "Automatic water inlet cut-off when the lid is open (prevents leakage)",
    "Available with circular Conical D.U Sink and Square Sink options",
    "Suitable for cleaning bed pans, urine pots, sputum mugs, kidney trays and more"
  ],

  specs: [
    "Conical D.U Sink Size: 450mm diameter × 600mm depth",
    "Square Sink Size: 450mm × 450mm × 300mm",
    "Overall size customizable as per site requirements",
    "Designed to prevent air mixing and eliminate bad odor",
    "High-pressure sprinkling nozzles for deep cleaning",
    "100% SS 304 construction for durability and hygiene"
  ],

  extra: [
    "Includes SS 304 bedpan and urine pot wall-mounted rack",
    "Rack has SS hooks suitable for hanging measuring jars or urine pots",
    "Custom rack sizes available as per site requirement"
  ],

  images: [
    "/pro_pic/PRO_5_1.png",
    "/pro_pic/PRO_5_2.png",
    "/pro_pic/PRO_5_3.png",
    "/pro_pic/PRO_5_4.png",

  ]
},



"C.S.S.D. PROJECT": {
  intro:
    "VIDA provides complete turnkey total solutions for CSSD. Our services include design layout, installation planning, documentation support, onsite training and maintenance services by trained engineers.",

  features: [
    "Providing comprehensive total solutions for CSSD",
    "In-house design department for complete project layout",
    "Detailed installation plan, foundation drawings, electrical wiring & plumbing diagrams",
    "Supply of DQ, IQ, OQ, PQ, MoC certificates, calibration certificates & trust-worthiness documents required for NABH",
    "Submission of weekly schedules with updates, onsite training & demonstration of equipment",
    "Maintenance services provided by trained VIDA engineers"
  ],

  specs: [
    "Branded material & components used",
    "Fabrication by ASME-trained workers",
    "Easy-to-replace and locally available components",
    "Easy to operate with clear instructions",
    "Colour/number-coded electrical wiring for identification",
    "Energy-saving & eco-friendly design with low noise operation",

    // Features of Non-Sterile Area Equipment
    "Electrically heated using inbuilt steam generator or external boiler source",
    "Manual cycle via operating valve OR automatic cycle via Microprocessor/PLC",
    "Touch screen HMI or Printer optional",
    "Pre-vacuum & post-vacuum pulses with inbuilt vacuum pump",
    "Available in single-door or double-door models",
    "Pneumatically operated sliding door or radial locking hinge door",
    "Material used: SS316, SS316L, SS304, steel & other alloys",
    "Washer-disinfector available with single or double door configurations",
    "Washer-disinfector also available with inbuilt dryer",
    "Automatic Cycle + Touch Screen Display available",

    // Sterile area features
    "Sterilizer constructed using SS316, SS304L, steel & other alloys",
    "End ring made hydraulically without joints to withstand high pressure",
    "All joints fully argon welded",
    "Manual or Touch Screen HMI control",
    "Two safety valves + pressure switch for max safety",
    "Low/High water level device protects heater",
    "Pressure lock device for door safety",
    "Operates at 121°C / 134°C temperature",
    "Pressure at 21/32 psi (1.05 – 2.2 kgf/cm²)",
    "Hydrostatically tested twice the working pressure",
    "Vacuum system for drying",
    "Power: 9kW / 18kW (440V, 3-phase)"
  ],


  images: [
    "/pro_pic/PRO_6_1.png",
    "/pro_pic/PRO_6_2.png",
    "/pro_pic/PRO_6_3.png",

  ]
}






  };

  const productNames = Object.keys(products);
  const [selectedProduct, setSelectedProduct] = useState(productNames[0]);
  const [zoomImage, setZoomImage] = useState(null);
  const current = products[selectedProduct];

  return (
    <>
      <main className="products-page">
        
        {/* HERO */}
<section className="hero">
  <div className="hero-bg"></div>

  {/* Floating Shapes */}
  <div className="hero-shape shape1"></div>
  <div className="hero-shape shape2"></div>

  <div className="hero-overlay"></div>

  <div className="hero-content">
    <div className="hero-glass">
      <h1>Premium Medical & CSSD Equipment</h1>
      <p>
        Engineered for performance, reliability and healthcare standards.
      </p>
    </div>
  </div>
</section>


        {/* LAYOUT */}
        <section className="prod-layout">
          
          {/* SIDEBAR */}
          <div className="prod-list">
            <h2>Product Categories</h2>

            {productNames.map((name) => (
              <button
                key={name}
                className={`prod-item ${
                  selectedProduct === name ? "active" : ""
                }`}
                onClick={() => setSelectedProduct(name)}
              >
                {name}
              </button>
            ))}
          </div>

          {/* DETAILS */}
          <div className="prod-details">
            <div className="prod-details-main">
              
              {/* TEXT */}
              <div className="prod-text">
                <h2>{selectedProduct}</h2>
                <p className="prod-intro">{current.intro}</p>

                {/* Features */}
                {current.features && (
                  <div className="prod-section">
                    <h3>Key Features</h3>
                    <ul>
                      {current.features.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Specs */}
                {current.specs && (
                  <div className="prod-section">
                    <h3>Technical Highlights</h3>
                    <ul>
                      {current.specs.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* IMAGES */}
              <div className="prod-images">
                <img
                  src={current.images[0]}
                  className="details-img main"
                  onClick={() => setZoomImage(current.images[0])}
                />

                <div className="thumb-row">
                  {current.images.slice(1).map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      className="thumb-img"
                      onClick={() => setZoomImage(img)}
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* IMAGE ZOOM MODAL */}
      {zoomImage && (
        <div className="img-modal" onClick={() => setZoomImage(null)}>
          <div className="img-modal-content">
            <button className="img-close" onClick={() => setZoomImage(null)}>×</button>
            <img src={zoomImage} className="img-modal-img" />
          </div>
        </div>
      )}
    </>
  );
}
