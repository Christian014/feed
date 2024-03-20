import { Container } from "./style";

import tiger from "../../assets/tiger.jpg";

export function Perfil(){
    return(
        <Container>
            <div className="perfil">
                <img src={tiger} alt="" />

                <div className="name-and-profission">
                    <h1>Tiger Tiger</h1>
                    <h2>Back-End</h2>
                </div>
            </div>
        </Container>
    )
}