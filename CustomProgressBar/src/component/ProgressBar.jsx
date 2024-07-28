import React, { useEffect, useState } from 'react'

const ProgressBar = () => {
  const[width,setWidth] = useState(0);
  useEffect(()=>{
      const timeInterval = setInterval(()=>{
          setWidth((prev)=>{
             if(prev < 100){
              return prev + 1
             }
             else{
              clearInterval(timeInterval)
              return prev
             }
          })
      },25)

      return () => {
        clearInterval(timeInterval);
      };
  },[])
  return (
    <div className='flex justify-center h-screen items-center'>
    <div className='w-1/2 border border-2 border-black h-8 flex justify-center items-center m-2 rounded-full relative'>
    <div className={`absolute left-0 h-full  bg-green-500 rounded-full`} style={{'width' : `${width}%`}}></div>
    <div className='z-10'>{width}%</div>
    </div>
    </div>
  )
}

export default ProgressBar