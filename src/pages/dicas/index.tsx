import React, { useState } from 'react';
import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client'
import Head from 'next/head';
import { RichText } from 'prismic-dom';
import { getPrismicClient } from '../../services/prismic';
import styles from './styles.module.scss';
import { MdArrowForward } from 'react-icons/md'


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

  function handleToggleShowAnswer(index) {
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
          {duvidas.map((duvida, index) => (
            <a key={duvida.slug} >
              <time>{duvida.updatedAt}</time>
              <strong
                onClick={() => handleToggleShowAnswer(index)}>
                <MdArrowForward />{' '}
                {duvida.title}
              </strong>
              {
                excerpt[index].isOpen ? <p> {duvida.excerpt} </p> : null
              }
            </a>
          ))}

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
      excerpt: duvida.data.content.find(content => content.type === 'paragraph')?.text ?? '',
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
      duvidas
    }
  }
}