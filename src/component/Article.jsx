import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Container, Card, Form, Button } from "react-bootstrap";
import Breadnav from "./Breadnav";
import Sidebar from "./Sidebar";
import Loading from "./Loading";
import useArticle from "../hooks/useArticle";

const Article = () => {
  const { article_id } = useParams();
  const { article, loading } = useArticle(article_id);
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(body);
  };

  return (
    <Container className="main-container">
      {loading === true ? <Loading></Loading> : ""}
      <Row className="pt-3 pb-3">
        <Breadnav activeTitle={article.topic}></Breadnav>
        <Col className="col-md-8 pt-3">
          <Card className=" mb-4">
            <Card.Body>
              <Card.Title><h2>{article.title}</h2></Card.Title>
              <Card.Text>
                <span>{article.author}</span>
                <br />
                <br />
                {article.body}
                <br />
              </Card.Text>
            </Card.Body>
            <Card.Footer>{article.created_at}</Card.Footer>
          </Card>
          <hr />
          <h3>Add new comment</h3>

          <Form className="p-5 bg-light border" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="frm_comment">
              <Form.Label>Comment:</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(e) => {
                  setBody(e.target.value);
                }}
              />
            </Form.Group>

            <Button variant="dark" type="submit">
              Submit
            </Button>
          </Form>
        </Col>

        <Col className="col-md-4 pt-3">
          <Sidebar></Sidebar>
        </Col>
      </Row>
    </Container>
  );
};

export default Article;
