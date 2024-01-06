"use client"
import { PPmori } from "../../../public/fonts/fonts"
import './../globals.css'

export function Contact() {
    return (
        <>
        <div className="w-screen h-screen md:p-10 p-5">
            <div className="bg-[#252C35] w-full h-full rounded-3xl ">
                <div className="flex  justify-between md:justify-end text-white px-8 pt-8">
                    A
                    </div>
                <div className={`${PPmori.className} flex text-white justify-center md:pt-5 pt-28 md:text-4xl text-3xl px-4 font-medium`}>
                        Fill the form and i’ll get back to you (very) quickly
                </div>
                <div>
                    <form action="submit" className={`${PPmori.className} md:px-40 px-4 md:py-28 py-16 w-full`}>
                        <div className="flex justify-between flex-col md:flex-row">
                        <input type="text" placeholder="Name" required className="text-white w-[1/2] p-3 h-16 bg-transparent border-b md:text-4xl text-2xl border-white outline-none focus:border-white" />
                        <input type="text" placeholder="Email" required className="text-white w-[1/2] p-3 h-16 bg-transparent border-b md:text-4xl text-2xl border-white outline-none focus:border-white" />
                        </div>
                        <textarea name="" id="" cols="30" rows="10" required placeholder="Message" className="text-white w-full h-36 md:text-4xl text-2xl pt-8 px-3 bg-transparent border-b border-white outline-none focus:border-white"></textarea>
                        <input type="submit" value="Send" className="text-white text-center mt-9 md:mt-20 md:text-4xl  w-full  bg-transparent underline underline-offset-[8px] cursor-pointer text-2xl border-white outline-none focus:border-white"/>
                    </form>
                </div>

            </div>
        </div>
        </>
    )}