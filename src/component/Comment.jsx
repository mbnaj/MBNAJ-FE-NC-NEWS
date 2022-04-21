import React from "react";
import { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { FaTrashAlt, FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { removeCommentById, patchCommentById } from "../utils/api";
import { confirmAlert } from "react-confirm-alert";

const Comment = (props) => {
  const [comment, setComment] = useState(props.comment);

  const handleDislike = (id) => {
    let newComment = { ...comment };
    newComment.votes--;
    setComment(newComment);
    patchCommentById(id, -1)
      .then(() => {})
      .catch(() => {
        newComment.votes++;
        setComment(newComment);
      });
  };
  const handlelike = (id) => {
    let newComment = { ...comment };
    newComment.votes++;
    setComment(newComment);
    patchCommentById(id, 1)
      .then(() => {})
      .catch(() => {
        newComment.votes--;
        setComment(newComment);
      });
  };

  const handleRemoveComment = (id) => {
    let options = {
      message: "Are you sure you want to delete this comment?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            removeCommentById(id)
              .then(() => {
                setComment(null);
              })
              .catch();
          },
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    };
    confirmAlert(options);
  };
  return (
    <>
      {comment ? (
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
              By: <span>{comment.author}</span> at {comment.created_at}
              <Button
                variant="danger"
                size="sm"
                title="Delete"
                className="delete_comment"
                onClick={(e) => {
                  handleRemoveComment(comment.comment_id);
                }}
              >
                <FaTrashAlt />
              </Button>
            </div>

            <div className="comment-text pt-2">{comment.body}</div>
            <div className="action">
              <Button
                variant="outline-light"
                className="text-dark"
                title="Like"
                onClick={() => {
                  handlelike(comment.comment_id);
                }}
              >
                <FaThumbsUp />
              </Button>
              <span className="text=center">( {comment.votes} )</span>
              <Button
                variant="outline-light"
                className="text-dark"
                title="Dislike"
                onClick={() => {
                  handleDislike(comment.comment_id);
                }}
              >
                <FaThumbsDown />
              </Button>
            </div>
          </Col>
        </Row>
      ) : (
        ""
      )}
    </>
  );
};

export default Comment;
