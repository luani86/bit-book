import React from 'react';
import { userService } from '../../services/userService';


class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            user: []
        }
    }

    componentDidMount() {
        this.fetchUser(this.props);
    }

    fetchUser = (props) => {
        if (props.match.params.id) {
            this.userFetchById();
        } else {
            userService.myProfileFetch()
                .then(response => {
                    this.setState({
                        user: response
                    })
                })
        }
    }

    componentWillReceiveProps(nextProps) {
        this.fetchUser(nextProps);
    }

    userFetchById = () => {
        userService.userFetchById(this.props.match.params.id)
            .then((user) => {
                this.setState({
                    user: user,
                });
            });

    }

    render() {
        return (
            <div className="container">
                <div className="row" id="profile_page">
                    <div className="col s12 m12">
                        <div className="title center"><img width="50%" src={this.state.user.avatar} alt="avatar" /></div>
                        <h4 className="title center">{this.state.user.name}</h4>
                        <p className="title center">{this.state.user.description}</p>
                    </div>

                    <div className="chipsici" >
                        <div className="chip right ">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/C_Train_%281985-1987%29.svg/768px-C_Train_%281985-1987%29.svg.png" alt="c letter" />
                            {this.state.user.commentsCount} comments
                    </div>
                        {this.props.match.params.id ? "" : <p>Edit profile</p>}
                        <div className="chip ">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/C_Train_%281985-1987%29.svg/768px-C_Train_%281985-1987%29.svg.png" alt="c letter" />
                            {this.state.user.postsCount} posts
                    </div>
                    </div>






                </div>
            </div>
        )
    }
}

export default ProfilePage;