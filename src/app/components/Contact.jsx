"use client"

import { PPmori } from "../../../public/fonts/fonts"
import toast,{Toaster} from "react-hot-toast";
import { RxCrossCircled } from "react-icons/rx";
import { motion } from "framer-motion";
import Link from "next/link";
import '../globals.css'



 function Contact(){

   

    async function handleSubmit(e) {
        e.preventDefault();
        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value
        }
        console.log(formData);
        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(formData)
        })
        if (res.status === 200) {
            e.target.reset();
            toast.success("Message sent successfully!");
        } else {
            toast.error('Failed to send message!');
        }

    }

    return (
        <>
        <motion.div 
        initial={{ opacity: 0, y: '-100vh' }} 
        animate={{ opacity: 1, y: 0 }} 
        exit={{ opacity: 0, y: '-100vh' }} 
        transition={{ duration: 0.5, ease: 'easeIn' }}
        className="w-screen h-screen md:p-10 p-5">
            <Toaster/>
            <div className="bg-[#252C35] w-full h-full rounded-3xl ">
                <div className="flex justify-center md:justify-end text-white  px-8 pt-8">
                <Link href='/'><RxCrossCircled size={45} className="rotate-on-hover" /></Link>
                    </div>
                <div className={`${PPmori.className} flex text-white justify-center md:pt-5 pt-28 md:text-4xl text-3xl px-4 font-medium`}>
                        Fill the form and i’ll get back to you (very) quickly
                </div>
                <div>
                    <form action="submit" onSubmit={handleSubmit} className={` ${PPmori.className} md:px-40 px-4 md:py-28 py-16 w-full`}>
                        <div className="flex justify-between flex-col md:flex-row">
                        <input type="text" id="name"  placeholder="Name" required className="text-white w-[1/2] p-3 h-16 bg-transparent border-b md:text-4xl text-2xl border-white outline-none focus:border-white" />
                        <input type="text" id="email"  placeholder="Email" required className="text-white w-[1/2] p-3 h-16 bg-transparent border-b md:text-4xl text-2xl border-white outline-none focus:border-white" />
                        </div>
                        <textarea name="message" id="message"  cols="30" rows="10" required placeholder="Message" className="text-white w-full h-36 md:text-4xl text-2xl pt-8 px-3 bg-transparent border-b border-white outline-none focus:border-white"></textarea>
                        <input type="submit" value="Send" className="text-white text-center mt-9 md:mt-20 md:text-4xl  w-full  bg-transparent underline underline-offset-[8px] cursor-pointer text-2xl border-white outline-none focus:border-white"/>
                    </form>
                </div>

            </div>
        </motion.div>
        </>
    )
}

export default Contact