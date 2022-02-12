import React,{useEffect, useState} from 'react';

// import css
import styles from './marketplace.module.css';

// import components
import Apicard from "../../components/Apicard/Apicard"
import Photo from "../../Image/backgroundremove.svg";
import Header from '../../components/Header/Header';

import { API } from '../../backend';


// import data from local system
import { data } from '../../utils/Data/data';

const Marketplace = () => {
    const [apidata, setApidata] = useState([]);
    useEffect(() => {getapidata()}, [])

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
                {/* Background remover app example */}
                <div className={styles.topcard}>
                    <img src={Photo} alt="logo" className={styles.topcardphoto} />
                    <div className={styles.semicircle}>
                       
                    </div>
                    <div>
                    <h1 className={styles.toptext}>BACKGROUND IMAGE REMOVER</h1>
                    <h1 className={styles.bottomtext}>100% automatic and free</h1>
                    </div>

                    <buttom className={styles.viewButton}>View App</buttom>
                </div>
                {/* Api for public */}
                <h2 className={styles.text}>Important APIs</h2>
                <div className={styles.cards}>
                {data.map(item => {
                    return(  
                        <Apicard key={item._id} title={item.title} desc={item.desc} author={item.author} photo={item.photo} doclink={item.doclink} className={styles.card}/>
                    )
                })}
                </div>
                
                {/* Api uploaded by user  */}
                <h2 className={styles.text}>All APIs</h2>
                <div className={styles.cards}>
                {apidata.map(item => {
                    return(  
                        <Apicard key={item._id} title={item.title} desc={item.desc} author={item.author} photo={item.photo} github={item.github} className={styles.card}/>
                    )
                })}
                </div>
            </div>
            </div>
        </div>
    )
}

export default Marketplace;
