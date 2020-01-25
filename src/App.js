import React from "react";
import { fetchMovie } from "./store/actions/moviesActions";
import { connect } from "react-redux";
import "./App.css";

import "react-bulma-components/dist/react-bulma-components.min.css";
import { Container, Section, Menu } from "react-bulma-components";
import CardView from "./components/CardView";
import TableView from "./components/TableView";
import SearchInput from "./components/SearchInput";
import Pagination from "./components/Pagination";
import Loader from "./components/Loader";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  NavLink
} from "react-router-dom";

class App extends React.Component {
  state = {
    searchInput: "",
    localMovies: {},
    order: true,
    lastSorted: ""
  };

  componentDidMount() {
    this.props.getTopMovies(1);
  }

  componentWillReceiveProps(nextProps) {
    const reduxStateMovies = { ...nextProps };

    this.setState({
      localMovies: reduxStateMovies.movies
    });
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

  sort_by = (field, reverse, primer) => {
    const key = primer
      ? function(x) {
          return primer(x[field]);
        }
      : function(x) {
          return x[field];
        };

    reverse = !reverse ? 1 : -1;

    return function(a, b) {
      return (a = key(a)), (b = key(b)), reverse * ((a > b) - (b > a));
    };
  };

  sort = param => {
    const copyStateMovies = this.state.localMovies;
    console.log(typeof param);
    const conditon = param === "title" ? a => a.toUpperCase() : parseInt;

    switch (param) {
      case param:
        copyStateMovies.data.results.sort(
          this.sort_by(param, this.state.order, conditon)
        );
        this.setState({
          localMovies: copyStateMovies,
          order: !this.state.order
        });

        break;

      default:
    }
  };

  render() {
    // const data = this.props.movies.data || {};
    // const moviesData = data.results ? data.results : [];

    const data = this.state.localMovies.data || {};
    const moviesData = data.results ? data.results : [];

    return (
      <Router>
        <Section className="header columns is-fullheight">
          <Section className="header-logo column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile">
            <p className="has-text-grey is-small">
              <em>MovieStore </em>
            </p>
          </Section>
          <Section className="header-search-section column is-10">
            <SearchInput
              value={this.state.searchInput}
              onChange={this._onChangeHandler}
              onClick={this._getMovie}
              onKeyDown={this._handleKeyDown}
            />
          </Section>
        </Section>

        <Section className="main columns is-fullheight">
          <Menu className="main-menu column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile">
            <Menu.List title="View as">
              <NavLink
                className="has-text-white"
                exact={true}
                activeClassName="is-active"
                to="/card-view"
              >
                Cards
              </NavLink>
              <NavLink
                className="has-text-white"
                activeClassName="is-active"
                to="/table-view"
              >
                List
              </NavLink>
            </Menu.List>

            <Redirect from="/" to="card-view" />

            <Menu.List title="Sort By">
              <Menu.List.Item onClick={() => this.sort("popularity")}>
                Popularity
              </Menu.List.Item>
              <Menu.List.Item onClick={() => this.sort("release_date")}>
                Year
              </Menu.List.Item>
              <Menu.List.Item onClick={() => this.sort("title")}>
                Title
              </Menu.List.Item>
              <Menu.List.Item onClick={() => this.sort("vote_average")}>
                Rating
              </Menu.List.Item>
            </Menu.List>
          </Menu>

          {moviesData.length > 0 ? (
            <Section className="main-content column is-10 ">
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
            <Section className="column is-10 main-content">
              <h1 className=" has-text-centered is-size-1 has-text-white">
                NO DATA FOUND !
              </h1>
            </Section>
          )}
        </Section>
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
