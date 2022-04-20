import { createContext } from "react";
import useTopics from "../hooks/useTopics";

export const TopicContext = createContext();
export const TopicProvider = (props) => {
    const { topics } = useTopics();

  return (
    <TopicContext.Provider value={{ topics }}>
      {props.children}
    </TopicContext.Provider>
  );
};
