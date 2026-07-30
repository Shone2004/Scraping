import { ArrowUpRight } from 'lucide-react';

import solidImg from '../assets/services/solid.png';
import machinesImg from '../assets/services/machines.png';
import rainImg from '../assets/services/rain.png';
import ewasteImg from '../assets/services/ewaste.png';
import etpImg from '../assets/services/etp.png';
import municipalImg from '../assets/services/municipal.png';
import solarImg from '../assets/services/solar.png';

const services = [
  {
    id: 1,
    title: 'Solid Waste Management',
    description:
      'Comprehensive municipal and industrial solid waste collection, sorting, processing, and sustainable disposal solutions.',
    image: solidImg,
    alt: 'Industrial solid waste management and sorting facility',
    tag: 'Municipal & Industrial',
    metrics: ['Zero Waste', 'High Recovery', 'Eco Processing'],
  },
  {
    id: 2,
    title: 'Machineries & Equipments',
    description:
      'State-of-the-art heavy-duty recycling machines, shredders, sorting conveyors, and processing equipment supply and maintenance.',
    image: machinesImg,
    alt: 'Heavy-duty industrial machinery and recycling equipment',
    tag: 'Infrastructure',
    metrics: ['Heavy Duty', 'Automated', 'Reliable Tech'],
  },
  {
    id: 3,
    title: 'Rain Water Harvesting',
    description:
      'Advanced rainwater capture, filtration, recharge structures, and conservation systems for sustainable water resource management.',
    image: rainImg,
    alt: 'Rainwater harvesting and water filtration setup',
    tag: 'Water Conservation',
    metrics: ['Smart Filtration', 'Eco Capture', 'Sustainable'],
  },
  {
    id: 4,
    title: 'E-Waste Management',
    description:
      'End-to-end collection, segregation, dismantling, refurbishing, recycling, and refining of electronic scrap and IT assets.',
    image: ewasteImg,
    alt: 'E-waste collection and recycling management facility',
    tag: 'Core Service',
    metrics: ['Secure Pickup', 'Certified', 'Safe Disposal'],
  },
  {
    id: 5,
    title: 'ETP / STP / WTP Solutions',
    description:
      'Design, installation, and management of Effluent Treatment Plants, Sewage Treatment Plants, and Water Treatment Plants.',
    image: etpImg,
    alt: 'Industrial water treatment plant and purification systems',
    tag: 'Water Treatment',
    metrics: ['Zero Liquid Discharge', 'Pure Output', 'Compliant'],
  },
  {
    id: 6,
    title: 'Municipal Waste Management',
    description:
      'Integrated municipal waste collection, segregation, transportation, processing, recycling, and scientific disposal solutions for cleaner and sustainable cities.',
    image: municipalImg,
    alt: 'Municipal waste management and collection system',
    tag: 'Smart Cities',
    metrics: ['Door-to-Door', 'Recycling', 'Clean City'],
  },
{
  id: 7,
  title: 'Solar Water Heater & SVP',
  description:
    'Energy-efficient solar water heating systems and SVP solutions designed to reduce energy consumption while supporting sustainable water management.',
  image: solarImg,
  alt: 'Solar water heater and SVP solution',
  tag: 'Renewable Energy',
  metrics: ['Solar Powered', 'Energy Saving', 'Eco Friendly'],
},
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Background decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 badge-gradient rounded-full text-sm font-semibold text-emerald-700 mb-4">
            Our Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-4">
            Verdant-Salvage Bharat
            <span className="gradient-text"> Services</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Explore our professional environmental solutions ranging from solid and e-waste management to advanced water treatment and machinery.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service) => (
            <a
              key={service.id}
              href="/services"
              className="group premium-card overflow-hidden flex flex-col cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-64 bg-gray-50 rounded-t-[20px] overflow-hidden flex items-center justify-center">
  <img
    src={service.image}
    alt={service.alt}
    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
  />
                <div className="absolute inset-0 img-overlay" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-semibold rounded-full">
                    {service.tag}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{service.description}</p>

                {/* Metrics */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {service.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-lg border border-emerald-100"
                    >
                      {metric}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <span className="mt-5 flex items-center gap-1.5 text-emerald-600 text-sm font-semibold group/btn hover:gap-2.5 transition-all duration-200">
                  Learn More
                  <ArrowUpRight size={14} className="group-hover/btn:scale-110 transition-transform" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}