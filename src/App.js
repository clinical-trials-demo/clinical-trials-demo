import React, { Component } from 'react';
import './App.css';
import Layout from './Layout/Layout'

import Aux from './hoc/Auxillary/Auxillary'

class App extends Component {
  render() {
    return (
      <Aux>
      <Layout />
      </Aux>
    );
  }
}

export default App;
