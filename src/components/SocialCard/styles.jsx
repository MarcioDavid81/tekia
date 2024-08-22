import styled from "styled-components";

export const StyledSocialCard = styled.div`
    position: absolute;
    bottom: 40px;
    left: 20px;
    z-index: 1000;

    .social_card{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 200px;
      height: 50px;
    }


    .social_card .social_link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 33.3%;
      height: 100%;
      font-size: 24px;
      text-decoration: none;
      transition: 0.25s;
    }

    .social_link .social_ico {
      text-shadow: 1px 1px rgba(31, 74, 121, 0.7);
      transition: all 0.3s;
      color: #2A275C;
    }

    .social_link:hover {

      .social_ico{
        color: #2A275C;
        transform: scale(1.5);
      }
    }

    @media (max-width: 1120px) {
        display: none;
    }

`;