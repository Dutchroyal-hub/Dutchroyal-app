import React from 'react'
import CareerAdvice from '../../Components/CareerAdvice/CareerAdvice'
import Footer from '../../Components/Footer/Footer'
import Growth from '../../Components/Growth/Growth'
import Hero from '../../Components/Hero/Hero'
import LatestListings from '../../Components/LatestListings/LatestListings'
import Services from '../../Components/Services/Services'
import Testimonials from '../../Components/Testimonials/Testimonials'
import Welcome from '../../Components/Welcome/Welcome'
import Work from '../../Components/Work/Work'
import Topbar from '../../Components/Topbar/Topbar'

export const Home = () => {
  return (
    <div>
        <Topbar/>
        <Hero/>
        <Welcome />
        <Growth />
        <Work />
        <Services />
        <Testimonials />
        <LatestListings />
        <CareerAdvice />
        <Footer />
    </div>
  )
}
