import React from "react";
import { Container } from "react-bulma-components";

function Pagination({ data, getPage }) {
  const currentPage = data.page || "";
  const prevPage = currentPage > 1 ? currentPage - 1 : "";
  const nextPage = data.total_pages > currentPage ? data.page + 1 : "";
  const totalPages = data.total_pages > data.page + 1 ? data.total_pages : "";

  return (
    <Container className="columns is-mobile is-centered search-container">
      <div class="pagination">
        {currentPage > 3 ? (
          <a href="#" onClick={() => getPage(1)}>
            {currentPage > 3 ? 1 : ""}
          </a>
        ) : (
          ""
        )}

        <span>{currentPage > 3 ? "..." : ""}</span>

        {prevPage === "" ? (
          ""
        ) : (
          <a href="#" onClick={() => getPage(prevPage)}>
            {prevPage}
          </a>
        )}

        <a href="#" className="active">
          {currentPage}
        </a>

        <a href="#" onClick={() => getPage(nextPage)}>
          {nextPage}
        </a>
        <span>{totalPages > 0 || currentPage === totalPages ? "..." : ""}</span>
        <a href="#" onClick={() => getPage(totalPages)}>
          {totalPages}
        </a>
      </div>
    </Container>
  );
}

export default Pagination;
