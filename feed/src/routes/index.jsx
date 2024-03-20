import { BrowserRouter } from "react-router-dom";
import { UserRoutes } from "./user"


export function AppRoutes(){
    
    return(

        
            <BrowserRouter>
                <UserRoutes />
            </BrowserRouter>
        
    )

}