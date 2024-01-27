import '../globals.css'
import { PPmori,arges } from '../../../public/fonts/fonts';
import { motion,useAnimation } from 'framer-motion';
import {useState,useEffect} from 'react';
export function Landing(){

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
      const element = document.getElementById("project1Content");
  
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
            <div className={` bg-white px-8 z-0`}>
                {/* <div className={`flex justify-between flex-wrap flex-row `}>
                <div
                className={` ${arges.className} flex flex-col text-[#252C35] text-[9rem] leading-none font-black pt-4 xl:text-[35rem] xl:leading-none md:text-[24rem]`}>
                    <div>AMAN</div>
                    <div>PRAJAPATI</div>
                </div>
                <div
                 className={`${PPmori.className}flex flex-col text-xl tracking-tight w-[75%] xl:w-[20%] md:w-[35%] md:relative xl:left-[70rem] xl:top-[-68rem] md:left-[42rem] md:top-[-45rem] `}>
                    <div className={`${PPmori.className} mb-8 xl:mb-15`}>I&apos;M AN ASPIRING SOFTWARE ENGINEER & A STUDENT</div>
                    <div className={`${PPmori.className} mb-8 xl:mb-15 `}>I&apos;M ALSO A FULL-STACK DEVELOPER</div>
                    <div className={`${PPmori.className}  underline`}>SCROLL TO EXPLORE</div>
                </div>
                </div> */}
                <div className=' flex flex-col gap-0 justify-between items-start '>
                  <div className='flex justify-between md:w-full'>
                  <div className={`${arges.className} text-[#252C35] text-[7rem] leading-none font-black pt-4 md:text-[18rem] lg:text-[24rem] xl:text-[30rem] xxl:text-[34rem] 2xl:text-[38rem]`}>
                    AMAN
                  </div>
                  <div className={`tracking-tighter text-xl hidden flex-col gap-5 lg:gap-10 pt-9 w-[35%] xl:w-[20%] xl:pt-11  md:flex`}>
                  <div className={`${PPmori.className}  `}>I&apos;M AN ASPIRING SOFTWARE ENGINEER & A STUDENT</div>
                    <div className={`${PPmori.className}  `}>I&apos;M ALSO A FULL-STACK DEVELOPER</div>
                    <div className={`${PPmori.className}  underline`}>SCROLL TO EXPLORE</div>
                  </div>
                  </div>
                  <div className={`${arges.className} text-[#252C35] text-[7rem] leading-none font-black md:text-[18rem] lg:text-[24rem] xl:text-[30rem] xxl:text-[34rem] 2xl:text-[38rem]`}>PRAJAPATI</div>
                </div>
                  <div className={`tracking-tighter text-xl flex flex-col gap-8 w-[70%] md:hidden`}>
                  <div className={`${PPmori.className}  `}>I&apos;M AN ASPIRING SOFTWARE ENGINEER & A STUDENT</div>
                    <div className={`${PPmori.className}  `}>I&apos;M ALSO A FULL-STACK DEVELOPER</div>
                    <div className={`${PPmori.className}  underline`}>SCROLL TO EXPLORE</div>
                  </div>
            </div>
        </>
    )
}