import React from 'react'

const Card = ({item}) => {
  return (
    <div className='bg-blue-500 text-white p-3 grid justify-center'>
    <img src={item.thumbnail} width={100} height={80} alt='product'></img>
    <div>{item?.title}</div>
    <div>{item?.price}</div>
    </div>
  )
}

export default Card