"use client"
import React, { useState } from 'react';
import { PPmori } from '../../../public/fonts/fonts';

export function Navbar2() {

    const [childClasses, setChildClasses] = useState('');
    const [childClasses2, setChildClasses2] = useState('');
    const [showPage, setShowPage] = useState(false);

    const handleClick = () => {
        setChildClasses((prevClasses) =>
            prevClasses === 'bg-[#929598] w-[38px] h-[2px] transition-all' ? 'bg-[#929598] w-[38px] h-[2px] transition-all line1 sticky top-5' : 'bg-[#929598] w-[38px] h-[2px] transition-all'
        );
        setChildClasses2((prevClasses) =>
            prevClasses === 'bg-[#929598] w-[38px] h-[2px] mt-[4px] transition-all' ? 'bg-[#929598] w-[38px] h-[2px] mt-[4px] transition-all line2 sticky top-5' : 'bg-[#929598] w-[38px] h-[2px] mt-[4px] transition-all'
        );
        setShowPage((prevState)=>prevState==false?true:false); // Show the page when the icon is clicked
        console.log('I am clicked');
    };

    return (
        <>
         <div className=' cursor-pointer mx-1 mt-[6px] icon ' onClick={handleClick}>
                                <div className={`bg-[#929598] w-[38px] h-[2px] transition-all ${childClasses} ${PPmori.className}`}></div>
                                <div className={`bg-[#929598] w-[38px] h-[2px] mt-[4px] transition-all ${childClasses2}`}></div>
                            </div>
            {showPage && ( 
                <div className="flex"> 
                    <div className="bg-white w-1/2 h-screen text-[#7C8086] pt-4 px-6 font-extralight hidden md:block">Hope you're having a great day ;) </div>
                    <div className="px-8 bg-[#252C35] md:w-1/2 h-screen text-[#929598] pt-4  font-light navbar w-full">
                        <div className="flex justify-between">
                            <div>Aman Prajapati</div>
                            <div className=' cursor-pointer mx-1 mt-[6px] icon ' onClick={handleClick}>
                                <div className={`bg-[#929598] w-[38px] h-[2px] transition-all ${childClasses}`}></div>
                                <div className={`bg-[#929598] w-[38px] h-[2px] mt-[4px] transition-all ${childClasses2}`}></div>
                            </div>
                        </div>
                        <div className="flex mt-16 text-xs md:text-base md:justify-between">
                            <div>/01</div>
                            <div className="text-white text-5xl font-normal mons px-2 md:text-8xl">HOME</div>
                        </div>
                        <div className="flex mt-4 text-xs md:text-base md:mt-16 md:justify-between">
                            <div>/02</div>
                            <div className="text-5xl font-normal mons px-2 md:text-8xl">SKILLS</div>
                        </div>
                        <div className="flex mt-4 text-xs md:text-base md:mt-16 md:justify-between">
                            <div>/03</div>
                            <div className="text-5xl font-normal mons px-2 md:text-8xl">WORK</div>
                        </div>
                        <div className="flex mt-4 text-xs md:text-base md:mt-16 md:justify-between ">
                            <div>/04</div>
                            <div className="text-5xl font-normal mons px-2 md:text-8xl">CONTACT</div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
