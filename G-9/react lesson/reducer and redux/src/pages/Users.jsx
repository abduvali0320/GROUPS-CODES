import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userRemove } from '../redux/action/Users_action'
import axios from 'axios'
function Users({ setInputValue }) {
  const { users, isLoading } = useSelector(state => state.Users_reducer)
  const dispatch = useDispatch()
  const handleDelete = async (ID) => {
    let confirm = window.confirm('o`chirasizmi')
    if (confirm) {
      dispatch({ type: "loading", payload: true })
      try {
        let response = await axios.delete(`http://localhost:3000/users/${ID}`)
        dispatch(userRemove(response.data.id))
      } catch (error) {
        console.log(error);
      }
      finally {
        dispatch({ type: "loading", payload: false })
      }
    }
  }
  if (isLoading) {
    return (
      <h1> Loading.... </h1>
    )
  }
  return (
    <table className='talbe' >
      <thead>
        <tr>
          <th>№</th>
          <th>name</th>
          <th>lastName</th>
          <th>age</th>
          <th>job</th>
          <th>live</th>
          <th colSpan={2} > action </th>
        </tr>
      </thead>
      <tbody>
        {
          users.length ? (
            users.map((user, index) => {
              return (
                <tr key={user.id} >
                  <th> {index + 1} </th>
                  <td> {user.name} </td>
                  <td> {user.lastName} </td>
                  <td> {user.age} </td>
                  <td> {user.job} </td>
                  <td> {user.live} </td>
                  <td> <button className='bg-blue-800 py-2 px-3 text-white rounded-lg'
                    onClick={() => setInputValue(user)}
                  > edit </button> </td>
                  <td> <button className='bg-red-800 py-2 px-3 text-white rounded-lg'
                    onClick={() => handleDelete(user.id)}
                  > delete </button> </td>
                </tr>
              )
            })
          ) : (
            <tr>
              <th colSpan={10} className='text-center'> OOOPS! No Users... </th>
            </tr>
          )
        }
      </tbody>
    </table>
  )
}

export default Users
