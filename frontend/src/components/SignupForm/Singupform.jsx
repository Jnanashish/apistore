import React, {useState} from "react";
import styles from './signupform.module.css';
// import axios from 'axios';

import { signup } from "./helper";
// import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

// import react toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Signupform(){
    const [userData, setUserData] = useState({
        email: "",
        password: "",
        name : "",
        error : ""
    });
    const {email, name, password} = userData
    const navigate = useNavigate();
    const handleChange = (e) => {
        const field = e.target.name;
        const val = e.target.value;

        setUserData({... userData, [field]:val});
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        setUserData({ ...userData, error: false }); 
        signup({ name, email, password })
        .then(() => {
            setUserData({
                ...userData,
                name: "",
                email: "",
                password: "",
                error: "",
            });
            
            console.log("SUuc");
        })
        .catch(
            console.log("er"),

            navigate("/signin")
            // <Link to = "/signin"/>
            // toast.error("Error Sign up")
        );
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
            <ToastContainer/>
        </div>
    )
}


// onClick={handleRegister}
// onClick={handleLogin}