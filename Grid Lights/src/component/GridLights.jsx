import React, { useState } from 'react'
import Cell from './Cell'

const GridLights = () => {
  const [activated,setActivated] = useState([])
  const [isDeactivating,setIsDeactivating] = useState(false)
  const config = [
    [1,1,1],
    [1,0,1],
    [1,1,1]
  ]
  const handleActivate = (index) =>{
     const newActivated = [...activated,index];
     setActivated(newActivated)
     if(newActivated.length === config.flat(1).filter(Boolean).length){
          deactivateGrid();
     }
  }
  const checkActivated = (index) =>{
      return activated.includes(index)
  }

  const deactivateGrid = () =>{
    setIsDeactivating(true)
    const timer = setInterval(()=>{
          setActivated(oldActivated => {
            const newActivated = [...oldActivated];
            newActivated.pop();
            if(newActivated.length === 0){
              clearInterval(timer)
              setIsDeactivating(false)
            }
            return newActivated
          })
    },300)
  }
  return (
    <div className='flex justify-center items-center h-screen'>
    <div className='w-[30rem] h-[30rem] border border-2 border-black'>
      <div className='m-6 grid grid-cols-3 items-center h-[90%] gap-2'>
        {config.flat(1).map((value,index)=>{
          console.log("value",value)
          return(
            value === 1 ? <Cell key={index} activated={checkActivated(index)} handleActivate={handleActivate} index={index} disabled={checkActivated(index) || isDeactivating}/> : <span/>
          )
        })}
      </div>
    </div>
    </div>
  )
}

export default GridLights