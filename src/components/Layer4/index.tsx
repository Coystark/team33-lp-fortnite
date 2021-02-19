import React from 'react';
import Image from 'next/image';
import {
  Container, Content, Text, HR,
} from './styles';

/*
  botão - 469 x 97
*/

const Layer4: React.FC = () => (
  <Container>
    <Content>
      <Text>Rank / Prize</Text>
      <div style={{ padding: '30px 0 0 0' }}>
        <Image src="/images/layer4/button-1.png" width="469" height="97" />
      </div>
      <HR />
      <Text>TEAM 33 CONTRACT</Text>
      <div style={{ padding: '30px 0 30px 0' }}>
        <Image src="/images/layer4/button-2.png" width="469" height="97" />
      </div>
      <Text>Luxury Gaming Setup</Text>
    </Content>
  </Container>
);

export default Layer4;
