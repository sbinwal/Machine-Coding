import React, { useState } from 'react'
import EmployeeModal from '../component/modal/EmployeeModal'
import { useDispatch, useSelector } from 'react-redux'
import { closeEmployeeModal } from '../component/redux/Slice/AddEmployeeSlice'
import EmployeeList from '../component/EmployeeList'
import EmployeeDetails from '../component/EmployeeDetails'

const EmployeePage = () => {
    const isEmmployeeModal = useSelector((state) => state.EmployeeSlice.isEmployeeModal)
    const employeeData = useSelector((state)=>state.EmployeeSlice.employeeData)
    const[activeIndex,setActiveIndex] = useState(0)
    const dispatch = useDispatch();
   const onClose = () =>{
        dispatch(closeEmployeeModal())
   }
   const setNameFunc = (index) =>{
    setActiveIndex(index)
   }
  return (
    <>
    {isEmmployeeModal && <EmployeeModal isOpen={isEmmployeeModal} onClose={onClose}/>}
    {employeeData.length === 0  ? <div className='h-screen flex justify-center items-center text-2xl font-bold'>No Data found</div>
    :
    <div className='grid grid-cols-12'>
        <div className='col-span-2 my-3'>
            {employeeData.map((item,index)=>{
                return(
                 <EmployeeList key={index} name={item?.name} setNameFunc={setNameFunc} index={index} active={activeIndex === index} />
                )
            })}
       
        </div>
        <div className='col-span-10 justify-self-center my-3'>
        <div className='text-xl font-bold'>EmployeeDetails</div>
        
        {employeeData.map((item,index)=>(
                index === activeIndex && <EmployeeDetails data={item} />
                
            ))}
        </div>
    </div>
}
    </>
  )
}

export default EmployeePage