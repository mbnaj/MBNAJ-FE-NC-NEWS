import React from "react";
import { NavLink,useNavigate  } from "react-router-dom";
import { FaHome } from "react-icons/fa";

import {
  Container,
  Button,
  Navbar,
  Nav,
  FormControl,
  Form,
} from "react-bootstrap";


const Navibar = (props) => {
  const { topics,search, setSearch,setQuery } = props;
  const navigate = useNavigate()

  const onSubmitHandler = () => {
    setQuery(search);
    navigate(`/search?q=${search}`);
    setSearch('');
  }

  return (
    <Navbar
      collapseOnSelect 
      expand="lg"
      bg="primary"
      variant="dark"
      sticky="top"
      className="row"
    >
      <Container className="main-container">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              as={NavLink}
              to="/"
              title="Home"
              className="Capital_title"  eventKey={0}
            >
              <FaHome /> Home
            </Nav.Link>
            {topics.map((topic) => {
              //let active = (slug === topic.slug)?'active':'';
              return (
                <Nav.Link
                  as={NavLink}
                  to={`articles/${topic.slug}`}
                  title={topic.slug}
                  key={topic.slug}
                  className="Capital_title"
                  eventKey={topic.slug}
                >
                  {topic.slug}
                </Nav.Link>
              );
            })}
          </Nav>

          <Form className="d-flex" onSubmit={(e)=>{
            e.preventDefault();
            onSubmitHandler();
          }}>
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <Button type="submit" variant="outline-success" className="btn btn-danger text-white">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navibar;
