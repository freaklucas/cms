import styles from "@/styles/home.module.scss";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <head>
        <title>CMS freaklucas</title>
      </head>
      <main className={styles.container}>
        <div className={styles.containerHeader}>
          <section className={styles.ctaText}>
            <h1>Projetos reais desenvolvidos</h1>
            <span>CMS com criação de conteúdo para desenvolvimento</span>
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
              Criação de aplicações escaláveis e modernas
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
        
        <hr className={styles.divisor} />

      </main>
    </>
  );
}
