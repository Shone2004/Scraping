import { Search, Database, ShieldCheck, LayoutDashboard, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Search,
    step: '01',
    title: 'Discover Sources',
    description: 'We crawl CPCB and state pollution board portals, EPR registries, recycler directories, and e-waste tenders across India.',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: Database,
    step: '02',
    title: 'Extract & Normalize',
    description: 'Registrations, dismantler capacities, and scrap prices are parsed, deduplicated, and mapped into one consistent schema.',
    color: 'from-teal-500 to-teal-600',
  },
  {
    icon: ShieldCheck,
    step: '03',
    title: 'Verify Compliance',
    description: 'Every recycler is checked against EPR authorization status, category limits, and current processing capacity.',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: LayoutDashboard,
    step: '04',
    title: 'Deliver Insights',
    description: 'Compliance alerts, sourcing leads, and scrap price trends land straight in your dashboard or API.',
    color: 'from-emerald-600 to-teal-600',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-28 bg-gradient-to-b from-white via-emerald-50/20 to-white relative overflow-hidden">
      {/* Animated pipeline-flow connector, scoped to this section */}
      <style>{`
        @keyframes verdant-flow-h { to { background-position: 200% 0; } }
        @keyframes verdant-flow-v { to { background-position: 0 200%; } }
        .verdant-flow-line {
          background-image: repeating-linear-gradient(
            90deg, #10b981 0, #10b981 8px, transparent 8px, transparent 18px
          );
          background-size: 200% 100%;
          animation: verdant-flow-h 2.8s linear infinite;
        }
        .verdant-flow-line-vertical {
          background-image: repeating-linear-gradient(
            180deg, #10b981 0, #10b981 8px, transparent 8px, transparent 18px
          );
          background-size: 100% 200%;
          animation: verdant-flow-v 2.8s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .verdant-flow-line, .verdant-flow-line-vertical { animation: none; }
        }
      `}</style>

      {/* Decorative background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-100/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-teal-100/30 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-100/60 border border-emerald-200/60 rounded-full text-xs font-bold text-emerald-800 uppercase tracking-widest mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            E-Waste Pipeline
          </div>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-5">
            From Scattered E-Waste to <br />
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
               Compliance Intelligence
            </span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Four steps. Fully automated. Track every recycler, registration,
            and tender across India's e-waste ecosystem.
          </p>
        </div>

        {/* Pipeline */}
        <div className="relative">

          {/* Vertical connector — mobile */}
          <div className="lg:hidden absolute left-10 top-10 bottom-10 w-[2px] verdant-flow-line-vertical opacity-50 z-0" />

          {/* Horizontal connector — desktop, spans between node centers (12.5% inset = half of a 4-col grid) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-[2px] verdant-flow-line opacity-50 z-0" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-4 gap-14 lg:gap-6">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className="flex items-start gap-6 lg:flex-col lg:items-center lg:text-center lg:gap-0 group"
                >
                  {/* Node */}
                  <div className="relative shrink-0">
                    <div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg shadow-emerald-900/15 ring-4 ring-white group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-300`}
                    >
                      <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white border-2 border-emerald-500 text-emerald-700 text-[11px] font-black flex items-center justify-center shadow-sm">
                      {step.step}
                    </span>
                  </div>

                  {/* Text */}
                  <div className="pt-1 lg:pt-6 lg:px-2 max-w-[220px]">
                    <h3 className="text-lg font-bold text-gray-900 mb-1.5 group-hover:text-emerald-700 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-24 text-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold text-sm rounded-2xl hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-xl shadow-emerald-600/25 hover:shadow-2xl hover:shadow-emerald-600/40 hover:-translate-y-0.5 group"
          >
            Start Tracking E-Waste 
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <p className="text-xs text-gray-400 mt-3 font-medium">
            No credit card required • Setup takes less than 2 minutes
          </p>
        </div>

      </div>
    </section>
  );
}