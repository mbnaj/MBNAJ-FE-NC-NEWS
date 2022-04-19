import React from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {FaFolderPlus} from "react-icons/fa";

const Sidebar = (props) => {

  return (
    <ListGroup as="ul">
      <ListGroup.Item as="li" variant="dark">
        <b>OUR TOPICS</b>
      </ListGroup.Item>
      {}
      <ListGroup.Item action as={Link} to="/" title="Sell an item">
        <FaFolderPlus /> Home
      </ListGroup.Item>

    </ListGroup>
  );
};

export default Sidebar;
