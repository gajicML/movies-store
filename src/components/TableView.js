import React from "react";
import { Table } from "react-bulma-components";

const TableView = ({ movies, sort }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th
            onClick={() => {
              sort("title");
            }}
          >
            Title
          </th>
          <th
            onClick={() => {
              sort("release_date");
            }}
          >
            Year
          </th>
          <th
            onClick={() => {
              sort("vote_average");
            }}
          >
            Rating
          </th>
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
