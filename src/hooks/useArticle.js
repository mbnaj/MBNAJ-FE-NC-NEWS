import { useState, useEffect } from "react";
import { getArticleId ,getCommentsByArticleId} from "../utils/api";

const useArticle = (article_id) => {
  const [article, setArticle] = useState([]);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArticleId(article_id).then((article) => {
      setArticle(article);
      getCommentsByArticleId(article_id).then((comments)=>{
        setComments(comments);
      })
      setLoading(false);
      document.title = article.title;
    });
  }, [article_id]);

  return {article , loading,comments,setComments };
};

export default useArticle;
