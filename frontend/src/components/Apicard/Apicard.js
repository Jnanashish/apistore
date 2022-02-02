/* eslint-disable react/prop-types */
import React from 'react'
import styles from "./apicard.module.css";
// import Photo from "../../Image/backgroundpic.png";

function Card(props) {
    return (
        <div className={styles.card}>
            <img src={props.photo} className={styles.image} alt="pic"/> 
            <h1 className={styles.title}>{props.title}</h1> 
            <p className={styles.description}>{props.desc}</p>
            {props.doclink && (
                <button>
                    <a href={props.doclink}>Documentation Link</a>
                </button>
            )}
            {props.githublink && (
                <button>
                    <a href={props.githublink}>Github Link</a>
                </button>
            )}
                      
        </div>
    )
}

export default Card