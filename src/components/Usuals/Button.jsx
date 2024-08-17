/* eslint-disable react/prop-types */
import styled from "styled-components";

export const Button = styled.button`
    background-color: #E61593;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    font-size: 1rem;
    margin: 4% 0;
    transition: all 0.5s;

    background-image: linear-gradient(60deg, #ffffff00 0%, #ffffff00 40%, #ffffff44 40%, #ffffff44 60%, #ffffff00 60%, #ffffff00 100%);
    background-size: 200% 100%;
    background-position-x: 150%;
    

    &:hover {
        animation: btn_anime 1s forwards;
        scale: 1.05;
        background-color: #2A275C;

    }

    @keyframes btn_anime {
        0% {
            background-position-x: 150%;
        }
        100% {
            background-position-x: -50%;
        }
    }

`;

function ButtonComponent({ children})
{
    return (
        <button>
            {children}
        </button>
    );
}

export default ButtonComponent;