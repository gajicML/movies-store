import React from "react";
import { fetchMovie } from "./store/actions/moviesActions";
import { connect } from "react-redux";

import "./App.css";

import "react-bulma-components/dist/react-bulma-components.min.css";
import { Container, Section, Menu, Icon } from "react-bulma-components";
import CardView from "./components/CardView";
import TableView from "./components/TableView";
import SearchInput from "./components/SearchInput";
import NotFound from "./components/NotFound";
import Pagination from "./components/Pagination";
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
    activeMenu: false
  };

  componentDidMount() {
    this.props.getTopMovies(false, 1);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const reduxStateMovies = { ...nextProps };

    this.setState({
      localMovies: reduxStateMovies.movies
    });
  }

  // _handleKeyDown = e => {
  //   if (e.key === "Enter") {
  //     this.props.getMovieList(this.state.searchInput);
  //   }
  // };

  _getPage = page => {
    if (this.state.searchInput.length > 0) {
      this.props.getMovieList(this.state.searchInput, page);
    } else {
      this.props.getTopMovies(false, page);
    }
  };

  _getMovie = () => {
    this.props.getMovieList(this.state.searchInput);
  };

  _onChangeHandler = e => {
    this.setState(
      {
        searchInput: e.target.value
      },
      function() {
        this.props.getMovieList(this.state.searchInput);
      }
    );
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
      // eslint-disable-next-line
      return (a = key(a)), (b = key(b)), reverse * ((a > b) - (b > a));
    };
  };

  sort = param => {
    const copyStateMovies = this.state.localMovies;
    const conditon = param === "title" ? a => a.toUpperCase() : parseInt;

    switch (param) {
      case param:
        copyStateMovies.data.results.sort(
          this.sort_by(param, this.state.order, conditon)
        );
        this.setState({
          localMovies: copyStateMovies,
          order: !this.state.order,
          activeMenu: false
        });

        break;

      default:
    }
  };

  toggleMenu = () => {
    this.setState({
      activeMenu: !this.state.activeMenu
    });
  };

  render() {
    // const data = this.props.movies.data || {};
    // const moviesData = data.results ? data.results : [];

    const data = this.state.localMovies.data || {};
    const moviesData = data.results ? data.results : [];

    const className = this.state.activeMenu ? "is-block" : "is-hidden-mobile";

    return (
      <Router>
        <Section className="header columns is-fullheight">
          <Section className="header-logo column is-2 is-narrow-mobile is-fullheight section ">
            <p className="has-text-grey is-small">
              <em>MovieStore </em>
            </p>
          </Section>
          <Section className="header-search-section column is-10">
            <SearchInput
              value={this.state.searchInput}
              onChange={this._onChangeHandler}
              onClick={this._getMovie}
              // onKeyDown={this._handleKeyDown}
            />
          </Section>
        </Section>

        <Icon
          icon="bars"
          color="white"
          className="is-large bars is-hidden-tablet"
          onClick={() => this.toggleMenu()}
        />

        <Section className="main columns is-fullheight">
          <Menu
            className={`main-menu column is-2 is-fullheight section ${className}`}
          >
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
                  render={() => (
                    <TableView movies={moviesData} sort={this.sort} />
                  )}
                />

                <Pagination data={data} getPage={this._getPage} />
              </Container>
            </Section>
          ) : (
            <Section className="column is-10 main-content not-found">
              <NotFound />
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
    getTopMovies: (searchQuery, page) =>
      dispatch(fetchMovie(searchQuery, page)),
    getMovieList: (searchQuery, page) => dispatch(fetchMovie(searchQuery, page))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
