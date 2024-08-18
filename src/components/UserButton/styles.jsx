import styled from "styled-components";

export const StyledUserButton = styled.div`
    a{
        display: flex;
        flex-direction: column;
        align-items: center;

        svg{
             flex-direction: column;
             font-size: 1.2rem;
             color: #fff;
             cursor: pointer;
         }

        span{
            font-size: 0.5rem;
            color: #fff;
            font-weight: 200;
            transition: all 0.3s ease;  
        }
    }

    @media (max-width: 768px){
        a {
            display: none;
        }
    }

`;