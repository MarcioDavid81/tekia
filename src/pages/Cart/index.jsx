import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Title } from "../../components/Usuals/Title";
import Container from "../../components/Container";
import { StyledCart } from "./styles";
import CartItem from "../../components/CartItem";
import { useContext } from "react";
import SearchContext from "../../context/SearchContext";
import { Button } from "../../components/Usuals/Button";
import formatCurrency from "../../Utils/formatCurrency";



function Cart() {

  const { cartItems } = useContext(SearchContext);

  const subTotalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  const totalPrice = subTotalPrice;

  function endCart() {
    alert("Compra finalizada com sucesso!");
  }

  return (
    <>
        <Header />
            <Container>
              <StyledCart>
                <Title>CARRINHO DE COMPRAS</Title>
                <div className="cart_item">

                  {cartItems.map((cartItem) => (
                    <CartItem key={cartItem.id} data={cartItem} />
                  ))}

                </div>

                <div className="cart_resume">
                  <div className="cart_resume_subtotal">
                    <span>Subtotal</span>
                    <span>{formatCurrency(subTotalPrice, "BRL")}</span>
                  </div>
                  <div className="cart_resume_frete">
                    <span>Frete </span>
                    <span>  R$ 0,00</span>
                  </div>
                  <div className="cart_resume_total">
                    <span>Total</span>
                    <span>{formatCurrency(totalPrice, "BRL")}</span>
                  </div>
                  <Button
                    onClick={endCart}
                  >
                    FINALIZAR COMPRA
                  </Button>
                </div>
              </StyledCart>
            </Container>
        <Footer />
    </>
  );
}

export default Cart;