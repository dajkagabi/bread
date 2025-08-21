import React from 'react';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Products from '../Products/Products';

const Home = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Products/>
      <Contact/>
    </div>
  )
}

export default Home