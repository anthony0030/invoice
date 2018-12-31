import React, { Component } from 'react';
import './App.css';
import './css/custom.css';
import './css/style.css';
import MainNav from "./components/MainNav"
import Page from "./components/Page"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <MainNav />
        <Page />
      </React.Fragment>
    );
  }
}

export default App;
