import { useEffect, useRef, useState } from 'react';
import {
  Recycle,
  Building2,
  ShieldCheck,
  Users,
} from "lucide-react";

const stats = [
  {
    value: 100000,
    suffix: "+",
    label: "Tons of Plastic Recycled",
    description: "Successfully processed every year",
    icon: Recycle,
  },
  {
    value: 50,
    suffix: "+",
    label: "Industrial Clients",
    description: "Across multiple sectors",
    icon: Building2,
  },
  {
    value: 98,
    suffix: "%",
    label: "Recovery Rate",
    description: "Maximum recycling efficiency",
    icon: ShieldCheck,
  },
  {
    value: 10,
    suffix: "+",
    label: "Municipal Corporation",
    description: "Serving nationwide",
    icon: Users,
  },
];

function AnimatedNumber({ target, suffix, duration = 2000 }) {
  const [current, setCurrent] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.50 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const steps = 60;
    const increment = target / steps;
    let count = 0;
    const interval = setInterval(() => {
      count++;
      const next = Math.min(increment * count, target);
      setCurrent(parseFloat(next.toFixed(1)));
      if (count >= steps) clearInterval(interval);
    }, duration / steps);
    return () => clearInterval(interval);
  }, [started, target, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {current % 1 === 0 ? current.toFixed(0) : current.toFixed(1)}
      {suffix}
    </span>
  );
}

export default function Statistics() {
  return (
    <section className="-mt-10 sm:-mt-14 lg:-mt-20 relative z-30 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-emerald-100">

          <div className="grid grid-cols-2 lg:grid-cols-4">

            {stats.map((stat, index) => {
              const Icon = stat.icon;
              const isLastMobileCol = index % 2 === 1;
              const isLastRowMobile = index >= stats.length - 2;
              const isLastDesktop = index === stats.length - 1;

              return (
                <div
                  key={stat.label}
                  className={`relative p-5 sm:p-8 lg:p-10 text-center group transition-all duration-300 hover:-translate-y-1 border-gray-100
                    ${!isLastMobileCol ? "border-r" : ""}
                    ${!isLastRowMobile ? "border-b" : ""}
                    lg:border-b-0
                    ${!isLastDesktop ? "lg:border-r" : "lg:border-r-0"}`}
                >

                  <div className="w-11 h-11 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-3 sm:mb-5 lg:mb-6 transition group-hover:bg-emerald-600">

                    <Icon
                      className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-emerald-700 group-hover:text-white transition"
                      strokeWidth={2}
                    />

                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-1.5 sm:mb-2">
                    <AnimatedNumber
                      target={stat.value}
                      suffix={stat.suffix}
                    />
                  </h3>

                  <p className="text-sm sm:text-base font-semibold text-gray-800 leading-snug">
                    {stat.label}
                  </p>

                  <p className="hidden sm:block text-sm text-gray-500 mt-2 leading-relaxed">
                    {stat.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}