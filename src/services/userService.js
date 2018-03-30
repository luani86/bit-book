import User from "../entities/User";


class UserService {
    userFetch = () => {
        return fetch ("http://bitbookapi.azurewebsites.net/api/users", {
            
        method: "GET",
            headers: {
                'Content-Type': 'application/json',
                "Key": "bitbook",
                "SessionId": "7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94"
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
}

export const userService = new UserService(); 