import styled from "styled-components";

export const BottomBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 70px;
  background-color: #333;
  color: #fff;
  width: 40%;
  opacity: 80%;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  z-index: 99999;

  h1{
    padding: 10px;
    line-height: 1rem;
    font-size: 1.25rem;
  }

  button{
    padding: 10px;
    background: none;
    border: none;
    -webkit-touch-callout: none;
    user-select: none;
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  @media screen and (max-width: 900px){
    width: 100%;
    margin-left: 0rem;
    h1{
      font-size: 1rem;
      line-height: 2rem;
    }
  }

  @media screen and (max-width: 728px){
    width: 100%;
    margin-left: 0rem;
    top: none;
    bottom: 0;
    h1{
      font-size: 1rem;
      line-height: 2rem;
    }
  }
`;

export const Loading = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 70px;
  background-color: #333;
  color: #fff;
  opacity: 80%;
  width: 40%;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  z-index: 99999;

  @media screen and (max-width: 728px){
    opacity: 80%;
    width: 100%;
    margin-left: 0rem;
    top: none;
    bottom: 0;
  }
`;
