import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import HomeBody from '../components/HomeBody'
import Footer from '../components/Footer'

const HomePage = ({ children }) => {
  return (
    <>
      <Navbar />
     
      {children ? children : <HomeBody />}
      <Footer />
    </>
  )
}

export default HomePage
