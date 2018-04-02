import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import PeopleList from "./pages/PeopleListPage"


import './App.css';
import FeedListPage from './pages/FeedListPage';
import ProfilePage from './pages/ProfilePage';

import Header from './partials/Header'
import Footer from "./partials/Footer"


class App extends Component {
  render() {
    return (
      <React.Fragment>
      
    <Header/>
      <Switch>
      <Route path="/PeopleList" component={PeopleList} />
       <Route path='/ProfilePage/:id' component={ProfilePage} />
<FeedListPage/>
      </Switch>
      <Footer/>
    
      </React.Fragment>
    );
  }
}

export default App;
