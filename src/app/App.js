import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import PeopleList from "./pages/PeopleListPage"


import './App.css';
import FeedListPage from './pages/FeedListPage';
import ProfilePage from './pages/ProfilePage';
import SingleFeedPage from './pages/SingleFeedPage';

import Header from './partials/Header'
import Footer from "./partials/Footer"


class App extends Component {
  render() {
    return (
      <React.Fragment>

        <Header />
        <Switch>
          <Route path="/PeopleList" component={PeopleList} />
          <Route path='/ProfilePage/:id' component={ProfilePage} />
          <Route path='/:type/:id' component={SingleFeedPage} />
          <FeedListPage />
        </Switch>
        <Footer />

      </React.Fragment>
    );
  }
}

export default App;
