import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 524px;
  background-image: url("images/layer5/background.jpg");
  background-size: cover;
  background-position: top center;

`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
`;

export const Text = styled.div`
  display: flex;
  height: ${524 - 85}px;
  justify-content: center;
  align-items: center;
  padding: 20px;

  color: white;
  font-family: 'Burbank';
  font-size: 80px;
  text-transform: uppercase;
  text-align: center;

  @media(max-width: 736px) {
    font-size: 60px;
  }
`;
