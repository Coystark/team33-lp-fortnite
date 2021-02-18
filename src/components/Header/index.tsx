import React from 'react';
import Image from 'next/image';

import styled from 'styled-components';
import styles from './Header.module.css';

const JustTesting = styled.div`
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-image: url("images/header/header-bg-character.jpg");

  @media(max-width: 1049px) {
    background-image: url("images/header/header-bg-without-character.jpg");
  }
`;

const Joker = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("images/header/Personagem.png");

  @media(max-width: 1049px) {
    display: none;
  }
`;

/*
  background-image: url("images/header/Fundo.png");

  @media(max-width: 768px) {
    background-image: url("images/header/Fundo-sem-personagem.png");
  }
*/
// <Joker />

const Header: React.FC = () => (
  <>
    <JustTesting>

      <div
        className={styles.tournament}
      >
        <div className={styles.tournament__items}>
          <div className={styles.logo}>
            <Image src="/images/header/Logotipo.png" width="408" height="405" />
          </div>
          <div className={styles.button}>
            <Image src="/images/header/Botão-roxo.png" width="338" height="97" />
          </div>
          <div className={styles.button}>
            <Image src="/images/header/botão-azul.png" width="559" height="97" />
          </div>
          <div className={styles.button}>
            <Image src="/images/header/botão-rosa.png" width="595" height="106" />
          </div>
        </div>
      </div>

    </JustTesting>

  </>
);

export default Header;
