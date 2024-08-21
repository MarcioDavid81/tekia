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
import { motion } from "framer-motion";



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
                <motion.div
                  className="cart_item"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >

                  {cartItems.map((cartItem) => (
                    <CartItem key={cartItem.id} data={cartItem} />
                  ))}

                </motion.div>

                <motion.div
                  className="cart_resume"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
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
                </motion.div>
              </StyledCart>
            </Container>
        <Footer />
    </>
  );
}

export default Cart;