import { FaCartPlus } from "react-icons/fa";
import { Button } from "../Usuals/Button";
import { StyledCard } from "./styles";
import propTypes from "prop-types";
import formatCurrency from "../../Utils/formatCurrency";
import { useContext } from "react";
import SearchContext from "../../context/SearchContext";


function ProductCard({ data }) {

    const { title, price, thumbnail } = data;

    const { cartItems, setCartItems } = useContext(SearchContext);

    const handleAddCart = () => {
        setCartItems([...cartItems, data]);
    }

  return (
    <StyledCard>
        <img
            src={thumbnail.replace(/\w\.jpg/gi, "W.webp")}
            alt="Imagem do Produto" className="card_img"
        />
        <div className="card_info">
            <h3 className="card_title">{title}</h3>
            <p className="card_price">{formatCurrency(price, 'BRL')}</p>
        </div>
        <Button onClick={handleAddCart}><FaCartPlus /></Button>
    </StyledCard>
  );
}

export default ProductCard;

ProductCard.propTypes = {
    data: propTypes.shape([])
}.isRequired;
