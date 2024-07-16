import React from 'react'

const EmployeeDetails = ({data}) => {
  return (
    <>
   
    <div className='my-3 flex flex-col justify-center'>
        <div className=''>
      <img src={data?.url ? data?.url : "https://bbdnitm.ac.in/wp-content/uploads/2021/11/dummy-image-300x300.jpg"} width={50} height={50} alt='profile-image'></img>
      </div>
      <div>{data?.name}</div>
      <div>{data?.email}</div>
      <div>{data?.contact}</div>
      <div>{data?.address}</div>
    </div>
    </>

  )
}

export default EmployeeDetails