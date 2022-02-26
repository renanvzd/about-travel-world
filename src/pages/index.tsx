import Head from 'next/head';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { HomeFirstSection } from '../components/Home/HomeFirstSection';
import { HomeSecSection } from '../components/Home/HomeSecSection';
import { HomeThirdSection } from '../components/Home/HomeThirdSection';
import { HomeFourthSection } from '../components/Home/HomeFourthSection';

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, [])

  return (
    <>
      <Head>
        <title>Home | Cork</title>
      </Head>

      <HomeFirstSection />

      <HomeSecSection />

      <HomeFourthSection />

      <HomeThirdSection />


    </>
  )
}
