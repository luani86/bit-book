import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { userService } from '../../services/userService';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      name: "",
      email: ""
    }
  }

  handleUserNameInput = (event) => {
    this.setState({ username: event.target.value })
  }

  handleNameInput = (event) => {
    this.setState({ name: event.target.value })
  }

  handlePasswordInput = (event) => {
    this.setState({ password: event.target.value })
  }

  handleEmailInput = (event) => {
    this.setState({ email: event.target.value })
  }

  submitRegister = () => {
    userService.registerUser({
      username: this.state.username,
      password: this.state.password,
      name: this.state.name,
      email: this.state.email
    })

  }

  submitLogin = () => {
    userService.userLogin({
      username: this.state.username,
      password: this.state.password
    })
      .then(response => {
        console.log(response)
        this.props.isLoggedIn();
      })
  }

  render = () => {
    return (
      <div className="row">
        <div className="col m6">
          <h4>BitBook Login</h4>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis quis consectetur consequuntur quibusdam eaque unde nihil ipsum recusandae saepe est provident vero, perferendis consequatur, odio et voluptas id velit nam corrupti exercitationem suscipit, accusantium magnam! Ducimus quos, beatae mollitia saepe laudantium magnam sit enim ullam, consequuntur, sint ad atque vitae placeat alias quaerat? Magni porro soluta praesentium unde. Rem nostrum, velit cum totam sunt dolores enim porro delectus necessitatibus nulla fuga minima minus excepturi iure suscipit magnam inventore molestias officiis illum voluptatum corrupti veniam qui. Doloremque veritatis consequatur ad cum nisi, saepe aliquid nostrum architecto esse itaque optio tenetur corrupti.
        </p>
          <p></p>
        </div>
        <Tabs className="col m6">
          <TabList className="row">
            <Tab className="col m6 btn">Register</Tab>
            <Tab className="col m6 btn">Login</Tab>
          </TabList>

          <TabPanel>
            <div>
              <label htmlFor="first_name">Name</label>
              <input id="first_name" type="text" className="validate" onChange={this.handleNameInput} />

              <label htmlFor="first_name">Username</label>
              <input id="user_name" type="text" className="validate" onChange={this.handleUserNameInput} />

              <label htmlFor="password">Password</label>
              <input id="password" type="password" className="validate" onChange={this.handlePasswordInput} />

              <label htmlFor="email">Email</label>
              <input id="email" type="email" className="validate" onChange={this.handleEmailInput} />
            </div>
            <a className="waves-effect waves-light btn right" onClick={this.submitRegister}><i className="material-icons left">airplanemode_active</i>button</a>
          </TabPanel>
          <TabPanel>
            <div>
              <label htmlFor="user_name">Username</label>
              <input id="user_name" type="text" className="validate" onChange={this.handleUserNameInput} />

              <label htmlFor="password">Password</label>
              <input id="password" type="password" className="validate" onChange={this.handlePasswordInput} />
            </div>
            <a className="waves-effect waves-light btn right" onClick={this.submitLogin}><i className="material-icons left">directions_run</i>button</a>
          </TabPanel>

        </Tabs>


      </div>
    )



  }

}



export default LoginPage;