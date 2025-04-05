import React, { useContext } from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import { ShopContext } from '../context/ShopContext'


const Home = () => {

  const products =  useContext(ShopContext)

  return (
    <div>
      <Hero/>
      <LatestCollection/>
    </div>
  )
}

export default Home