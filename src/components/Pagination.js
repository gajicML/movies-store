import React from "react";
import { Container } from "react-bulma-components";

function Pagination({ data, getPage }) {
  const currentPage = data.page || "";
  const prevPage = currentPage > 1 ? currentPage - 1 : "";
  const nextPage = data.total_pages > currentPage ? data.page + 1 : "";
  const totalPages = data.total_pages > data.page + 1 ? data.total_pages : "";

  return (
    <Container className="columns is-mobile is-centered search-container">
      <div className="has-text-gray pagination-container">
        <span className="is-size-3" onClick={() => getPage(1)}>
          {currentPage > 3 ? 1 : ""}
        </span>
        <span>{currentPage > 3 ? ". . ." : ""}</span>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <span className="is-size-3" onClick={() => getPage(prevPage)}>
          {prevPage}
        </span>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <span className="has-text-white is-size-3">{currentPage}</span>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <span className="is-size-3" onClick={() => getPage(nextPage)}>
          {nextPage}
        </span>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <span>
          {totalPages > 0 || currentPage === totalPages ? ". . ." : ""}
        </span>
        <span className="is-size-3" onClick={() => getPage(totalPages)}>
          {totalPages}
        </span>
      </div>
    </Container>
  );
}

export default Pagination;
