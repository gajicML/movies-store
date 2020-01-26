import React from "react";
import { Table } from "react-bulma-components";

const TableView = ({ movies }) => {
  console.log(movies);
  return (
    <Table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Year</th>
          <th>Rating</th>
          <th>Original Title</th>
        </tr>
      </thead>

      <tbody>
        {movies.map((movie, index) => {
          return (
            <tr key={index}>
              <td>{movie.title} </td>
              <td>{movie.release_date}</td>
              <td>{movie.vote_average}</td>
              <td>{movie.original_title}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default TableView;
