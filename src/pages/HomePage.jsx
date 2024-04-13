import React from 'react'
import Preheader from '../components/Preheader'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Info from '../components/Info'
import PopularCategory from '../components/PopularCategory'
import PopularProducts from '../components/PopularProducts'
import Custombanners from '../components/CustomBanner'

const HomePage = () => {
  return (
    <div className=' w-full h-full font-Poppins mt-4'>
    <Preheader/>
    <Header/>
    <Hero/>
    <Info/>
    <PopularCategory/>
    <PopularProducts/>
    <Custombanners/>

    </div>
  )
}

export default HomePage