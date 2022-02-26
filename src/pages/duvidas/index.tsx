import React, { useState } from 'react';
import { GetStaticProps } from 'next';
import { RichText } from 'prismic-dom';
import { getPrismicClient } from '../../services/prismic';
import Prismic from '@prismicio/client'
import Head from 'next/head';
import styles from './styles.module.scss';
import { TiArrowSortedDown } from 'react-icons/ti'


type Duvida = {
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: string;
  isOpen: boolean;
}

interface DuvidasProps {
  duvidas: Duvida[]
}

export default function Dicas({ duvidas }: DuvidasProps) {
  const [excerpt, setExcerpt] = useState<Duvida[]>(duvidas)
  const [searchTerm, setSearchTerm] = useState("");

  function handleToggleShowAnswer(index: number) {
    const copyOfArray = [...excerpt];

    copyOfArray[index].isOpen = !copyOfArray[index].isOpen;

    setExcerpt(copyOfArray)

  }

  return (
    <>
      <Head>
        <title>Duvidas | Cork</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.duvidas}>
          <div className={styles.titleSection}>
            <p>Dúvidas gerais</p>
            <p>Para você que está planejando ir para Cork (ou até mesmo qualquer outro lugar), é muito interessante que participe de grupos que estão alinhados com o mesmo objetivo que o seu, seja pelo Facebook, Whatsapp, Telegram... <br /><br />
              Esta página foi feita justamente para reunir as diversas perguntas que frequentemente são feitas nesses grupos! O ciclo não para, sempre tem gente indo e sempre tem gente que já está lá e descobriu as respostas para as dúvidas que um dia teve e que agora pode ajudar você! <br />
              A ideia aqui é NOS AJUDARMOS! <br /><br />
              Seja fazendo as perguntas, seja entregando as respostas.


            </p>
          </div>
          <div className={styles.searchEngine}>
            <div>
              <p>Pesquise pelo título: </p>
            </div>
            <input
              type="text"
              placeholder="Search..."
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />

          </div>
          <div className={styles.containerDuvidas}>
            {duvidas.filter((duvida) => {
              if (searchTerm == "") {
                return duvida;
              } else if (duvida.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                return duvida;
              }
            }).map((duvida, index) => (
              <section key={duvida.slug} >
                <time>{duvida.updatedAt}</time>
                <div className={styles.containerQuestion}
                  onClick={() => handleToggleShowAnswer(index)}>
                  <span className={styles.titleQuestion}>
                    {duvida.title}
                  </span>
                  <TiArrowSortedDown size={20} />
                </div>
                {excerpt[index].isOpen ?
                  <div className={styles.excerpt}
                    dangerouslySetInnerHTML={{ __html: duvida.excerpt }}
                  />
                  : null
                }
              </section>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'duvida')
  ], {
    fetch: ['duvida.title', 'duvida.content'],
    pageSize: 100,
  })

  const duvidas = response.results.map(duvida => {
    return {
      slug: duvida.uid,
      title: RichText.asText(duvida.data.title),
      excerpt: RichText.asHtml(duvida.data.content),
      updatedAt: new Date(duvida.last_publication_date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }),
      isOpen: false,
    };
  });

  return {
    props: {
      duvidas,
    },
    redirect: 60 * 60 * 12 // 30 minutes
  }
}

