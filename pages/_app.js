import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/assets/pixel-green-potion-icon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
