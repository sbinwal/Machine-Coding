import React, { useState } from 'react'

const LinkedList = () => {

  const[data,setData] = useState([])
  const[timer,setTimer] = useState(null)
  const showTab1Data = async(id,tabData) =>{
       const alreadyPresent = data.find((item)=>item.id === id);
       if(alreadyPresent) return
      const my_data = await new Promise((resolve,reject)=>{
              clearInterval(timer)
             const timeInterval = setTimeout(()=>{
              resolve({id : id, data : tabData})
             },1000)
             setTimer(timeInterval)
      })

      setData(prev => [...prev,my_data])

  }
  return (
    <>
    <div className='flex justify-center mt-4 gap-6'>
    <button className='border border-2 px-2 py-1' onClick={()=>{showTab1Data(1,"Data for Tab1")}}>Tab1</button>
    <button className='border border-2 px-2 py-1 mx-2' onClick={()=>{showTab1Data(2,"Data for Tab2")}}>Tab2</button>
    <button className='border border-2 px-2 py-1' onClick={()=>{showTab1Data(3,"Data for Tab3")}}>Tab3</button>
    <button className='border border-2 px-2 py-1 mx-2' onClick={()=>{showTab1Data(4,"Data for Tab4")}}>Tab4</button>
    <button className='border border-2 px-2 py-1' onClick={()=>{showTab1Data(5,"Data for Tab5")}}>Tab5</button>
    </div>
    <div className='mt-4 flex justify-center'>
      <ul>
      {data.map((item)=>{
        return(
          <li key={item?.id}>{item?.data}</li>
        )
      })}
      </ul>
    </div>
    </>
  )
}

export default LinkedList