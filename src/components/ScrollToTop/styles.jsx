import styled from "styled-components";

export const StyledWrapper = styled.div`
  position: fixed;
  bottom: 40px;
  right: 20px;
  z-index: 1000;


  .Btn {
  width: 45px;
  height: 45px;
  background: linear-gradient(90deg, rgba(42,39,92,1) 25%, rgba(137,74,181,1) 50%, rgba(230,21,147,1) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  border: none;
  transition: all 0.3s;
}

.Btn:hover{
  transform: scale(1.1);
}

.arrow path {
  fill: white;
}

.Btn:hover .arrow {
  animation: slide-in-bottom .7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

@keyframes slide-in-bottom {
  0% {
    transform: translateY(10px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@media (max-width: 768px) {
  display: none;
}

`;