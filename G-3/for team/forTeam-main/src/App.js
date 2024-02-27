import { ToastContainer } from "react-toastify";
import Config from "./context/Config";
import PageIn from "./pages/PageIn";
import "./style.css";
import "./style/main.css";
import "./style/responsive.css";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="container">
      <ToastContainer pauseOnHover={false} autoClose={2000} />
      <Config />
      <PageIn />
    </div>
  );
}
export default App;
