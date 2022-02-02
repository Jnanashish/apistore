import React, {useState} from "react";
import styles from './signupform.module.css';
// import axios from 'axios';

import { signup } from "./helper";

export default function Signupform(){
    const [userData, setUserData] = useState({
        email: "",
        password: "",
        name : "",
        error : ""
    });
    const {email, name, password} = userData

    const handleChange = (e) => {
        const field = e.target.name;
        const val = e.target.value;

        setUserData({... userData, [field]:val});
    }

    const handleSubmit = () =>{
        event.preventDefault();
        setUserData({ ...userData, error: false }); 
        signup({ name, email, password })
        .then(data => {
            if (data.error) {
                setUserData({ ...userData, error: data.error});
            } else {
                setUserData({
                    ...userData,
                    name: "",
                    email: "",
                    password: "",
                    error: "",
                });
            }
        })
        .catch(console.log("Error in signup"));
    }

    return(
        <div className={styles.formContainer}>
            <form>
                <p className={styles.text}>Create your account</p>
                    <input type="text" value={userData.name} onChange={handleChange} name="name" placeholder="Enter your name" className={styles.input} />
                    <input type="email" value={userData.email} onChange={handleChange} name="email" placeholder="Email address" className={styles.input} />
                    <input type="password" value={userData.password} onChange={handleChange} name="password" placeholder="Password" className={styles.input} />
                    <input onClick={handleSubmit} type="submit" value="Signup" className={styles.button} />
            </form>
        </div>
    )
}


// onClick={handleRegister}
// onClick={handleLogin}