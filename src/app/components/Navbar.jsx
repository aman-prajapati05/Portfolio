"use client"
import React, { useEffect, useState } from 'react';
import { PPmori,arges } from '../../../public/fonts/fonts';
import Link from 'next/link';
import './../globals.css'

export function Navbar() {


    const[isActive,setIsActive]=useState(false);
    const [dimension, setDimension] = useState({width: 0, height:0});
    useEffect( () => {
            
            setDimension({width: window.innerWidth, height: window.innerHeight})
    
        }, [])
   
    return (
        <>

            <div className='flex flex-col'>
            <div  className={`${isActive ? 'flex justify-end pt-8 px-8':'flex justify-between h-full px-10 pt-8'}`}>
                <div className={`${arges.className} font-black text-3xl ${isActive ? 'opacity-0' : ''}`}>PJ</div>
                <div onClick={() => {setIsActive(!isActive)}} className='button z-[99]'>
                <div className={`burger  ${isActive ? 'burgerActive ' : ' '}`}></div>
                </div>
                </div>
            
             {isActive && (
                <> 
                <div className='sticky top-4 -mt-28 ' >
               <div className='w-screen flex h-screen '>
                    <div className={`${arges.className} bg-white w-1/2 text-[#929598] tracking-wider z-50 hidden md:block`}>Hope you're having a great day ;)</div>
                    <div className={`${arges.className} text-[#A0A3A6] md:w-1/2 w-full h-full  bg-[#252C35] tracking-wider z-50`}>
                        <div className='hidden md:block'>Aman Prajapati</div>
                        <div className={`${PPmori.className} px-8 mt-36 md:mt-0 md:gap-0 gap-8 flex flex-col`}>
                        <div className="flex mt-16 text-xs md:text-base md:justify-between hover:text-white">
                            <div>/01</div>
                            <div className="text-white text-5xl font-normal mons px-2 md:text-8xl">HOME</div>
                        </div>
                        <div className="flex mt-4 text-xs md:text-base md:mt-16 md:justify-between hover:text-white">
                            <div>/02</div>
                            <div className="text-5xl font-normal mons px-2 md:text-8xl">SKILLS</div>
                        </div>
                        <div className="flex mt-4 text-xs md:text-base md:mt-16 md:justify-between hover:text-white">
                            <div>/03</div>
                            <div className="text-5xl font-normal mons px-2 md:text-8xl">WORK</div>
                        </div>
                        <div className="flex mt-4 text-xs md:text-base md:mt-16 md:justify-between hover:text-white">
                            <div>/04</div>
                            <div className="text-5xl font-normal mons px-2 md:text-8xl"><Link href='/Contact'>CONTACT</Link></div>
                        </div>
                        </div>
                    </div>
                    </div>

               </div>
               </>
            )} 
            
            </div>
            
        </>
    );
}


