import { PPmori, arges } from "../../../../public/fonts/fonts";
import { motion } from "framer-motion";


export function Project1({Data}) {
  return (
    <>
      <div
        className={`w-full h-screen ${Data.color} text-white pt-4 px-10 ${arges.className} overflow-hidden`}
      >

        
        <div className="flex justify-between">
          <div className=" font-black text-3xl">SOME</div>
          <div className={`flex items-center ${PPmori.className}`}>
            <div>{Data.index}</div>
            <div className="w-[50px] h-[1px] bg-white mx-2"></div>
            <div>05</div>
          </div>
          <div className="font-black text-3xl">PROJECTS</div>
        </div>
        
        <div
          className={`${arges.className} text-[22rem] font-black opacity-20 flex justify-end relative top-36`}
        >
         {Data.index}
        </div>

        

        <div
          className={`flex justify-between relative -top-52 ${arges.className}`}
        >
          <div className="flex flex-col">
            <div
              className={`${PPmori.className} text-sm opacity-90 tracking-wider`}
            >
              {Data.description}
            </div>
            <div className="text-[22rem] font-black leading-none">{Data.title}</div>
          </div>
          <motion.div 
          drag
          className={` ${PPmori.className} w-24 h-24 rounded-full border-2 flex justify-center items-center -mt-9 text-xl hover:scale-125`}>
            OPEN
        </motion.div>
          <div className=" w-[26rem] h-[20rem] bg-white overflow-hidden opacity-5 rounded-xl"></div>
        </div>
      </div>
    </>
  );
}
