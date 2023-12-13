"use client"
import { Montserrat } from '@next/font/google'

// const mons = new Montserrat({
//     display: 'swap',
//     subsets: ['latin-ext'],
//     weights: [400, 700],
// })

export function Navbar() {
    return(
        <>

        <style jsx global>{`
         .mons{
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
        }`}</style>


        <div className=" flex">
            <div className="bg-white w-1/2 h-screen text-[#7C8086] pt-4 px-6 font-extralight hidden md:block">Hope you're having a great day ;) </div>
            <div className="px-8 bg-[#252C35] md:w-1/2 h-screen text-[#929598] pt-4  font-light navbar w-full">
                <div className="flex justify-between">
                <div>Aman Prajapati</div>
                <div className=' cursor-pointer mx-1 mt-[6px]'>   
                   <div className='bg-[#929598] w-[38px] h-[2px] rotate-[45deg] transition-all'></div> 
                    <div className='bg-[#929598] w-[38px] h-[2px] mt-[4px] rotate-[-45deg] transition-all'></div>
                </div>
                </div>
                <div className="flex mt-16 text-xs md:text-base md:justify-between">
                <div>/01</div>
                <div className= "text-white text-5xl font-normal mons px-2 md:text-8xl">HOME</div>
                </div>
                <div className="flex mt-4 text-xs md:text-base md:mt-16 md:justify-between">
                <div>/02</div>
                <div className= " text-5xl font-normal mons px-2 md:text-8xl">ABOUT</div>
                </div>
                <div className="flex mt-4 text-xs md:text-base md:mt-16 md:justify-between">
                <div>/03</div>
                <div className= " text-5xl font-normal mons px-2 md:text-8xl">WORK</div>
                </div>
                <div className="flex mt-4 text-xs md:text-base md:mt-16 md:justify-between ">
                <div>/04</div>
                <div className= " text-5xl font-normal mons px-2 md:text-8xl">CONTACT</div>
                </div>
                
            </div>
        </div>
        </>
    )
}