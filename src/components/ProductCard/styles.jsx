import styled from "styled-components";


export const StyledCard = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    margin: 10px;
    width: 250px;
    height: 350px;
    transition: 0.3s;
    cursor: pointer;
    position: relative;

    &:hover {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        transform: scale(1.02);
    }

    &:hover button{
        display: block;
    }

    button{
        position: absolute;
        top: 0;
        right: 0;
        transform: translateX(-50%);
        color: #fff;
        border: none;
        border-radius: 5px;
        padding: 5px 10px;
        font-size: 1rem;
        cursor: pointer;
        display: none;
    }

   .card_img{
        width: 100%;
    }

    .card_info{
        border-top: 1px solid #f0f0f0;
        margin-top: 10px;
    }

    .card_title{
        font-size: 0.75rem;
        font-weight: 500;
        display: block;
        margin: 5px 0;
        line-height: 1.5;
    }

    .card_price{
        font-size: 1.4rem;
        font-weight: 400;
        color: #2A275C;
   }

   @media (max-width: 1024px) {
        button{
            display: block;
        }
   }

    @media (max-width: 768px) {
        .card_img{
            width: 80%;
        }

        &:hover{
            transform: none;
            box-shadow: none;
        }

        width: 100%;
    }

    @media (max-width: 540px) {
        width: 80%;
    }
`;