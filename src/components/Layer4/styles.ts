import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("images/layer4/background.png");
  background-size: cover;
  background-position: top center;
  display: flex;
  flex-direction: column;
  justify-content: center;

`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 310px;
  text-align: center;
  padding: 20px;
`;

export const Text = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 40px;
  color: white;

  @media(max-width: 509px) {
    font-size: ${0.7 * 40}px;
  }
`;

export const HR = styled.div`
  height: 5px;
  width: 100px;
  background-color: #db47f3;
  margin: 40px 0 40px 0;
`;
