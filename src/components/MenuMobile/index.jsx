/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { useEffect } from "react";
import { Container } from "./styles";


function MenuMobile({ menuIsVisible, setMenuIsVisible }) {

    useEffect(() => {
        document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
    }, [menuIsVisible]);

  return (
    <Container isVisible={menuIsVisible}>
        <IoClose onClick={() => setMenuIsVisible(false)} />
      <nav>
      <ul>
        <li>
            <Link to="/">Home</Link>
            <Link to="/celulares">Celulares</Link>
            <Link to="/acessorios">Acessórios</Link>
        </li>
      </ul>
      </nav>
    </Container>   
  );
}

export default MenuMobile;