import React from 'react';
import { userService } from '../../services/userService';
import M from "materialize-css";

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

        var editProfile = document.querySelector('#modal11');
        this.instance11 = M.Modal.init(editProfile);
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

    showEditProfile = () => {
        this.instance11.open();
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

                        {this.props.match.params.id ? "" : <div> <a className="waves-effect waves-light btn modal-trigger" onClick={this.showEditProfile} href="#modal11">Modal</a>


                            <div id="modal11" className="modal modal-fixed-footer">
                                <div className="modal-content">
                                    <h5 className='title center'>Update profile</h5>
                                    <form action="#">
                                        <div className=" file-field input-field">
                                            <div className="btn col s2 offset-s4">
                                                <span>File</span>
                                                <input type="file"/>
                                            </div>
                                                <div className="file-path-wrapper">
                                                <input class="file-path validate" type="text"/> 
                                                </div>
                                        </div>
                                                <input type="text"/>
                                                <input type="text"/>
                                    </form>
                                        </div>
                                        <div className="modal-footer">
                                            <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat ">Agree</a>
                                        </div>
                            </div>
                                </div>}

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