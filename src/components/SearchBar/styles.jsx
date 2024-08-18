import styled from "styled-components";


export const StyledSearchBar = styled.form`
        display: flex;
        align-items: center;

    input{
            width: 300px;
            height: 30px;
            border-radius: 5px;
            border: none;
            padding: 5px;
            margin-right: 10px;
            border: none;
            transition: all 0.3s ease;

            &:focus{
                outline: none;
            }
        }
        button{
            background: none;
            border: none;
            cursor: pointer;

            svg{
                font-size: 1.5rem;
                color: #fff;
                transition: all 0.3s ease;

                &:hover{
                    transform: scale(1.1);
                    color: #E61593;
                }
            }
        }

        .search{
            display: flex;
            align-items: center;

            input{
                max-width: 250px;
                

                &:focus{
                    box-shadow: 0 1px 5px rgba(230,21,147,0.9);
                }
            }
        }

    @media (max-width: 924px){
        input{
            width: 200px;
        }

    }

    @media (max-width: 768px){
        input{
            display: none;
        }
        button{
            display: none;
        }
    }

`;