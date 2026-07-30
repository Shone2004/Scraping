import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Building2,
} from 'lucide-react';
import { servicesMenu } from '../data/servicesMenu';

// Source attribution shown under each service's impact numbers
const sources = {
  1: 'World Bank & UNEP Global Waste Management Outlook, 2024',
  2: 'India Recycling Equipment Market research, 2024–2035',
  3: 'Central Ground Water Board, Dynamic Ground Water Resources, 2025',
  4: 'UN Global E-waste Monitor, 2024 (UNITAR / ITU)',
  5: 'Central Pollution Control Board, sewage treatment data',
};

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'impact', label: 'Why It Matters' },
  { id: 'causes', label: 'The Root Causes' },
  { id: 'benefits', label: 'Benefits' },
  { id: 'usage', label: 'Where It\u2019s Used' },
  { id: 'delivery', label: 'How We Deliver It' },
];

export default function ServiceDetail() {
  const { slug } = useParams();
  const index = servicesMenu.findIndex((s) => s.slug === slug);
  const service = servicesMenu[index];

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = service.icon;
  const prev = servicesMenu[(index - 1 + servicesMenu.length) % servicesMenu.length];
  const next = servicesMenu[(index + 1) % servicesMenu.length];

  return (
    <div className="bg-white pt-[88px]">
      {/* ================= EDITORIAL HERO ================= */}
      <section className="relative overflow-hidden border-b border-gray-100">
        <div className="absolute inset-0">
          <img src={service.image} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-12 pb-20 relative z-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-500 hover:text-brand-700 transition-colors"
          >
            <ArrowLeft size={14} />
            All services
          </Link>

          <div className="max-w-2xl mt-8">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-brand-600 flex items-center justify-center shadow-green-sm shrink-0">
                <Icon className="w-5 h-5 text-white" />
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-bold text-brand-600 uppercase tracking-[.14em]">
                  Service {String(index + 1).padStart(2, '0')} / {String(servicesMenu.length).padStart(2, '0')}
                </span>
                <span className="px-2.5 py-0.5 bg-white text-brand-700 text-xs font-semibold rounded-full border border-brand-100 shadow-sm">
                  {service.tag}
                </span>
              </div>
            </div>

            <h1 className="text-4xl lg:text-6xl font-black text-gray-900 tracking-tight mt-5 leading-[1.05]">
              {service.label}
            </h1>
            <p className="text-gray-600 text-lg mt-5 leading-relaxed">
              {service.meaning}
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {service.metrics.map((m) => (
                <span
                  key={m}
                  className="px-3 py-1.5 bg-white text-gray-700 text-xs font-semibold rounded-full border border-gray-200 shadow-sm"
                >
                  {m}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-green-sm transition-colors"
              >
                Request this service
                <ArrowUpRight size={16} />
              </Link>
              <div className="bg-white/80 backdrop-blur border border-gray-100 shadow-sm rounded-xl px-4 py-2.5">
                <div className="text-lg font-black text-gray-900 leading-none">{service.stat.value}</div>
                <div className="text-[10px] uppercase tracking-wide text-gray-400 mt-1">{service.stat.label}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BODY: sticky nav + content ================= */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-[220px_1fr] gap-12">
          {/* Sticky section nav — desktop only */}
          <nav className="hidden lg:block">
            <div className="sticky top-28 space-y-1">
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3 px-3">
                On this page
              </p>
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="block px-3 py-2 rounded-lg text-sm text-gray-500 hover:text-brand-700 hover:bg-brand-50 transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </nav>

          {/* Content column */}
          <div className="min-w-0">
            {/* Overview — image */}
            <div id="overview" className="scroll-mt-28 mb-20">
              <div className="relative h-64 lg:h-80 rounded-2xl overflow-hidden">
                <img src={service.image} alt={service.alt} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>

            {/* Why It Matters — impact stats */}
            <div id="impact" className="scroll-mt-28 mb-20">
              <SectionHeading eyebrow="Why It Matters" title="The scale of the problem" />
              <div className="grid sm:grid-cols-3 gap-4 mt-8">
                {service.impact.map((stat) => (
                  <div key={stat.label} className="bg-brand-50 rounded-2xl p-5 border border-brand-100">
                    <div className="text-2xl font-black text-brand-700 leading-tight">{stat.value}</div>
                    <div className="text-[13px] text-gray-600 mt-2 leading-snug">{stat.label}</div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-4">Source: {sources[service.id]}</p>
            </div>

            {/* Causes — numbered list with faded background numerals */}
            <div id="causes" className="scroll-mt-28 mb-20">
              <SectionHeading eyebrow="The Root Causes" title="What drives the problem" />
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2 mt-8">
                {service.causes.map((cause, i) => (
                  <div key={cause} className="relative pl-14 py-5 border-b border-gray-100">
                    <span className="absolute left-0 top-2 text-4xl font-black text-brand-50 leading-none select-none">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="relative text-[15px] text-gray-700 leading-relaxed">{cause}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits — card grid */}
            <div id="benefits" className="scroll-mt-28 mb-20">
              <SectionHeading eyebrow="Benefits" title="What you gain" />
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {service.benefits.map((b) => (
                  <div
                    key={b.title}
                    className="bg-white border border-gray-100 shadow-green-sm rounded-2xl p-6 hover:-translate-y-0.5 hover:shadow-[0_16px_32px_-16px_rgba(22,163,74,.25)] transition-all duration-300"
                  >
                    <div className="w-9 h-9 rounded-lg bg-brand-50 flex items-center justify-center mb-4">
                      <Sparkles className="w-4 h-4 text-brand-600" />
                    </div>
                    <h3 className="font-bold text-gray-900">{b.title}</h3>
                    <p className="text-sm text-gray-500 mt-1.5 leading-relaxed">{b.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Usage — chip grid */}
            <div id="usage" className="scroll-mt-28 mb-20">
              <SectionHeading eyebrow="Where It's Used" title="Who this serves" />
              <div className="flex flex-wrap gap-3 mt-8">
                {service.usage.map((u) => (
                  <span
                    key={u}
                    className="inline-flex items-center gap-2 bg-brand-50 text-brand-700 text-sm font-medium rounded-full px-4 py-2.5 border border-brand-100"
                  >
                    <Building2 className="w-3.5 h-3.5" />
                    {u}
                  </span>
                ))}
              </div>
            </div>

            {/* Delivery — the existing examples list */}
            <div id="delivery" className="scroll-mt-28">
              <SectionHeading eyebrow="How We Deliver It" title="What this looks like in practice" />
              <ul className="space-y-3 mt-8">
                {service.examples.map((ex) => (
                  <li key={ex} className="flex items-start gap-3 text-[15px] text-gray-700 leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-brand-600 mt-0.5 shrink-0" />
                    {ex}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PREV / NEXT ================= */}
      <section className="bg-brand-50/40 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 grid sm:grid-cols-2 gap-4">
          <Link
            to={prev.to}
            className="group flex items-center gap-3 bg-white border border-gray-100 shadow-green-sm rounded-2xl p-5 hover:-translate-y-0.5 transition-transform"
          >
            <ArrowLeft size={16} className="text-brand-600 shrink-0" />
            <div>
              <div className="text-[10px] uppercase tracking-wide text-gray-400">Previous</div>
              <div className="font-bold text-gray-900 group-hover:text-brand-700 transition-colors">
                {prev.label}
              </div>
            </div>
          </Link>
          <Link
            to={next.to}
            className="group flex items-center justify-between gap-3 bg-white border border-gray-100 shadow-green-sm rounded-2xl p-5 hover:-translate-y-0.5 transition-transform sm:text-right"
          >
            <div className="sm:order-1">
              <div className="text-[10px] uppercase tracking-wide text-gray-400">Next</div>
              <div className="font-bold text-gray-900 group-hover:text-brand-700 transition-colors">
                {next.label}
              </div>
            </div>
            <ArrowRight size={16} className="text-brand-600 shrink-0 sm:order-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function SectionHeading({ eyebrow, title }) {
  return (
    <div>
      <span className="text-xs font-bold text-brand-600 uppercase tracking-[.14em]">{eyebrow}</span>
      <h2 className="text-2xl lg:text-3xl font-black text-gray-900 tracking-tight mt-2">{title}</h2>
    </div>
  );
}