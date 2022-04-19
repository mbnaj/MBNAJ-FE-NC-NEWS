import React from 'react'
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <Row>
      <Col className="bg-dark mt-5">
        <p className="text-white text-center m-5">
          All Rights reserved - Copyright 2022
        </p>
      </Col>
    </Row>
  );
};

export default Footer;
