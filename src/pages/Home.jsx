import React, { useContext } from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import { ShopContext } from '../context/ShopContext'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsLetter from '../components/NewsLetter'


const Home = () => {

  const products =  useContext(ShopContext)

  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <BestSeller/> 
      <OurPolicy/>
      <NewsLetter/>
    </div>
  )
}

export default Home