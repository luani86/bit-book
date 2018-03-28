import React, { Component } from 'react';

import './App.css';
import FeedListPage from './pages/FeedListPage';

import Header from './partials/Header'
import Footer from "./partials/Footer"
import Login from "./pages/LoginPage"

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
<FeedListPage/>
      <Footer/>
      </div>
    );
  }
}

export default App;
