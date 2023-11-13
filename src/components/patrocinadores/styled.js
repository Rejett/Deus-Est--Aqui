import styled from "styled-components";
// eslint-disable-next-line import/no-extraneous-dependencies
import { animated } from "react-spring";

const AnimatedContainer = styled(animated.div)`
`;

export const Container = styled(AnimatedContainer)`
  h1 {
      text-align: center;
      margin-top: 7rem;
      font-size: 4rem;

      @media screen and (max-width: 768px) {
        font-size: 3rem;
      }
    }
`

export const Painel = styled(AnimatedContainer)`
  display: flex;
  gap: 5rem;
  justify-content: center;
  margin-top: 5rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  .card{
    width: 20%;
    height: auto;
    text-align: center;
    justify-self: center;
    box-shadow: 3px 3px 3px 5px rgba(0, 0, 0, 0.1);
    
    h1 {
      text-align: center;
      margin-top: 0rem;
      font-size: 2rem;
    }

    button{
      border: none;
      width: 10rem;
      margin-top: 1rem;
      font-size: 1.75rem;
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.primary};
      border-radius: 5px;

      a:hover{
        color: ${({ theme }) => theme.colors.white};
        text-decoration: none;
      }
    }

    @media screen and (max-width: 768px) {
    width: 70%;
    margin: auto;

    h1{
      font-size: 2rem;
    }
  }
  }

  img{
    width: 40% !important;
    height: auto !important;
    margin: auto;
    margin-top: 1rem;
  }
`
