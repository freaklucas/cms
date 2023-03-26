import styles from "./styles.module.scss";
import Image from "next/image";
import brazuca from "../../../public/images/luk.svg";
import Link from "next/link";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <a>
          <Image 
            src={brazuca} 
            alt="Logo lucas"
            className={styles.brazuca} 
          />
        </a>
        <nav>
          <Link href="/" className={styles.home}>
            Home
          </Link>
          <Link href="/posts" className={styles.content}>
            Conteúdo
          </Link>
          <Link href="/about" className={styles.about}>
            Sobre
          </Link>
        </nav>
        <a
          className={styles.readyButton}
          type="button"
          href="https://github.com/freaklucas"
        >Começar</a>
      </div>
    </header>
  );
}
