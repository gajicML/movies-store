import React from "react";
import { fetchMovie } from "./store/actions/moviesActions";
import { connect } from "react-redux";
import "./App.css";

import "react-bulma-components/dist/react-bulma-components.min.css";
import { Container, Section } from "react-bulma-components";
import CardView from "./components/CardView";
import TableView from "./components/TableView";
import SearchInput from "./components/SearchInput";
import Pagination from "./components/Pagination";
import Loader from "./components/Loader";
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

  _getPage = page => {
    if (this.state.searchInput.length > 0) {
      this.props.getMovieList(this.state.searchInput, page);
    } else {
      this.props.getTopMovies(page);
    }
  };

  _getMovie = () => {
    this.props.getMovieList(this.state.searchInput);
  };

  _onChangeHandler = e => {
    this.setState({
      searchInput: e.target.value
    });
  };
  render() {
    const data = this.props.movies.data || {};
    const moviesData = data.results ? data.results : [];
    return (
      <Router>
        <Section className="search-section has-background-dark">
          <Container>
            <SearchInput
              value={this.state.searchInput}
              onChange={this._onChangeHandler}
              onClick={this._getMovie}
              onKeyDown={this._handleKeyDown}
            />
          </Container>
        </Section>

        <Section>
          <Container>
            <Link to="/card-view">Cards</Link>
            <Link to="/table-view">List</Link>
            <Redirect from="/" to="card-view" />
          </Container>
        </Section>

        {moviesData.length > 0 ? (
          <Section>
            <Container>
              <Route
                path="/card-view"
                render={() => <CardView movies={moviesData} />}
              />
              <Route
                path="/table-view"
                render={() => <TableView movies={moviesData} />}
              />{" "}
              <Pagination data={data} getPage={this._getPage} />
            </Container>
          </Section>
        ) : (
          <Section>
            <Container>
              <Loader />
            </Container>
          </Section>
        )}
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
    getMovieList: (name, pageSearch) => dispatch(fetchMovie(name, pageSearch))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
