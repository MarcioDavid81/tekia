import { useContext, useEffect } from "react";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HeroAcessorios from "../../components/HeroAcessorios";
import { StyledAcessories } from "./styles";
import fetchProducts from "../../api/fetchProducts";
import ProductCard from "../../components/ProductCard";
import SearchContext from "../../context/SearchContext";
import SocialCard from "../../components/SocialCard";
import WaButton from "../../components/WaButton";

function Acessorios() {

  const { acessories, setAcessories } = useContext(SearchContext);

  useEffect(() => {
    fetchProducts("headphone" + "caixa de som jbl").then((data) => {
      setAcessories(data);
    });
  }, [setAcessories]);

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
            <SocialCard />
            <WaButton />
        </Container>
        <Footer/>
    </>
  );
}

export default Acessorios;