import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HeroCelulares from "../../components/HeroCelulares";


function Celulares() {
  return (
    <>
        <Header/>
        <HeroCelulares/>
        <Container>
            <h1>Celulares</h1>
        </Container>
        <Footer/>
    </>
  );
}

export default Celulares;