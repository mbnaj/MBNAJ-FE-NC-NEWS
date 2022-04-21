import React from "react";
import { useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container, Card, Pagination } from "react-bootstrap";

import Breadnav from "./Breadnav";
import Sidebar from "./Sidebar";
import Loading from "./Loading";
import useArticles from "../hooks/useArticles";

const Search = (props) => {
    const{query}=props;

  document.title = 'Search for article';

  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(5);
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("DESC");
  const { articles, loading, articles_count } = useArticles(
    null,
    page,
    limit,
    sortBy,
    order,query
  );

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
    setPage(pages - 1);
  };
  const handleGoToNextPage = (e) => {
    setPage(page + 1);
  };

  const handleGoToPrevPage = (e) => {
    setPage(page - 1);
  };

  for (let i = 1; i <= pages; i++) {
    rows.push(
      <Pagination.Item
        key={i}
        id={i}
        onClick={handleGoToPage}
        disabled={i - 1 === page}
      >
        {i}
      </Pagination.Item>
    );
  }
  useEffect(() => {
  setLimit(5);
}, []);
  return (
    <Container className="main-container">
      {loading === true ? <Loading></Loading> : ""}

      <Row className="">
        <Col className="col-md-8 pb-3">
          <Breadnav activeTitle={`Search for ${query}`}></Breadnav>

          <Row className="mt-3">
            <Col className="col-md-6 p-3">
              <span>Sort By : </span>
              <select
                onChange={(e) => {
                  setSortBy(e.target.value);
                }}
              >
                <option value="created_at">Creation date</option>
                <option value="title">Title</option>
                <option value="votes">Votes</option>
                <option value="comment_count">Comment count</option>
                <option value="author">Author</option>
              </select>
            </Col>
            <Col className="col-md-6 p-3 text-end">
              <span>ASC/DESC : </span>
              <select
                onChange={(e) => {
                  setOrder(e.target.value);
                }}
              >
                <option value="DESC">DESC</option>
                <option value="ASC">ASC</option>
              </select>
            </Col>
          </Row>

          <Row>
            {articles.map((article) => {
              return (
                <Col className="col-md-12" key={article.article_id}>
                  <Card className=" mb-4">
                    <Card.Body>
                      <Card.Text>
                        <span>
                          <img
                            src="http://placehold.jp/150x100.png"
                            alt={article.title}
                            className="img-fl"
                          />
                          <Link
                            to={`/search/${article.article_id}`}
                            className="text-dark h3"
                          >
                            {article.title}
                          </Link>
                          <br />
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
              <Pagination.First
                onClick={handleGoToFirstPage}
                disabled={limit * page <= 0}
              />
              <Pagination.Prev
                onClick={handleGoToPrevPage}
                disabled={limit * page <= 0}
              />
              {rows.map((elem) => {
                return elem;
              })}
              <Pagination.Next
                onClick={handleGoToNextPage}
                disabled={limit * (page + 1) >= articles_count}
              />
              <Pagination.Last
                onClick={handleGoToLastPage}
                disabled={limit * (page + 1) >= articles_count}
              />
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

export default Search;
