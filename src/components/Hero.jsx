import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Award,
  ShieldCheck,
  Lock,
  Activity,
  Recycle,
} from 'lucide-react';
import heroBgImage from '../assets/bewhero.png';
import heroMobileBgImage from '../assets/mobhero.png';

// Lightweight inline brand icons — lucide-react no longer ships social/brand marks,
// so these are self-contained to avoid depending on any external icon package.
function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.24h4.56V23H.22V8.24zM8.1 8.24h4.37v2.01h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 6.99V23H17.8v-6.98c0-1.67-.03-3.81-2.32-3.81-2.33 0-2.69 1.82-2.69 3.69V23H8.1V8.24z" />
    </svg>
  );
}
function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94z" />
    </svg>
  );
}
function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.47 14.38c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.66.15-.2.29-.76.95-.93 1.15-.17.2-.34.22-.63.07-.29-.15-1.22-.45-2.32-1.43-.86-.76-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.6-.91-2.19-.24-.58-.48-.5-.66-.51-.17-.01-.37-.01-.56-.01-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.43 0 1.43 1.04 2.82 1.19 3.01.15.2 2.05 3.14 4.98 4.4.7.3 1.24.48 1.66.61.7.22 1.34.19 1.84.12.56-.08 1.72-.7 1.97-1.38.24-.68.24-1.26.17-1.38-.07-.12-.27-.2-.56-.34z" />
      <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.06-1.33A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18.15c-1.66 0-3.2-.48-4.5-1.31l-.32-.2-3 .79.8-2.93-.21-.3A8.13 8.13 0 0 1 3.85 12c0-4.5 3.65-8.15 8.15-8.15S20.15 7.5 20.15 12 16.5 20.15 12 20.15z" />
    </svg>
  );
}

const trustBadges = [
  'ISO Certified',
  'GDPR Compliant',
  'Real-time Monitoring',
];

const trustBadgesWithIcons = [
  { label: 'ISO Certified', icon: ShieldCheck },
  { label: 'GDPR Compliant', icon: Lock },
  { label: 'Real-time Monitoring', icon: Activity },
];

const socialLinks = [
  { icon: LinkedInIcon, href: '#', label: 'LinkedIn' },
  { icon: FacebookIcon, href: '#', label: 'Facebook' },
  { icon: InstagramIcon, href: '#', label: 'Instagram' },
  { icon: WhatsAppIcon, href: '#', label: 'WhatsApp' },
];

