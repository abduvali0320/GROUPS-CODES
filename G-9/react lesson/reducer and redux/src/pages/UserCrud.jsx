import React from 'react'
import Users from './Users'
import Create from './Create'

export default function UserCrud() {
  return (
   <div className='container' >
     <div className='userCrud' >  
      <div>
        <Create />
      </div>
      <div>
        <Users />
      </div>
    </div>
   </div>
  )
}
