import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { StyledCartButton } from "./styles";


function CartButton() {
  return (
    <StyledCartButton>
        <Link to="/cart">
            <span className="cart_status">0</span>
            <BsCart4 />
            <span>Cart</span>
        </Link>
    </StyledCartButton>
  )
}

export default CartButton;