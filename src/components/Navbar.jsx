import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from "../assets/logo.jpeg";
import { servicesMenu } from '../data/servicesMenu';
import { productsMenu } from '../data/productsMenu';

const navItems = [
  { label: 'Home',       to: '/' },
  { label: 'Services',   to: '/services', hasMega: true, megaKey: 'services', menuTitle: 'Our Services', menu: servicesMenu },
  { label: 'Products',   to: '/products', hasMega: true, megaKey: 'products', menuTitle: 'Our Products', menu: productsMenu },
  { label: 'Industries', to: '/industries' },
  { label: 'About',      to: '/about' },
  { label: 'Contact',    to: '/contact' },
];

// small delay before closing so the cursor can travel from the
// trigger to the panel without the menu snapping shut
const CLOSE_DELAY = 150;

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  // which mobile accordion section (megaKey) is expanded, if any
  const [mobileSection, setMobileSection] = useState(null);
  // which desktop mega panel (megaKey) is open, if any
  const [activeMega, setActiveMega] = useState(null);
  const closeTimer = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // close mobile/mega on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileSection(null);
    setActiveMega(null);
  }, [location]);

  const openMega = (key) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMega(key);
  };

  const scheduleCloseMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setActiveMega(null), CLOSE_DELAY);
  };

  useEffect(() => () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  return (
    <>
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-xl shadow-[0_1px_32px_rgba(0,0,0,0.07)] border-b border-gray-100/80' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-8 lg:px-8">
          <div className="flex items-center justify-between h-[96px]">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
              <div className="w-16 h-16 rounded-2xl overflow-hidden flex items-center justify-center shadow-green-sm group-hover:scale-105 transition-transform duration-200">
  <img
    src={logo}
    alt="Verdant Logo"
    className="w-full h-full object-contain"
  />
</div>
              <div className="leading-tight">
                <p className="text-[17px] font-black text-gray-900 tracking-tight">Verdant</p>
                <p className="text-[10px] font-bold text-brand-600 uppercase tracking-[.12em]">Salvage Bharat pvt. ltd.</p>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map(item => {
                if (item.hasMega) {
                  const isOpen = activeMega === item.megaKey;
                  const isWide = item.menu.length > 6;
                  return (
                    <div
                      key={item.label}
                      className="relative"
                      onMouseEnter={() => openMega(item.megaKey)}
                      onMouseLeave={scheduleCloseMega}
                    >
                      <NavLink
                        to={item.to}
                        onFocus={() => openMega(item.megaKey)}
                        className={`flex items-center gap-1 px-4 py-2.5 rounded-xl text-[14px] font-medium transition-all duration-150 relative
                          ${location.pathname.startsWith(item.to)
                            ? 'text-brand-700 bg-brand-50'
                            : 'text-gray-600 hover:text-brand-700 hover:bg-brand-50/70'}`}
                      >
                        {item.label}
                        <ChevronDown size={14} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}/>
                      </NavLink>

                      {/* Mega menu */}
                      <div
                        className={`mega-menu p-5 ${isWide ? 'w-[640px]' : 'w-[540px]'} ${isOpen ? 'open' : ''}`}
                        onMouseEnter={() => openMega(item.megaKey)}
                        onMouseLeave={scheduleCloseMega}
                      >
                        <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-4 px-1">{item.menuTitle}</p>
                        <div className={`grid grid-cols-2 gap-2 ${isWide ? 'max-h-[420px] overflow-y-auto pr-1' : ''}`}>
                          {item.menu.map(entry => {
                            const Icon = entry.icon;
                            return (
                              <Link key={entry.label} to={entry.to}
                                className="flex items-start gap-3 p-3 rounded-xl hover:bg-brand-50 transition-colors group/item"
                                onClick={() => setActiveMega(null)}
                              >
                                <div className="w-9 h-9 bg-brand-50 group-hover/item:bg-brand-100 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                                  <Icon size={16} className="text-brand-600"/>
                                </div>
                                <div>
                                  <p className="text-[13px] font-semibold text-gray-900 group-hover/item:text-brand-700 transition-colors">{entry.label}</p>
                                  <p className="text-[11px] text-gray-400 mt-0.5">{entry.desc}</p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                }
                return (
                  <NavLink key={item.label} to={item.to} end={item.to === '/'}
                    className={({ isActive }) =>
                      `px-4 py-2.5 rounded-xl text-[14px] font-medium transition-all duration-150 relative ${
                        isActive ? 'text-brand-700 bg-brand-50' : 'text-gray-600 hover:text-brand-700 hover:bg-brand-50/70'
                      }`}
                  >
                    {item.label}
                  </NavLink>
                );
              })}
            </nav>

            {/* Right CTA */}
            <div className="flex items-center gap-3">
              <Link to="/contact"
                className="hidden md:flex items-center gap-1.5 px-6 py-3 bg-brand-600 text-white text-[14px] font-semibold rounded-xl shadow-[0_4px_14px_rgba(22,163,74,.35)] hover:bg-brand-700 hover:shadow-[0_6px_20px_rgba(22,163,74,.45)] hover:-translate-y-px transition-all duration-200"
              >
                Get Demo
                <span className="text-brand-200 text-xs leading-none">→</span>
              </Link>

              <button onClick={() => setMobileOpen(v => !v)}
                className="lg:hidden p-2.5 rounded-xl text-gray-600 hover:bg-gray-100 transition-colors">
                {mobileOpen ? <X size={22}/> : <Menu size={22}/>}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-[600px] overflow-y-auto' : 'max-h-0'}`}>
          <div className="bg-white/98 backdrop-blur-xl border-t border-gray-100 px-5 py-4 space-y-0.5">
            {navItems.map(item => {
              if (item.hasMega) {
                const sectionOpen = mobileSection === item.megaKey;
                return (
                  <div key={item.label}>
                    <button
                      onClick={() => setMobileSection(v => (v === item.megaKey ? null : item.megaKey))}
                      className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-[14px] font-medium transition-all ${
                        location.pathname.startsWith(item.to) ? 'bg-brand-50 text-brand-700' : 'text-gray-700 hover:bg-gray-50'}`}
                    >
                      {item.label}
                      <ChevronDown size={16} className={`transition-transform duration-200 ${sectionOpen ? 'rotate-180' : ''}`}/>
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${sectionOpen ? 'max-h-[400px] overflow-y-auto' : 'max-h-0'}`}>
                      <div className="pl-4 py-1 space-y-0.5">
                        {item.menu.map(entry => {
                          const Icon = entry.icon;
                          return (
                            <Link key={entry.label} to={entry.to}
                              className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-[13px] text-gray-600 hover:bg-brand-50 hover:text-brand-700 transition-colors"
                            >
                              <Icon size={15} className="text-brand-600 flex-shrink-0" />
                              {entry.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <NavLink key={item.label} to={item.to} end={item.to === '/'}
                  className={({ isActive }) =>
                    `flex items-center px-4 py-3 rounded-xl text-[14px] font-medium transition-all ${
                      isActive ? 'bg-brand-50 text-brand-700' : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  {item.label}
                </NavLink>
              );
            })}
            <div className="pt-3 pb-1">
              <Link to="/contact"
                className="flex items-center justify-center gap-2 w-full px-5 py-3.5 bg-brand-600 text-white text-sm font-semibold rounded-xl shadow-green-sm">
                Get Demo →
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}