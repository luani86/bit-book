import React, { Component } from 'react';
import './App.css';
import Header from './partials/Header'
import Footer from "./partials/Footer"
import Login from "./pages/LoginPage"

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <Login/>

      <Footer/>
      </div>
    );
  }
}

export default App;
