"use client"
// import { Navbar } from './components/Navbar'
import { useState,useEffect } from 'react';
import { Footer } from './components/Footer'
import { Landing } from './components/Landing'
import { Navbar2 } from './components/Navbar2'
import { Preloader } from './components/Preloader'

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
    {loading === true ? <Preloader/> : null}
   {/* <Navbar2/>
   <Landing/> */}
   <Footer/>
   </>
  )
}
