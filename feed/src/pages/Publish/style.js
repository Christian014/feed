import styled from "styled-components";

export const Container = styled.div `

    width: 100%;
    height: 100%;

    @media(max-width: 1000px){
        
        .publish{
            width: 70%;
            height: 70vh;
            margin: 0 auto;
            margin-top: 32px;

            display: flex;
            flex-direction: column;
            align-items: center;    

            gap: 32px;

            h1{
                font-size: 32px;
                text-align: center;
                color: ${({theme}) => theme.COLORS.TEXT_HEADER};
            }

            textarea{
                width: 100%;
                height: 70%;
                background-color: ${({theme}) => theme.COLORS.HEADER};
                outline: 0;
                border-radius: 8px;
                border: 0;

                color: ${({theme}) => theme.COLORS.TEXT_HEADER};
                padding: 15px;
                box-sizing: border-box;
            }

            button{
                width: 100%;
                height: 48px;

                border-radius: 8px;
                border: 0;

                color: ${({theme}) => theme.COLORS.TEXT_HEADER};
                background-color: ${({theme}) => theme.COLORS.BORDER_MESSAGES};
                cursor: pointer;
            }
        }
    }

    @media(min-width: 1001px){
        
        
        .publish{
            width: 70%;
            height: 70vh;
            margin: 0 auto;
            margin-top: 32px;

            display: flex;
            flex-direction: column;
            align-items: center;    

            gap: 32px;

            h1{
                font-size: 32px;
                text-align: center;
                color: ${({theme}) => theme.COLORS.TEXT_HEADER};
            }

            textarea{
                width: 80%;
                height: 70%;
                background-color: ${({theme}) => theme.COLORS.HEADER};
                outline: 0;
                border-radius: 8px;
                border: 0;

                color: ${({theme}) => theme.COLORS.TEXT_HEADER};
                padding: 15px;
                box-sizing: border-box;
            }

            button{
                width: 50%;
                height: 48px;

                border-radius: 8px;
                border: 0;

                color: ${({theme}) => theme.COLORS.TEXT_HEADER};
                background-color: ${({theme}) => theme.COLORS.BORDER_MESSAGES};
                cursor: pointer;
            }
        }
    
    }

`;