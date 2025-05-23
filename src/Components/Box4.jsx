import React from 'react'
import { FaInstagramSquare, FaLinkedin, FaTwitterSquare  } from "react-icons/fa";
import { Link } from 'react-router-dom';
function Box4() {
    return (
        <div className=' bg-zinc-800   bg-opacity-30 backdrop-blur-lg rounded-md border-[1px] border-zinc-500 col-span-3 animate-slideIn2 px-4 py-4 flex  w-full flex-col justify-between'>
            <ul className='md:text-4xl text-2xl font-bold text-zinc-200 cursor-pointer '>
                <li className='hover:text-zinc-400 transition-all duration-200 ease-in'><Link to={`/project`}>.Projects</Link></li>
                <li className='hover:text-zinc-400 transition-all duration-200 ease-in'><Link to={`/contactme`}>.Contact Me</Link></li>
            </ul>
            <ul className='text-4xl text-zinc-200 flex cursor-pointer w-fit'>
                <li className=' hover:text-zinc-400 transition duration-200 '><a href='https://www.instagram.com/a44a9_/?hl=en'target='blank' ><FaInstagramSquare /></a></li>
                <li className=' hover:text-zinc-400 transition duration-200 '><a href='https://www.linkedin.com/in/affan-mulla-544341321/' target='blank'><FaLinkedin /></a></li>
                <li className=' hover:text-zinc-400 transition duration-200 '><a href='https://x.com/AffanMulla077' target='blank'><FaTwitterSquare /></a></li>  
            </ul>
        </div>
    )
}

export default Box4