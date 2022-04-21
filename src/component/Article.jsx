import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

import "react-confirm-alert/src/react-confirm-alert.css";
import {
  Row,
  Col,
  Container,
  Card,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import Breadnav from "./Breadnav";
import Sidebar from "./Sidebar";
import Loading from "./Loading";
import Comments from "./Comments";
import useArticle from "../hooks/useArticle";
import { addComment, patchArticleById } from "../utils/api";

const Article = () => {
  const { article_id } = useParams();
  const { article, comments, setComments, loading } = useArticle(article_id);
  const [body, setBody] = useState("");
  const [votes, setVotes] = useState(article.votes);
  const [alert, setAlert] = useState({
    alertShow: false,
    alertType: "",
    alertMsg: "",
  });
  const username = "grumpy19";

  useEffect(() => {
    setVotes(article.votes);
  }, [article.votes]);


  const handleSubmit = (e) => {
    e.preventDefault();
    addComment(article_id, username, body)
      .then((newComment) => {
        setAlert({
          alertShow: true,
          alertType: "success",
          alertMsg: "Your comment has been submitted successfully!!",
        });
        const newComments = [newComment, ...comments];
        setComments(newComments);
        setTimeout(() => {
          setAlert({ alertShow: false, alertType: "", alertMsg: "" });
        }, 2000);
      })
      .catch(() => {
        setAlert({
          alertShow: true,
          alertType: "danger",
          alertMsg: "Error happened while submitting your comment!!",
        });
        setTimeout(() => {
          setAlert({ alertShow: false, alertType: "", alertMsg: "" });
        }, 2000);
      });
    setBody("");
  };

  const handleDislike = (id) => {
    let newVotes = votes;
    newVotes--;
    setVotes(newVotes);
    patchArticleById(id, -1)
      .then(() => {})
      .catch(() => {
        newVotes++;
        setVotes(newVotes);
      });
  };

  const handlelike = (id) => {
    let newVotes = votes ;
    newVotes++;
    setVotes(newVotes);
    patchArticleById(id, 1)
      .then(() => {})
      .catch(() => {
        newVotes--;
        setVotes(newVotes);
      });
  };

  return (
    <Container className="main-container">
      {loading === true ? <Loading></Loading> : ""}
      <Row className="pt-3 pb-3">
        <Col className="col-md-8">
          <Breadnav activeTitle={article?.topic}></Breadnav>
          <Card className=" mb-4">
            <Card.Body>
              <Card.Title>
                <h2>{article?.title}</h2>
              </Card.Title>
              <Card.Text>
                <span>{article?.author}</span>
                <br />
                <br />
                {article?.body}
                <br />
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <div className="fl line_height_35">{article?.created_at}</div>

              <div className="action fr">
                <Button
                  variant="outline-light"
                  className="text-dark"
                  title="Like"
                  onClick={() => {
                    handlelike(article?.article_id);
                  }}
                >
                  <FaThumbsUp />
                </Button>
                <span className="text=center">( {votes} )</span>
                <Button
                  variant="outline-light"
                  className="text-dark"
                  title="Dislike"
                  onClick={() => {
                    handleDislike(article?.article_id);
                  }}
                >
                  <FaThumbsDown />
                </Button>
              </div>
            </Card.Footer>
          </Card>
          <hr />
          <h3>Add new comment</h3>

          <Form className="p-5 bg-light border" onSubmit={handleSubmit}>
            {alert.alertShow ? (
              <Alert variant={alert.alertType}>
                <p>{alert.alertMsg}</p>
              </Alert>
            ) : null}

            <Form.Group className="mb-3" controlId="frm_comment">
              <Form.Label>Comment:</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={body}
                onChange={(e) => {
                  setBody(e.target.value);
                }}
              />
            </Form.Group>
            <p>
              Your comment will be inserted by: <strong>{username}</strong>
            </p>
            <Button variant="dark" type="submit">
              Submit
            </Button>
          </Form>

          <Row className="pt-5">
            <Col md={12}>
              <Comments comments={comments}></Comments>
            </Col>
          </Row>
        </Col>

        <Col className="col-md-4 pt-3">
          <Sidebar></Sidebar>
        </Col>
      </Row>
    </Container>
  );
};

export default Article;
