import { Leaf, MessageCircle, Link2, Code2, Play, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  Company: [
    { label: 'Home', href: '/#home' },
    { label: 'About Us', href: '/about' },
    { label: 'Industry', href: '/industries' },
    { label: 'Products', href: '/products' },
    { label: 'Services', href: '/services' },
  ],
  Industries: [
    { label: 'Industry', href: '/industries' },
    { label: 'Tata', href: '/industries#municipal-corporations' },
    { label: 'Zomato', href: '/industries#recycling-companies' },
    { label: 'Hindalco', href: '/industries#smart-cities' },
    { label: 'Hotel Gazebo', href: '/industries#government-agencies' },
    { label: 'Neral Gram Panchayat', href: '/industries#waste-to-energy' },
  ],
  Products: [
  {label: 'Products', href: '/products' },
  { label: 'Plastic Bailing Machine', href: '/products/plastic-bailing-machine' },
  { label: 'Municipal Solid Waste Shredder', href: '/products/municipal-solid-waste-twin-shaft-shredder' },
  { label: 'Composting Machine', href: '/products/composting-machine' },
  { label: 'Sanitary Napkin Incinerator', href: '/products/sanitary-napkin-incinerator' },
  { label: 'PET Bottle Shredder', href: '/products/pet-bottle-shredder-machine' },
],
};

const socials = [
  { icon: MessageCircle, label: 'Twitter', href: '#' },
  { icon: Link2, label: 'LinkedIn', href: '#' },
  { icon: Code2, label: 'GitHub', href: '#' },
  { icon: Play, label: 'YouTube', href: '#' },
];

// Contact details — same info as the company letterhead, wired up as
// tappable/clickable links (mailto, tel, maps) rather than static text.
const contactDetails = [
  {
    icon: Mail,
    label: 'Email Us',
    value: 'vsbpl200@gmail.com',
    href: 'mailto:vsbpl200@gmail.com',
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: '+91 8806000140 / 7498933485',
    href: 'tel:+918806000140',
  },
  {
    icon: MapPin,
    label: 'Headquarters',
    value: 'Second Floor, Vajraai Complex, Ambadi Shirsad Road, Vajreshwari, Thane - 401204, Maharashtra.',
    href: 'https://www.google.com/maps/search/?api=1&query=Vajraai+Complex+Ambadi+Shirsad+Road+Vajreshwari+Thane+401204',
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white relative overflow-hidden" id="contact">
      {/* Top decorative gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        {/* Top: Brand + Links */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 pb-12 border-b border-white/[0.06]">
          {/* Brand Column */}
          <div className="col-span-2">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2.5 mb-5 w-fit group">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center transition-transform group-hover:scale-105">
                <Leaf className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-[15px] font-bold text-white tracking-tight">Verdant</span>
                <span className="text-[9px] font-semibold text-emerald-500 uppercase tracking-widest"> Scraping Platform</span>
              </div>
            </a>

            <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-xs">
              Enterprise-grade web scraping platform for waste management intelligence. Trusted by 500+ global organizations.
            </p>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-9 h-9 bg-white/[0.06] hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-105 group"
                  >
                    <Icon size={15} className="text-gray-400 group-hover:text-white" />
                  </a>
                );
              })}
            </div>

            {/* Certifications */}
            <div className="flex flex-wrap gap-2 mt-6">
              {['ISO 14001', 'GDPR', 'SOC 2'].map((cert) => (
                <span
                  key={cert}
                  className="px-2.5 py-1 bg-emerald-900/30 border border-emerald-800/50 text-emerald-400 text-[10px] font-semibold rounded-lg"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="col-span-1">
              <h4 className="text-xs font-bold text-gray-200 uppercase tracking-widest mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-emerald-400 transition-colors duration-200 animated-underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Strip — each item is a live link (mailto / tel / maps) */}
        <div className="grid md:grid-cols-3 gap-6 py-8 border-b border-white/[0.06]">
          {contactDetails.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.icon === MapPin ? '_blank' : undefined}
                rel={item.icon === MapPin ? 'noopener noreferrer' : undefined}
                className="group flex items-start gap-3 -mx-2 px-2 py-1 rounded-lg transition-colors duration-200 hover:bg-white/[0.04]"
              >
                <div className="w-9 h-9 bg-emerald-900/40 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-200 group-hover:bg-emerald-600">
                  <Icon size={15} className="text-emerald-400 group-hover:text-white transition-colors duration-200" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-medium">{item.label}</p>
                  <p className="text-sm text-gray-300 font-medium leading-snug group-hover:text-emerald-400 transition-colors duration-200">
                    {item.value}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © 2026 Verdant Technologies Ltd. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-gray-600 hover:text-emerald-400 transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-xs text-gray-500">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}