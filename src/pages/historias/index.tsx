import Head from 'next/head';
import Prismic from '@prismicio/client';
import { useState } from 'react';
import { GetStaticProps } from 'next';
import { AiOutlineSchedule } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';
import Link from 'next/link';
import { getPrismicClient } from '../../services/prismic';
import styles from './styles.module.scss';
import { formatDate } from '../../utils';

interface History {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    tema: string;
    author: string;
  };
}

interface HistoryPagination {
  next_page: string;
  results: History[];
}

interface HomeProps {
  historiesPagination: HistoryPagination;
}

export default function Historias({ historiesPagination }: HomeProps) {
  const [nextPage, setNextPage] = useState<string>(historiesPagination.next_page);
  const [searchTerm, setSearchTerm] = useState("");


  const formattedHistories = historiesPagination.results.map(history => {
    return {
      ...history,
      first_publication_date: formatDate(history.first_publication_date),

    };
  });

  const [histories, setHistories] = useState<History[]>(formattedHistories);

  async function handleLoadMoreHistories(): Promise<void> {
    const newHistories = await fetch(nextPage).then(response => response.json());

    setNextPage(newHistories.next_page);

    const newFormattedHistories = newHistories.results.map(history => {
      return {
        ...history,
        first_publication_date: formatDate(history.first_publication_date),
      };
    });

    setHistories([...histories, ...newFormattedHistories]);
  }
  return (
    <>
      <Head>
        <title>Histórias e Experiências</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.historias}>
          <section className={styles.hero}>
            <div className={styles.titleSection}>
              <p>Histórias</p>
              <p>Histórias e relatos sobre os mais variados temas para que outros brasileiros possam aprender e até mesmo se inspirar! </p>
              <p>Contribua para a comunidade e conte também sua história!</p>
            </div>

            <div className={styles.searchEngine}>
              <div>
                <p>Pesquise pelo título, autor ou tema: </p>
              </div>
              <input
                type="text"
                placeholder="Search..."
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                }}
              />

            </div>
            <div className={styles.containerHistory}>
              {histories?.filter((history) => {
                if (searchTerm == "") {
                  return history;
                } else if (
                  history.data.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  history.data.tema.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  history.data.author.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return history;
                }
              }).map(history => (
                <Link key={history.uid} href={`/historias/post/${history.uid}`}>
                  <a>
                    <div className={styles.subContainerHistory}>
                      <div className={styles.titleHistory}>{history.data.title}</div>
                      <p>Tema: {history.data.tema}</p>
                      <p>{history.data.subtitle}</p>
                      <div className={styles.subsection}>
                        <div className={styles.schedule}>
                          <AiOutlineSchedule color="#BBBBBB" />
                          <span>{history.first_publication_date}</span>
                        </div>

                        <div className={styles.author}>
                          <FiUser color="#BBBBBB" />
                          <span>{history.data.author}</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
            {nextPage && (
              <button type="button" onClick={handleLoadMoreHistories}>
                <div className={styles.loadMorePosts}>
                  <p>Carregar mais histórias</p>
                </div>
              </button>
            )}
          </section>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const historiesResponse = await prismic.query(
    [Prismic.predicates.at('document.type', 'history')],
    {
      fetch: ['history.title', 'history.subtitle', 'history.author', 'history.tema'],
      pageSize: 100,
    }
  );

  const histories = historiesResponse.results.map(history => {
    return {
      uid: history.uid,
      first_publication_date: history.first_publication_date,
      data: {
        title: history.data.title,
        subtitle: history.data.subtitle,
        tema: history.data.tema,
        author: history.data.author,
      },
    };
  });

  const historiesPagination = {
    next_page: historiesResponse.next_page,
    results: histories,
  };

  return {
    props: {
      historiesPagination,
    },
  };
};
