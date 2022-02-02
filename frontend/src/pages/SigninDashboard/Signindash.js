import React from 'react';

// import css
import styles from './signindash.module.css';
import addicon from "../../Image/addlogo.svg"

// impport components
// import Form from "../../components/SignupForm/Form"
import Signinform from '../../components/SigninForm/Signinform';

const Signindash = () => {
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
            <div className={styles.right} ><Signinform/></div>
        </div>
    )
}

export default Signindash;