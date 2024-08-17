/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { IoClose, IoHome } from "react-icons/io5";
import { useEffect } from "react";
import { Container } from "./styles";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { FaHeadphones } from "react-icons/fa";


function MenuMobile({ menuIsVisible, setMenuIsVisible }) {

    // impede o scroll da página quando o menu mobile está aberto
    useEffect(() => {
        document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
    }, [menuIsVisible]);

  return (
    <Container isVisible={menuIsVisible}>
        <IoClose size={45} onClick={() => setMenuIsVisible(false)} />
      <nav>
      <ul>
        <li>
            <Link to="/"><IoHome /> Home</Link>
        </li>
        <li>
            <Link to="/celulares"><MdOutlinePhoneIphone /> Celulares</Link>
        </li>
        <li>
            <Link to="/acessorios"><FaHeadphones /> Acessórios</Link>
        </li>
      </ul>
      </nav>
    </Container>   
  );
}

export default MenuMobile;