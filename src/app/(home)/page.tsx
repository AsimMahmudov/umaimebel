 import Catalog from '@/components/pages/home/catalog/Catalog';
import Hero from '@/components/pages/home/hero/Hero';
import React from 'react';
 
 const Home = () => {
  return (
    <div>
      {/* <Slider/> */}
       <Hero/>
       <Catalog/>
    </div>
  );
 };
 
 export default Home;