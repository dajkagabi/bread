import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Products from './components/Products/Products';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/rolunk" element={<About/>}/>
         <Route path="/kapcsolat" element={<Contact/>}/>
         <Route path="/termekek" element={<Products/>}/>
      
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;