import { useState, useEffect } from "react";
import { getArticleId } from "../utils/api";

const useArticle = (article_id) => {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArticleId(article_id).then((article) => {
      setArticle(article);
      setLoading(false);
      document.title = article.title;
    });
  }, [article_id]);

  return {article , loading };
};

export default useArticle;
