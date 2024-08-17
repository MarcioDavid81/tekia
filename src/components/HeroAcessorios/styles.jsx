import styled from "styled-components";

export const HeroContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #f2f2f2;
    position: relative;
    padding: 5% 0;

    .images{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 50px;

        .fone{
            max-width: 250px;
            transition: 0.3s;

            &:hover{
                filter: drop-shadow(1px 1px 1px #E61593);
                animation: pulse 1s forwards;
            }
        }

        .jbl{
            max-width: 500px;
            transition: 0.3s;

            &:hover{
                filter: drop-shadow(1px 1px 1px #E61593);
                animation: pulse 1s forwards;
            }
        }

        .watch{
            max-width: 250px;
            transition: 0.3s;

            &:hover{
                filter: drop-shadow(1px 1px 1px #E61593);
                animation: pulse 1s forwards;
            }
        }

        @keyframes pulse {
                0% {
                    transform: scale(1);
                }
                50% {
                    transform: scale(1.1);
                }
                100% {
                    transform: scale(1);
                }
            }
    }

    @media (max-width: 1120px){
        .images{
            flex-direction: column-reverse;
        }

        .text{
            padding: 15% 0;
        }

    }

    @media (max-width: 768px){
        .images{
            .fone{
                max-width: 200px;
            }
    
            .jbl{
                max-width: 250px;
            }
    
            .watch{
                max-width: 200px;
            }
        }
    }
`;



