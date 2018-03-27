import React from "react";

const Header = () => {
    return (
        <div>
            <nav className="App-header">
                <div>
                <span id="title">BitBook</span>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a className='header_text'>Feed</a></li>
                    <li><a className='header_text'>People</a></li>
                    <li><a className='header_text'>Profile</a></li>
                </ul>
                </div>
        </nav>
    </div>
    )
}
export default Header; 