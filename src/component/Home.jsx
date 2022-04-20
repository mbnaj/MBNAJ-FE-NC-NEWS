import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container, Card } from "react-bootstrap";
import Sidebar from "./Sidebar";
import Loading from "./Loading";
import useArticles from "../hooks/useArticles";

const Home = () => {
  const { articles, loading } = useArticles();
  document.title = "Home"

  return (
    <Container className="main-container">
      {loading === true ? <Loading></Loading> : ""}
      <Row className="pt-3 pb-3">
        <Col xs={12} md={8} sm={12}>
          <Row>
            {articles.map((article) => {
              return (
                <Col className="col-md-12" key={article.article_id}>
                  <Card className=" mb-4">
                    <Card.Body>
                    <Card.Text>
                        <span>
                          <img src="http://placehold.jp/350x160.png" alt={article.title} className="img-fl"/>
                          <Link
                          to={`/article/${article.article_id}`}
                          className="text-dark h3"
                        >
                          {article.title}
                        </Link><br/>{article.body.slice(0,100)}....
                        <br/><br/>
                          {article.author}
                          </span>
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>{article.created_at}</Card.Footer>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Col>

        <Col xs={12} md={4} sm={12} >
          <Sidebar></Sidebar>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
