import styles from "@/styles/home.module.scss";
import Head from "next/head";
import Image from "next/image";
import techs from "/public/images/techs.svg";

export default function Home() {
  return (
    <>
      <head>
        <title>CMS freaklucas</title>
      </head>
      <main className={styles.container}>
        <div className={styles.containerHeader}>
          <section className={styles.ctaText}>
            <h1>Projetos reais desenvolvidos.</h1>
            <span>CMS com criação de conteúdo para desenvolvimento.</span>
            <a>
              <button>Conhecer mais</button>
            </a>
          </section>
          <img src="/images/c.jpg" alt="logo de projetos" />
        </div>

        <hr className={styles.divisor} />
        <div className={styles.sectionContent}>
          <section>
            <h2>
              Criação de aplicações escaláveis e modernas.
            </h2>
            <span>
              Utilizando JavaScript, TypeScript, Next, Jest 🚀
            </span>
          </section>
          <img 
            src="/images/b.jpg" 
            alt="logo de projetos" 
          />
        </div>
        
        <div className={styles.nextLevelContent}>

          <h2><span className={styles.projects}>+20 projetos</span> desenvolvidos, 
              conheça algumas publicações.
          </h2>
          <span>Há quase 4 anos criando aplicações para web.</span>
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
