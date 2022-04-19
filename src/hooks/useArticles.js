import { useState, useEffect } from "react";
import { fetchArticles } from "../utils/api";

const useArticles = (topic) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticles(topic).then((articles) => {
      setArticles(articles);
      setLoading(false);
    });
  }, [topic]);

  return {articles , loading };
};

export default useArticles;
