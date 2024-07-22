import React, { useState } from 'react'

const Calculator = () => {
  const[calculateValue,setCalculateValue] = useState({
    principalAmount : 0,
    rate : 0,
    duration : 0,
    processingFees : 1,
    downPayment : 0
  })

  const[EMI,setEMI] = useState(0)

  const changeValues = (e) =>{
     const {name,value} = e.target;
     setCalculateValue({...calculateValue, [name] : Number(value)})
     if(name === "downPayment"){
      const emi = calculateEMI(value)
      setEMI(emi)
     }
  }

  const calculateTotalDownPayment = () =>{
      let remainingAmount = calculateValue?.principalAmount - calculateValue?.downPayment
      const remainingAmountCharge = remainingAmount * (calculateValue?.processingFees / 100)
      return (calculateValue?.downPayment + remainingAmountCharge)
  }

  const calculateEMI = (amount) =>{
    const rate = calculateValue?.rate/100
    const tenure = calculateValue?.duration / 12
    const principal = calculateValue?.principalAmount - amount
        const EMI = (principal * rate * ((1 + rate)**tenure))/((1 + rate)**tenure-1)
        return EMI
  }

  console.log("calculate",calculateValue)
  return (
    <div className='m-4'>
        <div>
        <div>Principle Amount</div>
        <input type='text' className='border border-black rounded p-2' onChange={changeValues} name='principalAmount'/>
        <div>Rate of Interest(in %)</div>
        <input type='text' className='border border-black rounded p-2' onChange={changeValues} name='rate'/>
        <div>Duration(in months)</div>
        <input type='text' className='border border-black rounded p-2' onChange={changeValues} name='duration'/>
        <div>Processing Fees(in %)</div>
        <input type='text' className='border border-black rounded p-2' onChange={changeValues} value={calculateValue?.processingFees} name='processingFees'  />
        </div>

        <div className='my-4'>
            <div >
        <label for="file" className='mx-2' >Down Payment</label>
        <div>Total Down Payment : {calculateTotalDownPayment()}</div>
        <div className='flex gap-2'>
          <div>0</div>
        <input type="range" min="0" max={calculateValue?.principalAmount} name='downPayment' className='w-full' onChange={changeValues}/>
        <div>100%</div>
        </div>
        <div className='flex justify-center'>{calculateValue?.downPayment}</div>
        </div>
        <div className='my-4 '>
        <label for="file" className='mx-2 w-screen'>Loan per Month</label>
        <div>Total Loan Amount : {EMI * calculateValue?.duration}</div>
        <div className='flex gap-2'>
        <div>0</div>
        <input type="range" min="0" max={calculateEMI(0)} value={EMI} className='w-screen'/>
        <div>{calculateEMI(0)}</div>
        </div>
        <div className='flex justify-center'>{EMI}</div>
        </div>
        </div>
    </div>
  )
}

export default Calculator