/* eslint-disable react/prop-types */
import styled from "styled-components";

const Content = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 4%;
`;

function Container({ children }) {
  return <Content>{children}</Content>;
}

export default Container;