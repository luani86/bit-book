import React, { Component } from 'react';
import {userService} from "../../services/userService"

class PeopleList extends Component {
    constructor(props) {
        super(props);
            this.state = {
                users: []
            }
    }

    componentDidMount = () => {
        userService.userFetch()
        .then((collectionOfUsers) => this.setState({users: collectionOfUsers}))
    }

    render = () => {

        
        return (
                <div>
                    {this.state.users.map((user) => {
                    return (<ul className="collection">
                    <li className="collection-item avatar">
                    {user.avatarUrl}
                    <span className="title">{user.name}</span>
                    <p>Short user description bla bla</p>
                    </li>
                    </ul>)
                  } 
                   )
                   }
                </div>)
            }
    
        }

    export default PeopleList;

    // return (
    //     <div>
    //          <nav>
    //             <div class="nav-wrapper">
    //             <form>
    //                 <div class="input-field">
    //                 <input id="search" type="search" required/>
    //                 <label class="label-icon" for="search"><i class="material-icons">search</i></label>
    //                 <i class="material-icons">close</i>
    //                 </div>
    //             </form>
    //             </div>
    //         </nav>





