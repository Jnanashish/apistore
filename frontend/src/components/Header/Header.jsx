/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';

// import css
import styles from "./header.module.css"

import logo from "../../Image/logo.svg"
import { Link } from 'react-router-dom';

import {isAuthenticated, signout} from "../SigninForm/helper"

const Header = () => {

	const logout = () =>{
		signout()
		window.location.reload(false)
	}

  	return(
        <div className={styles.navbar}>
            <div className={styles.left}>
				<Link to = "/">
					<img src={logo} className={styles.logo} alt="company logo"/>
				</Link>
            </div> 
            <div className={styles.right}>
			{isAuthenticated() && (
				<Link to = "/myapi">
					<p className={styles.navtext}>My APIs</p>
				</Link>
			)}
			{isAuthenticated() && (
            	<Link to = "/myapi">
					<p className={styles.navtext}>My Account</p>
				</Link>				
			)}
			{isAuthenticated() && (
				<p onClick={logout} className={styles.navtext}><b>Log out</b></p>
							
			)}
			{isAuthenticated() && (
            	<Link to = "/newapi">
					<button className={styles.btn}>+ New API</button>
				</Link>				
			)}
			{!isAuthenticated() && (
				<>
            	{/* <Link to = "/signin">
					<p className={styles.navtext}>Signin / Signup</p>
				</Link> */}
            	<Link to = "/signin">
					<button className={styles.btn}>Signin / Signup</button>
				</Link>	
				</>			
			)}
            </div>
        </div>    
  	) 
}

export default Header;
