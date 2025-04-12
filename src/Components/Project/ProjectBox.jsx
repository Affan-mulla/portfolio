import React from 'react'
import { Link, Navigate } from 'react-router-dom'


const ProjectBox = () => {

    return (
        <>
            <div className='h-full bg-zinc-800  bg-opacity-30 backdrop-blur-lg rounded-md border-[1px] border-zinc-500  animate-slideIn3 px-4 py-4 flex-1 flex gap-5 w-full flex-col'>
                <div>
                    <Link to={"https://ezybill.vercel.app/register"} ><h1 className='md:text-4xl text-2xl font-bold text-zinc-200 cursor-pointer hover:text-zinc-400 transition duration-200'>EzyBill</h1></Link>
                </div>
                <div className=''>
                    <Link to={"https://ezybill.vercel.app/register"} ><img src="ez.png" alt="" className='rounded-md h-[250px] aspect-auto scale-100' /></Link>
                </div>
                <div className="">
                    <p className="text-zinc-100">
                        EzyBill is a simple and efficient billing system designed to help offline store owners manage their customers, track purchases, and generate invoices with ease. It features a user-friendly dashboard, dynamic charts for data visualization, and options to filter and analyze sales trends by date, all while keeping everything organized and accessible in one place.
                    </p>
                    <a
                    target='blank'
                        href="https://ezybill.vercel.app/register"
                        className="inline-block mt-4 bg-orange-500 hover:bg-orange-400 text-white font-medium py-2 px-4 rounded-md transition"
                    >
                        View Project
                    </a>
                </div>


            </div>
            <div className='h-full bg-zinc-800  bg-opacity-30 backdrop-blur-lg rounded-md border-[1px] border-zinc-500  animate-slideIn2 px-4 py-4 flex-1 flex gap-5 w-full flex-col'>
                <div>
                    <a href="https://snapgram-07.vercel.app/" target='blank'><h1 className='md:text-4xl text-2xl font-bold text-zinc-200 cursor-pointer hover:text-zinc-400 transition duration-200'>Snapgram</h1></a>
                </div>
                <div className=''>
                    <Link to={"https://snapgram-07.vercel.app/"} ><img src="snap.png" alt="" className='rounded-md h-[250px] aspect-auto scale-100' /></Link>
                </div>
                <div className="">
                    <p className="text-zinc-100">
                        Snapgram is a full-stack image-sharing app inspired by Instagram, built with React and Appwrite. Users can sign up, post images, and explore content in a clean, responsive UI.

                        Appwrite handles auth, database, and file storage, making the backend fast and secure. Snapgram was a great way to explore building social features while working with a real-time, scalable backend.                </p>
                    <a target='blank'
                        href="https://snapgram-07.vercel.app/"
                        className="inline-block mt-4 bg-orange-500 hover:bg-orange-400 text-white font-medium py-2 px-4 rounded-md transition"
                    >
                        View Project
                    </a>
                </div>
            </div>
        </>
    )
}

export default ProjectBox