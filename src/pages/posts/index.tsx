import Head from "next/head";
import styles from "./style.module.scss";
import Link from "next/link";
import Image from "next/image";
import { FiChevronLeft, FiChevronsLeft, 
  FiChevronRight, FiChevronsRight} from 'react-icons/fi';
import thumb from "../../../public/images/thumb.jpg";
import { GetStaticProps } from "next";
import {getPrismicClient} from '../../services/prismic';
import Prismic from "@prismicio/client";
import {RichText} from 'prismic-dom';

type Post = {
  slug: string;
  title: string;
  cover: string;
  description: string;
  updatedAt: string;
}
interface PostsProps {
  posts: Post[];
}

export default function Posts({posts}: PostsProps) {
  console.log(posts);
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
          <div className={styles.buttonNavigate}>
            <div>
                <button>
                    <FiChevronsLeft 
                        size={25} 
                        color="#fff" 
                    />
                </button>
                <button>
                    <FiChevronLeft 
                        size={25} 
                        color="#fff" 
                    />
                </button>
            </div>

            <div>
                <button>
                    <FiChevronsRight 
                        size={25} 
                        color="#fff" 
                    />
                </button>
                <button>
                    <FiChevronsRight 
                        size={25} 
                        color="#fff" 
                    />
                </button>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}

export const getStaticProps : GetStaticProps = async () => {
  const prismic = getPrismicClient();
  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'post')
  ], {
    orderings: '[document.last_publication_date desc]',
    fetch: ['post.title', 'post.description', 'post.cover'],
    pageSize: 3,
  });
  const posts = response.results.map(post => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      description: post.data.description.find((content: { type: string; }) => content.type === 'paragraph')?.text ?? '',
      cover: post.data.cover.url,
      updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    }
  })
  return {
    props: {
      posts
    },
    revalidate: 60*30
  }
}
