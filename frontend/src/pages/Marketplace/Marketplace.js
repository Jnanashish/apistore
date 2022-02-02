import React from 'react';

// import css
import styles from './marketplace.module.css';

// import components
import Apicard from "../../components/Apicard/Apicard"
import Photo from "../../Image/backgroundremove.svg";

// import data from local system
import { data } from '../../utils/Data/data';

const Marketplace = () => {
    return (
        <div className={styles.dashboard}>
            <div className={styles.body}>
                {/* Background remover app example */}
                <div className={styles.topcard}>
                <img src={Photo} alt="logo" className={styles.topcardphoto} />
                    <div className={styles.semicircle}>
                       
                    </div>
                    <h1 className={styles.toptext}>BACKGROUND IMAGE REMOVER</h1>
                    <h1 className={styles.bottomtext}>100% automatic and free</h1>
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
                    {/* <Apicard className={styles.card}/>
                    <Apicard className={styles.card}/>
                    <Apicard className={styles.card}/>
                    <Apicard className={styles.card}/> 
                    <Apicard className={styles.card}/>
                    <Apicard className={styles.card}/> 
                    <Apicard className={styles.card}/>*/}
                </div>
            </div>
        </div>
    )
}

export default Marketplace;
