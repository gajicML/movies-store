import React from "react";
import { fetchMovie } from "./store/actions/moviesActions";
import { connect } from "react-redux";
import "./App.css";

import "react-bulma-components/dist/react-bulma-components.min.css";
import { Container, Section } from "react-bulma-components";
import CardView from "./components/CardView";
import SearchInput from "./components/SearchInput";
import LoaderComponent from "./components/Loader";

class App extends React.Component {
  state = {
    searchInput: ""
  };

  componentDidMount() {
    this.props.getMovieList(this.state.searchInput);
  }

  _getMovie = () => {
    this.props.getMovieList(this.state.searchInput);
  };

  _onChangeHandler = e => {
    this.setState({
      searchInput: e.target.value
    });
    console.log(this.state.searchInput);
  };
  render() {
    return (
      <Container>
        <Section>
          <SearchInput
            value={this.state.searchInput}
            onChange={this._onChangeHandler}
            onClick={this._getMovie}
          />
        </Section>
        <Section>
          <CardView movies={this.state.movies} />
          {console.log("this.state", this.state)}
        </Section>
        <Section>
          <LoaderComponent />
        </Section>
      </Container>
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
    getMovieList: name => dispatch(fetchMovie(name))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
