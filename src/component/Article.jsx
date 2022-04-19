import React from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Container} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Breadnav from "./Breadnav";
import Sidebar from "./Sidebar";
import Loading from "./Loading";

const Article = (props) => {
  const { category_name } = useParams();
  const loading = false;

  return (
    <Container className="main-container">
      {loading === true ? <Loading></Loading> : ""}
      <Row className="pt-3 pb-3">
        <Breadnav activeTitle={category_name}></Breadnav>
        <Col className="col-md-8 pt-3">
          
        </Col>

        <Col className="col-md-4 pt-3">
          <Sidebar></Sidebar>
        </Col>
      </Row>
    </Container>
  );
};

export default Article;
