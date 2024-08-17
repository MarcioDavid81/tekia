import styled, { css } from "styled-components";

export const Container = styled.section`
  position: absolute;
  backdrop-filter: blur(3px);
  width: 70%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: start;

  background: rgba(17, 18, 17, 0.95);
  background: linear-gradient(90deg, rgba(42,39,92,0.9) 25%, rgba(137,74,181,0.9) 90%, rgba(230,21,147,0.9) 100%);

  opacity: 0;
  pointer-events: none;
  transform: translateY(-100px);
  transition: .5s;

  > svg {
    position: absolute;
    color: #fff;
    top: 0.75rem;
    right: 1.5rem;
    transform: rotate(90deg);
    transition: .7s;
    cursor: pointer;
  }

  nav ul li {
    list-style: none;
    flex-direction: column;
    transition: .5s;

    a{
      display: flex;
      align-items: start;
      margin-bottom: 1.5rem;
      gap: 1rem;
      font-size: 2.5rem;
      color: #fff;
      font-weight: 500;
      text-decoration: none;
      transform: scale(0.7);

      &:hover{
        color: #E61593;
      }
    }
  }

  ${({ isVisible }) => isVisible && css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0px);

    > svg {
      transform: rotate(0deg);

      &:hover{
        transform: rotate(90deg);
        color: #e61593;
    }

    nav ul li a{
      transform: scale(0.75);
    }
  `}
`;