import { ArrowRight, Sparkles, TrendingUp, Zap, Award } from 'lucide-react';

// Local asset imports
import tataImg from '../assets/industry/tata.webp';
import zomatoImg from '../assets/industry/zomato.webp';
import hindalcoImg from '../assets/industry/hindalco.webp';
import gazeboImg from '../assets/industry/hotel.png';
import neralImg from '../assets/industry/neral.webp';

const logos = [
  {
    name: 'Tata',
    logoUrl: tataImg,
    logoClass: 'scale-90',
    tagline: 'Conglomerate Enterprise',
    badge: 'Scope 3 Tracked',
    stat: '100% ESG Auditable',
    accent: 'from-blue-500 via-blue-600 to-indigo-600',
    accentLight: 'from-blue-50 to-indigo-50',
    accentBg: 'bg-blue-500/10',
    badgeColor: 'from-blue-600 to-indigo-600',
    description: 'Managing industrial waste streams and verifying large-scale sustainable carbon offsets across subsidiaries.',
    icon: Award,
  },
  {
    name: 'Zomato',
    logoUrl: zomatoImg,
    logoClass: 'scale-75',
    tagline: 'Food Delivery & Waste Tech',
    badge: 'Zero Food Waste',
    stat: '50K+ Orders Logged',
    accent: 'from-rose-500 via-rose-600 to-red-600',
    accentLight: 'from-rose-50 to-red-50',
    accentBg: 'bg-rose-500/10',
    badgeColor: 'from-rose-600 to-red-600',
    description: 'Optimizing food waste segregation, municipal partner logistics, and packaging lifecycle monitoring.',
    icon: Zap,
  },
  {
    name: 'Hindalco',
    logoUrl: hindalcoImg,
    logoClass: 'scale-90',
    tagline: 'Metals & Recycling',
    badge: 'ETP Compliance',
    stat: '99.4% Precision',
    accent: 'from-amber-500 via-amber-600 to-orange-600',
    accentLight: 'from-amber-50 to-orange-50',
    accentBg: 'bg-amber-500/10',
    badgeColor: 'from-amber-600 to-orange-600',
    description: 'Tracking heavy metal byproducts, automated ETP telemetry logs, and industrial scrap recovery rates.',
    icon: TrendingUp,
  },
{
  name: 'Gazebo Hotel',
  logoUrl: gazeboImg,
  logoClass: 'scale-90',
  tagline: 'Hospitality',
  badge: 'Organic Waste Management',
  stat: '100% Sustainable',
  accent: 'from-amber-500 via-orange-500 to-yellow-500',
  accentLight: 'from-amber-50 to-yellow-50',
  accentBg: 'bg-amber-500/10',
  badgeColor: 'from-amber-500 to-orange-500',
  description:
    'Providing waste collection and organic waste processing solutions for hotels through composting and sustainable waste management.',
  icon: Award,
},
{
  name: 'Neral Grampanchayat',
  logoUrl: neralImg,
  logoClass: 'scale-95',
  tagline: 'Local Municipal Body',
  badge: 'Zero Dumping Plant',
  stat: '100% Digital Logs',
  accent: 'from-emerald-500 via-emerald-600 to-green-600',
  accentLight: 'from-emerald-50 to-green-50',
  accentBg: 'bg-emerald-500/10',
  badgeColor: 'from-emerald-600 to-green-600',
  description:
    'Supporting a Zero Dumping Plant through door-to-door waste collection, segregation, composting, and sustainable organic waste management.',
  icon: Award,
},
];

