import { useEffect, useRef, useState } from 'react';
import {
  Leaf,
  ShieldCheck,
  Target,
  Users,
  Award,
  Truck,
  Filter,
  Cog,
  Recycle,
  RefreshCw,
  BadgeCheck,
  PackageOpen,
  Cpu,
  Wrench,
  FlaskConical,
  ArrowUpRight,
  Calendar,
} from 'lucide-react';
import aboutBgImage from '../assets/logo.jpeg';

const coreValues = [
  {
    title: 'Environmental Integrity',
    description: 'Ensuring zero-landfill policies and strict eco-friendly protocols across all recycling and refining streams.',
    icon: Leaf,
  },
  {
    title: 'Certified Compliance',
    description: 'Adhering strictly to national and international environmental standards, ISO guidelines, and regulatory frameworks.',
    icon: ShieldCheck,
  },
  {
    title: 'Advanced Innovation',
    description: 'Utilizing modern technology and automated processes for precision sorting, dismantling, and precious metal recovery.',
    icon: Target,
  },
  {
    title: 'Client Partnership',
    description: 'Collaborating closely with corporations, municipalities, and industries to fulfill extended producer responsibility (EPR).',
    icon: Users,
  },
];

const scope = [
  { text: 'Recycling of plastic waste and scrap materials', icon: Recycle },
  { text: 'Comprehensive plastic waste management solutions', icon: PackageOpen },
  { text: 'End-to-end e-waste management — collection & segregation', icon: Cpu },
  { text: 'Precision dismantling and refurbishing of electronics', icon: Wrench },
  { text: 'Advanced recycling and metallurgical refining of e-waste', icon: FlaskConical },
];

// Leadership — the two names on the company's own letterhead/business
// card, carried into the About section so the brand has a face behind it.
const leadership = [
  {
    name: 'Mukund Vaishnav',
    title: 'Chief Executive Officer',
    initials: 'MV',
  },
  {
    name: 'Harshvardhan Patil',
    title: 'Director',
    initials: 'HP',
  },
];

// The five stages of the closed loop this business actually runs —
// used to justify a circular diagram instead of a decorative one.
// `delay` phase-shifts every node along the same orbit path so they
// stay evenly spaced (72° apart) while continuously revolving.
const ORBIT_DURATION = 40; // seconds — matches the dashed ring's spin
const loopStages = [
  { label: 'Collect', icon: Truck, top: '8%', left: '50%', delay: '0s' },
  { label: 'Sort', icon: Filter, top: '37%', left: '89.9%', delay: `-${ORBIT_DURATION * 0.2}s` },
  { label: 'Process', icon: Cog, top: '84%', left: '74.7%', delay: `-${ORBIT_DURATION * 0.4}s` },
  { label: 'Recover', icon: Recycle, top: '84%', left: '25.3%', delay: `-${ORBIT_DURATION * 0.6}s` },
  { label: 'Reuse', icon: RefreshCw, top: '37%', left: '10.1%', delay: `-${ORBIT_DURATION * 0.8}s` },
];

const credentials = [
  { text: 'Est. 2024', icon: Calendar },
  { text: 'ISO 14001 Aligned', icon: BadgeCheck },
  { text: 'EPR Authorized', icon: BadgeCheck },
  { text: 'Zero-Landfill Operations', icon: BadgeCheck },
];

function usePillarsInView() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
}

