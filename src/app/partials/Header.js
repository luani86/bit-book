import React from "react";
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <div>
            <nav className="App-header">
                <div>
                <span id="title">BitBook</span>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a className='header_text'>Feed</a></li>
                    <li><a className='header_text'>People</a></li>
                    <li><Link to='/MyProfilePage' className='header_text'>Profile</Link></li>
                </ul>
                </div>
        </nav>
    </div>
    )
}
export default Header; 