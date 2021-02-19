import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-size: cover;
  background-image: url("images/layer2/background.png");
  padding: 80px 0 40px 0;
`;

export const Header = styled.div`
  padding: 0 20px 30px 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  margin-top: 40px;
  font-size: 50px;
  color: white;
  text-align: center;

  font-family: 'Montserrat', sans-serif;

  @media(max-width: 681px) {
    font-size: ${0.5 * 50}px;
  }
`;

export const Grid = styled.div`
  user-select: none;
  display: flex;
  justify-content: center;

  @media(max-width: 1049px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Item = styled.div`
  padding: 20px;
  filter: drop-shadow(10px 15px 15px rgba(0, 0, 0, 0.3));
`;
