import React from "react";
import { useState, useEffect } from "react";
import { Card, ListGroup } from "react-bootstrap";
import Comment from "./Comment";

const Comments = (props) => {
  const [comments, setComments] = useState(props.comments);

  useEffect(() => {
    setComments(props.comments);
  }, [props.comments]);
  return (
    <>
      <Card className="commentBox">
        <Card.Body>
          <Card.Title>
            Recent Comments:
            <span className="label label-info">{comments.length}</span>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            <hr />
          </Card.Subtitle>
          <Card.Text as={"div"}>
            <ListGroup>
              {comments.map((comment) => {
                return (
                  <ListGroup.Item className="mt-2" key={comment.comment_id}>
                    <Comment comment={comment}></Comment>
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Comments;
