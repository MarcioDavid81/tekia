import styled from "styled-components";


export const StyledCadastro = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    gap: 20px;
    padding: 20px;
    margin: 20px;
    border-radius: 10px;
    max-width: 600px;
    margin: 0 auto;

    input{
        width: 100%;
        padding: 10px;
        border: 1px solid black;
        border-radius: 5px;
    }

    select{
        width: 100%;
        padding: 10px;
        border: 1px solid black;
        border-radius: 5px;
    }

    button{
        width: 100%;
 
    }

    a{
        color: #E61593;
        transition: 0.3s;

        &:hover{
            text-decoration: underline;
            transform: scale(1.01);
        }
    }

    @media (max-width: 768px){}
    width: 100%;
`;