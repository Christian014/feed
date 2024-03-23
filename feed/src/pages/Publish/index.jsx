import { Header } from "../../components/header";
import { Container } from "./style";
import { api } from "../../services/api";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Publish(){

    const [text, setText] = useState("")
    const id = 24
    async function createPublish(){
        
        try{
            await api.post("/publish", {text, id})
            .then((response) => {
                if(response.status == 401){
                    return console.log("sem token")
                }
            })
            
        }catch(err){
            
            if(err.response.status == 401){
                console.log("unauthorized");
                alert("Registre-se ou faça o Login");

                setTimeout(() => {
                    window.location.href = "/register"
                }, 5)
                
                return;
            }
            
            console.log(err)
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