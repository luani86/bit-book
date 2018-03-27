import React, { Component } from 'react';
import './App.css';
import Header from './partials/Header'
import Footer from "./partials/Footer"

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>

      <Footer/>
      </div>
    );
  }
}

export default App;
