import styled from "styled-components";

export const Container = styled.header`
  overflow: hidden;
  height: 100vh;
  box-shadow: 5px 5px 2px rgba(0, 0, 0, 0.1);

  img{
    margin-left: 50rem;
    width: 10%;
    height: auto;
  }

  @media screen and (max-width: 768px) {
    height: 70vh;
    img{
      margin-left: 10rem;
      margin-top: 2rem;
      width: 30%;
      height: auto;
    }
  }
`
export const VideoBackground = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1; /* Coloca o vídeo atrás dos outros elementos */
  filter: grayscale(30%) sepia(15%);

  @media screen and (max-width: 768px) {
    height: 70vh;
  }
`;

export const Letreiro = styled.div`
  display: flex;
  width: 100%;
  gap: 5rem;
  margin-top: 15rem;
  margin-left: 20rem;
  font-size: 5rem;
  font-family: 'Pinyon Script', cursive;
  color: ${({ theme }) => theme.colors.secondary};
  text-shadow: 2px 1px 1px #646580;

  h1{
    margin: 5px;
    padding: 5px;
  }
  strong{
    font-size: 15rem;
    font-weight: 900;
  }

  @media screen and (max-width: 768px) {
    margin-left: 0rem;
    width: 15%;
    gap: 1rem;
    h1{
      font-size: 2.75rem;
    }
    strong{
      font-size: 5rem;
    }

}
`


