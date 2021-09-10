import React from "react";
import { NextArticle } from "../../pages";
import ArticleItem from "../ArticleItem";
import componentStyles from "./ArticleList.module.scss";

interface Props {
  articleItems: NextArticle[];
}

const ArticleList: React.FC<Props> = ({ articleItems }) => {
  return (
    <div className={componentStyles.grid}>
      {articleItems.map((article) => (
        <ArticleItem key={article.id} articleItem={article} />
      ))}
    </div>
  );
};

export default ArticleList;
