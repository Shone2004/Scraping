import React from 'react';

// Local asset imports
import tataImg from '../assets/industry/tata.webp';
import zomatoImg from '../assets/industry/zomato.webp';
import hindalcoImg from '../assets/industry/hindalco.webp';
import gazeboImg from '../assets/industry/gazebo.webp';
import neralImg from '../assets/industry/neral.webp';

const partners = [
  { name: 'Tata', logoUrl: tataImg, tagline: 'Conglomerate Enterprise' },
  { name: 'Zomato', logoUrl: zomatoImg, tagline: 'Food Delivery & Waste Tech' },
  { name: 'Hindalco', logoUrl: hindalcoImg, tagline: 'Metals & Recycling' },
  { name: 'Gazebo Hotel', logoUrl: gazeboImg, tagline: 'Hospitality Services' },
  { name: 'Neral Grampanchayat', logoUrl: neralImg, tagline: 'Local Municipal Body' },
];

export default function Partners() {
  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <section className="py-16 bg-white border-b border-gray-100 overflow-hidden" id="trusted-partners">
      {/* Inline style block to handle marquee animation without config files */}
      <style>{`
        @keyframes scrollMarquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-scroll-marquee {
          animation: scrollMarquee 25s linear infinite;
        }
        .animate-scroll-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10 text-center">
        <p className="text-sm font-semibold text-emerald-600 uppercase tracking-widest mb-2">
          Trusted Partners
        </p>
        <h3 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight">
          Powering Industry Leaders & Municipalities
        </h3>
      </div>

      {/* Marquee Wrapper with Gradient Fade Edges */}
      <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <div className="flex gap-8 w-max animate-scroll-marquee items-center">
          {duplicatedPartners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center gap-4 px-6 py-4 bg-gray-50/70 border border-gray-100/80 rounded-2xl shadow-sm hover:border-emerald-200 hover:bg-white transition-all duration-300 min-w-[260px] group"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white border border-gray-100 p-2 shadow-sm flex-shrink-0">
                <img
                  src={partner.logoUrl}
                  alt={partner.name}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-black text-gray-900 group-hover:text-emerald-700 transition-colors">
                  {partner.name}
                </span>
                <span className="text-[11px] font-semibold text-gray-500">
                  {partner.tagline}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}