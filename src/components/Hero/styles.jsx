import styled from "styled-components";
import bg from "../../assets/bg.jpg";


export const HeroContainer = styled.section`
    background-image: url(${bg});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    min-height: 100dvh;
    position: relative;

    .images .caixa{
        position: absolute;
        top: 10%;
        left: 50px;
        max-width: 550px;
        margin-bottom: 50px;
        transition: 0.3s;

        &:hover{
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

    .images .fone2{
        position: absolute;
        top: 10%;
        right: 50px;
        max-width: 350px;
        margin-bottom: 50px;
        transition: 0.3s;

        &:hover{
            animation: pulse 1s forwards;
        }
    }

    .images .fone3{
        position: absolute;
        top: 50%;
        left: 30%;
        max-width: 650px;
        margin-bottom: 50px;
        transition: 0.3s;
    }

    .text{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;

        .primary_title{
            font-family: 'Orbitron', sans-serif;
            font-size: 4.5rem;
            margin-bottom: 20px;
            color: transparent;
            -webkit-text-stroke: 1px white;
        }

        p{
            font-size: 1.5em;
            font-weight: 300;
            line-height: 1;
        }

        span.title{
            font-family: 'Orbitron', sans-serif;
            color: #2A275C;
        }

        span.marca{
            color: transparent;
            font-size: 2.5rem;
            font-weight: 800;
        }

        span.marca::before{
            content: 'hoje.';
            position: absolute;
            border-right: 3px solid #E61593;
            color: #E61593;
            overflow: hidden;
            animation: filling 2s linear infinite;
        }

        @keyframes filling {
            0%{
                width: 0;
            }
            50%{
                width: 14%;
            }
            100%{
                width: 0%;
            }
        }
    }

`;