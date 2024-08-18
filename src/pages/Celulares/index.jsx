import { useEffect, useContext } from "react";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HeroCelulares from "../../components/HeroCelulares";
import { StyledPhones } from "./styles";
import fetchProducts from "../../api/fetchProducts";
import ProductCard from "../../components/ProductCard";
import SearchContext from "../../context/SearchContext";




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
        </Container>
        <Footer/>
    </>

  );
}

export default Celulares;