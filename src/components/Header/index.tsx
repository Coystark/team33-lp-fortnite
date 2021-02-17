import React from 'react';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

import styles from './Header.module.css';

const Header: React.FC = () => {
  const switchBackground = useMediaQuery({ query: '(max-width: 800px)' });

  return (
    <>
      <div
        className={styles.container}
        style={{ backgroundImage: switchBackground ? 'url("images/header/Fundo-sem-personagem.png")' : 'url("images/header/Fundo.png")' }}
      >

        <div
          className={styles.tournament}
        >
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

    </>
  );
};

export default Header;
