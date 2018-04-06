import React from "react";
import { Link } from 'react-router-dom'
import { userService } from '../../services/userService';

const Header = () => {
    return (
        <div>
            <nav className="App-header">
                <div>
                    <span id="title">BitBook</span>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">

                        <li><Link to="/FeedListPage" className="nav-item nav-link active">Feed</Link></li>
                        <li><Link to="/PeopleList" className="nav-item nav-link active">People</Link></li>
                        <li><Link to='/MyProfilePage' className='header_text'>Profile</Link></li>
                        <li onClick={userService.logout}>Logout</li>

                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default Header;
