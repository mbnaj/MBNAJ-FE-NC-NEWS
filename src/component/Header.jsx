import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


const Header = (props) => {
  return (
    <Row>
      <Col className="col-md-4">
        <Link to="/"><img src="/images/logo.png" alt="logo" className="logo"></img></Link>
      </Col>
      <Col className="col-md-8 d-flex align-items-end mb-3 flex-row-reverse" >

      </Col>
    </Row>
  );
};

export default Header;
