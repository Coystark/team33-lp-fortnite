import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-image: url("images/layer3/background.png");
  padding: 80px 0 40px 0;

  @media(max-width: 1313px) {
    height: auto;
  }

`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 130px;

  @media(max-width: 1313px) {
    padding-left: 0;
    align-items: center;
  }
`;

export const Grid = styled.div`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  width: 1050px;
  justify-content: space-between;
  user-select: none;

  @media(max-width: 1313px) {
    width: auto;
    justify-content: center;
  }
  
`;

export const Item = styled.div`
  display: flex;
  flex: '50%';
  width: 487px;
  padding-top: 20px;

  @media(max-width: 1313px) {
    padding: 25px;
    width: auto;
  }
`;

export const Title = styled.div`
  color: white;
  font-family: 'Burbank';
  font-size: 51px;
  text-transform: uppercase;

  @media(min-width: 1313px) {
    padding-left: 144px;
  }
`;
