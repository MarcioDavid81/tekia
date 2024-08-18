import SearchContext from "./SearchContext";
import { useState } from "react";
import propTypes from "prop-types";


function Provider({ children }) {

    const [phones, setPhones] = useState([]);
    const [acessories, setAcessories] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    const value = {
        phones,
        setPhones,
        acessories,
        setAcessories,
        cartItems,
        setCartItems,    
    };

  return (
    <SearchContext.Provider value={ value }>
      {children}
    </SearchContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
    children: propTypes.any,
}.isRequired;