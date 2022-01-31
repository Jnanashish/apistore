import React from 'react'
import styles from "./apicard.module.css";
import Photo from "../../Image/backgroundpic.png";

function Card() {
    return (
        <div className={styles.card}>
            <img src={Photo} className={styles.image} alt="pic"/> 
            <h1 className={styles.title}>Background Remove</h1> 
            <p className={styles.description}>The descriptipn of the API in quick brief and we will truncate it here and should contain three line</p>         
        </div>
    )
}

export default Card