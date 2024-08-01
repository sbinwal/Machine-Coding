import React, { useState } from 'react'
import HeartIconComponent from './HeartIconComponent'
import { CallLikeAPI } from './API'
import LoaderComponent from './Loader'

const LikeButton = () => {
  const[like,setLike] = useState(false)
  const[loader,setLoader] = useState(false)
  const handleClick = async() =>{
    try{
       setLoader(true)
       const response = await CallLikeAPI(like);
       console.log("response",response)
       setLike(response)
       setLoader(false)
    }
    catch (error) {
      console.error("Error liking/unliking:", error);
      setLoader(false)
      return false;
    }
  }
  return (
    <div>
      <button className={`group px-4 py-1 rounded border-2 border-gray m-4 flex items-center gap-2 rounded-full  ${like ? "bg-red-500 text-white" : "hover:border-red-500 hover:text-red-500"}`} onClick={handleClick}>{loader ? <LoaderComponent like={like}/> :<HeartIconComponent like={like}/> }{like ? "Liked" :"Like"}</button>
      
    </div>
  )
}

export default LikeButton