import { Header } from "./components/header";
import { Messages } from "./components/messages";

import { api } from "./services/api";

import {AppStyle} from "./AppStyle";
import { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    
    async function PreviewMessages(){
      try{
        const res = await api.get("/publish")
          
          if(res.status === 200){
            setData(res.data)
            console.log(res.data)
          }
      }catch(err){
        console.log("error", err)
      }
    }

    PreviewMessages()
    
    
  }, [])

  return (
    <AppStyle>
      <div className="header">
        <Header />

        {data.map((dt, index) => (<Messages key={index} text={dt.text}/>))}

    
        
      </div>
    </AppStyle>
  )
}

export default App
