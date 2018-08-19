import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header';
import Body from './Components/Body';
import MedicationSearch from './Components/MedicationSearch';
import CssBaseline from '@material-ui/core/CssBaseline';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CssBaseline />
        <Header />
        <Body>
          <MedicationSearch />
        </Body>
      </div>
    );
  }
}

export default App;
