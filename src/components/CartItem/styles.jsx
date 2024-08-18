import styled from "styled-components";


export const StyledCartItem = styled.section`
        display: flex;
        align-items: flex-start;
        width: 100%;
        border-bottom: 1px solid #2A275C;
        padding-bottom: 1.5rem;
        margin-bottom: 1.5rem;
        gap: 1rem;

    .cart_item_img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 5px;
    }

    .cart_item_content {
        margin-left: 2rem;
    }

    .cart_item_title {
        font-size: 0.85rem;
        font-weight: 500;
        color: #333;
        margin-bottom: 0.5rem;
    }

    .cart_item_price {
        font-size: 1.5rem;
        font-weight: 500;
        color: #333;
        margin-bottom: 0.5rem;
    }

    button{
        margin-top: 1rem;
    }


`;