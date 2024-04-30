import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Navbar from './components/Navbar';
import Users from './Pages/Users';
import Create from "./Pages/Create";
function App() {

  return (
    <div className="container-fluid">
      <Navbar />
      <div className="row pt-5"  >
        <div className="col-lg-4">
          <Create />
        </div>
        <div className="col-lg-8" >
          <Users />
        </div>
      </div>
    </div>
  )
}

export default App
