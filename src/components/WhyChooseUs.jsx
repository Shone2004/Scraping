import { Bot, Activity, Target, RefreshCw, LayoutDashboard, Plug, Server, ShieldCheck, Globe, Zap } from 'lucide-react';

const features = [
  {
    icon: Activity,
    label: "Waste Collection",
    desc: "Efficient collection and transportation of plastic waste."
  },
  {
    icon: Target,
    label: "Waste Segregation",
    desc: "Proper sorting of recyclable and non-recyclable materials."
  },
  {
    icon: RefreshCw,
    label: "Plastic Recycling",
    desc: "Converting discarded plastic into reusable raw materials."
  },
  {
    icon: LayoutDashboard,
    label: "Quality Processing",
    desc: "Advanced recycling processes ensuring consistent material quality."
  },
  {
    icon: Plug,
    label: "Industrial Solutions",
    desc: "Reliable recycling services for businesses and manufacturers."
  },
  {
    icon: Server,
    label: "Modern Facilities",
    desc: "Well-equipped plants for efficient plastic waste processing."
  },
  {
    icon: ShieldCheck,
    label: "Safe Operations",
    desc: "Following industry standards for safe and responsible recycling."
  },
  {
    icon: Globe,
    label: "Eco-Friendly Practices",
    desc: "Reducing environmental impact through sustainable recycling."
  },
  {
    icon: Zap,
    label: "Timely Service",
    desc: "Fast collection, processing, and delivery of recycled materials."
  },
  {
    icon: Bot,
    label: "Custom Recycling Solutions",
    desc: "Tailored waste management services for diverse industries."
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gray-50/60 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-50 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Heading + description */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 badge-gradient rounded-full text-sm font-semibold text-emerald-700">
            Why Choose Verdant
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-[1.1]">
              Enterprise-Grade
              <br />
              <span className="gradient-text">Platform, Built</span>
              <br />
              for Scale
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Verdant combines cutting-edge with battle-tested infrastructure to deliver the most
              reliable and comprehensive waste management data platform in the industry.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { val: '99.9%', label: 'SLA Uptime' },
                { val: '<200ms', label: 'Avg. Latency' },
                { val: '500+', label: 'Integrations' },
              ].map((s) => (
                <div key={s.label} className="glass-card rounded-2xl p-4 text-center">
                  <div className="text-xl font-black gradient-text">{s.val}</div>
                  <div className="text-xs text-gray-500 font-medium mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>

            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 bg-emerald-600 text-white font-semibold rounded-2xl hover:bg-emerald-700 transition-all duration-200 shadow-[0_8px_24px_rgba(22,163,74,0.4)] hover:shadow-[0_12px_32px_rgba(22,163,74,0.5)] hover:-translate-y-1"
            >
              Get Quote →
            </a>
          </div>

          {/* Right: Feature grid */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.label}
                  className="group premium-card p-5 flex items-start gap-4 relative overflow-hidden"
                >
                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[20px]" />

                  <div className="w-10 h-10 bg-emerald-50 group-hover:bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                    <Icon className="w-5 h-5 text-emerald-600" strokeWidth={1.8} />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                      <p className="text-sm font-bold text-gray-900">{feature.label}</p>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}