import React from 'react'
import Box1 from './Box1'
import Box2 from './Box2'
import Box3 from './Box3'
import Box4 from './Box4'


function Foregground() {

    return (
        <div className="md:h-full min-h-full w-full  flex absolute md:p-14 p-8 justify-center items-center z-50 ">
            <div className="bg-zinc-800 h-[100%] w-full p-3 rounded-lg border-[1px] border-zinc-600 overflow-hidden grid gap-3 md:grid-cols-12 md:grid-rows-2 grid-col-1 backdrop-blur-lg bg-opacity-20   ">
                
              <Box1/>  
              <Box2/>  
              <Box3/>  
              <Box4/>  
                
                
                
            </div>
        </div>)
}

export default Foregground