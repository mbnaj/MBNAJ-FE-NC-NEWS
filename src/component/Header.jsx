import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";


const Header = (props) => {
  return (
    <Row>
      <Col className="col-md-4 col-xs-12 col-sm-12">
        <Link to="/"><img src="/images/logo.png" alt="logo" className="logo"></img></Link>
      </Col>
      <Col className="col-md-8 col-xs-12 d-flex align-items-end mb-3 flex-row-reverse" >
          <img src="/images/advertise-here-728x90.png" alt="ads" className="img-fluid"/> 
      </Col>
    </Row>
  );
};

export default Header;
