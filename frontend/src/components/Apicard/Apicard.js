/* eslint-disable react/prop-types */
import React from 'react'
import styles from "./apicard.module.css";
// import Photo from "../../Image/backgroundpic.png";

import {API} from "../../backend"

// import react toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Card(props) {

    const deleteapi = (id) =>{
        fetch(`${API}/deleteapi/${id}`, { method: 'DELETE' })
        .then(() =>
            toast('Data Deleted Successfully')
        ) 
        .catch(() => {
            toast.error("An error Occured")
        })
    }
    return (
        <div className={styles.card}>
            <img src={props.photo} className={styles.image} alt="pic"/> 
            <h1 className={styles.title}>{props.title.slice(0,25)}</h1> 
            <p className={styles.description}>{props.desc.slice(0,90).concat(" . . .")}</p>
            {props.doclink && (
                <button className={styles.btn}>
                    <a href={props.doclink}>Documentation Link</a>
                </button>
            )}
            {props.github && (
                <button className={styles.btn}>
                    <a href={props.github}>Github Link</a>
                </button>
            )}
            {props.delete && (
                    <button onClick={() => deleteapi(props.id)} className={styles.deletebtn}>
                        <a href={props.github}>Delete</a>
                    </button>
                )
            }
            <ToastContainer />             
        </div>
    )
}

export default Card