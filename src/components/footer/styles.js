import styled from "styled-components";

export const Container = styled.div`
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
        margin-bottom: 6rem;
      }
  }
`

export const Painel = styled.footer`
  margin-top: 10rem;
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
    display: grid;
    align-self: center center;
    align-items: center center;
    p{
      width: 100%;
      margin-left: 5rem;
      text-align: center;
    }
    #map{
    margin-top: 15px;
    width: 100%;
    margin: 0px;
  }

    h1{
    width: 100%;
    margin-left: -3rem;
    font-size: 2rem;
  }
  }
`
