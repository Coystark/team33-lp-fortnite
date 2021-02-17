import React from 'react';
import Image from 'next/image';
import styles from './Header.module.css';

const Header: React.FC = () => (
  <>
    <div
      className={styles.container}
      style={{ backgroundImage: 'url("images/header/Fundo-sem-personagem.png")' }}
    >
      <div
        className={styles.joker}
        style={{ backgroundImage: 'url("images/header/Personagem.png")' }}
      />

      <div
        className={styles.tournament}
      >
        <Image className={styles.image} src="/images/header/Logotipo.png" width="408" height="405" />
        <Image className={styles.image} src="/images/header/Botão-roxo.png" width="338" height="97" />
        <Image className={styles.image} src="/images/header/botão-azul.png" width="200" height="35" />
        <Image className={styles.image} src="/images/header/botão-rosa.png" width="200" height="35" />

      </div>

    </div>

  </>
);

export default Header;
