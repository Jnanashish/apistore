/* eslint-disable no-mixed-spaces-and-tabs */
import React, {useState} from "react";
import styles from './signinform.module.css';
// import axios from 'axios';

import { Navigate  } from "react-router-dom";
import { signin, authenticate, isAuthenticated } from "./helper";

const Signinform = () => {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
        error : ""
    });
    const {email, password} = userData
    const {user} = isAuthenticated();

    console.log(user);

    const handleChange = (e) => {
        const field = e.target.name;
        const val = e.target.value;

        setUserData({...userData, [field]:val});
    }

    const performredirect = () => {
        if(user){
            return <Navigate  to = "/"/>
        }
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        setUserData({ ...userData, error: false });

        signin({email, password})
        .then(data => {
            if (data.error) {
                setUserData({ ...userData, error: data.error});
            } else {
		        authenticate(data, () => {
			        setUserData({
			            ...userData,
			        });
		        });
            }
        })
        .catch(console.log("Sign in request failed"));
    }

    return(
        <div className={styles.formContainer}>
            <form>
                <p className={styles.text}>Login to your account</p>
                    <input type="email" value={userData.email} onChange={handleChange} name="email" placeholder="Email address" className={styles.input} />
                    <input type="password" value={userData.password} onChange={handleChange} name="password" placeholder="Password" className={styles.input} />
                    <input onClick={onSubmit} type="submit" value="Signin" className={styles.button} />
                    <a href="/signup" className={styles.signuptext}>
                        Create a New account !
                    </a>
            </form>
            {performredirect()}
        </div>
    )
}

export default Signinform;
