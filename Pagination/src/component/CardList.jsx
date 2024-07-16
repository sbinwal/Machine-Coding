import React, { useEffect, useState } from 'react'
import Card from './Card'
import Pagination from './Pagination'

const CardList = () => {
    const[cardData,setCardData] = useState([])
    const initialSkip = 10;
    const[skip,setSkip] = useState(0);
    const[pages,setPages] = useState(0)

    const changePage = (page) =>{
        
        setSkip(page * initialSkip)
    }
    const forward = () =>{
        if(skip < ((pages - 1) * 10)){
        setSkip(skip + initialSkip)
        }
    }
    const backward = () =>{
        if(skip!==0){
        setSkip(skip - initialSkip)
        }
    }
    

    useEffect(()=>{
        const fetchData = async() =>{
        const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${skip}`);
        const data = await response.json();
        setCardData(data.products)
        setPages(data.total/initialSkip)
        console.log("data",data)
        }
        fetchData();
    },[skip])
    console.log("cardData",cardData)
  return (
    <>
    <div className='grid grid-cols-4  gap-4 m-4'>
      {cardData.length> 0 && cardData.map((item,index)=>(
        <Card item={item} key={index}/>
      ))}
      
    </div>
    {cardData.length> 0 && <Pagination pages={Math.ceil(pages)} changePage={changePage} forward={forward} backward={backward} skip={skip}/>}
    </>
  )
}

export default CardList