const avatarColors = ['bg-emerald-600', 'bg-teal-600', 'bg-cyan-600', 'bg-green-600', 'bg-emerald-700'];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white text-gray-900">

      {/* ============================= DESKTOP (lg and up) ============================= */}
      <div className="hidden lg:flex relative min-h-[92vh] items-center overflow-hidden pt-24 pb-16">
        {/* Immersive Background Visuals with Full Image Clarity (Zero White Fogs/Overlays) */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <img
            src={heroBgImage}
            alt="Plastic Waste Recycling and Management"
            className="w-full h-full object-cover object-right opacity-100 scale-100"
          />
          {/* Subtle, thin gradient strictly behind the text block for maximum text legibility without clouding the rest of the image */}
          <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-white via-white/90 to-transparent w-[55%]" />
        </div>

        <div className="max-w-7xl mx-auto px-8 py-4 w-full relative z-10">
          <div className="grid grid-cols-12 gap-8 items-center">

            {/* Left Content Column */}
            <div className="col-span-8 space-y-8">

              {/* Top Tag Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-500/20 rounded-full text-xs font-bold tracking-wider text-emerald-800 uppercase shadow-sm">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                </span>
                <Sparkles size={13} className="text-emerald-600" />
                E Waste Management
              </div>

              {/* Impactful Typography Headline */}
              <div className="space-y-3">
                <h1 className="text-6xl xl:text-[66px] font-black text-gray-900 leading-[1.05] tracking-tight">
                  Transform <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 drop-shadow-sm">
                    Waste Management
                  </span> <br />
                  <span className="text-5xl xl:text-[52px] font-extrabold text-gray-800 tracking-normal">
                    with Reliable Machines
                  </span>
                </h1>
              </div>

              {/* Refined Subheading */}
              <p className="text-lg text-gray-700 leading-relaxed max-w-2xl font-normal">
                Collect real-time waste management data from government portals, recycling companies,
                municipal websites, tenders, landfill databases, environmental agencies, and sustainability
                reports—all from one intelligent platform.
              </p>

              {/* High-Conversion CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="/contact"
                  className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-2xl hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-[0_10px_30px_rgba(16,185,129,0.35)] hover:shadow-[0_15px_40px_rgba(16,185,129,0.5)] hover:-translate-y-0.5 text-base tracking-wide"
                >
                  Request Demo
                  <span className="w-7 h-7 rounded-xl bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ArrowRight size={15} className="text-white" />
                  </span>
                </a>
                <a
                  href="/products"
                  className="flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 text-gray-800 font-bold rounded-2xl border-2 border-gray-200 hover:border-emerald-500/50 transition-all duration-300 text-base shadow-sm hover:-translate-y-0.5 tracking-wide"
                >
                  Explore Solutions
                </a>
              </div>

              {/* Feature Trust Pills */}
              <div className="flex flex-wrap gap-3 pt-1">
                {trustBadges.map((badge) => (
                  <div
                    key={badge}
                    className="flex items-center gap-1.5 px-3.5 py-2 bg-white border border-gray-200 rounded-xl text-xs font-bold text-gray-700 shadow-sm"
                  >
                    <CheckCircle2 size={14} className="text-emerald-600 flex-shrink-0" />
                    <span>{badge}</span>
                  </div>
                ))}
              </div>

              {/* Social Proof Avatars & Ratings */}
              <div className="flex items-center gap-4 pt-3 border-t border-gray-200">
                <div className="flex -space-x-3">
                  {avatarColors.map((color, i) => (
                    <div
                      key={i}
                      className={`w-10 h-10 ${color} rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-black tracking-tighter shadow-md`}
                    >
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                  <div className="w-10 h-10 bg-gray-900 text-white rounded-full border-2 border-white flex items-center justify-center text-xs font-black shadow-md">
                    +
                  </div>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900 tracking-tight">
                    Trusted by <span className="text-emerald-600 font-black">500+</span> Organizations
                  </p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <div className="flex text-amber-400 text-xs gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                    <span className="text-xs font-semibold text-gray-500">4.9/5 Rating from Industry Leaders</span>
                  </div>
                </div>
              </div>

              {/* Recycling & Developer Signature Badge (Desktop) */}
              <div className="pt-4 flex items-center gap-3">
                <div className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-emerald-50 text-emerald-600 shadow-inner ring-4 ring-emerald-50/50">
                  <Recycle size={18} />
                </div>
                <div className="font-serif italic text-base tracking-wide text-gray-600">
  It's all about recycling{' '}
  <span className="font-sans font-extrabold not-italic bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text uppercase tracking-wider text-sm ml-0.5">
    Harshvardhan
  </span>
</div>
              </div>

            </div>

            {/* Right Column (Keeps the background image completely clear and visible) */}
            <div className="col-span-4" />

          </div>
        </div>

        {/* Decorative Curved Wave Bottom Transition */}
        <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
          <svg viewBox="0 0 1440 50" className="fill-white w-full h-12" preserveAspectRatio="none">
            <path d="M0,50 L1440,50 L1440,0 Q1080,45 720,25 Q360,5 0,30 Z" />
          </svg>
        </div>
      </div>

      {/* ============================= MOBILE (below lg) ============================= */}
      <div className="lg:hidden relative bg-white">
        {/* Background image — covers exactly the first screen, content below flows on white */}
        <div className="absolute top-0 left-0 right-0 h-[100dvh] z-0">
          <img
            src={heroMobileBgImage}
            alt="Plastic Waste Recycling and Management"
            className="w-full h-full object-cover object-center"
          />
          {/* Legibility overlay — light up top, solid toward the bottom where content sits */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/60 to-white" />
        </div>

        {/* Floating social icons, pinned to the right edge of the screen */}
        <div className="absolute top-28 right-4 z-20 flex flex-col gap-2.5">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-md flex items-center justify-center text-emerald-700 hover:bg-emerald-600 hover:text-white transition-colors duration-200"
            >
              <Icon className="w-[17px] h-[17px]" />
            </a>
          ))}
        </div>

        {/* Stat badge, overlaid on the image */}
        <div className="absolute top-28 left-5 z-20 flex items-center gap-2.5 bg-gray-900/90 backdrop-blur-sm text-white rounded-xl pl-2.5 pr-4 py-2 shadow-lg">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0">
            <Award size={16} className="text-emerald-400" />
          </div>
          <div className="leading-tight">
            <p className="text-sm font-black">500+</p>
            <p className="text-[9px] font-bold tracking-wide text-gray-300 uppercase">Organizations</p>
          </div>
        </div>

        {/* Content — flows naturally, never clipped, however tall it needs to be */}
        <div className="relative z-10 px-5 pt-40 pb-16">
          <div className="max-w-md mx-auto w-full">

            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="h-px w-6 bg-emerald-300" />
              <span className="text-[11px] font-bold tracking-[0.2em] text-emerald-700 uppercase">
                Certified &amp; Trusted
              </span>
              <span className="h-px w-6 bg-emerald-300" />
            </div>

            {/* Centered Headline */}
            <h1 className="text-center text-[2.5rem] leading-[1.08] font-black text-gray-900 tracking-tight mb-4">
              Transform <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
                Waste Management
              </span> <br />
              <span className="italic font-semibold text-emerald-700">with Reliable Machines.</span>
            </h1>

            {/* Description */}
            <p className="text-center text-[15px] text-gray-600 leading-relaxed mb-8 px-1">
              Collect real-time waste management data from government portals, recycling
              companies, municipal websites, tenders, landfill databases, environmental
              agencies, and sustainability reports—all from one intelligent platform.
            </p>

            {/* Stacked full-width CTAs */}
            <div className="flex flex-col gap-3 mb-8">
              <a
                href="/contact"
                className="group flex items-center justify-center gap-3 w-full px-6 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-2xl shadow-[0_10px_30px_rgba(16,185,129,0.3)] active:scale-[0.98] transition-transform"
              >
                Request Demo
                <span className="w-7 h-7 rounded-xl bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight size={15} className="text-white" />
                </span>
              </a>
              <a
                href="/products"
                className="flex items-center justify-center w-full px-6 py-4 bg-white text-gray-800 font-bold rounded-2xl border-2 border-gray-200 active:scale-[0.98] transition-transform"
              >
                Explore Solutions
              </a>
            </div>

            {/* Compact trust row */}
            <div className="grid grid-cols-3 gap-2 pt-6 border-t border-gray-100">
              {trustBadgesWithIcons.map(({ label, icon: Icon }) => (
                <div key={label} className="flex flex-col items-center text-center gap-1.5">
                  <Icon size={18} className="text-emerald-600" strokeWidth={1.75} />
                  <span className="text-[10px] font-bold text-gray-700 leading-tight">{label}</span>
                </div>
              ))}
            </div>

            {/* Recycling & Developer Signature Badge (Mobile) */}
            <div className="mt-10 pt-6 border-t border-dashed border-gray-200 flex flex-col items-center justify-center text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 mb-2 shadow-inner ring-4 ring-emerald-50/50">
                <Recycle size={20} />
              </div>
              <div className="font-serif italic text-base tracking-wide text-gray-600">
  It's all about recycling{' '}
  <span className="font-sans font-extrabold not-italic bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent uppercase tracking-wider text-sm ml-0.5">
    Harshvardhan
  </span>
</div>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}