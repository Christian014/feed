import styled from "styled-components";

export const Container = styled.div`
a{
    text-decoration: none;
}
@media(max-width: 1000px){
    .header{
        width: 100%;
        height: 58px;

        background-color: ${({ theme }) => theme.COLORS.HEADER};

        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 10px;

        .publicar{
            color: ${({ theme }) => theme.COLORS.TEXT_HEADER};
        }

        .logo{
            display: flex;
            align-items: center;
                img{
                    width: 32px;
                }
    
                p{
                    color: ${({ theme }) => theme.COLORS.TEXT_HEADER};
                }
        }

        .img-perfil{
            position: absolute;
            visibility: hidden;
            img{
                object-fit: cover;
                width: 40px;
                height: 40px;
                border-radius: 50%;
            }
        }
    }
}

@media(min-width: 1001px){
    .header{
        width: 100%;
        height: 78px;

        background-color: ${({ theme }) => theme.COLORS.HEADER};

        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 10px;

        .publicar{
            font-size: 28px;
            color: ${({ theme }) => theme.COLORS.TEXT_HEADER};
        }

        .logo{
            display: flex;
            align-items: center;
            gap: 5px;
                img{
                    width: 42px;
                }
    
                p{
                    font-size: 30px;
                    color: ${({ theme }) => theme.COLORS.TEXT_HEADER};
                }
        }

        .img-perfil{
            position: static;
            visibility: visible;
            height: 100%;
            align-items: center;
            display: flex;
            img{
                object-fit: cover;
                width: 60px;
                height: 60px;
                border-radius: 50%;
            }
        }
    }
}

`