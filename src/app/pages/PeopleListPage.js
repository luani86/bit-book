import React, { Component } from 'react';
import { userService } from "../../services/userService"
import {Link} from 'react-router-dom'


class PeopleList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            inputValue: ""
        }
    }

    componentDidMount = () => {
        userService.userFetch()
            .then((collectionOfUsers) => this.setState({ users: collectionOfUsers}))
    }

    handleChange = (event) => {
        this.setState({inputValue: event.target.value})
     }
      
    render = () => {


        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <form>
                            <div className="input-field">
                                <input id="search" type="search"  onChange={this.handleChange} value={this.state.inputValue} />
                                <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                                <i className="material-icons">close</i>
                            </div>
                        </form>
                    </div>
                </nav>
                {this.state.users.filter((user)=>{
                    return user.name.toLowerCase().indexOf(this.state.inputValue.toLowerCase()) >= 0;
                }).map((user) => {
                    return (<ul className="collection">
                    <Link to={`/ProfilePage/${user.userId}`}>
                    <li className="collection-item avatar">
                    <img width="100px"src={user.avatar}/>
                    <span className="title">{user.name}</span>
                    <p>{user.description}</p>
                    </li>
                    </Link>

                       
                    </ul>)
                }
                )
                }
            </div>)
    }

}

export default PeopleList;




