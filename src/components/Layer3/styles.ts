import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
  background-size: cover;
  background-position: right;
  background-image: url("images/layer3/background.png");

  @media(max-width: 1313px) {
    background-position: left;
  }

`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 80px 10px 150px 130px;

  @media(max-width: 1313px) {
    padding-left: 10px;
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
  text-align: center;

  @media(min-width: 1313px) {
    padding-left: 144px;
    text-align: left;
  }
`;

export const Explanation = styled.div`
  display: flex;
  padding-top: 20px;

  @media(min-width: 1313px) {
    padding-top: 60px;
    padding-left: 60px;
  }
`;
