import '../globals.css'
import { PPmori,arges } from '../../public/fonts/fonts'
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
                <div className={`flex justify-between flex-wrap flex-row `}>
                <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.8 }}
                id='project1Content'
                className={` ${arges.className} flex flex-col text-[#252C35] text-[9rem] leading-none font-black pt-4 xl:text-[35rem] xl:leading-none md:text-[24rem]`}>
                    <div>AMAN</div>
                    <div>PRAJAPATI</div>
                </motion.div>
                <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={controls}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.8 }}
                id='project1Content'
                 className={`${PPmori.className}flex flex-col text-xl tracking-tight w-[75%] xl:w-[20%] md:w-[35%] md:relative xl:left-[70rem] xl:top-[-68rem] md:left-[42rem] md:top-[-45rem] `}>
                    <div className={`${PPmori.className} mb-8 xl:mb-15`}>I&apos;M AN ASPIRING SOFTWARE ENGINEER & A STUDENT</div>
                    <div className={`${PPmori.className} mb-8 xl:mb-15 `}>I&apos;M ALSO A FULL-STACK DEVELOPER</div>
                    <div className={`${PPmori.className}  underline`}>SCROLL TO EXPLORE</div>
                </motion.div>
                </div>
            </div>
        </>
    )
}