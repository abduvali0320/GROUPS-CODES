import React, { useContext } from 'react'
import { MainData } from '../context/Context'

export default function Works() {
  let { works, dispatch, getWorkerValue } = useContext(MainData)
  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            <th>№</th>
            <th> ism </th>
            <th> familya </th>
            <th> yosh </th>
            <th> rasm </th>
            <th colSpan={2} className='text-center' > aciton </th>
          </tr>
        </thead>
        <tbody>
          {
            works.length ? (
              works.map((worker, index) => {
                return (
                  <tr key={worker.id} >
                    <th> {index + 1} </th>
                    <td> {worker.ism} </td>
                    <td> {worker.familya} </td>
                    <td> {worker.yosh} </td>
                    <td className='w-25'> <img src={worker.rasm} className='w-100' alt="shoxruh" /> </td>
                    <td className='text-center' > <button className='btn btn-secondary'
                      onClick={() => getWorkerValue(worker)}
                    > edit </button> </td>
                    <td className='text-center' > <button className='btn btn-danger' onClick={() => {
                      window.confirm('o`chirasizmi') ? dispatch({ type: 'remove_worker', payload: worker.id }) : undefined
                    }
                    }
                    > delete </button> </td>
                  </tr>
                )
              })
            ) : (
              <tr>
                <th>1</th>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}
