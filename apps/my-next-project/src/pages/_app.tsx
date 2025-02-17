import { AppProps } from 'next/app';
import Head from 'next/head';
import { sum } from '@nx-test/react-lib';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  console.log(sum(1, 2));

  return (
    <>
      <Head>
        <title>Welcome to apps/my-next-project!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
