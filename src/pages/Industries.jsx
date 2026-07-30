import { ArrowRight, CheckCircle2, Award, Sparkles } from 'lucide-react';

// Local asset imports
import tataImg from '../assets/industry/tata.webp';
import zomatoImg from '../assets/industry/zomato.webp';
import hindalcoImg from '../assets/industry/hindalco.webp';
import gazeboImg from '../assets/industry/gazebo.webp';
import neralImg from '../assets/industry/neral.webp';

const detailedIndustries = [
  {
    id: 'municipal-corporations',
    name: 'Tata',
    logoUrl: 'https://images.unsplash.com/photo-1650951478368-ecc858d151e8?w=200&q=80&auto=format&fit=crop',
    tagline: 'Conglomerate Enterprise',
    badge: 'Scope 3 Tracked',
    stat: '100% ESG Auditable',
    category: 'Corporate Enterprises & Manufacturing',
    image: tataImg,
    description: 'Managing complex industrial waste streams and verifying large-scale sustainable carbon offsets across diverse global subsidiaries and industrial plants.',
    contribution: 'Streamlined enterprise-wide ESG frameworks, cutting manual carbon accounting hours by 75% and guaranteeing auditable chain-of-custody for enterprise assets.',
    metrics: ['100% ESG Auditable', 'Scope 3 Traceability', 'Zero-Waste Integration'],
    benefits: [
      'Automated data pipelines aggregating emissions and waste metrics from multiple subsidiaries',
      'Real-time verification dashboards tailored for institutional investor reporting',
      'Standardized compliance tracking aligned with international sustainability standards',
    ],
  },
  {
    id: 'recycling-companies',
    name: 'Zomato',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Zomato_Logo.svg',
    tagline: 'Food Delivery & Waste Tech',
    badge: 'Zero Food Waste',
    stat: '50K+ Orders Logged',
    category: 'Food Tech & Logistics',
    image: zomatoImg,
    description: 'Optimizing food waste segregation, municipal partner logistics, and sustainable packaging lifecycle monitoring at massive scale.',
    contribution: 'Partnered with food tech distribution networks to track packaging recycling lifecycles and route organic waste directly to localized bio-composting hubs.',
    metrics: ['50K+ Orders Logged', 'Lifecycle Monitoring', 'Bio-Composting Routing'],
    benefits: [
      'End-to-end tracking of single-use plastics and sustainable packaging alternatives',
      'Integrated logistics mapping for high-efficiency restaurant waste pickup',
      'Data-driven insights to minimize surplus food wastage across delivery channels',
    ],
  },
  {
    id: 'smart-cities',
    name: 'Hindalco',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/en/2/22/Hindalco_Logo.svg',
    tagline: 'Metals & Recycling',
    badge: 'ETP Compliance',
    stat: '99.4% Precision',
    category: 'Heavy Processing & Metallurgy',
    image: hindalcoImg,
    description: 'Tracking heavy metal byproducts, automated Effluent Treatment Plant (ETP) telemetry logs, and high-precision industrial scrap recovery rates.',
    contribution: 'Enabled heavy metal processing units to achieve flawless pollution control board audits via automated real-time effluent discharge monitoring.',
    metrics: ['99.4% Precision', 'Automated ETP Logs', 'Scrap Value Recovery'],
    benefits: [
      'Continuous telemetry monitoring of hazardous industrial discharge parameters',
      'Automated compliance reporting designed for state pollution control boards',
      'Maximized recovery value from industrial scrap metal and production byproducts',
    ],
  },
  {
    id: 'government-agencies',
    name: 'Gazebo Hotel',
    logoUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=250&auto=format&fit=crop&q=80',
    tagline: 'Hospitality Services',
    badge: 'Greywater Reuse',
    stat: '40% Water Saved',
    category: 'Hospitality & Tourism',
    image: gazeboImg,
    description: 'Deploying smart organic waste composting units and centralized solar water heating telemetry for premium resort and hotel operations.',
    contribution: 'Transformed daily hospitality waste management, reducing municipal water consumption by 40% through intelligent greywater recycling systems.',
    metrics: ['40% Water Saved', 'Smart Composting', 'Solar Thermal Integration'],
    benefits: [
      'Decentralized wastewater treatment monitoring and automated greywater reuse',
      'Optimized thermal energy tracking for guest hot water supply lines',
      'Streamlined kitchen organic waste sorting and local composting conversion',
    ],
  },
  {
    id: 'waste-to-energy',
    name: 'Neral Grampanchayat',
    logoUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=250&auto=format&fit=crop&q=80',
    tagline: 'Local Municipal Body',
    badge: 'Smart Ward Mapping',
    stat: '100% Digital Logs',
    category: 'Municipal & Public Infrastructure',
    image: neralImg,
    description: 'Digitalizing door-to-door solid waste collection tracking, rainwater harvesting databases, and community sanitation audit logs.',
    contribution: 'Replaced traditional paper registries with cloud-based ward mapping, elevating local collection transparency and citizen accountability by 90%.',
    metrics: ['Smart Ward Mapping', 'Monsoon Recharge Logs', 'Citizen Transparency'],
    benefits: [
      'Live tracking interface for rural and semi-urban sanitation collection fleets',
      'Groundwater level analytics and seasonal rainwater harvesting databases',
      'Transparent scoring matrices for community public health audits',
    ],
  },
];

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-gray-50/50 pt-24 pb-20">
      
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-500/20 rounded-full text-xs font-bold tracking-wider text-emerald-800 uppercase shadow-sm mb-4">
          <Sparkles size={13} className="text-emerald-600" />
          Enterprise & Partner Showcase
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-tight max-w-4xl mx-auto">
          Detailed Case Studies & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
            Real-World Impact
          </span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6 leading-relaxed">
          Explore how industry leaders across manufacturing, food tech, hospitality, and public governance leverage Verdant to automate environmental compliance.
        </p>
      </section>

      {/* Detailed Industry Cards List */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        <div className="space-y-20">
          {detailedIndustries.map((ind, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={ind.id}
                id={ind.id}
                className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white rounded-3xl p-8 lg:p-12 border border-gray-100 shadow-xl shadow-gray-100/80 transition-all duration-300 hover:shadow-2xl hover:border-emerald-100 scroll-mt-28"
              >
                {/* Image & Contribution Column */}
                <div className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative group overflow-hidden rounded-2xl aspect-[16/10] shadow-md">
                    <img
                      src={ind.image}
                      alt={ind.name}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-bold text-emerald-800 shadow-sm">
                      {ind.badge}
                    </div>
                  </div>

                  {/* Contribution Box */}
                  <div className="bg-emerald-50/70 border border-emerald-100 rounded-2xl p-5 space-y-2">
                    <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase tracking-wider">
                      <Award size={16} className="text-emerald-600" />
                      <span>Verified Impact & Contribution</span>
                    </div>
                    <p className="text-xs text-gray-700 leading-relaxed font-medium">
                      {ind.contribution}
                    </p>
                  </div>
                </div>

                {/* Content & Details Column */}
                <div className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-gray-50 border border-gray-100 flex-shrink-0 overflow-hidden p-2.5 shadow-inner">
                      <img
                        src={ind.logoUrl}
                        alt={ind.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">{ind.category}</span>
                      <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
                        {ind.name}
                      </h2>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-emerald-700">
                      {ind.tagline}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed pt-1">
                      {ind.description}
                    </p>
                  </div>

                  {/* Metrics Pills */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {ind.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="px-3 py-1.5 bg-emerald-50/85 text-emerald-700 rounded-xl text-xs font-bold tracking-tight border border-emerald-100/60"
                      >
                        ⚡ {metric}
                      </span>
                    ))}
                  </div>

                  {/* Benefits List */}
                  <div className="space-y-2.5 pt-3 border-t border-gray-100">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Key Operational Deliverables:</p>
                    {ind.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                        <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Link */}
                  <div className="pt-2">
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-bold rounded-xl hover:bg-emerald-600 transition-all duration-300 text-sm shadow-md"
                    >
                      <span>Request Partner Case Study</span>
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom Conversion Banner */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-20">
        <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-gray-900 rounded-3xl p-10 lg:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight">
              Ready to Join Our Network of Industry Leaders?
            </h2>
            <p className="text-emerald-100/80 text-base leading-relaxed">
              Connect with our enterprise engineering team to build custom compliance automation pipelines tailored for your organization's exact footprint.
            </p>
            <div className="pt-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-emerald-900 font-extrabold rounded-2xl hover:bg-emerald-50 transition-all duration-300 shadow-lg text-base"
              >
                <span>Schedule Enterprise Consultation</span>
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}