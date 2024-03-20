import { Container } from "./style";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import tiger from "../../assets/tiger.jpg"

export function Header() {
    return (
        <Container>
            <div className="header">

                <Link to="/publish">
                    <p className="publicar">Publicar</p>
                
                </Link>

                <Link to= "/">
                
                    <div className="logo">
                        <img src={logo} alt="" />
                        <p>Velocity Feed</p>
                    </div>

                </Link>

                <div className="img-perfil">
                    <img src={tiger} alt="" />
                </div>
            </div>
        </Container>
    )
}