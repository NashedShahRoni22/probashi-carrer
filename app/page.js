import React from 'react'
import HeroSlider from './components/home/HeroSlider'
import MarqueeHeadline from './components/home/MarqueeHeadline'
import JobBoard from './components/job/JobBoard'
import Testimonials from './components/home/Testimonals'
import CountriesWeServe from './components/home/CountriesWeServe'
import JobCategories from './components/home/JobCategories'
import WhyChooseUs from './components/home/WhyChooseUs'
import ApplicationProcess from './components/home/ApplicationProcess'
import FAQ from './components/home/FAQ'

export default function page() {
  return (
    <section>
      <HeroSlider/>
      {/* <JobBoard/> */}
      <CountriesWeServe/>
      <MarqueeHeadline/>
      <JobCategories/>
      <ApplicationProcess/>
      <WhyChooseUs/>
      <Testimonials/>
      <FAQ/>
    </section>
  )
}
