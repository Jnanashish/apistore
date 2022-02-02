import React from 'react';

// import css
import styles from './signupdash.module.css';
import addicon from "../../Image/addlogo.svg"

// impport components
import Signupform from '../../components/SignupForm/Singupform';

const Signup = () => {
    return (
        <div className={styles.dashboard}>
            <div className={styles.left} >
                <img src={addicon} className={styles.welcomeLogo} />
                <p className={styles.welcome}>
                    Welcome to your Dashboard
                </p>
                <p className={styles.welcomeText}>
                    Your uploaded APIs will be displayed here once you login to your account
                </p>
            </div>
            <div className={styles.right} ><Signupform/></div>
        </div>
    )
}

export default Signup;