import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";


import './App.css';
import FeedListPage from './pages/FeedListPage';

import Header from './partials/Header'
import Footer from "./partials/Footer"

class App extends Component {
  render() {
    return (
      <React.Fragment>
      
      <Header/>
      <Switch>
<FeedListPage/>
      </Switch>
      <Footer/>
    
      </React.Fragment>
    );
  }
}

export default App;
