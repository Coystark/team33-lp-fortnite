import React from 'react';
import Image from 'next/image';
import { Container, Header, Text } from './styles';

const Layer5: React.FC = () => (
  <Container>
    <Header>
      <Image draggable={false} src="/images/layer5/button-header.png" width="621px" height="85px" />
    </Header>
    <Text>
      JOIN OUR DISCORD! CONTACT STAFF WILL HELP YOU OUT!
    </Text>
  </Container>
);

export default Layer5;
