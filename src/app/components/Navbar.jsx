"use client"
import React, { useState } from 'react';
import { PPmori,arges } from '../../../public/fonts/fonts';
import './../globals.css'

export function Navbar() {


    const[isActive,setIsActive]=useState(false);
   
    return (
        <>
            <div  className='flex justify-between px-10 pt-8 '>
                <div className={`${arges.className} font-black text-3xl`}>PJ</div>
                <div onClick={() => {setIsActive(!isActive)}} className='button '>
                <div className={`burger ${isActive ? 'burgerActive' : ''}`}></div>
                </div>
            </div>
             {isActive && ( 
               <div className='w-screen flex h-screen  my-0 fixed top-0'>
                    <div className={`${arges.className}bg-white w-1/2 text-[#929598] tracking-tight z-50 hidden md:block`}>Hope you're having a great day ;)</div>
                    <div className={`${arges.className}text-[#A0A3A6] md:w-1/2 bg-[#252C35] tracking-tight `}>Aman Prajapati</div>

               </div>
            )} 
           
        </>
    );
}


