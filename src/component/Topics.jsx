import React from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Container, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Breadnav from "./Breadnav";
import Sidebar from "./Sidebar";
import Loading from "./Loading";
import useArticles from "../hooks/useArticles";

const Topics = () => {
  const { slug } = useParams();
  const { articles, loading } = useArticles(slug);

  return (
    <Container className="main-container">
      {loading === true ? <Loading></Loading> : ""}
      <Row className="pt-3 pb-3">
        <Breadnav activeTitle={slug}></Breadnav>
        <Col className="col-md-8 pt-3">
          <Row>
            {articles.map((article) => {
              return (
                <Col className="col-md-12" key={article.article_id}>
                  <Card className=" mb-4">
                    <Card.Body>
                      <Card.Title>
                        <Link to={`/article/${article.article_id}`}>
                          {article.title}
                        </Link>
                      </Card.Title>
                      <Card.Text>
                        <span>{article.author}</span>
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>{article.created_at}</Card.Footer>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Col>

        <Col className="col-md-4 pt-3">
          <Sidebar></Sidebar>
        </Col>
      </Row>
    </Container>
  );
};

export default Topics;
