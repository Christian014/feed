import { Container } from "./style.js";
import { Perfil } from "../perfil/index.jsx";
export function Messages({text}){
    return(
        <Container>
            <Perfil />
            <p>{text}</p>
        </Container>
    )
}