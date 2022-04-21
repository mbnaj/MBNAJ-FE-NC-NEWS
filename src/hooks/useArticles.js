import { useState, useEffect } from "react";
import { fetchArticles } from "../utils/api";

const useArticles = (topic,p,limit,sort_by,order) => {
  const [articles, setArticles] = useState([]);
  const [articles_count, setArticleCount] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticles(topic,p,limit,sort_by,order).then((data) => {
      setArticles(data.articles);
      setArticleCount(data.total_count)
      setLoading(false);
    });
    document.title = topic;
  }, [topic,p,limit,sort_by,order]);

  return {articles , loading,articles_count };
};

export default useArticles;
