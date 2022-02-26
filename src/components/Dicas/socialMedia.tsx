import styles from './styles.module.scss';

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
      linkedin?: string;
      facebook?: string;
      instagram?: string;
      logo: string;
    }
  }[];
}

export default function SocialMedia({ influencers, business, comunidade }: HomeProps) {
  return (
    <>
      <div className={styles.profile} >
        <div className={styles.title}>
          <h2>Instagram e Youtube</h2>
        </div>
        {influencers.map((influencer) => (
          <div key={influencer.uid} className={styles.profileDetails}>
            <div className={styles.logo}>
              <img src={influencer.data.logo} alt="ireland" />
            </div>
            <div>
              <p>{influencer.data.name}</p>
              <div className={styles.socialMedia}>
                {influencer.data.youtube ?
                  (<div>
                    <a
                      href={influencer.data.youtube}
                      target="_blank"
                      title="Visite nosso Canal"
                      rel="noreferrer"
                    >
                      <img src="/images/Youtube.svg" alt="Facebook" className={styles.mediaImg} />
                    </a>
                  </div>)
                  : ''
                }
                <div>
                  <a
                    href={influencer.data.instagram}
                    target="_blank"
                    title="Visite nosso Instagram"
                    rel="noreferrer"
                  >
                    <img src="/images/Instagram_new.svg" alt="Facebook" className={styles.mediaImg} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.profile}>
        <div className={styles.title}>
          <h2>Interesses Gerais</h2>
        </div>
        {business.map((busi) => (
          <a
            href={busi.data.link}
            target="_blank"
            title="Visite nosso Instagram"
            rel="noreferrer"
            key={busi.uid}
          >
            <div className={styles.profileDetails} >
              <div className={styles.logo}>
                <img src={busi.data.logo} alt={busi.data.name}
                  className={styles.businessImage}
                />
              </div>
              <div className={styles.businessData}>
                <p className={styles.business}>{busi.data.name}</p>
                <p className={styles.tema}>
                  ({busi.data.segment})
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className={styles.profile}>
        <div className={styles.title}>
          <h2>Comunidade Brasileira</h2>
        </div>

        {comunidade.map((comunidad) => (
          <div key={comunidad.uid} className={styles.profileDetails}>
            <div className={styles.logo}>
              <img src={comunidad.data.logo} alt={comunidad.data.name} />
            </div>
            <div>
              <p>{comunidad.data.name}</p>
              <div className={styles.socialMedia}>
                {comunidad.data.linkedin ?
                  (<div>
                    <a
                      href={comunidad.data.linkedin}
                      target="_blank"
                      title="Conectar no Linkedin"
                      rel="noreferrer"
                    >
                      <img src="/images/linkedin.svg" alt="Linkedin" className={styles.mediaImg} />
                    </a>
                  </div>)
                  : null
                }

                {comunidad.data.facebook ?
                  (<div>
                    <a
                      href={comunidad.data.facebook}
                      target="_blank"
                      title="Adicione no Facebook"
                      rel="noreferrer"
                    >
                      <img src="/images/Facebook.svg" alt="Facebook" className={styles.mediaImg} />
                    </a>
                  </div>)
                  : null
                }

                {comunidad.data.instagram ?
                  (<div>
                    <a
                      href={comunidad.data.instagram}
                      target="_blank"
                      title="Adicione no Instagram"
                      rel="noreferrer"
                    >
                      <img src="/images/Instagram_new.svg" alt="Instagram" className={styles.mediaImg} />
                    </a>
                  </div>)
                  : null
                }
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
