import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <div className='bg-slate-500' >
        <nav className='flex justify-between items-center  p-4 container ' >
          <div>
            <h1 className='text-white text-3xl'>Redux</h1>
          </div>
          <ul className='flex text-white capitalize justify-between items-center  gap-5' >
            <li> users </li>
            <li> test </li>
            <li> test </li>
          </ul>
          <div>
            <form>
              <input type="search" className='outline-none border-solid  rounded-lg border-blue-500 border-2  p-2' placeholder='search'/>
              <button className='p-2 bg-blue-600 text-white ml-3 rounded-lg' > Search </button>
            </form>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  )
}
