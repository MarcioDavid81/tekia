import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HeroAcessorios from "../../components/HeroAcessorios";
import { Title } from "../../components/Usuals/Title";

function Acessorios() {
  return (
    <>
        <Header/>
        <HeroAcessorios/>
        <Container>
            <Title>Acessorios</Title>
        </Container>
        <Footer/>
    </>
  );
}

export default Acessorios;