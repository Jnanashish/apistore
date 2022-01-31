import React from 'react';

// import css
import styles from "./header.module.css"

import logo from "../../Image/logo.svg"
import { Link } from 'react-router-dom';

const Header = () => {
  return <div className = {styles.header}>
      <img src={logo} alt="Cuvette Logo"/>
      <Link to = "/signup">
        <button className = {styles.button}>Login/Signup</button>
      </Link>
      
  </div>;
}

export default Header;
