import styled from "styled-components";

export const Container = styled.div`

    @media(max-width: 1000px){
        .perfil{
        display: flex;
        gap: 20px;
        img{
            object-fit: cover;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 1px solid ${({ theme }) => theme.COLORS.BORDER_MESSAGES};
        }

        .name-and-profission{
            h1{
                font-size: 18px;
                color: ${({ theme }) => theme.COLORS.TEXT_HEADER};
            }
            h2{
                font-size: 14px;
                color: ${({ theme }) => theme.COLORS.TEXT_HEADER}
            }
        }
    }
    }

    @media(min-width: 1001px){
        
        .perfil{
        display: flex;
        gap: 20px;
        img{
            object-fit: cover;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border: 1px solid ${({ theme }) => theme.COLORS.BORDER_MESSAGES};
        }

        .name-and-profission{
            h1{
                font-size: 24px;
                color: ${({ theme }) => theme.COLORS.TEXT_HEADER};
            }
            h2{
                font-size: 18px;
                color: ${({ theme }) => theme.COLORS.TEXT_HEADER}
            }
        }
    }
    }
    

`;