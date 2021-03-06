import React from "react";
import Loader from "react-loader-spinner";

class NotFound extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hidden: true };
  }
  _isMounted = false;

  componentDidMount() {
    this._isMounted = true;
    setTimeout(() => {
      if (this._isMounted) this.setState({ hidden: false });
    }, 3000);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <h1 className=" has-text-centered is-size-1 has-text-white">
        {this.state.hidden ? (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        ) : (
          "DATA NOT FOUND"
        )}
      </h1>
    );
  }
}
export default NotFound;
