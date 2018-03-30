import React, { Component } from 'react';

import { userService } from '../../services/userService';




class MyProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        this.userFetch();
    }

    userFetch = () => {
        userService.userFetch()
            .then((users) => {
                this.setState({
                    users: users,
                });
            });
        }
        

    render() {
        return (
            <div className="container">
                <div className="row" id="profile_page">
                    <div className="col s12 m12">
                        <p className="title center"><i className="large material-icons">face</i></p>
                        <h4 className="title center">Name Surname</h4>
                        <p className="title center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere officiis ipsa dignissimos ipsum pariatur, quasi eos quidem, qui fugit labore reiciendis deleniti autem neque voluptates libero at, magni dolore veniam!</p>
                    </div>

                    <div className="chipsici" >
                    <div className="chip right ">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/C_Train_%281985-1987%29.svg/768px-C_Train_%281985-1987%29.svg.png" alt="c letter" />
                        30 comments
                    </div>

                    <div className="chip ">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/C_Train_%281985-1987%29.svg/768px-C_Train_%281985-1987%29.svg.png" alt="c letter" />
                        15 posts
                    </div>
                    </div>

                    
                



                </div>
            </div>
        )
    }
}

export default MyProfilePage;