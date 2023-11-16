import styled from "styled-components";

export const WhatsAppButtonContainer = styled.div`
  position: fixed;
  bottom: 60px;
  right: 20px;
  cursor: pointer;
  z-index: 1000; // Certifique-se de que está acima de outros elementos, se necessário
  margin-right: -15rem;
  img{
    width: 30%;
    height: auto;
  }

  @media screen and (max-width: 748px){
    margin-right: -22rem;
  }
`;
