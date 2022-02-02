/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';

// import css
import styles from "./header.module.css"

import logo from "../../Image/logo.svg"
import { Link } from 'react-router-dom';

import {isAuthenticated} from "../SigninForm/helper"

const Header = () => {
  	return(
        <div className={styles.navbar}>
            <div className={styles.left}>
				<Link to = "/">
					<img src={logo} className={styles.logo}/>
				</Link>
            </div> 
            <div className={styles.right}>
			{isAuthenticated() && (
				<Link to = "/#">
					<p className={styles.navtext}>My APIs</p>
				</Link>
			)}
			{isAuthenticated() && (
            	<Link to = "/#">
				<	p className={styles.navtext}>My Account</p>
				</Link>				
			)}
			{isAuthenticated() && (
            	<Link to = "/newapi">
					<button className={styles.btn}>+ New API</button>
				</Link>				
			)}
			{!isAuthenticated() && (
				<>
            	<Link to = "/signin">
					<p className={styles.navtext}>Signin</p>
				</Link>
            	<Link to = "/signup">
					<button className={styles.btn}>Signup</button>
				</Link>	
				</>			
			)}
            </div>
        </div>    
  	) 
}

export default Header;
