import React from 'react'
import { HeartIcon } from '@heroicons/react/24/solid';

const HeartIconComponent = ({like}) => {
  return (
      <HeartIcon className={`h-4 w-4 text-gray ${like ? "text-white" : "group-hover:text-red-500"}`} stroke="currentColor" fill="none" />
  )
}

export default HeartIconComponent