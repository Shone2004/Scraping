

import product1 from "../assets/products/1.png";
import product2 from "../assets/products/2.png";
import product3 from "../assets/products/3.png";
import product4 from "../assets/products/4.png";
import product5 from "../assets/products/5.png";
import product6 from "../assets/products/6.png";
import product7 from "../assets/products/7.png";
import product8 from "../assets/products/8.png";
import product9 from "../assets/products/9.png";
import product10 from "../assets/products/10.png";
import product11 from "../assets/products/11.png";

const productsData = [
  {
    id: 1,
    slug: "plastic-bailing-machine",
    name: "Plastic Bailing Machine",
    category: "Waste Management",
    tagline: "Heavy-duty scrap baling for compact, transport-ready bales.",
    image: product1,
    introduction:
      "The Plastic Bailing Machine is a comprehensive scrap baling press built for facilities that need to compress plastic, cardboard, and other recyclable scrap into dense, transport-ready bales. Constructed from high-grade steel and driven by a hydraulic clamping system, it is engineered for continuous industrial use. Every unit undergoes rigorous quality testing before it leaves the factory, and the machine is available in both vertical and horizontal configurations so it can be matched to the layout and throughput of any recycling or waste-aggregation site.",
    usefulness:
      "Baling reduces the volume of loose plastic and scrap dramatically, which cuts storage space, lowers transport costs, and makes onward sale to recyclers far more efficient. Because the resulting bales are uniform in size and tightly compressed, they are easier to stack, count, and load — a major advantage for scrap dealers, MRFs (material recovery facilities), and municipal waste yards that handle high volumes of recyclables daily.",
    specifications: [
      { label: "Motor Power", value: "7.5 HP" },
      { label: "Motor", value: "Crompton" },
      { label: "Vertical Clamping Force", value: "Hydraulic" },
      { label: "Material of Baling Machine", value: "Mild Steel" },
      { label: "Baling Capacity", value: "15 ton" },
      { label: "Number of Ties of Rope", value: "2 Nos." },
      { label: "Number of Cylinders", value: "1 No." },
      { label: "Number of Doors", value: "2 Nos." },
      { label: "Size of Bale", value: "700 x 500 x 650 mm" },
      { label: "Feed Opening", value: "700 x 500 mm" },
      { label: "Type of Pump", value: "Hydraulic gear-cum-plunger pump system" },
      { label: "Electric Supply", value: "3 Phase" },
    ],
  },
  {
    id: 2,
    slug: "single-shaft-shredder-machine",
    name: "Single Shaft Shredder Machine",
    category: "Waste Management",
    tagline: "Precision rotary shredding for plastic, wood, rubber, and paper.",
    image: product2,
    introduction:
      "The Single Shaft Shredder Machine uses a set of rotating V-shaped knives mounted on a single shaft, working against fixed knives to tear, cut, and squeeze materials into uniformly sized pieces. Its extrusion-based cutting action allows it to handle a wide range of materials, including plastic, wood, rubber, and paper, making it a versatile front-line machine for size-reduction operations. The V-shaped cutter geometry grabs material efficiently and cuts it with minimal energy draw and low operating noise.",
    usefulness:
      "Shredding is the first and most important step in preparing waste for recycling, composting, or further processing — reducing bulky material into a consistent particle size increases downstream processing speed and improves resale value of recovered plastic and other scrap. The easy-to-replace knife design also keeps maintenance downtime low, making this machine well suited to recycling units, industrial scrap yards, and processing plants that need reliable day-to-day throughput.",
    specifications: [
      { label: "Motor Power", value: "1440 RPM, 5 HP" },
      { label: "Motor", value: "Crompton" },
      { label: "Material of Housing Enclosure", value: "Mild Steel" },
      {
        label: "Control Panel",
        value: "Manual, Siemens-make DOL starter with reverse and forward switch",
      },
      { label: "Electric Supply", value: "3 Phase" },
      {
        label: "Inside Dimension of Shredder Chamber",
        value: "300 mm x 500 mm (tolerance ±10 mm)",
      },
    ],
  },
  {
    id: 3,
    slug: "municipal-solid-waste-twin-shaft-shredder",
    name: "Municipal Solid Waste Twin Shaft Shredder Machine",
    category: "Waste Management",
    tagline: "High-capacity double-shaft shredding built for heavy municipal loads.",
    image: product3,
    introduction:
      "The Twin Shaft Shredder Machine is engineered for high operational efficiency and long service life, using two rotating shafts fitted with hardened blades to shred organic and municipal solid waste. Its ruggedized components resist degradation from impact, heat, and heavy continuous loads, and an automatic control panel gives the machine built-in jam recovery: if the rotors jam, the panel automatically reverses direction to clear the blockage before resuming forward operation.",
    usefulness:
      "Because it can process large volumes of mixed municipal solid waste and organic waste at once, this machine is ideal for municipal corporations, landfill sites, and large-scale composting or waste-to-energy facilities that need dependable, high-throughput size reduction with minimal manual intervention. The automatic jam-clearing feature also reduces downtime and operator involvement, which is critical at high-volume sites running multiple shifts.",
    specifications: [
      { label: "Mechanism Type", value: "Double shaft with rotating blades" },
      {
        label: "Capacity",
        value: "Organic waste: 800–1000 kg/hr; MSW waste: 200–300 kg/hr",
      },
      { label: "Blade Material", value: "C45 (hardened)" },
      { label: "Approx. Machine Size", value: "L-8ft x W-3.1ft x H-4ft" },
      { label: "Working Area", value: "360 mm x 600 mm" },
      { label: "Motor HP", value: "10 HP + 10 HP" },
      { label: "Total Motors", value: "2" },
      { label: "Total Power", value: "20 HP" },
      { label: "Shaft", value: "2 Nos. hexagonal shaft" },
      { label: "Housing", value: "Mild Steel" },
      { label: "Structure and Frame", value: "Mild Steel" },
      { label: "Motor Make", value: "Havells" },
      { label: "Power Supply", value: "3 Phase, 440V, 50Hz" },
      {
        label: "Panel Function",
        value:
          "Automatic — auto and manual modes; on jam, machine stops, reverses to clear jam, then resumes forward rotation",
      },
    ],
  },
  {
    id: 4,
    slug: "plastic-dust-remover-machine",
    name: "Plastic Dust Remover Machine",
    category: "Waste Management",
    tagline: "Fatka-style drum cleaning to strip dust from plastic bags before recycling.",
    image: product4,
    introduction:
      "The Plastic Dust Remover ('Fatka') Machine is built to remove accumulated dust and fine debris from plastic bags (polyethylene) before they are processed further. Manufactured from corrosion-resistant, lightweight components using rugged construction techniques, the machine is offered across a range of sizes, designs, and specifications, and every unit is checked against multiple quality parameters before dispatch.",
    usefulness:
      "Clean, dust-free plastic feedstock is essential for producing high-quality recycled granules, since dust and contamination lower the value and processability of reclaimed plastic. This machine is especially useful for plastic recyclers, waste segregation units, and PET/polyethylene processing plants that need consistently clean input material to protect downstream shredding, washing, and pelletizing equipment.",
    specifications: [
      { label: "Size (Drum Dia.)", value: "1000 mm" },
      { label: "Drum Length", value: "1400 mm" },
      { label: "Motor", value: "3 HP" },
      { label: "Motor Make", value: "SuperMech / Heypex" },
      { label: "Output", value: "100–200 kg/hour" },
      { label: "Length", value: "6 ft" },
      { label: "Width", value: "3.56 ft" },
      { label: "Height", value: "4.5 ft" },
      { label: "Material", value: "Mild Steel with paint finish" },
      { label: "Electric Supply", value: "3 Phase" },
    ],
  },
  {
    id: 5,
    slug: "compost-screening-machine",
    name: "Compost Screening Machine",
    category: "Waste Management",
    tagline: "Rotary trommel screening for uniform, high-quality compost output.",
    image: product5,
    introduction:
      "The Compost Screening Machine is a self-cleaning rotary drum (trommel) screener designed for fertilizer production and commercial composting facilities. It separates finished compost from returning material and classifies the product for a uniform particle grade. The machine uses a combined screen-mesh design that is easy to service and replace, and it is prized in the industry for its simple structure, convenient operation, and stable long-term performance — making it a go-to choice for compound fertilizer, organic fertilizer, and powder fertilizer production lines.",
    usefulness:
      "Consistent screening is what turns raw decomposed material into a saleable, uniform compost product, and this machine's multi-stage conveyor and trommel system (including a dedicated RDF conveyor for refuse-derived fuel separation) allows large composting plants and fertilizer manufacturers to run a continuous, high-volume screening line with minimal manual sorting.",
    specifications: [
      {
        label: "Feeding Conveyor",
        value: "Width 800 mm x Length 9000 mm, Motor 5 HP, trough-type conveyor",
      },
      {
        label: "Trommel Screening",
        value:
          "Dia. 1200 mm x Length 4500 mm, hole dia. 4 mm, shell thickness 1.5 mm, hole-ring thickness 10 mm, end-shell thickness 5 mm, Motor 7.5 HP",
      },
      {
        label: "4 mm Output Conveyor",
        value: "Width 800 mm x Length 9000 mm, Motor 5 HP, trough-type conveyor",
      },
      {
        label: "RDF Conveyor",
        value: "Width 800 mm x Length 5000 mm, Motor 3 HP, trough-type conveyor",
      },
    ],
  },
  {
    id: 6,
    slug: "composting-machine",
    name: "Composting Machine / Decomposition Machine",
    category: "Waste Management",
    tagline: "Fully automated organic waste-to-compost conversion in 24–36 hours.",
    image: product6,
    introduction:
      "This Composting (Decomposition) Machine converts organic waste into high-quality compost in as little as 24–36 hours through a fully automated process. Incoming waste is shredded for efficient decomposition, then transferred into a dedicated stainless-steel tank where sensors and a thermic-fluid heating and dehydration system maintain the ideal temperature and humidity for micro-organisms to thrive. The system requires no specialized labor to operate, with a fully programmed control panel managing the entire cycle.",
    usefulness:
      "Rapid, automated on-site composting lets housing societies, institutions, hotels, and municipal facilities process food and organic waste locally instead of sending it to landfill — cutting collection and transport costs, reducing landfill methane emissions, and producing usable compost as a valuable byproduct, all without needing trained operators to run it.",
    specifications: [
      { label: "Body of Tank & Dimensions", value: "Stainless Steel 304" },
      { label: "Thickness of Tank", value: "2.5 mm" },
      { label: "Internal Tank Coating", value: "SS 304, minimum life span 5 years" },
      { label: "Outer Body Type & Coating", value: "SS 304" },
      { label: "Gearbox with Motor", value: "Tank 3 HP, Shredder 3 HP, with gearbox" },
      { label: "Air Circulation / Exhaust", value: "Blower, fully automatic system" },
      { label: "Operation", value: "Fully automatic panel control" },
      { label: "Programming", value: "Pre-programmed panel for suitable process data" },
      { label: "Heating System", value: "Available" },
      { label: "Outer Body Dimensions", value: "L 2350 mm x W 1250 mm x H 2000 mm" },
      { label: "Total Weight", value: "1200 kg" },
    ],
  },
  {
    id: 7,
    slug: "sanitary-napkin-incinerator",
    name: "Sanitary Napkin Incinerator",
    category: "Women's Hygiene",
    tagline: "Safe, hygienic, on-site disposal of sanitary and menstrual waste.",
    image: product7,
    introduction:
      "The Sanitary Napkin Incinerator gives institutions a clean, hygienic way to dispose of sanitary napkins, medical dressings, and other menstrual waste on-site. Verdant offers this as a readymade portable unit or as a custom-designed system sized to specific capacity needs (50, 100, 200, or 300+ napkins), with a compact, wall-mountable design suited to eco-conscious disposal anywhere it's needed.",
    usefulness:
      "On-site incineration eliminates the health and hygiene risks of storing or transporting used sanitary waste, and removes the stigma and inconvenience associated with manual disposal. It's especially valuable for schools, offices, public restrooms, and other high-footfall locations that need a discreet, safe, and environmentally responsible way to manage menstrual hygiene waste.",
    specifications: [
      { label: "Material Used", value: "MS (Mild Steel)" },
      {
        label: "Digital Display",
        value: "Temperature, client name, timing cycle",
      },
      { label: "Coil", value: "1000 / 1200 Watt" },
      { label: "Mounting", value: "Wall mountable" },
      { label: "Chamber Capacity", value: "30, 50, 100, 200, 500" },
      { label: "Design", value: "Compact design" },
      {
        label: "Insulation",
        value: "Ceramic high-density insulation for external thermal protection",
      },
      { label: "Warranty", value: "1 year" },
    ],
  },
  {
    id: 8,
    slug: "toilet-citizen-feedback-machine",
    name: "Toilet Citizen Feedback Machine",
    category: "Additional Solutions",
    tagline: "One-tap digital feedback that replaces paper-based satisfaction surveys.",
    image: product8,
    introduction:
      "The Toilet Citizen Feedback Machine offers a scientific way to measure customer satisfaction at public facilities. Instead of relying on paper feedback forms, users press a simple keypad button and the machine logs the response along with time, month, date, and customer details, enabling honest, timely, and easily analyzed feedback data on facility satisfaction levels.",
    usefulness:
      "Replacing paper feedback with an instant digital tap saves paper, eliminates the staff time needed to manage and tally physical feedback slips, and saves customers time as well. Because responses are tied to a timestamp and stored on an SD card with essentially unlimited capacity, facility managers — such as municipal corporations, malls, airports, and public toilet operators — get an ongoing, analyzable record of service quality.",
    specifications: [
      { label: "Input Voltage", value: "AC/DC 110–240V, 50/60Hz" },
      { label: "Operating Voltage", value: "DC 12V, 1A" },
      { label: "Delay Time (Customizable)", value: "1, 2, or 5 minutes" },
      { label: "Dimensions", value: "L 210 x W 210 x H 60 mm" },
      { label: "Weight", value: "1 kg" },
      { label: "Keypad", value: "Dome metal switch" },
      { label: "Audio Indicators", value: "Buzzer / LED" },
      { label: "Storage", value: "Micro SD card, unlimited data storage capacity" },
      {
        label: "Body",
        value: "Metal body with shockproof powder coating",
      },
    ],
  },
  {
    id: 9,
    slug: "solid-waste-incinerator",
    name: "Solid Waste Incinerator",
    category: "Waste Management",
    tagline: "Compact incineration for dry general and medical waste.",
    image: product9,
    introduction:
      "The Solid Waste Incinerator is designed to dispose of general dry waste and medical waste — including used PPE kits, masks, cotton, dry leaves, paper, and similar dry materials. It runs a fully automatic 20-minute burn cycle with automatic temperature control, auto cut-off, and multiple safety systems including overload protection, smoke control, and an audible safety alarm.",
    usefulness:
      "For clinics, hospitals, offices, and public facilities that generate a steady stream of dry and medical waste, this incinerator offers a compact, self-contained way to destroy potentially infectious or contaminated material on-site — reducing the risk of improper disposal while its safety interlocks (MCB protection, latch-lock door, temperature control) keep operation safe for non-specialist staff.",
    specifications: [
      { label: "Capacity", value: "15–20 diapers/napkins/masks" },
      { label: "Power Source", value: "Battery / Solar / Electricity" },
      { label: "Dimensions", value: "750 x 300 x 350 mm" },
      { label: "Weight", value: "45 kg" },
      { label: "Operation", value: "Fully automatic machine" },
      { label: "External Body Thickness", value: "1.6 mm" },
      { label: "Power Supply", value: "220–240 W" },
      { label: "Inner Chamber", value: "1.2 mm GI pipe" },
      { label: "Overload Protection", value: "Yes" },
      { label: "MCB Protection", value: "Yes" },
      { label: "Mounting Type", value: "Stand type" },
      { label: "Door Lock", value: "Latch lock" },
      { label: "Display", value: "LED" },
      { label: "Process Duration", value: "20 minutes" },
      { label: "Temperature Controller", value: "Yes" },
      { label: "Auto Cut Off", value: "Yes" },
      { label: "Safety Features", value: "Safety alarm" },
      { label: "Smoke Control Device", value: "Yes" },
      { label: "Warranty", value: "1 year" },
    ],
  },
  {
    id: 10,
    slug: "sanitary-napkins-vending-machine",
    name: "Sanitary Napkins Vending Machine",
    category: "Women's Hygiene",
    tagline: "Coin-operated, discreet access to sanitary pads on demand.",
    image: product10,
    introduction:
      "The Verdant India Sanitary Napkin/Pad Vending Machine provides a discreet, reliable way to make feminine hygiene products available whenever needed. It's a fully automatic, coin-operated machine that dispenses a sanitary napkin using a spiral vending mechanism, and can be wall-mounted or floor-mounted depending on the space available.",
    usefulness:
      "Placing this machine in schools, colleges, offices, and public restrooms ensures menstrual products are always accessible without requiring staff intervention, reducing stigma and improving hygiene outcomes for students and employees. Its multiple coin-denomination support and configurable storage capacity make it easy to adapt to different institutional budgets and expected demand.",
    specifications: [
      { label: "Operation Grade", value: "Automatic" },
      { label: "Typical Usage", value: "Schools and colleges" },
      { label: "Mounting", value: "Wall mountable / floor mountable" },
      { label: "Machine Operation Type", value: "Coin operated" },
      { label: "Coins Accepted", value: "₹1, ₹2, ₹5" },
      { label: "Body Material", value: "Mild Steel" },
      { label: "Vending Mechanism", value: "Spiral" },
      { label: "Storage Capacity", value: "25, 50, 75, or 100 napkins" },
    ],
  },
  {
    id: 11,
    slug: "pet-bottle-shredder-machine",
    name: "Pet Bottle Shredder Machine",
    category: "Waste Management",
    tagline: "Eco-friendly, on-the-spot PET bottle shredding for high-traffic sites.",
    image: product11,
    introduction:
      "The PET Bottle Shredder Machine tackles plastic waste at the source by shredding bottles on the spot at high-traffic locations such as railway stations and parks. It functions as a central collection point that prevents littering and diverts plastic from landfills, turning discarded bottles into shredded, recyclable material that feeds directly back into the recycling supply chain. The machine includes a thermal printer that can issue a coupon for each bottle deposited.",
    usefulness:
      "By shredding bottles immediately at the point of disposal, this machine reduces the volume of loose plastic waste, discourages littering through an incentive (the printed coupon), and produces recyclable shredded plastic ready for resale — making it a strong fit for railway stations, public parks, malls, and any organization running plastic-collection or reverse-vending initiatives.",
    specifications: [
      { label: "Motor Type", value: "2 HP" },
      { label: "Required Voltage", value: "Single phase (230V | 16A)" },
      { label: "Machine Type", value: "Automatic" },
      { label: "Crush Time", value: "One cycle" },
      { label: "Machine Color", value: "Black (powder coated)" },
      { label: "Display Size", value: "10 inches" },
      { label: "Thermal Printer", value: "Used for coupon printing" },
      { label: "Blade Material", value: "Hardened steel" },
      { label: "Machine Material", value: "Tool steel" },
      { label: "Lock Type", value: "Latch lock" },
      { label: "Machine Weight", value: "150 kg" },
      { label: "Machine Installation", value: "Stand type" },
      { label: "Crushing Mechanism", value: "Roller with specialized design" },
      { label: "Safety", value: "Over-current and voltage protection" },
      { label: "Capacity", value: "100 liters" },
      { label: "Feed Opening", value: "180 mm diameter" },
      { label: "Machine Dimensions", value: "1500 x 700 x 700 mm" },
      { label: "Time per Cycle", value: "5 sec" },
    ],
  },
];

export default productsData;