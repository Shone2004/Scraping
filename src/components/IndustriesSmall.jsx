import { ArrowRight, CheckCircle, ShieldAlert } from 'lucide-react';

// Local asset imports
import tataImg from '../assets/industry/tata.webp';
import zomatoImg from '../assets/industry/zomato.webp';
import hindalcoImg from '../assets/industry/hindalco.webp';
import gazeboImg from '../assets/industry/gazebo.webp';
import neralImg from '../assets/industry/neral.webp';

const logos = [
  {
    name: 'Tata',
    logoUrl: tataImg,
    tagline: 'Conglomerate Enterprise',
    badge: 'Scope 3 Tracked',
    stat: '100% ESG Auditable',
    description: 'Managing industrial waste streams and verifying large-scale sustainable carbon offsets across subsidiaries.'
  },
  {
    name: 'Zomato',
    logoUrl: zomatoImg,
    tagline: 'Food Delivery & Waste Tech',
    badge: 'Zero Food Waste',
    stat: '50K+ Orders Logged',
    description: 'Optimizing food waste segregation, municipal partner logistics, and packaging lifecycle monitoring.'
  },
  {
    name: 'Hindalco',
    logoUrl: hindalcoImg,
    tagline: 'Metals & Recycling',
    badge: 'ETP Compliance',
    stat: '99.4% Precision',
    description: 'Tracking heavy metal byproducts, automated ETP telemetry logs, and industrial scrap recovery rates.'
  },
  {
    name: 'Gazebo Hotel',
    logoUrl: gazeboImg,
    tagline: 'Hospitality Services',
    badge: 'Greywater Reuse',
    stat: '40% Water Saved',
    description: 'Deploying smart organic waste composting units and centralized solar water heating telemetry.'
  },
  {
    name: 'Neral Grampanchayat',
    logoUrl: neralImg,
    tagline: 'Local Municipal Body',
    badge: 'Smart Ward Mapping',
    stat: '100% Digital Logs',
    description: 'Digitalizing door-to-door solid waste collection tracking, rainwater harvesting data, and sanitation audits.'
  },
];

export default function IndustriesSmall() {
  return (
    <section className="py-20 bg-gray-50/50 border-y border-gray-100" id="industries-preview">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
        
        {/* Header & View All Link */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold text-emerald-600 uppercase tracking-widest mb-3">
              Trusted Worldwide
            </p>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 tracking-tight">
              Trusted by Industry Leaders
            </h2>
            <p className="text-gray-500 mt-2 text-base max-w-xl">
              Powering data intelligence, ESG compliance, and automated tracking across major sectors.
            </p>
          </div>
          
          <div className="flex-shrink-0">
            <a
              href="/industries"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-50 text-emerald-700 font-bold text-sm rounded-2xl hover:bg-emerald-100 transition-all duration-300 group border border-emerald-100 shadow-sm"
            >
              <span>View All Industries</span>
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {logos.map((logo, i) => (
            <a
              key={i}
              href="/industries"
              className="flex flex-col justify-between p-6 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all duration-300 group cursor-pointer"
            >
              <div>
                {/* Top Row: Logo & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-gray-50 border border-gray-100 flex-shrink-0 overflow-hidden p-2.5 shadow-inner">
                    <img
                      src={logo.logoUrl}
                      alt={logo.name}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold tracking-tight border border-emerald-100/60">
                    {logo.badge}
                  </span>
                </div>

                {/* Name & Tagline */}
                <div className="mb-3">
                  <h3 className="text-lg font-black text-gray-900 group-hover:text-emerald-700 transition-colors">
                    {logo.name}
                  </h3>
                  <p className="text-xs font-semibold text-emerald-600/80">{logo.tagline}</p>
                </div>

                {/* Description */}
                <p className="text-xs text-gray-500 leading-relaxed mb-4">
                  {logo.description}
                </p>
              </div>

              {/* Bottom Stat & Link */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                <span className="font-bold text-gray-700 bg-gray-50 px-2.5 py-1 rounded-lg">
                  ⚡ {logo.stat}
                </span>
                <span className="font-bold text-emerald-600 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Case study →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}