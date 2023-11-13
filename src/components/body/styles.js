import styled, { keyframes } from "styled-components";
// eslint-disable-next-line import/no-extraneous-dependencies
import { animated } from "react-spring";

const floatAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`;

const AnimatedContainer = styled(animated.div)`
`;

const AnimatedImage = styled(animated.img)`
`;

const AnimatedButton = styled(animated.button)`
`;


export const Container = styled(AnimatedContainer)`
  h1 {
    text-align: center;
    margin-top: 7rem;
    font-size: 4rem;
  }

  #grupoMontanha{
    display: flex;
    margin-top: 10rem;
    margin-bottom: -30rem;

    @media screen and (max-width: 1050px) {
      margin-top: 7rem;
      margin-bottom: -27rem;
  }

    #montanha{
    width: 40%;
    height: auto;
    margin-bottom: -3rem;
    z-index: -1;
  }

  #nuvemMontanhaEsquerda{
    width: 30%;
    height: auto;
    margin-left: -5rem;
    margin-bottom: 5rem;
    filter: saturate(100);
    animation: ${floatAnimation} 3s ease-in-out infinite;

    @media screen and (max-width: 1050px) {
      margin-left: -1rem;
  }
  }

  #nuvemMontanhaDireita{
    width: 30%;
    height: auto;
    margin-bottom: 5rem;
    filter: saturate(100);
    animation: ${floatAnimation} 3s ease-in-out infinite;

  }
  }
`;

export const NuvemSuperior = styled(AnimatedImage)`
    width: 40%;
    height: auto;
    margin-left: 2rem;
    margin-bottom: -25rem;
    margin-top: -10rem;
    filter: saturate(100);
    animation: ${floatAnimation} 3s ease-in-out infinite;

  @media screen and (max-width: 1050px) {
    margin-bottom: -12rem;
    margin-top: -5rem;
  }

  @media screen and (max-width: 768px) {
      margin-left: 2rem;
      margin-bottom: -7rem;
  }
`;

export const NuvemInferior = styled(AnimatedImage)`
    width: 40%;
    height: auto;
    margin-left: 24rem;
    margin-top: -10rem;
    filter: saturate(100);
    animation: ${floatAnimation} 3s ease-in-out infinite;

  @media screen and (max-width: 1050px) {
      position: absolute;
      top: 115rem;
      right: 2rem;
  }

  @media screen and (max-width: 768px) {
      position: absolute;
      top: 94rem;
      right: 2rem;
  }
`;

export const Texto = styled(AnimatedContainer)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: auto;
  font-size: 2rem;
  margin-top: 8rem;

  #texto-sobre {
    width: 40%;
    margin: 3rem 3rem 0rem 10rem;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;

    #texto-sobre{
      width: 80%;
      margin: auto;
    }
  }
`;

export const Image = styled(AnimatedImage)`
  width: 30%;
  height: auto;
  margin: auto;
  margin-top: 2rem;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  @media screen and (max-width: 768px) {
    width: 90%;
    margin-top: 6rem;
    margin-bottom: 3rem;
  }
`;

export const LinhaCentro = styled.span`
  display: block;
  width: 55%;
  height: 0.3rem;
  margin: auto;
  margin-top: 7rem;
  background-color: ${({ theme }) => theme.colors.primary};
`

export const TextoPod = styled(AnimatedContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin: 2rem;
  margin-top: 7rem;

  #texto-sobre {
    width: 60%;
    margin: 3rem 10rem 0rem 10rem;
    text-align: center;
  }

  iframe {
    width: 60%;
    margin-top: 5rem;
  }

  @media screen and (max-width: 768px) {
    margin-top: 5rem;
    #texto-sobre{
      width: 85%;
    }

    iframe {
    width: 100%;
    height: 300px;
    margin-top: 5rem;
  }
  }
`;

export const Botao = styled(AnimatedButton)`
  width: 15rem;
  height: 3rem;
  border: none;
  text-decoration: none;
  margin-top: 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  color: white;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const FundoLaranja = styled(AnimatedContainer)`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  margin-top: 25rem;
  color: ${({ theme }) => theme.colors.white};

  h1{
    margin: auto;
    margin-top: 5rem;
    margin-bottom: -8rem;
    text-align: center;
    font-family: 'Bungee', sans-serif;;
    font-size: 7rem;
  }

  @media screen and (max-width: 768px) {
    h1{
      font-size: 4rem;
    }
  }
`
