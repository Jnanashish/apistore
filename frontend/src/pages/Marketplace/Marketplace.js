import React from 'react';

// import css
import styles from './marketplace.module.css';

// import components
import Apicard from "../../components/Apicard/Apicard"
import Photo from "../../Image/backgroundremove.svg";

const Marketplace = () => {
    return (
        <div className={styles.dashboard}>
            <div className={styles.body}>
                <div className={styles.topcard}>
                <img src={Photo} alt="logo" className={styles.topcardphoto} />
                    <div className={styles.semicircle}>
                       
                    </div>
                    <h1 className={styles.toptext}>BACKGROUND IMAGE REMOVER</h1>
                    <h1 className={styles.bottomtext}>100% automatic and free</h1>
                    <buttom className={styles.viewButton}>View App</buttom>
                </div>

                <h2 className={styles.allAPI}>All APIs</h2>
                <div className={styles.cards}>
                    <Apicard className={styles.card}/>
                    <Apicard className={styles.card}/>
                    <Apicard className={styles.card}/>
                    <Apicard className={styles.card}/> 
                    <Apicard className={styles.card}/>
                    <Apicard className={styles.card}/> 
                    <Apicard className={styles.card}/>     
                </div>
            </div>
        </div>
    )
}

export default Marketplace;
