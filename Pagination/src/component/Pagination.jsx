import React from 'react'
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
const Pagination = ({pages,changePage,forward,backward,active,skip}) => {
    console.log("pages",active)
  return (
    <div className='flex gap-1 justify-center'>
        {/* <ArrowBackIosIcon/> */}
        <div onClick={backward} className='cursor-pointer'>Back</div>
        {[...Array(pages).keys()].map((item,index)=>(
            <div className={`w-6 h-6 ${(index *10 === skip)  && "bg-blue-300"} flex justify-center items-center cursor-pointer`} onClick={()=>changePage(item)}>{item + 1}</div>
        ))}
        <div onClick={forward} className='cursor-pointer'>Forward</div>
        
        
        {/* <ArrowForwardIosIcon/> */}
    </div>
  )
}

export default Pagination