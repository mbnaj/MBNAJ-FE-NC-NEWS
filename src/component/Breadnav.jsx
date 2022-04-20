import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";

const Breadnav = (props) => {
  const { activeTitle } = props;
  return (
    <Breadcrumb className="bg-danger mt-3 mb-4 p-3 pb-1" variant="danger">
      <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }} className="font-weight-bold text-capitalize">
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item as={"li"} title={activeTitle} className="text-capitalize text-white" active>
        {activeTitle}
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default Breadnav;
