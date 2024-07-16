import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { openEmployeeModal } from './redux/Slice/AddEmployeeSlice';

const Header = () => {
    const dispatch = useDispatch();
    
  return (

    <div className='bg-cyan-400 py-3 px-3 flex justify-between justify-center items-center'>
        
       <img src="https://static.javatpoint.com/fullformpages/images/dbms-full-form2.png" alt='logo' width={65} height={65}></img>
       <ul className='flex gap-4 justify-center items-center'>
        <li>Home</li>
        <li>About Us</li>
        <button onClick={()=>dispatch(openEmployeeModal())}>Add Employee</button>
        <li className='w-10 h-10 rounded-full bg-blue-500 flex justify-center items-center text-white text-xl'>SB</li>
       </ul>
    </div>
  )
}

export default Header