export default function About() {
  const [pillarsRef, pillarsInView] = usePillarsInView();

  return (
    <section id="about" className="py-20 bg-white text-[#14231C] relative overflow-hidden">
      {/* Typography system, scoped to this section */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,340;9..144,440;9..144,560&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@500&display=swap');
        #about .font-display { font-family: 'Fraunces', Georgia, serif; font-optical-sizing: auto; }
        #about .font-body { font-family: 'Inter', system-ui, sans-serif; }
        #about .font-label { font-family: 'IBM Plex Mono', ui-monospace, monospace; }

        @keyframes about-spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        #about .loop-ring {
          animation: about-spin-slow 40s linear infinite;
        }

        /* Traces a circle (12-point polygon approximation) around the
           center of the loop panel. Every badge uses this same path,
           phase-shifted via a negative animation-delay, so all five
           stay evenly spaced while continuously orbiting. */
        @keyframes about-orbit-path {
          0%      { top: 8%;    left: 50%; }
          8.333%  { top: 13.6%; left: 71%; }
          16.667% { top: 29%;   left: 86.4%; }
          25%     { top: 50%;   left: 92%; }
          33.333% { top: 71%;   left: 86.4%; }
          41.667% { top: 86.4%; left: 71%; }
          50%     { top: 92%;   left: 50%; }
          58.333% { top: 86.4%; left: 29%; }
          66.667% { top: 71%;   left: 13.6%; }
          75%     { top: 50%;   left: 8%; }
          83.333% { top: 29%;   left: 13.6%; }
          91.667% { top: 13.6%; left: 29%; }
          100%    { top: 8%;    left: 50%; }
        }
        #about .orbit-node {
          animation-name: about-orbit-path;
          animation-duration: 40s;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          #about .loop-ring, #about .orbit-node { animation: none; }
        }

        @keyframes about-fade-up {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        #about .pillar-reveal {
          opacity: 0;
        }
        #about .pillar-reveal.is-visible {
          animation: about-fade-up 0.6s ease forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          #about .pillar-reveal { opacity: 1; animation: none; }
        }
      `}</style>

      {/* Quiet background accents — two, echoing the closed-loop motif */}
      <div className="absolute -top-24 -left-24 w-[520px] h-[520px] bg-emerald-50 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-24 w-[420px] h-[420px] bg-emerald-50/70 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Leadership — highlighted banner, leads the section */}
        <div className="relative rounded-2xl bg-[#0F3D2C] overflow-hidden mb-14">
          {/* Ambient glow + hairline gold seam, echoing the brand's gold ring motif */}
          <div className="absolute -top-20 -right-16 w-72 h-72 bg-emerald-400/20 rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-10 w-64 h-64 bg-[#C9A24B]/10 rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#C9A24B] to-transparent" />

          <div className="relative px-7 py-8 lg:px-10 lg:py-9">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-6 bg-[#C9A24B]" />
              <span className="font-label text-[11px] font-medium tracking-[0.22em] text-[#C9A24B] uppercase">
                Leadership
              </span>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
              {leadership.map((person) => (
                <div
                  key={person.name}
                  className="group flex items-center gap-5 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.07] hover:border-[#C9A24B]/40"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C9A24B] to-[#a8843a] flex items-center justify-center shrink-0 shadow-[0_8px_20px_rgba(0,0,0,0.25)]">
                    <span className="font-display text-xl text-[#0F3D2C] tracking-tight">
                      {person.initials}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-xl lg:text-2xl text-white tracking-tight truncate">
                      {person.name}
                    </h3>
                    <p className="font-label text-[11px] uppercase tracking-[0.18em] text-[#C9A24B] mt-1.5">
                      {person.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-10 pb-10 border-b border-[#E3E8E3]">
          <div className="lg:col-span-7">
            <div className="font-label inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] text-[#0F6B4C] uppercase mb-5">
              <Award size={13} strokeWidth={2} />
              About Verdant&#8209;Salvage Bharat Pvt. Ltd.
            </div>
            <h2 className="font-display text-4xl lg:text-[3rem] leading-[1.08] tracking-tight text-[#14231C]">
              Pioneering sustainable waste
              <br />
              management <span className="text-[#0F6B4C] italic">&amp; recycling.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="font-body text-[#5C7568] text-base leading-relaxed">
              We stand at the forefront of the circular economy, delivering
              robust, transparent, and eco-friendly solutions tailored for
              modern industrial and municipal requirements.
            </p>
          </div>
        </div>

        {/* Credential strip — quiet proof points, not a stats template */}
        <div className="flex flex-wrap gap-3 mb-16">
          {credentials.map((item) => {
            const ItemIcon = item.icon;
            return (
              <span
                key={item.text}
                className="font-label inline-flex items-center gap-2 text-[11px] tracking-wide text-[#0F6B4C] bg-emerald-50/70 border border-[#E3E8E3] rounded-full px-3.5 py-2"
              >
                <ItemIcon size={13} strokeWidth={2} />
                {item.text}
              </span>
            );
          })}
        </div>

        {/* Main Info Grid — asymmetric 5/7 */}
        <div className="grid lg:grid-cols-12 gap-16 items-center mb-20">
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-[#E3E8E3] bg-white overflow-hidden">
              {/* Faint brand watermark — presence without shouting */}
              <img
                src={aboutBgImage}
                alt=""
                aria-hidden="true"
                className="pointer-events-none select-none absolute -right-10 -bottom-10 w-56 h-56 object-contain opacity-[0.05] grayscale"
              />

              <div className="relative px-7 pt-7 pb-2">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-full border border-[#E3E8E3] bg-emerald-50/60 flex items-center justify-center overflow-hidden shrink-0 p-2">
                    <img
                      src={aboutBgImage}
                      alt="Verdant-Salvage Bharat seal"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl text-[#14231C] tracking-tight">
                      Our operational scope
                    </h3>
                    <p className="font-label text-[10px] uppercase tracking-[0.16em] text-[#0F6B4C] mt-1">
                      Verdant&#8209;Salvage Bharat
                    </p>
                  </div>
                </div>

                <p className="font-body text-[#5C7568] text-sm leading-relaxed mb-6">
                  End-to-end management, processing, and transformation of
                  complex plastic and e-waste streams.
                </p>
              </div>

              <ul className="relative border-t border-[#E3E8E3]">
                {scope.map((item) => {
                  const ItemIcon = item.icon;
                  return (
                    <li
                      key={item.text}
                      className="group flex items-center gap-4 px-7 py-4 border-b border-[#E3E8E3] last:border-b-0 transition-colors duration-300 hover:bg-emerald-50/50"
                    >
                      <div className="w-9 h-9 rounded-full bg-emerald-50 border border-[#E3E8E3] flex items-center justify-center text-[#0F6B4C] shrink-0 transition-colors duration-300 group-hover:bg-[#0F6B4C] group-hover:text-white">
                        <ItemIcon size={16} strokeWidth={1.75} />
                      </div>
                      <span className="font-body text-[#14231C] text-sm lg:text-[15px] leading-snug flex-1">
                        {item.text}
                      </span>
                      <ArrowUpRight
                        size={16}
                        className="text-[#0F6B4C] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shrink-0"
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Signature element — the operational loop this company actually runs,
              with the mark at the hub instead of sitting alone in a box. */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl border border-[#E3E8E3] bg-gradient-to-br from-emerald-50/70 via-white to-white overflow-hidden">
              <div className="relative flex items-center justify-center px-6 py-14 lg:py-16">
                <div className="relative w-full max-w-[380px] aspect-square mx-auto hidden sm:block">
                  {/* Rotating dashed ring — pure decoration, no text inside it */}
                  <div className="loop-ring absolute inset-[10%] rounded-full border border-dashed border-[#0F6B4C]/25 pointer-events-none" />
                  <div className="absolute inset-[22%] rounded-full bg-emerald-200/25 blur-[50px] pointer-events-none" />

                  {/* Center mark */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={aboutBgImage}
                      alt="Verdant-Salvage Bharat logo"
                      className="max-h-[110px] w-auto object-contain drop-shadow-[0_8px_24px_rgba(15,107,76,0.14)]"
                    />
                  </div>

                  {/* Stage nodes — orbit continuously around the ring, staying upright */}
                  {loopStages.map((stage) => {
                    const StageIcon = stage.icon;
                    return (
                      <div
                        key={stage.label}
                        className="orbit-node absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5"
                        style={{ top: stage.top, left: stage.left, animationDelay: stage.delay }}
                      >
                        <div className="w-11 h-11 rounded-full bg-white border border-[#E3E8E3] shadow-sm flex items-center justify-center text-[#0F6B4C]">
                          <StageIcon size={17} strokeWidth={1.75} />
                        </div>
                        <span className="font-label text-[9px] uppercase tracking-[0.14em] text-[#5C7568] whitespace-nowrap">
                          {stage.label}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Compact mobile fallback: logo + a simple stage row */}
                <div className="sm:hidden flex flex-col items-center gap-8 w-full">
                  <img
                    src={aboutBgImage}
                    alt="Verdant-Salvage Bharat logo"
                    className="max-h-[130px] w-auto object-contain drop-shadow-[0_8px_24px_rgba(15,107,76,0.14)]"
                  />
                  <div className="flex flex-wrap justify-center gap-3">
                    {loopStages.map((stage) => {
                      const StageIcon = stage.icon;
                      return (
                        <span
                          key={stage.label}
                          className="font-label inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wide text-[#0F6B4C] bg-emerald-50/70 border border-[#E3E8E3] rounded-full px-3 py-1.5"
                        >
                          <StageIcon size={12} strokeWidth={2} />
                          {stage.label}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="relative border-t border-[#E3E8E3] px-8 py-5 flex items-center justify-between bg-white/70 backdrop-blur-sm">
                <p className="font-label text-[10px] uppercase tracking-[0.16em] text-[#0F6B4C]">
                  Trusted Infrastructure
                </p>
                <h4 className="font-display text-base text-[#14231C] tracking-tight">
                  Committed to a cleaner, greener future
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values / Pillars — hairline row, revealed on scroll */}
        <div ref={pillarsRef} className="mb-20">
          <div className="flex items-end justify-between gap-6 mb-8 border-b border-[#E3E8E3] pb-5">
            <h3 className="font-display text-2xl lg:text-3xl text-[#14231C] tracking-tight">
              Our core pillars
            </h3>
            <p className="font-body hidden sm:block text-sm text-[#5C7568] max-w-xs text-right">
              Driving operational excellence with accountability and safety.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={value.title}
                  className={`pillar-reveal group py-6 px-1 lg:px-7 lg:py-2 border-t sm:border-t-0 lg:border-t-0 ${
                    index === 0 ? '' : 'lg:border-l'
                  } border-[#E3E8E3] first:pl-0 ${pillarsInView ? 'is-visible' : ''}`}
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  <div className="w-11 h-11 rounded-full border border-[#E3E8E3] text-[#0F6B4C] flex items-center justify-center mb-4 group-hover:border-[#0F6B4C] group-hover:bg-[#0F6B4C] group-hover:text-white group-hover:scale-105 transition-all duration-300">
                    <IconComponent size={18} strokeWidth={1.75} />
                  </div>
                  <h4 className="font-display text-lg text-[#14231C] mb-2 tracking-tight">
                    {value.title}
                  </h4>
                  <p className="font-body text-[13.5px] text-[#5C7568] leading-relaxed">
                    {value.description}
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