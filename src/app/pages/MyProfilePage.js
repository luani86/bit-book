import React from 'react';

import {userService} from '../../services/userService';



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
        // console.log(users);
    }
    

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 m12">
                        <p className="title center"><i className="large material-icons">face</i></p>
                        <h4 className="title center">Name Surname</h4>
                        <p className="title center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere officiis ipsa dignissimos ipsum pariatur, quasi eos quidem, qui fugit labore reiciendis deleniti autem neque voluptates libero at, magni dolore veniam!</p>
                    </div>
                    <div className="col s12 m6">
                        <p className="num_of_posts right grey lighten-2"><span className=" blue lighten-2">C</span> 15 posts</p>
                    </div>
                    <div className="col s12 m6">
                        <p className="num_of_comments grey lighten-2"> <span className=" blue lighten-2">C</span> 30 comments</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyProfilePage;