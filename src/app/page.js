"use client"
// import { Navbar } from './components/Navbar'
import { useState,useEffect } from 'react';
import { Footer } from './components/Footer'
import { Landing } from './components/Landing'
import { Navbar2 } from './components/Navbar2'
import { Preloader } from './components/Preloader/Preloader'
import { AnimatePresence } from 'framer-motion';
import { Project1 } from './components/Project/Project1';
import { Project } from './components/Project/Project';
import { Navbar } from './components/Navbar';
import { Selected } from './components/selected';
import { Contact } from './components/Contact';

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
    
   {/* <Contact/> */}

    <Navbar/> 
   <Landing/> 
   <Selected/>
   <Project/>
   
   <Footer/>
   </>
  )
}
