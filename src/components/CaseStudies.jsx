import { ArrowUpRight, Recycle, TrendingUp, Users, Globe } from "lucide-react";

const services = [
  {
    title: "Plastic Waste Collection",
    metric: "10K+",
    metricLabel: "Tons Collected",
    description:
      "We collect plastic waste from industries, commercial establishments, and communities through an efficient collection network.",
    image:
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&q=80&auto=format&fit=crop",
    tag: "Collection",
    icon: Recycle,
    color: "text-emerald-600",
  },
  {
    title: "Waste Segregation",
    metric: "99%",
    metricLabel: "Sorting Accuracy",
    description:
      "Plastic waste is carefully segregated based on material type, ensuring high-quality recycling and resource recovery.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80&auto=format&fit=crop",
    tag: "Segregation",
    icon: TrendingUp,
    color: "text-blue-600",
  },
  {
    title: "Recycling Process",
    metric: "24/7",
    metricLabel: "Operations",
    description:
      "Our advanced recycling process converts discarded plastic into reusable raw materials for sustainable manufacturing.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&q=80&auto=format&fit=crop",
    tag: "Recycling",
    icon: Users,
    color: "text-teal-600",
  },
  {
    title: "Environmental Commitment",
    metric: "100%",
    metricLabel: "Eco Focus",
    description:
      "We are dedicated to reducing landfill waste, conserving natural resources, and supporting a cleaner, greener future.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&q=80&auto=format&fit=crop",
    tag: "Sustainability",
    icon: Globe,
    color: "text-purple-600",
  },
];

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="py-24 bg-gray-50 relative overflow-hidden"
    >
      {/* Background Blur */}
      <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-emerald-100 rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 badge-gradient rounded-full text-sm font-semibold text-emerald-700 mb-5">
            Our Services
          </div>

          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-5">
            Sustainable
            <span className="gradient-text"> Plastic Recycling</span>
          </h2>

          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            We provide end-to-end plastic waste management solutions—from
            collection and segregation to recycling and environmental
            sustainability.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group premium-card overflow-hidden bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  {/* Tag */}
                  <div className="absolute top-5 left-5">
                    <span className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold border border-white/30">
                      {service.tag}
                    </span>
                  </div>

                  {/* Metric */}
                  <div className="absolute bottom-5 left-5">
                    <h3 className="text-5xl font-black text-white">
                      {service.metric}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {service.metricLabel}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                        {service.title}
                      </h3>
                    </div>

                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center">
                      <Icon className={service.color} size={22} />
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* <div className="inline-flex items-center gap-2 text-emerald-600 font-semibold cursor-pointer group/link">
                    Learn More
                    <ArrowUpRight
                      size={16}
                      className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform"
                    />
                  </div> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}