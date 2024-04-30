import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { userAdd } from '../redux/action/Users_action'

export default function Create() {

  const dispatch = useDispatch()

  const [inputValue, setInputValue] = useState({
    name: '',
    lastName: "",
    job: "",
    live: '',
    age: "",
  })

  const sendFunc = function (e) {
    e.preventDefault()
    // console.log(inputValue);
    e.target.reset()
    dispatch(userAdd({ ...inputValue, id: Date.now()}))
  }

  const getInputValue = (e) => {
    let { name, value } = e.target
    setInputValue({
      ...inputValue,
      [name]: value
    })
  }

  return (
    <div className='form' >
      <form onSubmit={sendFunc} >
        <input type="text" placeholder='name' name='name' className='p-2 border-solid border-2 rounded-md
          border-gray-500
        '  onChange={getInputValue} />
        <input type="text" placeholder='last name' name='lastName' className='p-2 border-solid border-2 rounded-md border-gray-500 ' onChange={getInputValue} />
        <input type="text" placeholder='job' name='job' onChange={getInputValue} className='p-2 border-solid border-2 rounded-md border-gray-500' />
        <input type="text" placeholder='live' name='live' className='p-2 border-solid border-2 rounded-md  border-gray-500' onChange={getInputValue} />
        <input type="number" placeholder='age' name='age' className='p-2 border-solid border-2 rounded-md  border-gray-500' onChange={getInputValue} />
        <div className='text-right mt-3' >
          <button type='submit' className='bg-blue-700 text-white py-2 px-4 rounded-lg' > create </button>
        </div>
      </form>
    </div>
  )
}
