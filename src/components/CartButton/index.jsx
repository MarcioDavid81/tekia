import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { StyledCartButton } from "./styles";
import { useContext } from "react";
import SearchContext from "../../context/SearchContext";


function CartButton() {

  const { cartItems } = useContext(SearchContext);

  return (
    <StyledCartButton>
        <Link to="/cart">
            {cartItems.length > 0 && <div className="cart_status">{cartItems.length}</div>}
            <BsCart4 />
            <span>Cart</span>
        </Link>
    </StyledCartButton>
  )
}

export default CartButton;