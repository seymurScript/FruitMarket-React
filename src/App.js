import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header.js';
import MainContent from './components/MainContent';
class App extends Component {
  render() {
    return (
      <div>
        <Header title='PRODUCT MARKET' color='info'/>
        <MainContent/>
      </div>
    );
  }
}
export default App;
