import './App.css'
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
// import Home from './pages/Home'; // reducer ishlatilgan fayl
// import About from './pages/About'; // reducer ishlatilgan fayl
import UserCrud from './pages/UserCrud'; // redux ishlatilgan fayl
import Config from './Config';

function App() {
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
    </>
  )
}
export default App;
