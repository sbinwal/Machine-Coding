import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeEmployee } from './redux/Slice/AddEmployeeSlice'

const EmployeeList = ({name,setNameFunc,index,active}) => {
    const dispatch = useDispatch()
    const removePerticularData = () =>{
         dispatch(removeEmployee(index))
    }
    const selectEmployee = () =>{
        setNameFunc(index)
    }
  return (
    <div className={`flex justify-between hover:bg-gray-500 ${active && "bg-gray-500"} p-4 cursor-pointer rounded my-2 mx-2`} onClick={selectEmployee}>
        <div className=''>{name}</div>
        <div className='text-red-500' onClick={removePerticularData}>X</div>
    </div>
  )
}

export default EmployeeList