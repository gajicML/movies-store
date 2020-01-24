import React from "react";
import { fetchMovie, fetchTopMovies } from "./store/actions/moviesActions";
import { connect } from "react-redux";
import "./App.css";

import "react-bulma-components/dist/react-bulma-components.min.css";
import { Container, Section } from "react-bulma-components";
import CardView from "./components/CardView";
import TableView from "./components/TableView";
import SearchInput from "./components/SearchInput";
import LoaderComponent from "./components/Loader";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from "react-router-dom";

class App extends React.Component {
  state = {
    searchInput: ""
  };

  componentDidMount() {
    this.props.getTopMovies(1);
  }

  _handleKeyDown = e => {
    if (e.key === "Enter") {
      this.props.getMovieList(this.state.searchInput);
    }
  };
  _getMovie = () => {
    // this.props.getMovieList(this.state.searchInput);
    console.log("test");
    this.props.getTopMovies(2);
  };

  _onChangeHandler = e => {
    this.setState({
      searchInput: e.target.value
    });
  };
  render() {
    const moviesData = this.props.movies.data.results
      ? this.props.movies.data.results
      : [];

    return (
      <Router>
        <Container>
          <Section>
            <SearchInput
              value={this.state.searchInput}
              onChange={this._onChangeHandler}
              onClick={this._getMovie}
              onKeyDown={this._handleKeyDown}
            />
          </Section>
          <Section>
            <Link to="/card-view">Cards</Link>
            <Link to="/table-view">List</Link>
            <Redirect from="/" to="card-view" />
          </Section>
          {moviesData.length > 0 ? (
            <Section>
              <Route
                path="/card-view"
                render={() => <CardView movies={moviesData} />}
              />
              <Route
                path="/table-view"
                render={() => <TableView movies={moviesData} />}
              />{" "}
            </Section>
          ) : (
            <Section>
              <h1 className="title"> NO DATA FOUND </h1>
            </Section>
          )}
        </Container>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTopMovies: page => dispatch(fetchMovie(page)),
    getMovieList: name => dispatch(fetchMovie(name))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
