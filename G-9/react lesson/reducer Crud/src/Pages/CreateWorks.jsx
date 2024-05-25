import React, { useContext } from 'react'
import { MainData } from '../context/Context'

export default function CreateWorks() {
  let { getInputValue, createWorker, inputValue, getImgPath } = useContext(MainData)
  return (
    <div>
      <form className='form-control' onSubmit={createWorker}  >
        <input type="text" className='form-control  mt-3' onChange={getInputValue} name='ism' placeholder='ismni kiritng'
          value={inputValue.ism}
        />
        <input type="text" className='form-control  mt-3'
          value={inputValue.familya} onChange={getInputValue} name='familya' placeholder='familyani kiritng' />
        <input type="text" value={inputValue.yosh} className='form-control  mt-3' onChange={getInputValue} name='yosh' placeholder='yoshni kiriting' />
        <input type="file" id='rasm' className='form-control  mt-3 d-none' onChange={getImgPath} name='rasm' />
        <label htmlFor="rasm" className='form-control mt-3 w-25 d-flex justify-content-center align-items-center position-relative
          rounded overflow-hidden
        ' style={{ height: "100px" }} >
          <i className="bi bi-plus-square-dotted position-relative z-2 text-light  "></i>
          {inputValue.rasm !== '' ? <img src={inputValue.rasm} className='w-100 position-absolute object-fit-cover h-100' alt={inputValue.ism} /> : ''}
        </label>
        <div className='text-end' >
          <button type='submit' className='btn btn-primary my-3 '  >  {inputValue.id ? 'saqlash' : "jo'natish"}  </button>
        </div>
      </form>
    </div>
  )
}
