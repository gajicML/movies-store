import React from "react";
import { Container } from "react-bulma-components";

function Pagination({ data, getPage }) {
  const currentPage = data.page || "";
  const prevPage = currentPage > 1 ? currentPage - 1 : "";
  const nextPage = data.total_pages > currentPage ? data.page + 1 : "";
  const totalPages = data.total_pages > data.page + 1 ? data.total_pages : "";

  return (
    <Container className="columns is-mobile is-centered search-container">
      <div className="pagination">
        {currentPage > 3 ? (
          <span onClick={() => getPage(1)}>{currentPage > 3 ? 1 : ""}</span>
        ) : (
          ""
        )}

        <span className="dots">{currentPage > 3 ? "..." : ""}</span>

        {prevPage === "" ? (
          ""
        ) : (
          <span onClick={() => getPage(prevPage)}>{prevPage}</span>
        )}

        <span className="active">{currentPage}</span>

        <span onClick={() => getPage(nextPage)}>{nextPage}</span>
        <span className="dots">
          {totalPages > 0 || currentPage === totalPages ? "..." : ""}
        </span>
        <span onClick={() => getPage(totalPages)}>{totalPages}</span>
      </div>
    </Container>
  );
}

export default Pagination;
