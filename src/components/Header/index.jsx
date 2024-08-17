import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import styled from 'styled-components';
import { RiMenu3Fill } from 'react-icons/ri';
import { useState } from 'react';
import MenuMobile from '../MenuMobile';
import { LiaSearchSolid } from 'react-icons/lia';
import { BsCart4 } from 'react-icons/bs';

function Header() {

    const NavBar = styled.header`
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
        }

    }
    li{
        list-style: none;
    }

    nav ul li a{
        color: #fff;
        font-size: 1.2rem;
        font-weight: 700;
        margin-left: 50px;
        transition: all 0.3s ease;

        &:hover{
            color: #E61593
            ;
        }
     }

     .cart a svg{
            cursor: pointer;
            transition: all 0.3s ease;

            &:hover{
                transform: scale(1.1);
                color: #E61593;
            }
     }


    .mobile{
        display: none;
    }


    @media (max-width: 924px){
        nav .search input{
            width: 200px;
        }

        nav ul li a{
            font-size: 1.1rem;
            margin-left: 30px;
        }
    }
     @media (max-width: 768px){

        nav {
            display: none;
        }

        .cart{
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

    const [menuIsVisible, setMenuIsVisible] = useState(false);

    return (
        <>
        <MenuMobile menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} />
        <NavBar>
            <div className='container'>
                <div className='logo'>
                    <Link to="/">                    
                        <img src={Logo} alt="Logo" />
                    </Link>
                </div>

                <div className="search">
                </div>

                <nav>
                    <div className="search">
                        <input type="text" placeholder="O que você procura?" />
                        <button><LiaSearchSolid /></button>
                    </div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                            <Link to="/celulares">Celulares</Link>
                            <Link to="/acessorios">Acessórios</Link>
                        </li>
                    </ul>
                </nav>
                <div className='cart'>
                    <Link to="/cart">
                        <BsCart4 size={35} color="#fff" />
                    </Link>
                </div>
            </div>

            <div>
                <RiMenu3Fill onClick={() => setMenuIsVisible(true)} className="mobile" size={35} color="#fff" />
            </div>
        </NavBar>
        </>
    )
}

export default Header;