import React from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Container, Card, Pagination } from "react-bootstrap";

import Breadnav from "./Breadnav";
import Sidebar from "./Sidebar";
import Loading from "./Loading";
import useArticles from "../hooks/useArticles";

const Articles = () => {
  let { slug, p } = useParams();
  p = (p)?p:0;
  const [page, setPage] = useState(p);
  const { articles, loading, articles_count } = useArticles(slug, page);
  let limit = 5;
  let rows = [];
  let pages = Math.floor(articles_count / limit);

  if (articles_count / limit > 0) pages++;


  const handleGoToPage = (e) => {
    let p = e.target.id - 1;
    setPage(p);
  };

  const handleGoToFirstPage = (e) => {
    setPage(0);
  };

  const handleGoToLastPage = (e) => {
    setPage(pages-1);
  };
  const handleGoToNextPage = (e) => {
    setPage(page+1);
  };

  const handleGoToPrevPage = (e) => {
    setPage(page-1);
  };

  for (let i = 1; i <= pages; i++) {
    rows.push(
      <Pagination.Item key={i} id={i} onClick={handleGoToPage} disabled={(i-1) === page }>
        {i}
      </Pagination.Item>
    );
  }

  return (
    <Container className="main-container">
      {loading === true ? <Loading></Loading> : ""}
      <Row className="">
        
        <Col className="col-md-8 pb-3">
        <Breadnav activeTitle={slug}></Breadnav>
          <Row>
            {articles.map((article) => {
              return (
                <Col className="col-md-12" key={article.article_id}>
                  <Card className=" mb-4">
                    <Card.Body>
                      <Card.Text>
                        <span>
                          <img src="http://placehold.jp/150x100.png" alt={article.title} className="img-fl"/>
                          <Link
                          to={`/article/${article.article_id}`}
                          className="text-dark h3"
                        >
                          {article.title}
                        </Link><br/>
                          {article.author}
                          </span>
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>{article.created_at}</Card.Footer>
                  </Card>
                </Col>
              );
            })}
          </Row>

          <Row>
            <Pagination>
              <Pagination.First onClick={handleGoToFirstPage} disabled={limit * (page) <=0}/>
              <Pagination.Prev onClick={handleGoToPrevPage} disabled={limit * (page) <=0}/>
              {rows.map((elem) => {
                return elem;
              })}
              <Pagination.Next onClick={handleGoToNextPage} disabled={limit * (page+1) >= articles_count}/>
              <Pagination.Last onClick={handleGoToLastPage} disabled={limit * (page+1) >= articles_count}/>
            </Pagination>
          </Row>
        </Col>

        <Col className="col-md-4 pt-3">
          <Sidebar></Sidebar>
        </Col>
      </Row>
    </Container>
  );
};

export default Articles;
