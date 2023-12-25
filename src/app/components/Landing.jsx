import '../globals.css'
import { PPmori,arges } from '../../../public/fonts/fonts'
export function Landing(){
    return(
        <>
            <div className={` bg-white px-8 `}>
                <div className={`flex justify-between flex-wrap flex-row `}>
                <div className={` ${arges.className} flex flex-col text-[#252C35] text-[9rem] leading-none font-black pt-4 xl:text-[35rem] xl:leading-none md:text-[24rem]`}>
                    <div>AMAN</div>
                    <div>PRAJAPATI</div>
                </div>
                <div className={`${PPmori.className}flex flex-col text-xl tracking-tight w-[75%] xl:w-[20%] md:w-[35%] md:relative xl:left-[70rem] xl:top-[-68rem] md:left-[42rem] md:top-[-45rem]`}>
                    <div className={`${PPmori.className} mb-8 xl:mb-15`}>I'M AN ASPIRING SOFTWARE ENGINEER & A STUDENT</div>
                    <div className={`${PPmori.className} mb-8 xl:mb-15 `}>I'M ALSO A FULL-STACK DEVELOPER</div>
                    <div className={`${PPmori.className}  underline`}>SCROLL TO EXPLORE</div>
                </div>
                </div>
            </div>
        </>
    )
}