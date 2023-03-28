import Head from "next/head";
import styles from "./style.module.scss";
import Link from "next/link";
import Image from "next/image";

import thumb from "../../../public/images/thumb.jpg";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Blog | freaklucas</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          <Link href="/" as={`/`} passHref legacyBehavior>
            <a>
              <Image
                src={thumb}
                alt="banner"
                width={720}
                height={410}
                quality={100}
              />
              <strong>Conheça o React</strong>
              <time>Criado em 23 março de 2023.</time>
              <p>Hoje vou apresentar aspectos principais da lib React.</p>
            </a>
          </Link>
        </div>
      </main>
    </>
  );
}
