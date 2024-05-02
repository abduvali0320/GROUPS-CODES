import React from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'

export default function Create({ setInputValue, inputValue }) {
  const dispatch = useDispatch()
  const sendFunc = async function (e) {
    e.preventDefault()
    dispatch({ type: "loading", payload: true })
    if (!inputValue.id) {
      try {
        let response = await axios.post('http://localhost:3000/users', inputValue)
        dispatch({ type: "create", payload: response.data })
      } catch (error) {
        console.log(error);
      }
      finally {
        dispatch({ type: "loading", payload: false })
      }
    }
    else {
      try {
        let response = await axios.put(`http://localhost:3000/users/${inputValue.id}`, inputValue)
        dispatch({ type: "edit", payload: response.data })
      } catch (error) {
        console.log(error);
      }
      finally {
        dispatch({ type: "loading", payload: false })
      }

    }
    setInputValue({
      name: '',
      lastName: "",
      job: "",
      live: '',
      age: "",
    })
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
        <input type="text" placeholder='name' name='name' value={inputValue?.name} className='p-2 border-solid border-2 rounded-md
          border-gray-500
        '  onChange={getInputValue} />
        <input type="text" placeholder='last name' value={inputValue?.lastName} name='lastName' className='p-2 border-solid border-2 rounded-md border-gray-500 ' onChange={getInputValue} />
        <input type="text" placeholder='job' name='job' onChange={getInputValue} value={inputValue?.job} className='p-2 border-solid border-2 rounded-md border-gray-500' />
        <input type="text" placeholder='live' name='live'
          value={inputValue?.live}
          className='p-2 border-solid border-2 rounded-md  border-gray-500' onChange={getInputValue} />
        <input type="number" value={inputValue?.age} placeholder='age' name='age' className='p-2 border-solid border-2 rounded-md  border-gray-500' onChange={getInputValue} />
        <div className='text-right mt-3' >
          <button type='submit' className='bg-blue-700 text-white py-2 px-4 rounded-lg' >  {inputValue?.id ? 'save' : 'create'}  </button>
        </div>
      </form>
    </div>
  )
}
