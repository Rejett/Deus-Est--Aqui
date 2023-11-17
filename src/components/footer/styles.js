import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  padding-bottom: 10px;
  p{
    text-align: center;
    margin-top: 5rem;
    color: white;
  }
  @media screen and (max-width: 728px){
    #creditos{
        text-align: center;
      }
  }
`

export const Painel = styled.footer`
  margin-top: 10rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center ;
  color: white;
  #map{
    margin-top: 15px;
    width: 30%;
    height: auto;
    margin-left: 10rem;

    border: 2px solid ${({ theme }) => theme.colors.white};

    border-radius: 10px;
  }
  h1{
    margin-right: 30rem;
    text-align: center;
  }

  #texto{
    width: 250px;
    margin-left: -1rem;
    text-align: center;
    font-size: 1.25rem ;
    margin-top: 3rem;
  }

  @media screen and (max-width: 728px){
      display: flex;
      flex-direction: column;
      justify-content: center;
    #map{
      display: block;
      justify-self: center;
      margin-top: 15px;
      width: 80%;
      height: auto;
      margin: 0px;
  }

    h1{
      font-size: 2rem;
      text-align: center;
      margin: auto;
      margin-top: 2rem;
  }
  }
`
