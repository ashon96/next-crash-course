import { articles } from "../../../data";

const handler = ({ query: { id } }, res) => {
  const article = articles.filter((article) => article.id === id);

  if (article.length > 0) {
    res.status(200).json(article[0]);
  } else {
    res
      .status(404)
      .json({ message: `Article with the id of ${id} is not found` });
  }
};

export default handler;
