import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Layer2 from '../components/Layer2';
import Layer3 from '../components/Layer3';
import Layer4 from '../components/Layer4';
import Layer5 from '../components/Layer5';
import Layer6 from '../components/Layer6';

export default function Home() {
  return (
    <>
      <Head>
        <title>Team33</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap" rel="stylesheet" />
      </Head>

      <Header />
      <Layer2 />
      <Layer3 />
      <Layer4 />
      <Layer5 />
      <Layer6 />
    </>
  );
}
