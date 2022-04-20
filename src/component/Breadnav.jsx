import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";

const Breadnav = (props) => {
  const { activeTitle } = props;
  return (
    <Breadcrumb className="bg-dark mt-3 mb-4 p-3 pb-1" variant="dark">
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
