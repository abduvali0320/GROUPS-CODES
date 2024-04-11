import "./App.css";
import { Box } from "./components/Box";
import Navbar from "./components/Navbar";
import Pages from "./pages/Pages";
function App() {
    let text =
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis asperiores doloremque sequi a illum voluptates itaque dolores numquam, ad, ratione aliquam sunt qui totam. Recusandae placeat minus harum dicta blanditiis!";

    return (
        <>
            {/* <h1>ss</h1> */}
            {/* <Box propNomi={text} /> */}

            {/* <Navbar /> */}
            <Pages />

            <h1 className="text-green">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus, quasi provident tempora quidem tempore, quod
                inventore quis exercitationem illo sit itaque quam fugiat
                aperiam perferendis error dignissimos doloribus aliquam hic!
            </h1>
        </>
    );
}

export default App;
