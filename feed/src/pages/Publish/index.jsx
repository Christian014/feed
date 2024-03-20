import { Header } from "../../components/header";
import { Container } from "./style";
import { api } from "../../services/api";
import { useState } from "react";

export function Publish(){

    const [text, setText] = useState("")
    const id = 24
    function createPublish(){
        try{
            api.post("/publish", {text, id})
            .then((res) => {
                    res.status(200);
                })
        }catch(err){
            console.log("error", err)
        }
    }

    return(
        <Container>
            <Header />
           <div className="publish">
            <h1>No que está pensando ?</h1>

            <textarea type="text" onChange={(e) => setText(e.target.value)}/>

            <button onClick={createPublish}>Publicar</button>
           </div>
        </Container>
    )
}