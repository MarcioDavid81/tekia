import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { RiMenu3Fill } from 'react-icons/ri';
import { useState } from 'react';
import MenuMobile from '../MenuMobile';
import { NavBar } from './styles';
import UserButton from '../UserButton';
import CartButton from '../CartButton';
import SearchBar from '../SearchBar';
import { motion } from 'framer-motion';


function Header() {    

    const [menuIsVisible, setMenuIsVisible] = useState(false);

    return (
        <>
        <MenuMobile menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} />
        <NavBar>
            <motion.div
                className='container'
                initial={{ y: -250, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className='logo'>
                    <Link to="/">                    
                        <img src={Logo} alt="Logo" />
                    </Link>
                </div>

                <SearchBar />

                <nav>
                    
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                            <Link to="/celulares">Celulares</Link>
                            <Link to="/acessorios">Acessórios</Link>
                        </li>
                    </ul>
                </nav>
                
                <CartButton />

                <UserButton />                
               
            </motion.div>

            <div>
                <RiMenu3Fill onClick={() => setMenuIsVisible(true)} className="mobile" size={35} color="#fff" />
            </div>
        </NavBar>
        </>
    )
}

export default Header;