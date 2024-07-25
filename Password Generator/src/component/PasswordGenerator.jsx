import React, { useEffect, useState } from 'react'
import UsePaswordGenerator from './Hooks/usePaswordGenerator'

const PasswordGenerator = () => {
  const[charLength,setCharLength] = useState(0)
  const{password,errorMessage,generatePassword} = UsePaswordGenerator();
  const[copy,setCopy] = useState(false)
  const[copyTimeout,setCopyTimeout] = useState(null)
  const[passwordRegression,setPasswordRegression] = useState([
    {title : "Include UpperCase Letter", state : false},
    {title : "Include LowerCase Letter", state : false},
    {title : "Include Numbers", state : false},
    {title : "Include Symbol", state : false}
  ])

  const handleCheckboxChange = (index) =>{
    const newPasswordRegression = [...passwordRegression];
    newPasswordRegression[index].state = !newPasswordRegression[index].state
     setPasswordRegression(newPasswordRegression)
  }

  useEffect(()=>{
    return () =>{
      clearTimeout(copyTimeout)
    }
  },[])

  const handleCopy = () =>{
    navigator.clipboard.writeText(password)
    setCopy(true)
    clearInterval(copyTimeout)
    const copyTime = setTimeout(()=>{
      setCopy(false)
    },1000)
    setCopyTimeout(copyTime)

    
  }

  return (
    <div className='m-4 mx-64'>
     <div className='flex justify-between'>
      <div>{password}</div>
      <button className='bg-green-400 p-1 text-white rounded' onClick={handleCopy}>{copy ? "Copied" : "Copy"}</button>
      </div>
      <div className='my-4'>
      <div className='flex justify-between'>
      <div>Character Length</div>
      <div>{charLength}</div>
      </div>

      <input type="range" min={0} max={20} value={charLength} onChange={(e)=>{setCharLength(e.target.value)}} className='w-full my-2'/>
      </div>
      <div className='grid grid-cols-2 gap-4 justify-center'>
        {passwordRegression.map((item,index)=>{
          return(
            <div className=''>
      <input type="checkbox" checked={item?.state}  name='IncludeUpperCaseLetter' onChange={()=>handleCheckboxChange(index)}/>
      <label for="uppercase"> {item?.title}</label>
      </div>
          )
        })}
      </div>
      <div className='my-4'>
        {errorMessage && <div className='text-red-500 text-sm flex justify-center'>{errorMessage}</div>}
      <button className='w-full text-white bg-green-400 py-2 rounded' onClick={()=>{generatePassword(charLength,passwordRegression)}}>GENERATE PASSWORD</button>
      </div>
    </div>
  )
}

export default PasswordGenerator