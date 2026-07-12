"use client";
import React, { useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Services from './Services/Services';
import WorkProcess from './WorkProcess/WorkProcess';
import Project from './Project/Project';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


const Home = () => {

useEffect(() => {
  const initAOS = async () => {
    const AOS = (await import("aos")).default;

    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      offset: 100,
    });

    AOS.refresh();
  };

  initAOS();
}, []);

  return (
    <div className='overflow-hidden'>
      <Hero/>
      <About/>
      <Services/>
      <WorkProcess/>
      <Project/>
      <Blog/>
      <Contact/>
    </div>
  );
}

export default Home;
