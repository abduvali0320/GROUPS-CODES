import React, { useState } from 'react'
import Users from './Users'
import Create from './Create'

export default function UserCrud() {
  const [inputValue, setInputValue] = useState({
    name: '',
    lastName: "",
    job: "",
    live: '',
    age: "",
  })

  return (
    <div className='container'>
      <div className='userCrud'>
        <div>
          <Create inputValue={inputValue} setInputValue={setInputValue} />
        </div>
        <div>
          <Users setInputValue={setInputValue} />
        </div>
      </div>
    </div>
  )
}
