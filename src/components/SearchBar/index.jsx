import { LiaSearchSolid } from "react-icons/lia";
import { StyledSearchBar } from "./styles";
import { useState } from "react";
import fetchProducts from "../../api/fetchProducts";


function SearchBar() {

    const [search, setSearch] = useState('');

    const searchItem = async (event) => {
        event.preventDefault();
        const products = await fetchProducts(search);

        console.log(products);

        setSearch('');
    }

  return (
    <StyledSearchBar onSubmit={searchItem}>
        <input
            type="search"
            value={search}
            placeholder="O que você procura?"
            onChange={(e) => setSearch(e.target.value)}
            required
        />
        <button
            type="submit"
            title='Buscar Item'
        >
            <LiaSearchSolid />
        </button>
    </StyledSearchBar>
  );
}

export default SearchBar;