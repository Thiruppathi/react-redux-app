import React, { Component } from "react";
import { connect } from "react-redux"; // React bindings are not included in redux; hence these bindings will be installed explicitly thorugh react-redux

import { simpleAction } from "./actions/simpleAction";

import logo from "./logo.svg";
import "./App.css";

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
});

class App extends Component {
  simpleAction = event => {
    this.props.simpleAction();
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.simpleAction}>Test redux action</button>

        <pre>{JSON.stringify(this.props)}</pre>
      </div>
    );
  }
}

export default connect(
  mapStateToProps, // allows the React component to subscribe to redux state updates.
  mapDispatchToProps
)(App);
