import styles from "@/styles/home.module.scss";
import Head from "next/head";
import Image from "next/image";
import techs from "/public/images/techs.svg";
import { GetStaticProps } from "next";
import { RichText } from "prismic-dom";

import { getPrismicClient } from "@/services/prismic";
import Prismic from "@prismicio/client";

type Content = {
  title: string;
  titleContent: string;
  mobileTitle: string;
  mobileContent: string;
  mobileBanner: string;
  webTitle: string;
  webContent: string;
};
interface ContentProps {
  content: Content;
}

export default function Home({ content }: ContentProps) {
  return (
    <>
      <head>
        <title>CMS freaklucas</title>
      </head>
      <main className={styles.container}>
        <div className={styles.containerHeader}>
          <section className={styles.ctaText}>
            <h1>Projetos reais desenvolvidos.</h1>
            <span>
                CMS com criação de conteúdo 
                para desenvolvimento.
            </span>
            <a>
              <button>Conhecer mais</button>
            </a>
          </section>
          <img
            src="/images/c.jpg" 
            alt="logo de projetos" 
          />
        </div>

        <hr className={styles.divisor} />
        <div className={styles.sectionContent}>
          <section>
            <h2>
              Criação de aplicações 
              escaláveis e modernas.
            </h2>
            <span>
                Utilizando JavaScript, TypeScript, 
                Next, Jest 🚀
            </span>
          </section>
          <img 
            src="/images/b.jpg" 
            alt="logo de projetos" 
          />
        </div>

        <div className={styles.nextLevelContent}>
          <h2>
            <span className={styles.projects}>
              +20 projetos
            </span> desenvolvidos,
            conheça algumas publicações.
          </h2>
          <span>
            Há quase 4 anos criando aplicações para web.
          </span>
          <a>
            <button>Conhecer</button>
          </a>

          <Image 
            quality={100} 
            src={techs} 
            alt="Tecnologias" 
          />
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();
  const response = await prismic.query([
    Prismic.Predicates.at("document.type", "home"),
  ]);

  const {
    title,
    sub_title,

    mobile,
    mobile_content,
    mobile_banner,
    title_web,
    web_content,
  } = response.results[0].data;
  const content = {
    title: RichText.asText(title),
    titleContent: RichText.asText(sub_title),
    mobileTitle: RichText.asText(mobile),
    mobileContent: RichText.asText(mobile_content),
    mobileBanner: mobile_banner.url,
    webTitle: RichText.asText(title_web),
    webContent: RichText.asText(web_content),
  };
  return {
    props: { content },
    revalidate: 60 * 2,
  };
};
