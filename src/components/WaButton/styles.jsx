import styled from "styled-components";

export const StyledWaButton = styled.div`
    position: fixed;
    bottom: 40px;
    left: 20px;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-color: #25D366;
    transition: all 0.3s;

    &:hover{
        transform: scale(1.1);
    }

    a .w_ico{
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 1.8rem;
    }




    @media (max-width: 1120px) {
        opacity: 1;
    }

`;