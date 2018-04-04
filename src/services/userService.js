import User from "../entities/User";


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
}


export const userService = new UserService(); 