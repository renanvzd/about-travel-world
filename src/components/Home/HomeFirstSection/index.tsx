import { useEffect } from "react";
import styles from "./styles.module.scss";
// import Particles from "react-tsparticles";
import MyParticles from '../Particles'

export function HomeFirstSection() {
  return (
    <>
      <div data-aos="fade-up" >

        <div className={styles.containerHome}>
          <MyParticles></MyParticles>
          <main className={styles.contentContainer}>
            <div className={styles.left}>
              <span>👏🏼 Hey, welcome to</span>
              <h1>About <span>Cork</span></h1>
              <p>
                <span>...for brazilians 🇧🇷</span>
              </p>
            </div>

            <div className={styles.right}>
              <img src="/images/irish.png" alt="ireland" />
            </div>
          </main>


        </div>
      </div>
    </>
  );
}