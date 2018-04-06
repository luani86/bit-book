import User from "../entities/User";
import MyProfile from '../entities/MyProfile';

class UserService {
    userFetch = () => {
        return fetch ("http://bitbookapi.azurewebsites.net/api/users", {
            
        method: "GET",
            headers: {
                'Content-Type': 'application/json',
                "Key": "E23584A",
                "SessionId": "00000000-0000-0000-0000-000000000000"
            }
        
            }).then((response)=>{
        

                return response.json();
            })
            .then((results)=>{
                return results.map((user)=>{
                    return new User(user);
                })
            })
    }
    userFetchById = (id) => {
        return fetch ("http://bitbookapi.azurewebsites.net/api/users/"+ id, {
            
        method: "GET",
            headers: {
                'Content-Type': 'application/json',
                "Key": "E23584A",
                "SessionId": "00000000-0000-0000-0000-000000000000"
            }
        
            }).then((response)=>{
        

                return response.json();
            })
            .then((results)=>{
                    return new User(results);
                })
        
    }

    myProfileFetch = () => {
        return fetch ("http://bitbookapi.azurewebsites.net/api/profile", {
            
        method: "GET",
            headers: {
                'Content-Type': 'application/json',
                "Key": "E23584A",
                "SessionId": "00000000-0000-0000-0000-000000000000"
            }
        
            }).then((response)=>{
                return response.json();
            })
            .then((results) => {
                return new MyProfile(results)
            })
    }

    editProfile = (userInfo) => {
        return fetch("http://bitbookapi.azurewebsites.net/api/Profiles", {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'Key': 'E23584A',
                "SessionId": "00000000-0000-0000-0000-000000000000"
            },
            body: JSON.stringify({
                name: userInfo.nameContent,
                email: "blabla@gmail.com",
                aboutShort: userInfo.descriptionContent,
                about: userInfo.descriptionContent,
                avatarUrl: userInfo.avatarContent
            })
        })
            
    }

    registerUser = (registerData) => {
        return fetch('http://bitbookapi.azurewebsites.net/api/register', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Key': 'E23584A'
            },
            body: JSON.stringify({
                username: registerData.username,
                password: registerData.password,
                name: registerData.name,
                email: registerData.email
            })
        })
    }
    userLogin = (userData) => {
        return fetch('http://bitbookapi.azurewebsites.net/api/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Key': 'E23584A'
            },
            body: JSON.stringify({
                username: userData.username,
                password: userData.password
            })
        })
            .then(response => {
                return response.json();
            })
            .then(response => {
                sessionStorage.setItem('sessionId', response.sessionId)                
            })
    }

    getSessionId() {

    }

}




export const userService = new UserService(); 