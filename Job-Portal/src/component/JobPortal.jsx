import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import { fetchCardData, fetchIds } from './API'

const JobPortal = () => {
   const[data,setData] = useState([])
   const[cardData,setCardData] = useState([])
   const[isFetching,setIsFetching] = useState(true)
   const[currentPage,setCurrentPage] = useState(1)
    const fetchAllIds = async() =>{
        const ids = await fetchIds();
        const cardDataPromises = ids.map((id)=>{
              return fetchCardData(id)
        })
        const cardData = Promise.all(cardDataPromises)
        const data = await cardData;
        setData(data)
        console.log("data",data)
        }

    useEffect(()=>{
        
        fetchAllIds();
        
    },[])


    useEffect(()=>{
        if(data.length > 0){
            setIsFetching(true)
        setCardData(data.slice(0,currentPage * 6))
        setIsFetching(false)
        }
     },[currentPage,data])

  return (
    <div className='m-4'>
    <div className='text-center text-xl font-bol'>JobPortal</div>
    <div className='flex items-center flex-col my-4'>
        {cardData.map(()=>{
           return <Cards/>
        })}
    
    </div>
    <div className='flex justify-center'>
    <button className='border-2 px-2 py-2 rounded' onClick={()=>setCurrentPage(currentPage + 1)}>{isFetching ? "Loading" : "Load More"}</button>
    </div>
    </div>
  )
}

export default JobPortal