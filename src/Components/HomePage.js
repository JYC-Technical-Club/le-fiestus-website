import React from 'react'
import "./HomePage.css";

import Navbar from './Navbar/Navbar'
import Landing from './Landing/Landing'
import About from './About/About'
import Cadc from './Cadc/Cadc'
// import Photogallery from './lf/Photogallerylf'
import Photogallery from './lf/slide'
import Events from './Events/Events/Events'
import Clubs from './Clubs/Clubs'
import Footer from './Footer/Footer/Footer'
import Teams from './Teams/Teams'
import Coordinator from './Coordinators'

function HomePage() {
  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <Cadc />
      <Events />
      <Clubs />
      <Photogallery />
      <Teams />
      <Coordinator/>
      <Footer />
    </>
  )
}

export default HomePage