import React from 'react'
import ProjectBox from './ProjectBox'

const ProjectContainer = () => {
    return (
        <div className="md:h-full min-h-full w-full  flex absolute md:p-14 p-8 justify-center items-center z-50 ">
            <div className="bg-zinc-800 h-full w-full p-3 rounded-lg border-[1px] border-zinc-600 overflow-hidden flex backdrop-blur-lg bg-opacity-20 gap-5  ">

                <ProjectBox />

            </div>
        </div>
    )
}

export default ProjectContainer