import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import HeroSection from './HeroSection';
import CardSection from './CardSection';
import AppSection from './AppSection';
import Counter from './Counter';


const App = () =>{
    return (
      <div>
        <Navbar />
        <HeroSection/>
        <CardSection/>
        <AppSection/>
        <Counter/>
        
        <Footer/>
      </div>
    )
  }

  export default App;