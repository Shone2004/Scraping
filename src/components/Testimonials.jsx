const testimonials = [
  {
    name: 'Rajesh Sharma',
    role: 'Chief Data Officer',
    company: 'Tata Cleantech',
    avatar: 'RS',
    avatarColor: 'bg-emerald-600',
    stars: 5,
    text: 'Verdant has fundamentally transformed how we collect and use market intelligence. The accuracy of their scrapers is unmatched—98.7% data precision across 50+ sources. We\'ve reduced our research costs by 60% and are making smarter decisions faster than ever.',
    location: 'Mumbai, India',
  },
  {
    name: 'Priya Iyer',
    role: 'VP of Operations',
    company: 'Ecozen Solutions',
    avatar: 'PI',
    avatarColor: 'bg-teal-600',
    stars: 5,
    text: 'The tender monitoring feature alone has paid for itself 10x over. We\'ve won 24 new municipal contracts this year that we would have missed without real-time alerts. The dashboard is incredibly intuitive and our team adopted it in days.',
    location: 'Bengaluru, India',
  },
  {
    name: 'Vikram Malhotra',
    role: 'Sustainability Director',
    company: 'Antony Waste Handling',
    avatar: 'VM',
    avatarColor: 'bg-cyan-600',
    stars: 5,
    text: 'Compliance monitoring used to require a team of 8 analysts. Verdant automated 90% of that work. We now have perfect compliance visibility across all major Indian regulatory bodies, with instant alerts when anything changes. Exceptional product.',
    location: 'New Delhi, India',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-emerald-50 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 badge-gradient rounded-full text-sm font-semibold text-emerald-700 mb-4">
            Client Reviews
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-4">
            What Industry Leaders
            <span className="gradient-text"> Say About Us</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-amber-400 text-xl">★</span>
              ))}
            </div>
            <span className="text-gray-500 text-sm font-medium">4.9 / 5.0 average from 500+ reviews</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-7">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group premium-card p-7 relative overflow-hidden flex flex-col"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[20px]" />

              {/* Quote mark */}
              <div className="absolute top-5 right-6 text-6xl text-emerald-100 font-black leading-none select-none">
                "
              </div>

              <div className="relative z-10 flex flex-col flex-1">
                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(t.stars)].map((_, i) => (
                    <span key={i} className="text-amber-400 text-sm">★</span>
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-600 text-sm leading-relaxed flex-1 italic">&ldquo;{t.text}&rdquo;</p>

                {/* Divider */}
                <div className="w-full h-px bg-gray-100 my-5" />

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 ${t.avatarColor} rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 shadow-sm`}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.role} · {t.company}</p>
                  </div>
                  <div className="ml-auto">
                    <span className="text-[10px] text-gray-300 font-medium">{t.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}