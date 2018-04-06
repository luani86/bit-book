import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import PeopleList from "./pages/PeopleListPage"

import './App.css';
import FeedListPage from './pages/FeedListPage';
import ProfilePage from './pages/ProfilePage';
import SingleFeedPage from './pages/SingleFeedPage';
import LoginForm from './pages/LoginPage'
import Header from './partials/Header'
import Footer from "./partials/Footer"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    }
  }

  componentDidMount() {
    if (sessionStorage.getItem('sessionId')) {
      this.setState({
        isLoggedIn: true
      })
    }
  }

  loggedIn = () => {
    this.setState({
      isLoggedIn: true
    })
  }

  render() {
    console.log(this.state.isLoggedIn)
    return (
      <React.Fragment>
        <Header />
        {this.state.isLoggedIn
          ? <Switch>
            <Route path="/PeopleList" component={PeopleList} />
            <Redirect from="/LoginPage" to="/FeedListPage" />
            <Route path='/ProfilePage/:id' component={ProfilePage} />
            <Route path='/:type/:id' component={SingleFeedPage} />
            <Route path='/FeedListPage' component={FeedListPage} />
            <Route path='/MyProfilePage' component={ProfilePage} />
          </Switch>
        : <Switch>
            <Route path="/LoginPage" component={() => <LoginForm isLoggedIn={this.loggedIn} />} />
            <Redirect from="/" to="/LoginPage" />
          </Switch>}
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
