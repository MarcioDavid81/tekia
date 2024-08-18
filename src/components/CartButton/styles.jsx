import styled from "styled-components";


export const StyledCartButton = styled.div`
    a{
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;

        svg{
            font-size: 1.5rem;
            color: #fff;
            cursor: pointer;
        }

        .cart_status{
            position: absolute;
            top: -5px;
            right: -5px;
            width: 15px;
            height: 15px;
            background: #E61593;
            color: #fff;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 0.7rem;
            font-weight: 200;
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