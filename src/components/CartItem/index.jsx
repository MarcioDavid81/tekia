/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import propTypes from "prop-types";
import { BsTrash } from "react-icons/bs";
import { Button } from "../Usuals/Button";
import { StyledCartItem } from "./styles";
import formatCurrency from "../../Utils/formatCurrency";
import SearchContext from "../../context/SearchContext";


function CartItem ({ data }) {

    const { cartItems, setCartItems } = useContext(SearchContext);

    const { id, thumbnail, title, price } = data;

    const removeItem = () => {
        const updatedItems = cartItems.filter((item) => item.id !== id);
        setCartItems(updatedItems);
    }

  return (
    <StyledCartItem>
            <img src={thumbnail} alt="img do produto" className="cart_item_img" />
            <div className="cart_item_content">
              <h3 className="cart_item_title">{title}</h3>
              <p className="cart_item_price">{formatCurrency(price, 'BRL')}</p>
              <Button
                onClick={removeItem}
              >
                <BsTrash />
              </Button>
            </div>
    </StyledCartItem>
  )
}

export default CartItem;