import styled from "styled-components";


export const StyledCart = styled.div`
    height: auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 7% 0;

    .cart_item{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }

    .cart_resume{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding: 1rem;
        gap: 1rem;
        margin-top: 2rem;
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
        border-radius: 5px;
    }

    .cart_resume_subtotal, .cart_resume_frete, .cart_resume_total{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

  

`;