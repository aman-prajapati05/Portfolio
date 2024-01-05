"use client"
import '../globals.css'
import { PPmori, arges, bigS } from '../../../public/fonts/fonts'
import { useEffect, useState } from 'react';
import { motion,useAnimation } from 'framer-motion';
import BackToTopButton from './BTP';
export function Footer(){
    const [scrollPosition, setScrollPosition] = useState(0);
    const controls = useAnimation();
  
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    useEffect(() => {
      const element = document.getElementById("project2Content");
  
      if (element) {
        const elementRect = element.getBoundingClientRect();
        const isVisible = elementRect.top <= window.innerHeight && elementRect.bottom >= 0;
  
        if (isVisible) {
          controls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, staggerChildren: 0.1 },
          });
        } else {
          controls.start({
            opacity: 0,
            y: 50,
            transition: { duration: 0.5, staggerChildren: 0.1, staggerDirection: -1 },
          });
        }
      }
    }, [scrollPosition, controls]);
    return(
        <>
        <div className="bg-[#252C35] h-screen text-white w-screen absolute z-50 overflow-hidden ">
            <div className="flex p-10 z-100">
                <div className={`flex justify-between w-full flex-wrap ${PPmori.className} gap-7 md:gap-0`}>
                    <div className="flex ">
                    <div className="text-xs py-1 hidden md:block ">01/</div>
                    <div className="flex flex-col md:px-5">
                        <div className="text-xl ">SITEMAP</div>
                        <div className="flex flex-col mt-5">
                            <div className="pb-3 cursor-pointer text-lg">HOME</div>
                            <div className="pb-3 text-[#929598] hover:text-white cursor-pointer text-lg">WORKS</div>
                            <div className="pb-3 text-[#929598] hover:text-white cursor-pointer text-lg">ABOUT</div>
                            <div className="text-[#929598] hover:text-white cursor-pointer text-lg">SKILLS</div>
                        </div>
                    </div>
                    </div>
                    
                    <div className="flex ">
                    <div className="text-xs py-1 hidden md:block">02/</div>
                    <div className="flex flex-col md:px-5">
                        <div className="text-xl ">SOCIALS</div>
                        <div className="flex flex-col mt-5">
                            <div className="pb-3 text-[#929598] hover:text-white cursor-pointer text-lg">LINKEDIN</div>
                            <div className="pb-3 text-[#929598] hover:text-white cursor-pointer text-lg">INSTAGRAM</div>
                            <div className="pb-3 text-[#929598] hover:text-white cursor-pointer text-lg">TWITTER</div>
                            <div className="text-[#929598] hover:text-white cursor-pointer text-lg">SKILLS</div>
                        </div>
                    </div>
                    </div>

                    <div className="flex ">
                    <div className="text-xs py-1 hidden md:block">03/</div>
                    <div className="flex flex-col md:px-5">
                        <div className="text-xl ">OTHERS</div>
                        <div className="flex flex-col mt-5">
                            <div className="pb-3 text-[#929598] cursor-pointer hover:text-white text-lg">GITHUB</div> 
                            <div className="pb-3 text-[#929598] cursor-pointer hover:text-white text-lg">RESUME</div> 
                            
                        </div>
                    </div>
    </div>
                    <div className="underline underline-offset-8 tracking-wider text-2xl cursor-pointer">
                        LET'S WORK TOGETHER
                    </div>
                </div>
                
            </div>
            <div className=" mt-18 pt-20 mb-0 pb-0 ">
            <div className="flex justify-between px-10 text-[#929598] text-xs">
                <div className='hidden xl:block'>
                WEB DEVELOPER
                </div>
                <div className='hidden xl:block'>
                PORTFOLIO 2023
                </div>
            </div>
            <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            id='project2Content'
             className={`md:mt-[15rem] xl:mt-4 flex justify-between px-10 md:text-[22rem] text-9xl scale-y-110 font-black flex-wrap overflow-hidden overflow-y-hidden leading-none  ${arges.className}`}>
                <div className='p-0 whitespace-nowrap'>AMAN </div>
                <div className='p-0'> PRAJAPATI</div>
            </motion.div>
            <div className="flex justify-between px-10 xl:mt-[-60px] mb-0 pb-0 font-light text-xs">
                <div>
                    INFOS & CREDITS
                </div>
                <div className=' cursor-pointer'>
                    <BackToTopButton/>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}