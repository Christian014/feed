import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "../App";
import { Publish } from "../pages/Publish";

export function UserRoutes(){
    return(

        <Routes>
            <Route path="/" element={<App />}/>
            <Route path="/publish" element={<Publish />} />
            <Route path="*" element={<App/>}/>
        </Routes>
        
    )
}