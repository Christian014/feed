import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "../App";
import { Publish } from "../pages/Publish";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";

export function UserRoutes(){
    return(

        <Routes>
            <Route path="/" element={<App />}/>
            <Route path="/publish" element={<Publish />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<App/>}/>
        </Routes>
        
    )
}