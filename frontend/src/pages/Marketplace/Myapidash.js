import React, {useState, useEffect} from 'react';

// import css
import styles from './marketplace.module.css';

// import components
import Apicard from "../../components/Apicard/Apicard"

import { API } from '../../backend';


import {isAuthenticated} from "../../components/SigninForm/helper"
import Header from '../../components/Header/Header';

const Myapidash = () => {
    const [apidata, setApidata] = useState([]);
    useEffect(() => {getapidata()}, [])
    const {user} = isAuthenticated();
    const getapidata = () =>{
        fetch(`${API}getapi`, {method : "GET"})
        .then((result) => result.json())
        .then(data => {
            setApidata(data)
        })
        .catch((err) => {
            console.log(err);
        });
    }

    return (
        <div>
        <Header/>
        <div className={styles.dashboard}>
            <div className={styles.body}>
            <h2 className={styles.text}>Welcome {user.email}</h2>
            <div className={styles.cards}>
            {apidata.map(item => {     
                return( (item.author === user._id && 
                ( 
                    <Apicard key={item._id} id={item._id} title={item.title} desc={item.desc} author={item.author} photo={item.photo} github={item.github} className={styles.card} delete={true}/>
                )
                ))

            })}
            </div>
        </div>     
        </div> 
        </div>
    )
}

export default Myapidash;
