import User from "./entities"

class UserService {
    userFetch = () => {
        return fetch ("http://bitbookapi.azurewebsites.net/api/users")
            .then((response)=>{
                return response.json();
            })
            .then((results)=>{
                return results.map((user)=>{
                    return new User(user);
                })
            })
    }
}

export default UserService; 