import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { decodeArticleItem, DTOArticleItem, NextArticle } from "../..";
import Meta from "../../../components/Meta";
import { server } from "../../../config";

interface Props {
  article: NextArticle;
}

const ArticlePage: React.FC<Props> = ({ article }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Meta title={article.title} />
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go Back</Link>
    </>
  );
};

export default ArticlePage;

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const res = await fetch(`${server}/api/articles/${id}`);
  const dtoArticle: DTOArticleItem = await res.json();

  const article = decodeArticleItem(dtoArticle);

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`);
  const dtoArticles: DTOArticleItem[] = await res.json();

  const articles = dtoArticles.map(decodeArticleItem);

  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

// export const getStaticProps = async (context) => {
//   const { id } = context.params;
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//   const dtoArticle: DTOArticleItem = await res.json();

//   const article = decodeArticleItem(dtoArticle);

//   return {
//     props: {
//       article,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const dtoArticles: DTOArticleItem[] = await res.json();

//   const articles = dtoArticles.map(decodeArticleItem);

//   const ids = articles.map((article) => article.id);
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }));

//   return {
//     paths,
//     fallback: false,
//   };
// };
