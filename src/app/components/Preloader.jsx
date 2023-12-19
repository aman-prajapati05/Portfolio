"use client"
import { useState, useEffect } from "react";

export function Preloader() { 
    
    const [index, setIndex] = useState(0);
    const words =  ["Hello","नमस्ते","Bonjour", "Ciao", "Olà", "やあ", "Hallå", "Guten tag", "Hallo"];

    useEffect(() => {
        if(index===words.length-1) return;
        setTimeout(() => {
            setIndex(index + 1);
        },index == 0 ? 1000: 150);
    }, [index]);

    return (
        <>
        <div className="w-screen h-screen bg-black text-white flex justify-center items-center top-0 left-0">
            <div className="text-4xl font-bold">
                {words[index]}
                </div>
        </div>
        </>
    );
}