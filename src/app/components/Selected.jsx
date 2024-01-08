import { arges } from "../../public/fonts/fonts";

export function Selected(){
    return(
        <>
            <div className={`${arges.className} w-screen h-full bg-[#252C35] px-8 rounded-t-3xl font-black tracking-tighter md:tracking-widest py-20`}>
                <div className=" flex md:justify-start justify-center items-center text-[11rem] md:text-[22rem] text-white leading-none">SOME</div>
                <div className=" flex md:justify-end justify-center items-center text-[10rem] md:text-[22rem] text-white leading-none">PROJECTS</div>
            </div>
        </>
    )
}