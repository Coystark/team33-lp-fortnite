import React from 'react';
import Image from 'next/image';
import {
  Container, Grid, Item, Title, Content, Explanation,
} from './styles';

/*
  [5:35 PM, 2/18/2021] +55 16 99643-6023: botão - 521 x 115

  Headers qualifiers
  1 - victory royale - 487 x 128
  [5:35 PM, 2/18/2021] +55 16 99643-6023: 2, 3, 4 e 5 - 345 x 65
*/

const Layer3:React.FC = () => (
  <Container>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Image draggable={false} src="/images/layer3/button-header.png" width="722px" height="104px" />
    </div>
    <Content>
      <Title>QUALIFIERS</Title>
      <Grid>
        <Item>
          <Image draggable={false} src="/images/layer3/qualifears/1.png" width="487px" height="128px" />
        </Item>
        <Item>
          <Image draggable={false} src="/images/layer3/qualifears/2.png" width="345px" height="65px" />
        </Item>
        <Item style={{ justifyContent: 'flex-end' }}>
          <Image draggable={false} src="/images/layer3/qualifears/3.png" width="345px" height="65px" />
        </Item>
        <Item>
          <Image draggable={false} src="/images/layer3/qualifears/4.png" width="345px" height="65px" />
        </Item>
        <Item style={{ justifyContent: 'flex-end' }}>
          <Image draggable={false} src="/images/layer3/qualifears/5.png" width="345px" height="65px" />
        </Item>
      </Grid>

      <Explanation>
        <Image draggable={false} src="/images/layer3/button-message.png" width="522px" height="116px" />
      </Explanation>

      <Title style={{ paddingTop: '70px' }}>TOURNAMENT</Title>
      <Grid>
        <Item>
          <Image draggable={false} src="/images/layer3/tournament/1.png" width="487px" height="128px" />
        </Item>
        <Item>
          <Image draggable={false} src="/images/layer3/tournament/2.png" width="345px" height="65px" />
        </Item>
        <Item style={{ justifyContent: 'flex-end' }}>
          <Image draggable={false} src="/images/layer3/tournament/3.png" width="345px" height="65px" />
        </Item>
      </Grid>

    </Content>

  </Container>
);

export default Layer3;
