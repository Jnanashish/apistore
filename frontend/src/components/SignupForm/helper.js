import {API} from "../../backend"

// Sign up method
export const signup = user =>{
    return fetch(`${API}signup`, {
        method : "POST",
        headers : {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body : JSON.stringify(user)
    }) 
    .then(response => {
        return response.status;
    }).catch(() =>{
        return 500;
    });
}