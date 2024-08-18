import { useEffect, useState } from "react";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HeroAcessorios from "../../components/HeroAcessorios";
import { StyledAcessories } from "./styles";
import fetchProducts from "../../api/fetchProducts";
import ProductCard from "../../components/ProductCard";

function Acessorios() {

  const [acessories, setAcessories] = useState([]);

  useEffect(() => {
    fetchProducts("headphone" + "caixa de som jbl").then((data) => {
      setAcessories(data);
    });
  }, []);

  return (
    <>
        <Header/>
        <HeroAcessorios/>
        <Container>
            <StyledAcessories>
                {
                    acessories.map((acessories) => (
                        <ProductCard key={acessories.id} data={acessories} />
                    ))
                }
            </StyledAcessories>
        </Container>
        <Footer/>
    </>
  );
}

export default Acessorios;