export default function IndustriesSmall() {
  return (
    <section
      className="py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden"
      id="industries-preview"
    >
      {/* Animated background elements */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-200/40 rounded-full blur-3xl pointer-events-none -z-10 animate-blob" style={{ animationDuration: '7s' }} />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-emerald-200/30 rounded-full blur-3xl pointer-events-none -z-10 animate-blob" style={{ animationDuration: '9s', animationDelay: '2s' }} />
      <div className="absolute bottom-0 left-1/2 w-[600px] h-[600px] bg-purple-200/20 rounded-full blur-3xl pointer-events-none -z-10 animate-blob" style={{ animationDuration: '11s', animationDelay: '4s' }} />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none -z-10" />

      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0 bg-radial-gradient pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(ellipse 80% 80% at 50% 0%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)',
        }}
      />

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
      `}</style>

      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm shadow-emerald-200/50">
              <Sparkles size={14} className="text-emerald-600 animate-pulse" />
              <span>Trusted Worldwide</span>
            </div>

            <h2 className="text-4xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.15] mb-4">
              Trusted by{' '}
              <span className="bg-gradient-to-r from-blue-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Industry Leaders
              </span>
            </h2>

            <p className="text-gray-600 text-base lg:text-lg max-w-xl font-normal leading-relaxed">
              Powering data intelligence, ESG compliance, and automated tracking across major sectors with enterprise-grade solutions.
            </p>
          </div>

          <div className="flex-shrink-0">
            <a
              href="/industries"
              className="group relative inline-flex items-center gap-2.5 px-8 py-4 overflow-hidden rounded-2xl font-bold text-sm text-white transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 transition-all duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Shine effect */}
              <div className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shimmer" />

              <span className="relative z-10">View All Industries</span>
              <ArrowRight
                size={16}
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-2"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {logos.map((logo, i) => {
            const Icon = logo.icon;
            return (
              <div
                key={i}
                className="group relative h-full"
                style={{
                  animation: `fadeInUp 0.6s ease-out`,
                  animationDelay: `${i * 0.1}s`,
                  animationFillMode: 'both',
                }}
              >
                <style>{`
                  @keyframes fadeInUp {
                    from {
                      opacity: 0;
                      transform: translateY(30px);
                    }
                    to {
                      opacity: 1;
                      transform: translateY(0);
                    }
                  }
                `}</style>

                {/* Glowing border background */}
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-br ${logo.accent} rounded-[2.5rem] opacity-0 group-hover:opacity-40 blur transition-opacity duration-500 -z-10`}
                />

                {/* Main card */}
                <a
                  href="/industries"
                  className="relative flex flex-col justify-between h-full p-8 bg-white/70 backdrop-blur-xl rounded-[2.5rem] border border-gray-200/70 group-hover:border-gray-300/80 transition-all duration-500 cursor-pointer overflow-hidden shadow-sm hover:shadow-xl"
                >
                  {/* Top colored line */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${logo.accent} scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 rounded-t-[2.5rem]`}
                  />

                  {/* Decorative corner accent */}
                  <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-300/30 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  {/* Content container */}
                  <div className="relative z-10">
                    {/* Logo Section */}
                    <div
                      className={`relative w-full h-44 rounded-2xl flex items-center justify-center bg-gradient-to-br ${logo.accentLight} border border-gray-200/80 mb-8 overflow-hidden transition-all duration-500 group-hover:border-gray-300/80 shadow-sm`}
                    >
                      {/* Animated background grid */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />

                      {/* Shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />

                      {/* Logo */}
                      <img
                        src={logo.logoUrl}
                        alt={logo.name}
                        className={`max-h-32 max-w-[60%] object-contain transition-all duration-500 group-hover:scale-125 group-hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.2)] relative z-10 ${logo.logoClass || ''}`}
                      />

                      {/* Badge */}
                      <div className="absolute top-4 right-4 z-20">
                        <div className="relative">
                          <div
                            className={`absolute inset-0 bg-gradient-to-r ${logo.badgeColor} rounded-full blur opacity-40 group-hover:opacity-60 transition-opacity duration-300`}
                          />
                          <span className="relative px-3.5 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold tracking-tight border border-gray-200 flex items-center gap-2 shadow-sm">
                            <span className="relative flex h-1.5 w-1.5">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                              <span
                                className={`relative inline-flex rounded-full h-1.5 w-1.5 bg-gradient-to-r ${logo.badgeColor}`}
                              ></span>
                            </span>
                            <span className="text-gray-800">{logo.badge}</span>
                          </span>
                        </div>
                      </div>

                      {/* Icon watermark */}
                      <div className="absolute bottom-3 left-3 opacity-[0.05] group-hover:opacity-[0.08] transition-opacity duration-500 scale-150">
                        <Icon size={64} strokeWidth={1} />
                      </div>
                    </div>

                    {/* Company Info */}
                    <div className="mb-4">
                      <h3
                        className="text-2xl font-black text-gray-900 group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500 tracking-tight flex items-center gap-2"
                        style={{
                          backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                        }}
                      >
                        <span
                          className={`bg-gradient-to-r ${logo.accent} bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute`}
                        >
                          {logo.name}
                        </span>
                        <span className="group-hover:opacity-0 transition-opacity duration-500">
                          {logo.name}
                        </span>
                      </h3>
                      <p
                        className={`text-xs font-bold tracking-widest mt-2 bg-gradient-to-r ${logo.accent} bg-clip-text text-transparent uppercase opacity-70 group-hover:opacity-100 transition-opacity duration-300`}
                      >
                        {logo.tagline}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed font-normal mb-8 group-hover:text-gray-700 transition-colors duration-300">
                      {logo.description}
                    </p>
                  </div>

                  {/* Bottom Stats Section */}
                  <div className="pt-6 border-t border-gray-200/60 group-hover:border-gray-300/60 transition-colors duration-300 relative z-10">
                    {/* Mini progress bar */}
                    <div className="w-full h-1.5 bg-gray-200/50 rounded-full mb-5 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${logo.accent} transition-all duration-1000 ease-out rounded-full`}
                        style={{
                          width: '85%',
                        }}
                      />
                    </div>

                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-8 h-8 rounded-lg bg-gradient-to-br ${logo.accent} flex items-center justify-center shadow-md`}
                        >
                          <TrendingUp size={16} className="text-white" />
                        </div>
                        <span className="font-bold text-gray-800 text-sm">{logo.stat}</span>
                      </div>

                      <span
                        className={`font-bold text-xs bg-gradient-to-r ${logo.accent} bg-clip-text text-transparent inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300 uppercase tracking-wide`}
                      >
                        View
                        <ArrowRight
                          size={15}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-5">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gray-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${4 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0; }
          50% { opacity: 0.3; }
          100% { transform: translateY(-100px) translateX(50px); opacity: 0; }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
}