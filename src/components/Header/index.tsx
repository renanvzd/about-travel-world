import { ActiveLink } from './ActiveLink';
import Link from 'next/link'
import { useState } from 'react'
import styles from './styles.module.scss';



export function Header() {
  const [classOn, setClassOn] = useState(false);

  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <div className={styles.logoHeader}>
            <img className={styles.logo} src="/images/four-leaf.png" alt="Four Leaf" />
            <Link href="/">
              <h1>About Cork</h1>
            </Link>
          </div>

          <div className={styles.logoWithLinks}>
            <div className={classOn ? styles.menuSectionOn : styles.menuSection} onClick={() => setClassOn(!classOn)}>
              <div className={styles.menuToggle}>
                <div className={styles.one}></div>
                <div className={styles.two}></div>
                <div className={styles.three}></div>
              </div>

              <nav className={styles.listItems}>

                <ul>
                  <li>
                    <ActiveLink activeClassName={styles.active} href="/">
                      <a className={styles.active}>Home</a>
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink activeClassName={styles.active} href="/historias">
                      <a>Histórias</a>
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink activeClassName={styles.active} href="/duvidas">
                      <a>Dúvidas</a>
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink activeClassName={styles.active} href="/recomendacoes">
                      <a>Dicas</a>
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink activeClassName={styles.active} href="/galeria">
                      <a>Galeria</a>
                    </ActiveLink>
                  </li>
                  {/* <li>
                  <a className={classOn ? styles.show : styles.hide} href="/login">Voltar <FiLogOut className={styles.FiLogOut} /> </a>

                </li> */}
                </ul>
              </nav>
            </div>
          </div>
        </div>

      </header>
    </>
  )
}