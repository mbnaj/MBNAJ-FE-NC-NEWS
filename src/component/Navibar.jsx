import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

import {
  Container,
  Button,
  Navbar,
  Nav,
  FormControl,
  Form,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Navibar = (props) => {
  const { topics, setSearch } = props;

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      sticky="top"
      className="row"
    >
      <Container className="main-container">
        <Navbar.Brand as={Link} to="/" title="Home">
          <FaHome /> Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {topics.map((topic) => {
              return (
                <Nav.Link
                  as={Link}
                  to={`topics/${topic.slug}`}
                  title={topic.slug}
                  key={topic.slug}
                >
                  {topic.slug}
                </Nav.Link>
              );
            })}
          </Nav>

          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navibar;
