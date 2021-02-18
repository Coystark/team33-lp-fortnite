import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-image: url("images/header/header-bg-character.jpg");

  @media(max-width: 1049px) {
    background-image: url("images/header/header-bg-without-character.jpg");
  }
`;

export const Tournament = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  padding: 0 20px 20px 20px;
  user-select: none;

  @media only screen and (min-width: 1049px) {
    margin-right: 200px;
    padding-top: 120px;
  }

  @media only screen and (max-width: 1049px) {
    align-items: center;
  }
`;

export const TournamentItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TournamentLogo = styled.div`
  margin-bottom: 20px;
`;

export const TournamentPrizePool = styled.div`
  margin-bottom: 20px;

  @media(max-width: 1049px) {
    width: 50%;
    height: auto;
  }

`;

export const TournamentTotalPrizePool = styled.div`
  margin-bottom: 20px;

`;

export const TournamentSignUpNow = styled.a`
  margin-bottom: 20px;

  &:hover {
    filter: 
      drop-shadow(1px 1px 0 white) 
      drop-shadow(-1px -1px 0 white);
  }

`;
