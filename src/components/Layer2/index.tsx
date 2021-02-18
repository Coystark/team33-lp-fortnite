import React from 'react';
import Image from 'next/image';
import {
  Container, Grid, Header, Title,
} from './styles';

/*
  botao azul - 516 x 89
frase - 1022 x 39

stage 1 - 874 x 436
stage 2,3,4,5 - 694 x 436
*/

const Layer2: React.FC = () => (
  <Container>
    <Header>
      <Image src="/images/layer2/header.png" width="516px" height="89px" />
      <Title>
        Solo Tournament. March 20th - March 21st
      </Title>
    </Header>

    <Grid>
      <div>
        <Image src="/images/layer2/stage-1.png" width="874px" height="436px" />
      </div>
      <div>
        <Image src="/images/layer2/stage-2.png" width="694px" height="436px" />
      </div>
    </Grid>

    <Grid>
      <div>
        <Image src="/images/layer2/stage-3.png" width="694px" height="436px" />
      </div>
      <div>
        <Image src="/images/layer2/stage-4.png" width="694px" height="436px" />
      </div>
      <div>
        <Image src="/images/layer2/stage-5.png" width="694px" height="436px" />
      </div>
    </Grid>

  </Container>
);

export default Layer2;
