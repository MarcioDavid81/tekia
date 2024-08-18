import SearchContext from "./SearchContext";
import { useState } from "react";
import propTypes from "prop-types";


function Provider({ children }) {

    const [name, setName] = useState(['Tekia Tecnologia']);

    const value = {
        name,
        setName,        
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