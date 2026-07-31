import {
  Recycle,
  Cog,
  CloudRain,
  Cpu,
  Droplets,
  Sun,
  Building2,
} from 'lucide-react';

import solidImg from '../assets/services/solid.png';
import machinesImg from '../assets/services/machines.png';
import rainImg from '../assets/services/rain.png';
import ewasteImg from '../assets/services/ewaste.png';
import etpImg from '../assets/services/etp.png';
import municipalImg from '../assets/services/municipal.png';
import solarImg from '../assets/services/solar.png';

export const servicesMenu = [
  {
    id: 1,
    slug: 'solid-waste-management',
    icon: Recycle,
    label: 'Solid Waste Management',
    tag: 'Municipal & Industrial',
    desc: 'Municipal & industrial collection, sorting, disposal',
    to: '/services/solid-waste-management',
    image:solidImg,
    alt: 'Industrial solid waste management and sorting facility',
    meaning:
      'The systematic collection, segregation, treatment, and disposal of everyday waste from households, municipalities, and industry — designed to keep material out of landfills and back into use wherever possible.',
    impact: [
      { value: '2.1B → 3.8B', label: 'Tonnes of municipal waste generated globally, 2020 vs. projected 2050' },
      { value: '90%+', label: 'Of waste in low-income countries still ends up in unregulated dumps or is openly burned' },
      { value: '$640B', label: 'Projected annual global cost of waste management by 2050 if unaddressed' },
    ],
    examples: [
      'Scheduled door-to-door collection for municipal wards and industrial estates',
      'Mechanical sorting and baling to separate recyclables from residual waste',
      'Landfill-diversion programs that route organics to composting or waste-to-energy',
      'Waste audits and reporting for industrial clients tracking disposal compliance',
    ],
    metrics: ['Zero Waste', 'High Recovery', 'Eco Processing'],
    stat: { value: '92%', label: 'Diversion rate' },
    causes: [
      'Rapid urbanization outpacing municipal collection infrastructure',
      'Rising consumption and packaging waste per household',
      'Low rates of source segregation at the point of generation',
      'Shrinking landfill capacity near major cities',
    ],
    benefits: [
      { title: 'Less landfill pressure', description: 'Diverting recyclables and organics away from dumps extends the life of scarce landfill land.' },
      { title: 'Lower emissions', description: 'Composting organics instead of landfilling them cuts the methane that decomposing waste releases.' },
      { title: 'Recovered value', description: 'Sorted paper, metal, and plastic re-enter supply chains instead of being written off as waste.' },
      { title: 'Public health', description: 'Regular collection keeps waste from accumulating in streets and open dumps near homes.' },
    ],
    usage: [
      'Municipal corporations & urban local bodies',
      'Residential townships & gated communities',
      'Manufacturing & industrial estates',
      'Commercial complexes & retail malls',
      'Construction & event-site cleanup',
    ],
  },
{
  id: 2,
  slug: 'organic-waste-processing-machinery',
  icon: Cog,
  label: 'Organic Waste Processing Machinery',
  tag: 'Infrastructure',
  desc: 'Machinery for composting and organic waste processing',
  to: '/services/organic-waste-processing-machinery',
  image: machinesImg,
  alt: 'Organic waste processing and composting machinery',
  meaning:
    'Supply, installation, and maintenance of machinery used to process food and biodegradable waste into nutrient-rich compost (organic manure). Our solutions include shredders, trommel screens, composting systems, curing units, and material handling equipment designed for efficient organic waste management.',

  impact: [
    { value: '70%', label: 'Municipal waste can be biodegradable and suitable for composting' },
    { value: '90%', label: 'Reduction in landfill waste through efficient organic waste processing' },
    { value: '24/7', label: 'Reliable machinery support and maintenance' },
  ],

  examples: [
    'Organic Waste Converter (OWC) machines',
    'Food waste shredders',
    'Composting and curing systems',
    'Trommel screening machines',
    'Bagging and compost handling equipment',
  ],

  metrics: ['Eco-Friendly', 'Composting', 'Reliable Performance'],

  stat: { value: '24/7', label: 'Service & Maintenance Support' },

  causes: [
    'Large quantities of food and biodegradable waste end up in landfills',
    'Manual waste handling is slow and labour-intensive',
    'Improper disposal leads to foul odour and greenhouse gas emissions',
    'Lack of efficient processing reduces the recovery of valuable organic resources',
  ],

  benefits: [
    {
      title: 'Produces Organic Compost',
      description: 'Converts biodegradable waste into nutrient-rich organic manure suitable for agriculture and landscaping.',
    },
    {
      title: 'Reduces Landfill Waste',
      description: 'Minimizes the amount of food and organic waste sent to landfills.',
    },
    {
      title: 'Environment Friendly',
      description: 'Reduces methane emissions and supports sustainable waste management.',
    },
    {
      title: 'Efficient Processing',
      description: 'Automated machinery speeds up compost production while reducing labour requirements.',
    },
  ],

  usage: [
    'Municipal composting facilities',
    'Hotels & restaurants',
    'Housing societies',
    'Food processing industries',
    'Markets & vegetable mandis',
    'Institutions & campuses',
  ],
},
  {
    id: 3,
    slug: 'rain-water-harvesting',
    icon: CloudRain,
    label: 'Rain Water Harvesting',
    tag: 'Water Conservation',
    desc: 'Catchment, recharge & filtration systems',
    to: '/services/rain-water-harvesting',
    image: rainImg,
    alt: 'Rainwater harvesting and water filtration setup',
    meaning:
      'Capturing rainfall — mostly rooftop runoff — and channelling it into storage or back into the ground, so every monsoon adds to the water table instead of running off into drains.',
    impact: [
      { value: '~240 BCM', label: "Groundwater India extracts annually — among the highest of any country" },
      { value: '10.8%', label: "Of India's groundwater assessment units are officially 'over-exploited' (CGWB, 2025)" },
      { value: '1.42 crore', label: 'Recharge structures targeted under the national Master Plan for Artificial Recharge' },
    ],
    examples: [
      'Rooftop catchment with first-flush diverters and filtration',
      'Recharge pits and borewell structures for direct groundwater replenishment',
      'Check dams and percolation tanks for community-scale recharge',
      'Compliance support for state mandates like Tamil Nadu\'s rainwater harvesting rules',
    ],
    metrics: ['Smart Filtration', 'Eco Capture', 'Sustainable'],
    stat: { value: '40%', label: 'Groundwater recharge' },
    causes: [
      'Over-extraction of groundwater for agriculture and urban supply',
      'Increasingly unpredictable monsoon patterns',
      'Impervious concrete surfaces that block natural recharge',
      'Rising per-capita water demand as cities grow denser',
    ],
    benefits: [
      { title: 'Aquifer recharge', description: 'Directing rooftop runoff into the ground helps stabilize falling water tables.' },
      { title: 'Lower water bills', description: 'Harvested water reduces dependence on tanker supply and deep borewells.' },
      { title: 'Flood control', description: 'Capturing runoff at the source eases pressure on urban storm drains during heavy rain.' },
      { title: 'Better water quality', description: 'Recharge dilutes localized groundwater contamination over time.' },
    ],
    usage: [
      'Residential rooftops & housing societies',
      'Commercial & IT campuses',
      'Industrial facilities needing process water',
      'Educational institutions',
      'Municipal parks & public infrastructure',
    ],
  },
  {
    id: 4,
    slug: 'e-waste-management',
    icon: Cpu,
    label: 'E-Waste Management',
    tag: 'Core Service',
    desc: 'Secure pickup, dismantling & recovery',
    to: '/services/e-waste-management',
    image:ewasteImg,
    alt: 'E-waste collection and recycling management facility',
    meaning:
      'End-to-end handling of discarded electronics — anything with a plug or battery — from secure pickup through certified dismantling to the recovery of metals and materials locked inside.',
    impact: [
      { value: '62Mt', label: 'Global e-waste generated in 2022, up 82% from 2010 (Global E-waste Monitor 2024)' },
      { value: '22.3%', label: 'Share formally collected and recycled worldwide the same year' },
      { value: '$91B → $19B', label: 'Value of raw materials in that e-waste vs. what was actually recovered' },
    ],
    examples: [
      'Secure on-site pickup with chain-of-custody documentation',
      'Certified data-wipe and dismantling of IT assets',
      'Precious-metal recovery from circuit boards — gold, copper, palladium',
      'Safe handling of hazardous fractions like batteries and CRT glass',
    ],
    metrics: ['Secure Pickup', 'Certified', 'Safe Disposal'],
    stat: { value: 'CPCB', label: 'Authorized' },
    causes: [
      'Shortening device lifecycles and frequent upgrade cycles',
      'Growing electronics consumption across households and offices',
      'Limited consumer awareness of safe disposal channels',
      'Informal recycling that exposes workers to toxic materials',
    ],
    benefits: [
      { title: 'Resource recovery', description: 'Circuit boards hold recoverable gold, copper, and palladium worth reclaiming.' },
      { title: 'Toxin containment', description: 'Certified handling keeps lead, mercury, and cadmium out of soil and water.' },
      { title: 'Data security', description: 'Certified data-wipe and destruction protects sensitive information on retired devices.' },
      { title: 'Compliance cover', description: 'Documented disposal helps businesses meet Extended Producer Responsibility obligations.' },
    ],
    usage: [
      'Corporate IT asset disposition',
      'Consumer electronics take-back programs',
      'Manufacturing & assembly plant scrap',
      'Government & institutional device refresh cycles',
      'Retailer & OEM exchange schemes',
    ],
  },
  {
    id: 5,
    slug: 'etp-stp-wtp-solutions',
    icon: Droplets,
    label: 'ETP / STP / WTP Solutions',
    tag: 'Water Treatment',
    desc: 'Effluent, sewage & water treatment plants',
    to: '/services/etp-stp-wtp-solutions',
    image:etpImg,
    alt: 'Industrial water treatment plant and purification systems',
    meaning:
      'Design, installation, and operation of Effluent, Sewage, and Water Treatment Plants that clean industrial and municipal wastewater to safe discharge — or reuse — standards.',
    impact: [
      { value: '72,368 MLD', label: "India's urban sewage generated daily (CPCB)" },
      { value: '~28%', label: 'Share of that sewage actually treated; the rest reaches rivers, lakes, and groundwater untreated' },
      { value: '1,20,000 MLD', label: 'Projected national sewage generation by 2050 as cities grow' },
    ],
    examples: [
      'Zero-liquid-discharge (ZLD) systems for textile and chemical plants',
      'Decentralized STPs for townships and industrial estates',
      'Tertiary treatment enabling reuse of treated water for irrigation',
      'Online continuous effluent monitoring (OCEMS) for regulatory compliance',
    ],
    metrics: ['Zero Liquid Discharge', 'Pure Output', 'Compliant'],
    stat: { value: 'ZLD', label: 'Zero liquid discharge' },
    causes: [
      'Urban population growth outpacing sewage infrastructure',
      'Industrial effluent discharged with inadequate pre-treatment',
      'Aging or undersized treatment plants nearing capacity',
      'Tightening pollution control board discharge norms',
    ],
    benefits: [
      { title: 'Cleaner water bodies', description: 'Treating effluent before discharge keeps rivers, lakes, and groundwater from contamination.' },
      { title: 'Water reuse', description: 'Treated output can supply irrigation or industrial processes instead of fresh water.' },
      { title: 'Regulatory cover', description: 'Compliant plants reduce the risk of fines or shutdown orders from pollution boards.' },
      { title: 'Public health', description: 'Proper treatment breaks the link between untreated sewage and waterborne disease.' },
    ],
    usage: [
      'Textile, chemical & pharma manufacturing plants',
      'Residential townships & group housing societies',
      'Hotels, hospitals & commercial complexes',
      'Municipal sewage networks',
      'Food & beverage processing units',
    ],
  },
{
    id: 6,
    slug: 'solar-water-heater',
    icon: Sun,
    label: 'Solar Water Heater & SPV',
    tag: 'Renewable Energy',
    desc: 'Thermal collectors, SPV systems & energy solutions',
    to: '/services/solar-water-heater',
    image:solarImg,
    alt: 'Solar water heater and photovoltaic panels installed on a rooftop',
    meaning:
      'The supply, installation, and integration of sustainable thermal solar water heaters and Solar Photovoltaic (SPV) systems — transforming abundant sunlight directly into hot water and clean electricity for residential, commercial, and industrial operations.',
    impact: [
      { value: '70-80%', label: 'Thermal conversion efficiency of solar collectors compared to traditional geysers' },
      { value: '30-40%', label: 'Reduction in overall household or institutional monthly electricity bills' },
      { value: '1.5 tonnes', label: 'Average annual CO2 emissions saved per installed residential solar water heater system' },
    ],
    examples: [
      'Evacuated Tube Collectors (ETC) and Flat Plate Collectors (FPC) for efficient hot water systems',
      'Solar Photovoltaic (SPV) grid-tied and off-grid power generation setups',
      'Hybrid thermal-electrical backup configurations for uninterrupted 24/7 hot water supply',
      'Large-scale commercial installations for hotels, hospitals, hostels, and industrial processes',
    ],
    metrics: ['High Thermal Efficiency', 'Clean Energy', 'Cost Saving'],
    stat: { value: '75%', label: 'Energy savings' },
    causes: [
      'Rising conventional grid electricity and fossil-fuel heating costs',
      'Growing corporate and municipal commitments to reduce carbon footprints',
      'High year-round solar irradiance in tropical and subtropical regions',
      'Increasing demand for decentralized, reliable renewable energy alternatives',
    ],
    benefits: [
      { title: 'Substantial savings', description: 'Drastically lower monthly electricity and gas bills by harnessing free, limitless solar energy.' },
      { title: 'Carbon reduction', description: 'Significantly cut greenhouse gas emissions by replacing conventional grid-powered water heating.' },
      { title: 'Reliable supply', description: 'Advanced storage insulation and hybrid backups ensure hot water availability even during overcast days.' },
      { title: 'Low maintenance', description: 'Durable glass tubes and solid-state PV panels require minimal upkeep with long operational lifespans.' },
    ],
    usage: [
      'Residential housing societies & independent homes',
      'Hotels, resorts, and commercial guest houses',
      'Hospitals, hostels, and institutional campuses',
      'Industrial canteens and manufacturing process heating',
      'Agricultural and dairy sanitation operations',
    ],
  },
{
  id: 7,
  slug: 'municipal-waste-management',
  icon: Building2,
  label: 'Municipal Waste Management',
  tag: 'Smart Cities',
  desc: 'Collection, transportation, recycling & scientific disposal',
  to: '/services/municipal-waste-management',
  image: municipalImg,
  alt: 'Municipal waste collection and processing facility',

  meaning:
    'Municipal Waste Management is the organized collection, transportation, segregation, recycling, treatment, and scientific disposal of waste generated by households, commercial establishments, institutions, and public places. It ensures cleaner cities, protects public health, conserves natural resources, and minimizes environmental pollution through sustainable waste management practices.',

  impact: [
    {
      value: '2.24B → 3.88B',
      label:
        'Tonnes of municipal solid waste generated globally per year by 2050 (World Bank)',
    },
    {
      value: '55%',
      label:
        'Global population currently living in urban areas generating municipal waste',
    },
    {
      value: '70%',
      label:
        'Increase in municipal waste generation expected by 2050 without intervention',
    },
  ],

  examples: [
    'Door-to-door household waste collection and transportation',
    'Material Recovery Facilities (MRFs) for recyclable segregation',
    'Organic waste composting and biomethanation plants',
    'Scientific sanitary landfill and waste-to-energy facilities',
  ],

  metrics: ['Smart Collection', 'Resource Recovery', 'Clean City'],

  stat: {
    value: '100%',
    label: 'Scientific Disposal',
  },

  causes: [
    'Rapid urbanization and population growth',
    'Increasing household and commercial waste generation',
    'Poor segregation of waste at source',
    'Limited recycling and processing infrastructure',
  ],

  benefits: [
    {
      title: 'Cleaner Cities',
      description:
        'Efficient waste collection prevents littering, improves sanitation, and enhances urban aesthetics.',
    },
    {
      title: 'Resource Recovery',
      description:
        'Segregated recyclable materials are recovered and reintroduced into manufacturing supply chains.',
    },
    {
      title: 'Environmental Protection',
      description:
        'Scientific treatment minimizes landfill usage, groundwater contamination, and greenhouse gas emissions.',
    },
    {
      title: 'Public Health',
      description:
        'Proper waste management reduces disease vectors, foul odors, and environmental pollution.',
    },
  ],

  usage: [
    'Municipal Corporations & Smart Cities',
    'Urban Local Bodies',
    'Residential Townships & Housing Societies',
    'Commercial Markets & Business Districts',
    'Public Institutions & Government Facilities',
  ],
}
];