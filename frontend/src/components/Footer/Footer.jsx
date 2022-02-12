import {useState, useEffect} from "react";

// import css
import styles from "./footer.module.css"

const Footer = () =>{
    const [count, setCount] = useState('')
    useEffect(()=>{ pageview();},[]) 

    const pageview = () =>{
        // page view 1 for production
        fetch('https://api.countapi.xyz/update/apistore/74bf8a0b-e90f-468f-8dd9-e93435236e50?amount=1')
        .then(res => res.json())
        .then((data) => {
            setCount(data.value)
        })
    }

    return(
        <div className={styles.footer}>
            <h2>Total Page view 👁️ {count}</h2>
            <h2>Made with ❤️ in India by <b><a href="https://www.linkedin.com/in/jnanashish/">@jsh</a></b></h2>
        </div>
    )
}

export default Footer;

