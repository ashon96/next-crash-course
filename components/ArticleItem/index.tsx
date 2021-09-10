import Link from "next/link";
import React from "react";
import { NextArticle } from "../../pages";
import componentStyles from "./ArticleItem.module.scss";

interface Props {
  articleItem: NextArticle;
}

const ArticleItem: React.FC<Props> = ({ articleItem }) => {
  return (
    <Link href="/article/[id]" as={`/article/${articleItem.id}`}>
      <a className={componentStyles.card}>
        <h3>{articleItem.title}</h3>
        <p>{articleItem.excerpt}</p>
      </a>
    </Link>
  );
};

export default ArticleItem;
