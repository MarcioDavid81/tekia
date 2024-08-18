import styled from "styled-components";

export const NavBar = styled.header`
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: linear-gradient(90deg, rgba(42,39,92,1) 25%, rgba(137,74,181,1) 90%, rgba(230,21,147,1) 100%);
        padding: 10px 0;

    .container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 4%;
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
    }

    .logo{

        img{
            width: 100px;
        }
    }

    nav{
        display: flex;
        align-items: center;
    }

    li{
        list-style: none;
    }

    nav ul li a{
        color: #fff;
        font-size: 1.2rem;
        font-weight: 400;
        margin-left: 50px;
        transition: all 0.3s ease;

        &:hover{
            color: #E61593
            ;
        }
     }

    .mobile{
        display: none;
    }

    @media (max-width: 1024px){
        nav ul li a{
            font-size: 1rem;
            margin-left: 30px;
        }
    }

    @media (max-width: 924px){
        nav ul li a{
            font-size: 1rem;
            margin-left: 30px;
        }
    }
     @media (max-width: 768px){

        nav {
            display: none;
        }
        .mobile{
            display: block;
            cursor: pointer;
            margin-right: 20px;

            &:hover{
                color: #E61593;
            }
        }
    }

    `;