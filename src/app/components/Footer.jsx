import '../globals.css'
import { PPmori, arges, bigS } from '../../../public/fonts/fonts'
export function Footer(){
    return(
        <>
        <div className="bg-[#252C35] h-screen text-white ">
            <div className="flex p-10">
                <div className={`flex justify-between w-full flex-wrap ${PPmori.className}`}>
                    <div className="flex ">
                    <div className="text-xs py-1 ">01/</div>
                    <div className="flex flex-col px-5">
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
                    <div className="text-xs py-1 ">02/</div>
                    <div className="flex flex-col px-5">
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
                    <div className="text-xs py-1 ">03/</div>
                    <div className="flex flex-col px-5">
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
            <div className=" mt-18 pt-20 mb-0 pb-0">
            <div className="flex justify-between px-10 text-[#929598] text-xs">
                <div>
                DIGITAL DESIGNER / WEBFLOW EXPERT
                </div>
                <div>
                PORTFOLIO 2023
                </div>
            </div>
            <div className={`{ flex justify-between px-10 text-[22rem] scale-y-110 mt-4  font-black flex-wrap overflow-hidden overflow-y-hidden leading-none } ${arges.className}`}>
                <div className='p-0 whitespace-nowrap'>AMAN </div>
                <div className='p-0'> PRAJAPATI</div>
            </div>
            <div className="flex justify-between px-10 mt-[-60px] mb-0 pb-0 font-light text-xs">
                <div>
                    INFOS & CREDITS
                </div>
                <div>
                PORTFOLIO 2023
                </div>
            </div>
            </div>
        </div>
        </>
    )
}