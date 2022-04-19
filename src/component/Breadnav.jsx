import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Breadnav = (props) => {
  const { activeTitle } = props;
  return (
    <Breadcrumb className="bg-dark mt-4 pt-3" variant="dark">
      <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }} className="Capital_title">
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item as={"li"} title={activeTitle} className="Capital_title" active>
        {activeTitle}
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default Breadnav;
