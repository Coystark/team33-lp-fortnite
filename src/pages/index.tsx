import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Layer2 from '../components/Layer2';
import Layer3 from '../components/Layer3';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap" rel="stylesheet" />
      </Head>

      <Header />
      <Layer2 />
      <Layer3 />
    </>
  );
}
