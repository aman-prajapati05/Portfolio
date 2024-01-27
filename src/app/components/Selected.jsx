import { arges } from "../../../public/fonts/fonts"

export function Selected(){
    return(
        <>
            <div className={`${arges.className} w-full h-full bg-[#252C35] px-8 rounded-t-3xl font-black tracking-tighter md:tracking-widest py-20`}>
                <div className=" flex lg:justify-start justify-center items-center text-[10rem] md:text-[21rem] lg:text-[21rem] xl:text-[24rem] xxl:text-[26rem] 2xl:text-[30rem] text-white leading-none">SOME</div>
                <div className=" flex lg:justify-end justify-center items-center text-[9rem] md:text-[19rem] lg:text-[21rem] xl:text-[24rem] xxl:text-[26rem] 2xl:text-[30rem] text-white leading-none">PROJECTS</div>
            </div>
        </>
    )
}