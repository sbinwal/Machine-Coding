import React, { useEffect, useState } from 'react'

const Calculator = () => {
  const[calculateValue,setCalculateValue] = useState({
    principalAmount : Number(0),
    rate : Number(0),
    duration : Number(0),
    processingFees : Number(1),
    downPayment : Number(0)
  })

  const[EMI,setEMI] = useState(0)

  useEffect(() => {
    const emi = calculateEMI(calculateValue.downPayment);
    setEMI(emi);
  }, [calculateValue]);


  const changeValues = (e) =>{
     const {name,value} = e.target;
     setCalculateValue({...calculateValue, [name] : Number(value)})
  }

  const calculateTotalDownPayment = () =>{
      let remainingAmount = calculateValue?.principalAmount - calculateValue?.downPayment
      const remainingAmountCharge = remainingAmount * (calculateValue?.processingFees / 100)
      return (calculateValue?.downPayment + remainingAmountCharge)
  }

  const calculateEMI = (amount) =>{
    
    const rate = calculateValue?.rate/100
    const tenure = calculateValue?.duration
    const principal = calculateValue?.principalAmount - amount
    console.log("rate",rate,tenure,principal)
        const EMI = (principal * rate * Math.pow(1 + rate, tenure)) / (Math.pow(1 + rate, tenure) - 1);
        console.log("emi",EMI)
        return EMI
  }

  console.log("EMIIIII",EMI)

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