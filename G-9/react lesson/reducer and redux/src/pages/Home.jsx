import React, { useContext } from 'react'
import { C } from '../Context'

export default function Home() {
  const { reduceData, dispatch } = useContext(C)
  return (
    <div>Home {
      reduceData.data.map(item => {
        return (
          <div className='flex gap-3 my-3 items-center' key={item.id} >
            <button className='bg-slate-600 p-2 text-white' onClick={() => dispatch({ type: 'increment', payload: item.id })} > plus </button>
            <h1> count: {item.count} </h1>
            <button className='bg-slate-600 p-2 text-white' onClick={() => dispatch({ type: 'decrement', payload: item.id })}  > minus </button>
          </div>
        )
      })
    } </div>
  )
}
