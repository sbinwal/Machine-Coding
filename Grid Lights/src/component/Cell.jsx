import React from 'react'

const Cell = ({activated,handleActivate,index,disabled}) => {
  return (
    <button className={`border border-2 border-black h-full ${activated && "bg-green-500"}`} onClick={()=>{handleActivate(index)}} disabled={disabled}></button>
  )
}

export default Cell