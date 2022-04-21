import { useState, useEffect } from "react";
import { fetchArticles } from "../utils/api";

const useArticles = (topic,p,limit,sort_by,order,q) => {
  const [articles, setArticles] = useState([]);
  const [articles_count, setArticleCount] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticles(topic,p,limit,sort_by,order,q).then((data) => {
      setArticles(data.articles);
      setArticleCount(data.total_count)
      setLoading(false);
    });
    document.title = topic;
  }, [topic,p,limit,sort_by,order,q]);

  return {articles , loading,articles_count };
};

export default useArticles;
