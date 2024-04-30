import React, { useContext } from 'react'
import { ContextData } from '../Context'

export default function Create() {
  const { dispatch, getInputValue, inputValue, clearInputValue } = useContext(ContextData)
  const handleCreate = function (e) {
    e.preventDefault()
    if (!inputValue.id) {
      dispatch({ type: 'create', payload: inputValue })
    }
    else {
      dispatch({ type: "edit", payload: inputValue })
    }
    e.target.reset()
    clearInputValue()
  }
  return (
    <div>
      <form className='form-control' onSubmit={handleCreate}  >
        <input type="text" className='form-control mt-3' value={inputValue.firstName} name='firstName' onChange={getInputValue} placeholder='first name' />
        <input type="text" className='form-control mt-3' value={inputValue.lastName} name='lastName' onChange={getInputValue} placeholder='last name' />
        <input type="text" className='form-control mt-3' value={inputValue.age} name='age' onChange={getInputValue} placeholder='age' />
        <input type="text" className='form-control mt-3' value={inputValue.job} name='job' onChange={getInputValue} placeholder='job' />
        <input type="text" className='form-control mt-3' value={inputValue.live} name='live' onChange={getInputValue} placeholder='live' />
        <div className='text-end my-3' >
          <button type='submit' className='btn btn-primary' > {inputValue.id ? "Save" : 'Create'}  </button>
        </div>
      </form>
    </div>
  )
}
