import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import Navbar from './components/Navbar'
import CreateWorks from './Pages/CreateWorks'
import Works from './Pages/Works'
export default function App() {
  return (
    <div className='container' >
      <Navbar />
      <div className='row mt-3 ' >
        <div className='col-md-4' >
          <CreateWorks />
        </div>
        <div className='col-md-8' >
          <Works />
        </div>
      </div>
    </div>
  )
}
