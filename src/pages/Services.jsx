import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  ShieldCheck,
  Award,
  Truck,
} from 'lucide-react';
import { servicesMenu } from '../data/servicesMenu';

const process = [
  { step: 'Collect', detail: 'Scheduled pickup from source' },
  { step: 'Segregate', detail: 'Sorted by material & hazard class' },
  { step: 'Process', detail: 'Shredded, treated or refined' },
  { step: 'Recover', detail: 'Materials & water reclaimed' },
  { step: 'Distribute', detail: 'Returned to the supply chain' },
];

const certifications = [
  { icon: ShieldCheck, label: 'ISO 14001:2015' },
  { icon: Award, label: 'ISO 45001:2018' },
  { icon: CheckCircle2, label: 'CPCB Authorized' },
  { icon: Truck, label: 'E-Waste Rules, 2022 Compliant' },
];

export default function Services() {
  const [activeStep, setActiveStep] = useState(null);

  return (
    <div className="bg-white pt-[88px]">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden border-b border-gray-100">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-50 rounded-full blur-3xl opacity-60 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-16 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-50 rounded-full text-sm font-semibold text-brand-700 mb-5">
            Our Services
          </div>
          <h1 className="text-4xl lg:text-6xl font-black text-gray-900 tracking-tight max-w-3xl leading-[1.1]">
            Five systems.
            <br />
            One circular economy.
          </h1>
          <p className="text-gray-500 text-lg max-w-xl mt-6 leading-relaxed">
            Verdant Salvage Bharat runs the infrastructure that keeps waste, water,
            and electronics moving back into use — collection through to recovery,
            built to municipal and industrial scale.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <a
              href="#service-index"
              className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-green-sm transition-colors"
            >
              Explore services
              <ChevronRight size={16} />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-gray-200 text-gray-700 font-semibold text-sm px-6 py-3.5 rounded-xl hover:bg-gray-50 transition-colors"
            >
              Request a site audit
            </Link>
          </div>
        </div>
      </section>

      {/* ================= PROCESS FLOW ================= */}
      <section className="bg-brand-50/40 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-3">
            <div>
              <span className="text-xs font-bold text-brand-600 uppercase tracking-[.12em]">
                How material moves through us
              </span>
              <h2 className="text-2xl lg:text-3xl font-black text-gray-900 tracking-tight mt-2">
                The recovery pipeline
              </h2>
            </div>
            <p className="text-sm text-gray-500 max-w-xs">
              Every service below plugs into this same five-stage flow, from first
              pickup to material re-entering the supply chain.
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-6 left-6 right-6 h-px bg-brand-200" />
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 relative">
              {process.map((p, i) => (
                <button
                  key={p.step}
                  onClick={() => setActiveStep(i === activeStep ? null : i)}
                  className="text-left group"
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-black text-sm border-2 transition-colors ${
                      activeStep === i
                        ? 'bg-brand-600 border-brand-600 text-white'
                        : 'bg-white border-brand-600 text-brand-700 group-hover:bg-brand-100'
                    }`}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="font-bold text-gray-900 mt-3">{p.step}</div>
                  <div className="text-xs text-gray-500 mt-1">{p.detail}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICE INDEX ================= */}
      <section id="service-index" className="scroll-mt-24 py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-xs font-bold text-brand-600 uppercase tracking-[.12em]">
              Our Services
            </span>
            <h2 className="text-2xl lg:text-3xl font-black text-gray-900 tracking-tight mt-2">
              Choose a service to see the full picture
            </h2>
          </div>

          <div className="divide-y divide-gray-100 border-y border-gray-100">
            {servicesMenu.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.id}
                  to={service.to}
                  className="group flex items-center gap-5 py-6 hover:bg-brand-50/40 -mx-4 px-4 rounded-xl transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center shrink-0 group-hover:bg-brand-100 transition-colors">
                    <Icon className="w-5 h-5 text-brand-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 group-hover:text-brand-700 transition-colors">
                      {service.label}
                    </h3>
                    <p className="text-sm text-gray-500 mt-0.5 truncate">{service.desc}</p>
                  </div>
                  <span className="hidden sm:block text-xs font-semibold text-brand-700 bg-brand-50 border border-brand-100 rounded-full px-3 py-1 shrink-0">
                    {service.stat.value} {service.stat.label}
                  </span>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-brand-600 group-hover:translate-x-1 transition-all shrink-0" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CERTIFICATIONS ================= */}
      <section className="bg-brand-50/40 border-y border-gray-100 py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-brand-600 uppercase tracking-[.12em]">
              Compliance
            </span>
            <h2 className="text-2xl lg:text-3xl font-black text-gray-900 tracking-tight mt-2">
              Certified at every stage
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.label}
                  className="bg-white border border-gray-100 shadow-green-sm rounded-2xl flex flex-col items-center text-center gap-3 py-8 px-4"
                >
                  <div className="w-11 h-11 rounded-full bg-brand-100 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-brand-700" />
                  </div>
                  <span className="text-xs text-gray-600 font-medium tracking-wide">
                    {c.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20 text-center">
          <h2 className="text-3xl lg:text-5xl font-black text-gray-900 tracking-tight leading-tight">
            Ready to close the loop on your waste?
          </h2>
          <p className="text-gray-500 text-lg mt-5 max-w-xl mx-auto">
            Tell us what you generate, how much, and where — we'll size the right
            combination of services for your site.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm px-7 py-4 rounded-xl shadow-green-sm transition-colors mt-8"
          >
            Schedule a site assessment
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}