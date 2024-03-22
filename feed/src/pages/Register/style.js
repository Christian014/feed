import styled from "styled-components";

export const Container = styled.div `
width: 100%;
height: 100vh;

@media(max-width: 1000px){
    
    main{
        width: 100%;
        height: 100%;

        display: flex;
        .register{
            display: flex;
            flex-direction: column;

            width: 70%;
            height: 70%;

            border-radius: 18px;
            margin: auto;
            background-color: ${({theme}) => theme.COLORS.BACKGROUND_REGISTER};

            align-items: center;
            justify-content: center;
            gap: 50px;

            h1{
                color: white;
                align-self: center;
                
            }

            .inputs{
                display: flex;
                flex-direction: column;
                gap: 15px;
                width: 80%;
            }

            .button{
                width: 50%;
            }

            a{
                text-decoration: none;
                color: black;
            }

            p{
                font-weight: bold;
            }
        }
    }
}

`;