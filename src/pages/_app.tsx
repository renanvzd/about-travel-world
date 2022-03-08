import { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { Toaster } from 'react-hot-toast';

import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Toaster position="top-right" />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;
