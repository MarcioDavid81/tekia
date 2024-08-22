import { useEffect, useContext } from "react";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HeroCelulares from "../../components/HeroCelulares";
import { StyledPhones } from "./styles";
import fetchProducts from "../../api/fetchProducts";
import ProductCard from "../../components/ProductCard";
import SearchContext from "../../context/SearchContext";
import SocialCard from "../../components/SocialCard";
import WaButton from "../../components/WaButton";




function Celulares() {

  const { phones, setPhones} = useContext(SearchContext);


  useEffect(() => {
    fetchProducts("smartphone").then((data) => {
      setPhones(data);
    });
  }, [setPhones]);


  return (
    

   
    <>
        <Header/>
        <HeroCelulares/>
        <Container>
            <StyledPhones>
                {
                    phones.map((phone) => (
                        <ProductCard key={phone.id} data={phone} />
                    ))
                }
            </StyledPhones>
            <SocialCard />
            <WaButton />
        </Container>
        <Footer/>
    </>

  );
}

export default Celulares;