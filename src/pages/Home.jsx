import React from 'react'
import Hero from '../components/Hero'
import Feature from '../components/Feature'
import { Helmet } from 'react-helmet-async'

const Home = () => {
  return (
    <div>
     <Helmet>
      <title>Home</title>
     </Helmet>
      <Hero/>
      <Feature/>
    </div>
  )
}

export default Home