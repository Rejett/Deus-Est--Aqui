import styled from "styled-components";


export const Container = styled.div`
  #titulo {
      text-align: center;
      margin-top: 8rem;
      font-size: 3rem;
    }
`;
export const Painel = styled.div`
  display: flex;
  width: 70rem;
  margin: auto;
  #instagram{
    width: 10%;
    height: auto;
  }
  #facebook{
    width: 15%;
    height: auto;
  }
  #youtube{
    width: 20%;
    height: auto;
  }
  .redesSociais{
    font-size: 1.75rem;
  }
  #divFacebook{
    margin-left: -10rem;
  }

  a:hover{
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
  }

  div{
    margin-top: 4rem;
  }

  @media screen and (max-width: 748px){
    display: grid;
    width: 100%;
    margin: auto;
    text-align: center;
    gap: 3rem;

    #divFacebook{
    margin-left: 0rem;
  }
  div{
    margin-top: 2rem;
  }
  }
`
