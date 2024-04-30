import React, { useContext } from 'react'
import { ContextData } from '../Context'

export default function Users() {
  const { data, handleEdit, dispatch } = useContext(ContextData)
  return (
    <div>
      <table className='table' >
        <thead>
          <tr>
            <th>№</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
            <th>Job</th>
            <th>Live</th>
            <th className='text-center' >action</th>
          </tr>
        </thead>
        <tbody>
          {
            data.length ? (
              data.map((item, index) => (
                <tr key={item.id} >
                  <th> {index + 1} </th>
                  <td> {item.firstName} </td>
                  <td> {item.lastName} </td>
                  <td> {item.age} </td>
                  <td> {item.job} </td>
                  <td> {item.live} </td>
                  <td className='d-flex gap-2 justify-content-center' >
                    <button className='btn btn-secondary' onClick={() => handleEdit(item)}  > edit </button>
                    <button className='btn btn-danger' onClick={() => dispatch({ type: "delete", payload: item.id })} > delete </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <th colSpan={10} className='text-center' > OOOPS! No data...</th>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}
