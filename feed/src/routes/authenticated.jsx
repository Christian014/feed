import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import { Register } from "../pages/Register";
import { Login } from "../pages/Login";

export function Authenticated(){
    return(

        <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Login/>}/>
        </Routes>
        
    )
}