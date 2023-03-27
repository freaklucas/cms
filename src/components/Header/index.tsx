import styles from "./styles.module.scss";
import Image from "next/image";
import brazuca from "../../../public/images/luk.svg";

import { ActiveLink } from "../ActiveLink";

export function Header(){
  return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <ActiveLink href="/" activeClassName={styles.active}>

           <Image src={brazuca}  alt="brazuca Logo"/>

        </ActiveLink>

        <nav>
          <ActiveLink href="/" as={`/`} passHref legacyBehavior activeClassName={styles.active}>
            <a>Home</a>
          </ActiveLink>

          <ActiveLink  href="/posts" as={`/posts`} passHref legacyBehavior activeClassName={styles.active}>
            <a>Conteúdos</a>
          </ActiveLink>

          <ActiveLink  href="/about" as={`/about`} passHref legacyBehavior activeClassName={styles.active}>
            <a>Quem somos?</a>
          </ActiveLink>
        </nav>

        <a className={styles.readyButton} type="button" href="">COMEÇAR</a>

      </div>
    </header>
  )
}