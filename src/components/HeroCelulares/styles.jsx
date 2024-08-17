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
        padding-top: 11%;
        gap: 50px;

        .sansung{
            max-width: 250px;
            margin-bottom: 50px;
            transition: 0.3s;

            &:hover{
                filter: drop-shadow(1px 1px 1px #E61593);
                animation: pulse 1s forwards;
            }
        }
        .phone{
            max-width: 500px;
            margin-bottom: 50px;
            transition: 0.3s;

            &:hover{
                filter: drop-shadow(1px 1px 1px #E61593);
                animation: pulse 1s forwards;
            }
        }
        .xiaomi{
            max-width: 250px;
            margin-bottom: 50px;
            transition: 0.3s;

            &:hover{
                filter: drop-shadow(1px 1px 1px #E61593);
                animation: pulse 1s forwards;
            }
        }

    .text{
        padding-top: 20px;
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
      
        }

    }

    @media (max-width: 768px){
        .images{
            .phone{
                max-width: 300px;
            }
        }
    }
`;