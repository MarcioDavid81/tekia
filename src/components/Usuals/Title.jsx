/* eslint-disable react/prop-types */
import styled from "styled-components";

export const Title = styled.h1`
    font-size: 2rem;
    font-weight: 600;

    @media (max-width: 768px){
        font-size: 1.5rem;
    }

`;

function TitleComponent({children}) {
  return (
    <h1>
        {children}
    </h1>
  );
}

export default TitleComponent;