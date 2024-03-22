import { Container } from "./style";

export function Button({title, onClick}){
    return(
        <Container onClick={onClick}>
            <p>{title}</p>
        </Container>
    )
}