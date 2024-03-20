import styled from "styled-components";

export const Container = styled.div `

    @media(max-width: 1000px){
        background-color: ${({theme}) => theme.COLORS.HEADER};

        margin: 0 auto;
        margin-top: 32px;
        padding: 15px;
        box-sizing: border-box;

        width: 60%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;

        border: 1px solid ${({theme}) => theme.COLORS.BORDER_MESSAGES};
        border-radius: 5px;

        p{
            color: white;
        }
    }

    @media(min-width: 1001px){
        background-color: ${({theme}) => theme.COLORS.HEADER};

        margin: 0 auto;
        margin-top: 32px;
        padding: 15px;
        box-sizing: border-box;

        width: 60%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;

        border: 1px solid ${({theme}) => theme.COLORS.BORDER_MESSAGES};
        border-radius: 5px;

        p{
            color: white;
        }
    }

`;