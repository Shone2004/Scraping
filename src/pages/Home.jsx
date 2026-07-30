import React from 'react'
import Hero from '../components/Hero';
import Statistics from '../components/Statistics';
import Services from '../components/Services';
import Industries from '../components/IndustriesSmall';
import HowItWorks from '../components/HowItWorks';
import WhyChooseUs from '../components/WhyChooseUs';
import CaseStudies from '../components/CaseStudies';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import IndustriesSmall from '../components/IndustriesSmall';

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
        <Hero />
        <Statistics />
        <Services />
        <IndustriesSmall />
        <HowItWorks />
        <WhyChooseUs />
        <CaseStudies />
        <Testimonials />
        <Newsletter />
    </div>
  )
}

export default Home