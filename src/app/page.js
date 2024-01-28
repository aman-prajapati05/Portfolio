"use client"
import { useState,useEffect } from 'react';
import { Footer } from './components/Footer'
import { Landing } from './components/Landing'
import { Preloader } from './components/Preloader/Preloader'
import { AnimatePresence } from 'framer-motion';
import { Project } from './components/Project/Project';
import { Navbar } from './components/Navbar';
import { Selected } from './components/Selected';

export default function Home() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() =>{ 
      setLoading(false)
      document.body.style.cursor = "default";
    }, 2000);
    
  })

  return (
   <>
   <AnimatePresence>
   {loading && <Preloader/>}
   </AnimatePresence>
    <Navbar/> 
   <Landing/> 
   <Selected/>
   <Project/>
   <Footer/>
   </>
  )
}
