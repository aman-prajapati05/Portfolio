"use client"
import { PPmori, arges } from "../../../../public/fonts/fonts";
import { motion,useAnimation } from "framer-motion";
import { useState,useEffect,useRef } from "react";


export function Project1({Data}) {

  const [position, setPosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    const borderOffset = 50;
    const minX = borderOffset;
    const minY = borderOffset;
    const maxX = window.innerWidth - borderOffset;
    const maxY = window.innerHeight - borderOffset;
    const updateCursorPosition = (event) => {
      const { clientX: x, clientY: y } = event;
  
      if (x >= minX && x <= maxX && y >= minY && y <= maxY) {
        
        setTimeout(() => {
        setPosition({ x:x-50, y });
        }, 50);
      } else {
        setPosition({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
      }
    };
  
    useEffect(() => {
      document.addEventListener('mousemove', updateCursorPosition);
  
      return () => {
        document.removeEventListener('mousemove', updateCursorPosition);
      };
    }, []);


    const controls = useAnimation();
    const scrollRef = useRef(null);
  
    useEffect(() => {
      controls.start({ y: 0, transition: { duration: 0.9, ease: 'easeInOut' } });
    }, [controls]);
  
    const handleScroll = (e) => {
      controls.start({ y: e.target.scrollTop });
    };

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
     if(Data.img && Data.img.length > 0){
        const intervalId = setInterval(() => { 
              setCurrentImageIndex((prevIndex) => (prevIndex + 1) % Data.img.length);
        }, 900);
        return () => clearInterval(intervalId);
     }

  }, [Data.img]);


  const [scrollPosition, setScrollPosition] = useState(0);
  const controls2 = useAnimation();

  const handleScroll2 = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll2);

    return () => {
      window.removeEventListener("scroll", handleScroll2);
    };
  }, []);

  let isVisible = false;
  useEffect(() => {
    const element = document.getElementById(`element${Data.index}`);

    if (element) {
      const elementRect = element.getBoundingClientRect();
       isVisible = elementRect.top <= window.innerHeight/2 && elementRect.bottom/2 >= 0;

      if (isVisible) {
        controls2.start({
          opacity: 1,
          y: 0,
          transition: { duration: 0.3, staggerChildren: 0.1 },
        });
      } else {
        controls2.start({
          opacity: 0,
          y: 50,
          transition: { duration: 0.3, staggerChildren: 0.1, staggerDirection: -1 },
        });
      }
    }
  }, [scrollPosition, controls]);
    
  const handleHoverAnimation = isVisible ? { opacity: 1, y: 0 } : controls2;
    
        

 
  return (
    <>
      <motion.div
      ref={scrollRef}
      onScroll={handleScroll}
      animate={controls}
      
        className={`w-full h-screen ${Data.color} text-white pt-4 px-10 ${arges.className} overflow-hidden sticky ${Data.className} z-10`}
      >

        
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controls2}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        id={`element${Data.index}`}
         className="flex md:justify-between justify-center">
          <div className=" font-black text-3xl hidden md:block">SOME</div>
          <div className={`flex items-center ${PPmori.className}`}>
            <div>{Data.index}</div>
            <div className="w-[50px] h-[1px] bg-white mx-2"></div>
            <div>05</div>
          </div>
          <div className="font-black text-3xl hidden md:block">PROJECTS</div>
        </motion.div>
        
        <div
          className={`${arges.className} text-[22rem] font-black opacity-20 md:flex  hidden justify-end relative top-36`}
        >
         {Data.index}
        </div>

        

        <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controls2}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.3 }}
          className={`flex md:justify-between md:flex-row flex-col relative md:-top-52 items-center md:items-stretch top-24 gap-8 md:gap-0 ${arges.className}`}
        >
          <div className="flex flex-col order-2 md:order-1">
            <div
              className={`${PPmori.className} text-sm opacity-90 tracking-wider md:order-1 order-2 `}
            >
              {Data.description}
            </div>
            <div className="md:text-[22rem] text-9xl font-black leading-none md:order-2 order-1 text-center  ">{Data.title}</div>
          </div>
          
        <div className={`${PPmori.className} order-5 md:hidden text-2xl tracking-tighter underline-offset-4 underline`}>View Site</div>
        <div className="flex  justify-center   md:w-[26rem] md:h-[20rem] w-[18rem] h-[18rem] bg-opacity-5 bg-white overflow-hidden  rounded-xl order-1 md:order-3">
            
            <img 
            className="p-8  object-cover"
            src={Data.img[currentImageIndex]} alt="" />
            
          </div>
        </motion.div>
        <motion.div 
            initial={{ opacity: 0, y: 100 }} // Initial position and opacity
            exit={{ opacity: 0, y: 50 }} // Exit animation
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.3 }} // Scale up on hover
            animate={handleHoverAnimation}
            id={`element${Data.index}`}
          style={{ left: `${position.x}px`, top: `${position.y}px` }}
          className={` ${PPmori.className} ${Data.color} cursor-default w-24 h-24 rounded-full border-2 xl:flex justify-center items-center -mt-9 text-xl hover:scale-110 hidden md:order-2 absolute`}>
            <motion.div
             initial={{ opacity: 0, y: 50, rotateX: 0 }} // Initial position and opacity
             animate={{ opacity: 1, y: 0 }} // Animation properties
             exit={{ opacity: 0, y: -50 }} // Exit animation (move up)
             whileHover={{ rotateX: 360 }} // Rotate on hover
             transition={{ duration: 0.5 }} // Animation duration
            >
            OPEN
            </motion.div>
        </motion.div>
        <div className={`${PPmori.className}  md:flex justify-center text-3xl underline underline-offset-4 hidden xl:hidden
        `}>View Site</div>
      </motion.div>
      
    </>
  );
}
