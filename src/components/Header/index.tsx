import React from 'react';
import Image from 'next/image';
import {
  Container,
  Tournament,
  TournamentItems,
  TournamentLogo,
  TournamentPrizePool,
  TournamentSignUpNow,
  TournamentTotalPrizePool,
} from './styles';

const Header: React.FC = () => (
  <Container>
    <Tournament>
      <TournamentItems>
        <TournamentLogo>
          <Image
            draggable={false}
            src="/images/header/tournament-logo.png"
            width="408"
            height="405"
          />
        </TournamentLogo>
        <TournamentPrizePool>
          <Image
            draggable={false}
            src="/images/header/prize-pool.png"
            width="338"
            height="97"
          />
        </TournamentPrizePool>
        <TournamentTotalPrizePool>
          <Image
            draggable={false}
            src="/images/header/total-prize-pool.png"
            width="559"
            height="97"
          />
        </TournamentTotalPrizePool>
        <TournamentSignUpNow href="/#">
          <Image
            src="/images/header/sign-up-now.png"
            width="595"
            height="106"
          />
        </TournamentSignUpNow>
      </TournamentItems>
    </Tournament>
  </Container>
);

export default Header;
