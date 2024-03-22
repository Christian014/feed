import { Container } from "./style";
import { Input } from "../../components/input";
import { Button } from "../../components/button";

import {api} from "../../services/api"

import { useState } from "react";
import { Link } from"react-router-dom";

export function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function login(req, res){

        try{
            console.log(email, password)
            const res = await api.post("/login", {email, password})

            console.log(res.status)

            if(res.data.statuscode === 200){
                return alert("login");
            }else{
                return alert("Email e/ou Senha Inválido");
            }

        }catch(err){
            console.log("err", err)
        }
        
    }
    return(
        <Container>
            <main>
                <div className="login">
                    <h1>Entrar</h1>

                    <div className="inputs">
                        <Input placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
                        <Input placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)}/>
                    </div>

                    <div className="button">
                        <Button title="Entrar" onClick={login}/>
                    </div>
                    
                    <Link to="/register">                    
                        <p>Cadastre-se</p>
                    </Link>
                </div>
            </main>
        </Container>
    )
}