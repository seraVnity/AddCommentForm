import React from "react";
import { connect } from "react-redux";

export default ChildComponent => {
  class ComposedComponent extends React.Component {
    componentDidMount() {
      this.shouldNavigatteAway();
    }

    componentDidUpdate() {
      this.shouldNavigatteAway();
    }
    shouldNavigatteAway() {
      if (!this.props.auth) {
        this.props.history.push("/");
      }
    }

  render() {
      return <ChildComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { auth: state.auth };
  }

  return connect(mapStateToProps)(ComposedComponent);
};
