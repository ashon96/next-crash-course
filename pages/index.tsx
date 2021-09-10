import ArticleList from "../components/ArticleList";
import { server } from "../config";

interface Props {
  articles: NextArticle[];
}

const Home: React.FC<Props> = ({ articles }) => {
  return (
    <div>
      <ArticleList articleItems={articles} />
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const dtoArticles: Promise<DTOArticleItem[]> = await res.json();

  const articles = (await dtoArticles).map(decodeArticleItem);
  return {
    props: {
      articles,
    },
  };
};

// Run at build time
// export const getStaticProps = async () => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?_limit=6`
//   );
//   const dtoArticles: Promise<DTOArticleItem[]> = await res.json();

//   const articles = (await dtoArticles).map(decodeArticleItem);
//   return {
//     props: {
//       articles,
//     },
//   };
// };

export interface DTOArticleItem {
  body: string;
  id: number;
  title: string;
  userId: number;
  excerpt: string;
}

export interface NextArticle {
  body: string;
  id: number;
  title: string;
  userID: number;
  excerpt: string;
}

export const decodeArticleItem = (dto: DTOArticleItem): NextArticle => ({
  body: dto.body,
  id: dto.id,
  title: dto.title,
  userID: dto.userId,
  excerpt: dto.excerpt,
});
