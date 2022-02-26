import Head from 'next/head';
import Prismic from '@prismicio/client';
import { GetStaticProps } from 'next';
import { getPrismicClient } from '../../services/prismic';
import styles from './styles.module.scss';
import SocialMedia from '../../components/Dicas/socialMedia';

interface HomeProps {
  influencers: {
    uid?: string;
    data: {
      name: string;
      youtube?: string;
      instagram?: string;
      logo: string;
    }
  }[];
  business: {
    uid?: string;
    data: {
      name: string;
      segment: string;
      logo: string;
      link: string;
    }
  }[];
  comunidade: {
    uid?: string;
    data: {
      name: string;
      linkedin: string;
      facebook: string;
      instagram?: string;
      logo: string;
    }
  }[];
}


export default function Recomendacoes({ influencers, business, comunidade }: HomeProps) {

  return (
    <>
      <Head>
        <title>Recomendações | Cork</title>
      </Head>

      <div className={styles.container}>

        <div className={styles.introduction}>
          <p>Aqui você encontra um compilado de perfis e links úteis que poderão lhe auxiliar na busca por mais conhecimento e informações sobre Cork.</p>
          <p> Praticidade, simplicidade e objetividade!</p>
          <div className={styles.explain}>
            <p>
              <b>Instagram e Youtube: </b>
              Nessa coluna são apresentados os perfis e canais de pessoas que mudaram para Irlanda e compartilham sua experiência e aprendizados.
            </p>
          </div>
          <div className={styles.explain}>
            <p>
              <b>Interesses Gerais: </b>
              Nessa coluna são disponibilizados diversos links de utilidade geral (imobiliárias, bancos, transporte, órgãos governamentais) que você deve conhecer para seguir com sua nova vida na Irlanda.
            </p>
          </div>
          <div className={styles.explain}>
            <p>
              <b>Comunidade Brasileira: </b>
              Conexão é tudo! Queremos também disponibilizar esse espaço para que nós brasileiros possamos saber quem está em Cork e como podemos nos conectar. Mas lembre-se, ajude para ser ajudado! O espaço é disponibilizado para quem compartilhar alguma experiência que teve, para que outros brasileiros possam aprender com você!
            </p>
          </div>
        </div>
        <div>
          <SocialMedia
            influencers={influencers}
            business={business}
            comunidade={comunidade}
          />
        </div>
      </div>
    </>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const influencersResponse = await prismic.query(
    [Prismic.predicates.at('document.type', 'influencer')],
  );

  const influencers = influencersResponse.results.map(influencer => {
    return {
      uid: influencer.uid,
      data: {
        name: influencer.data.name,
        youtube: influencer.data.youtube,
        instagram: influencer.data.instagram,
        logo: influencer.data.logo.url,
      },
    };
  });

  const businessResponse = await prismic.query(
    [Prismic.predicates.at('document.type', 'interessepublico')],
  );

  const business = businessResponse.results.map(interessepublico => {
    return {
      uid: interessepublico.uid,
      data: {
        name: interessepublico.data.name,
        segment: interessepublico.data.segment,
        logo: interessepublico.data.logo.url,
        link: interessepublico.data.link,
      },
    };
  });


  const comunidadeResponse = await prismic.query(
    [Prismic.predicates.at('document.type', 'comunidade')],
  );

  const comunidade = comunidadeResponse.results.map(comunidade => {
    return {
      uid: comunidade.uid,
      data: {
        name: comunidade.data.name,
        linkedin: comunidade.data.linkedin,
        facebook: comunidade.data.facebook,
        instagram: comunidade.data.instagram,
        logo: comunidade.data.logo.url,
      },
    };
  });

  return {
    props: {
      influencers,
      business,
      comunidade,
    },
  };
};
