import { useState, useEffect } from "react";
import { fetchTopics } from "../utils/api";

const useTopics = () => {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTopics().then((topics) => {
      setTopics(topics);
      setLoading(false);
    });
  }, []);

  return { topics, loading };
};

export default useTopics;
