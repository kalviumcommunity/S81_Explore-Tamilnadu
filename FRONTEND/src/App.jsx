import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages.jsx/Home";
import Login from "./pages.jsx/login";
import Navbar from "./pages.jsx/Navbar";
function app() {
  return (
     <BrowserRouter>
        <Navbar/>
       <Routes>
            <Route  path="/"  element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>

       </Routes>
     </BrowserRouter>
  );
}

export default app;