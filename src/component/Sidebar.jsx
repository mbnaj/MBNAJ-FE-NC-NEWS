import React from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import { FaFolderPlus } from "react-icons/fa";
import { TopicContext } from "../contexts/topics";
import { useContext } from "react";

const Sidebar = () => {
  const { topics } = useContext(TopicContext);

  return (
    <div className="col-md-12">
    <ListGroup as="ul">
      <ListGroup.Item as="li" variant="dark">
        <b>OUR TOPICS</b>
      </ListGroup.Item>
      {topics.map((topic) => {
        //let active = (slug === topic.slug)?'active':'';
        return (
          <ListGroup.Item
            action
            as={Link}
            to={`/articles/${topic.slug}`}
            title={topic.slug}
            key={topic.slug}
            className={`Capital_title `}
          >
            <FaFolderPlus /> {topic.slug}
          </ListGroup.Item>
        );
      })}
    
    </ListGroup>
    
<img src="/images/advertise-here-side-2.png" alt="ads here" className="p-4 w-100" />
</div>

  );
};

export default Sidebar;
