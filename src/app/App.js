import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import PeopleList from "./pages/PeopleListPage"


import './App.css';
import FeedListPage from './pages/FeedListPage';
import MyProfilePage from './pages/MyProfilePage';

import Header from './partials/Header'
import Footer from "./partials/Footer"


class App extends Component {
  render() {
    return (
      <React.Fragment>
      
    <Header/>
      <Switch>
      <Route path="/PeopleList" component={PeopleList} />
       <Route path='/MyProfilePage' component={MyProfilePage} />
<FeedListPage/>
      </Switch>
      <Footer/>
    
      </React.Fragment>
    );
  }
}

export default App;
