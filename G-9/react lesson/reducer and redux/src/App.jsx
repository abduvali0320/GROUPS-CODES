import './App.css'
import Navbar from './components/Navbar';
import { Route, Routes, useNavigate } from 'react-router-dom';
// import Home from './pages/Home'; // reducer ishlatilgan fayl
// import About from './pages/About'; // reducer ishlatilgan fayl
import UserCrud from './pages/UserCrud'; // redux ishlatilgan fayl
import Config from './Config';
import { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState(0)



  // useEffect(() => {
  //   console.log(document.querySelector("h1"));
  // },[])

  let path = useNavigate()



  const handleNavigate = () => {
    // console.log(document.querySelector("h1"));
    path('/register')
  }
  return (
    <>
      <Config />
      <div>
        <Routes>
          <Route element={<Navbar />} >
            <Route path='/' element={<UserCrud />} />
          </Route>
        </Routes>
      </div>
      <button onClick={handleNavigate} >click</button>
      {/* <h1 className='text-j1' >salom</h1> */}
    </>
  )
}
export default App;
