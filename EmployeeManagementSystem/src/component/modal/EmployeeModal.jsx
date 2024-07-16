// Modal.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../redux/Slice/AddEmployeeSlice';

const EmployeeModal = ({ isOpen, onClose }) => {
    const[formData,setFormData] = useState({name : "",url : "",email : "",contact:"",salary : "",address:"",date : ""})
    const dispatch = useDispatch();
  if (!isOpen) return null;

  const changeInput = (e) =>{
    const {name,value} = e.target
      setFormData((prevData)=>({...prevData,[name] : value}))
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
     dispatch(addEmployee(formData))
     onClose()
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
         x
        </button>
        <form className='' onSubmit={handleSubmit}>
            <div className='font-bold text-xl mb-3'>Employee Details</div>
            <div>
          <input type='text' name='name' placeholder='Name' className='border-2 boder-black p-2 rounded' onChange={changeInput}/>
          </div>
          <div>
          <input type='text' name='url' placeholder='Image URL' className='my-3 border-2 boder-black p-2 rounded' onChange={changeInput}/>
          </div>
          <div>
          <input type='text' name='email' placeholder='Email' className='border-2 boder-black p-2 rounded' onChange={changeInput}/>
          </div>
          <div>
          <input type='text' name='contact' placeholder='Contact' className='my-3 border-2 boder-black p-2 rounded' onChange={changeInput}/>
          </div>
          <div>
          <input type='text' name='salary' placeholder='Salary' className='border-2 boder-black p-2 rounded' onChange={changeInput}/>
          </div>
          <div>
          <input type='text' name='address' placeholder='Address' className='my-3 border-2 boder-black p-2 rounded' onChange={changeInput}/>
          </div>
          <div>
          <input type='date' name='date' placeholder='Date' className='border-2 boder-black p-2 rounded w-full' onChange={changeInput}/>
          </div>
          <div className='flex justify-center'>
          <button className=' bg-blue-500 py-2  mt-3 rounded text-white w-full' type='submit'>Save</button>
          </div>
        </form>
       
      </div>
    </div>
  );
};

export default EmployeeModal;
