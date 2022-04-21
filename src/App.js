import { useState } from "react";
import { Routes, Route ,useSearchParams} from "react-router-dom";
import { Container } from "react-bootstrap";
import useTopics from "./hooks/useTopics";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Navibar from "./component/Navibar";
import Home from "./component/Home";
import Articles from "./component/Articles";
import Article from "./component/Article";
import Search from "./component/Search";
import ErrorPage from "./component/ErrorPage";
import { TopicProvider } from "./contexts/topics";
//import { TopicContext } from "../contexts/topics";
//import { useContext } from "react";
import "./style.css";

function App() {
  const { topics } = useTopics();
  //const {topics} = useContext(TopicContext);
  
  let [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q"));
  const [search, setSearch] = useState("");

  return (
    <Container fluid>
      <TopicProvider topics={topics}>
        <Container className="main-container">
          <Header></Header>
        </Container>

        <Navibar
          topics={topics}
          search={search}
          setSearch={setSearch}
          setQuery={setQuery}
        ></Navibar>

        <Container className="main-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles/:slug" element={<Articles />} />
            <Route path="/article/:article_id" element={<Article />} />
            <Route path="/search" element={<Search query={query} setQuery={setQuery}/>} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Container>

        <Footer fluid></Footer>
      </TopicProvider>
    </Container>
  );
}

export default App;
