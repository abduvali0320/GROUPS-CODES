import './App.css'
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
// import About from './pages/About';
import Users from './pages/Users';

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route element={<Navbar />} >
            <Route path='/' element={<Users />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}
export default App;
