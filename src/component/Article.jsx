import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import {
  Row,
  Col,
  Container,
  Card,
  Form,
  Button,
  ListGroup,
} from "react-bootstrap";
import Breadnav from "./Breadnav";
import Sidebar from "./Sidebar";
import Loading from "./Loading";
import useArticle from "../hooks/useArticle";
import { removeCommentById,patchCommentById } from "../utils/api";
import {
  FaDownload,
  FaTrashAlt,
  FaThumbsUp,
  FaThumbsDown,
} from "react-icons/fa";

const Article = () => {
  const { article_id } = useParams();
  const { article, comments, loading } = useArticle(article_id);
  const [body, setBody] = useState("");
  const [commentId, setCommentId] = useState("");
  
  /*
  const[isOpen,setisOpen] = useState(false);

  let initView = 5;

  const toggleOpen = ()=>{
      setisOpen((currentOpen)=>!currentOpen);
  }
*/
const handleDislike = (id)=>{
  patchCommentById(id,-1);
}
const handlelike = (id)=>{
  patchCommentById(id,1);
}
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(body);
  };

  useEffect(() => {

  }, [commentId]);

  const handleRemoveComment = (id) => {
    const options = {
      message: "Are you sure you want to delete this comment?",
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            console.log(commentId,'<=========')
            await removeCommentById(id);
            //alert('Click Yes');
          },
        },
        {
          label: "No",
          onClick: () => {
            //alert('Click No')
          },
        },
      ],
    };
    confirmAlert(options);
  };
  return (
    <Container className="main-container">
      {loading === true ? <Loading></Loading> : ""}
      <Row className="pt-3 pb-3">
        <Col className="col-md-8">
          <Breadnav activeTitle={article.topic}></Breadnav>
          <Card className=" mb-4">
            <Card.Body>
              <Card.Title>
                <h2>{article.title}</h2>
              </Card.Title>
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

          <Row className="pt-5">
            <Col md={12}>
              <Card className="commentBox">
                <Card.Body>
                  <Card.Title>
                    Recent Comments{" "}
                    <span className="label label-info">{comments.length}</span>
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    <hr />
                  </Card.Subtitle>
                  <Card.Text as={"div"}>
                    <ListGroup>
                      {comments.map((comment) => {

                        return (
                          <ListGroup.Item
                            className="mt-2"
                            key={comment.comment_id}
                          >
                            <Row>
                              <Col xs={2} md={2} className="text-center">
                                <img
                                  src="http://placehold.jp/80x80.png"
                                  className="rounded-circle img-fluid"
                                  alt=""
                                />
                              </Col>
                              <Col xs={10} md={10}>
                                <div className="mic-info">
                                  By: <span>{comment.author}</span> at{" "}
                                  {comment.created_at}
                                  <Button
                                    variant="danger"
                                    size="sm"
                                    title="Delete"
                                    className="delete_comment"
                                    onClick={(e) => {
                                      setCommentId(comment.comment_id);
                                      handleRemoveComment(comment.comment_id);
                                    }}
                                  >
                                    <FaTrashAlt />
                                  </Button>
                                </div>

                                <div className="comment-text pt-2">
                                  {comment.body}
                                </div>
                                <div className="action">
                                  <Button
                                    variant="outline-light"
                                    className="text-dark"
                                    title="Like"
                                    onClick={()=>{handlelike(comment.comment_id)}}
                                  >
                                    <FaThumbsUp />
                                  </Button>
                                  <span className="text=center">
                                    ( {comment.votes} )
                                  </span>
                                  <Button
                                    variant="outline-light"
                                    className="text-dark"
                                    title="Dislike"
                                    onClick={()=>{handleDislike(comment.comment_id)}}
                                  >
                                    <FaThumbsDown />
                                  </Button>
                                </div>
                              </Col>
                            </Row>
                          </ListGroup.Item>
                        );
                      })}
                    </ListGroup>
                  </Card.Text>
                </Card.Body>
              </Card>

              <div className="d-grid gap-2">
                <Button variant="primary" size="sm" ><FaDownload /> Show All <FaDownload /></Button>
              </div>

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
