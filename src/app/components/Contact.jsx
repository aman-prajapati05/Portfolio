import { PPmori } from "../../../public/fonts/fonts"

export function Contact() {
    return (
        <>
        <div className="w-screen h-screen p-10">
            <div className="bg-[#252C35] w-full h-full rounded-3xl ">
                <div className={`${PPmori.className} flex text-white justify-center pt-20 text-4xl font-medium`}>
                        Fill the form and i’ll get back to you (very) quickly
                </div>
                <div>
                    <form action="submit" className={`${PPmori.className} p-32`}>
                        <div className="flex justify-between">
                        <input type="text" placeholder="Name" className="text-white w-[1/2] p-3 h-10 bg-transparent border-b-2 border-white outline-none focus:border-white" />
                        <input type="text" placeholder="Email" className="text-white w-[1/2] h-10 bg-transparent border-b-2 border-white outline-none focus:border-white" />
                        </div>
                        <textarea name="" id="" cols="30" rows="10" placeholder="Message" className="text-white w-full h-10 bg-transparent border-b-2 border-white outline-none focus:border-white"></textarea>
                        <input type="submit" value="Send" className="text-white w-full h-10 bg-transparent border-b-2 border-white outline-none focus:border-white"/>
                    </form>
                </div>

            </div>
        </div>
        </>
    )}