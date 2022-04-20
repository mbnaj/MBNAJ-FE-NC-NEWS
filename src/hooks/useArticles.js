import { useState, useEffect } from "react";
import { fetchArticles } from "../utils/api";

const useArticles = (topic,p) => {
  const [articles, setArticles] = useState([]);
  const [articles_count, setArticleCount] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticles(topic,p).then((data) => {
      setArticles(data.articles);
      setArticleCount(data.total_count)
      setLoading(false);
    });
    document.title = topic;
  }, [topic,p]);

  return {articles , loading,articles_count };
};

export default useArticles;
