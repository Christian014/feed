import { Container } from "./style";
import { Input } from "../../components/input";
import { Button } from "../../components/button";

import { api } from "../../services/api";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Register(){

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function register(req, res){
        
        try{
            console.log(name, email, password)
            
            api.post("/register", {name, email, password})
            if(res === 200){
                alert("cadastrou")
            }
        }catch(err){
            console.log(err)
        }
    }
    return(
        <Container>
            <main>
                <div className="register">
                    <h1>Registre-se</h1>

                    <div className="inputs">
                        <Input placeholder="nome" onChange={(e) => setName(e.target.value)}/>
                        <Input placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
                        <Input placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)}/>
                    </div>

                    <div className="button">
                        <Button title="Cadastrar" onClick={register}/>
                    </div>

                   <Link to="/login">
                        <p>Login</p>
                   </Link>
                </div>
            </main>
        </Container>
    )
}