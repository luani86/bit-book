import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import PeopleList from "./pages/PeopleListPage"


import './App.css';
import FeedListPage from './pages/FeedListPage';
import ProfilePage from './pages/ProfilePage';
import SingleFeedPage from './pages/SingleFeedPage';
import Login from './pages/LoginPage'
import Header from './partials/Header'
import Footer from "./partials/Footer"


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/LoginPage" component={Login} />
          <Route path="/PeopleList" component={PeopleList} />
          <Route path='/ProfilePage/:id' component={ProfilePage} />
          <Route path='/:type/:id' component={SingleFeedPage} />
          <Route path='/FeedListPage' component={FeedListPage} />
          <Route path='/MyProfilePage' component={ProfilePage} />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
