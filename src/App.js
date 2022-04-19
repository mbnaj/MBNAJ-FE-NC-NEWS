import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./style.css";

import useTopics from "./hooks/useTopics";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Navibar from "./component/Navibar";
import Home from "./component/Home";
import Topics from "./component/Topics";
import Article from "./component/Article";

function App() {
  const {topics} = useTopics();

  const [search, setSearch] = useState("");

  return (
    <Container fluid>
      
      <Container className="main-container">
        <Header></Header>
      </Container>

      <Navibar topics={topics} search={search} setSearch={setSearch}></Navibar>

      <Container className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topics/:slug"element={<Topics topics={topics}/>} />
          <Route path="/article/:article_id" element={<Article topics={topics}/>} />
        </Routes>
      </Container>

      <Footer fluid></Footer>
    </Container>
  );
}

export default App;
