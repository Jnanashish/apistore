import React, {useState} from 'react';

import styles from "./addapi.module.css"
import {isAuthenticated} from "../SigninForm/helper"
import { API } from '../../backend';
import { Navigate } from 'react-router-dom';

export default function Addapi() {
    const [filename, setFilename] = useState("Select API image")
    const [apiData, setApiData] = useState({
        title: "",
        desc: "",
        endpoint : "",
        github : ""
    });
    const {title, desc, endpoint, github} = apiData
    const {user} = isAuthenticated();

    const handleChange = (e) => {
        const field = e.target.name;
        const val = e.target.value;
        setApiData({... apiData, [field]:val});
    }

    const formData = new FormData();
    const handleimginp = (e) =>{
        const file = e.target.files ;
        setFilename(file[0].name)
        formData.append('photo', file[0]);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        formData.append("title", title)
        formData.append("desc", desc)
        formData.append("endpoint", endpoint)
        formData.append("github", github)
        formData.append("author", user._id)

        const res = fetch(`${API}/jd/add`,{
            method : "POST",
            body : formData
        })

        if(res.status === 201){
            <Navigate  to = "/"/>
        } else {
            alert("An error Occured")
            // toast.error("An error Occured")
        }
    }

    return (
        <div className={styles.formContainer}>
            <form>
                <p className={styles.text}>Add a new API</p>
                    <input 
                        type="text" 
                        value={apiData.name} 
                        onChange={handleChange} 
                        name="title" 
                        placeholder="Api Name" 
                        className={styles.input}                    
                    />
                    <textarea 
                        placeholder="Short description of the api" 
                        value={apiData.desc}  
                        name="desc" 
                        onChange={handleChange}
                    />
                    <input 
                        type="text" 
                        value={apiData.github} 
                        onChange={handleChange} 
                        name="github" 
                        placeholder="Github Link" 
                        className={styles.input} 
                    />
                    <input 
                        type="text" 
                        value={apiData.endpoint} 
                        onChange={handleChange} 
                        name="endpoint" 
                        placeholder="Api end point" 
                        className={styles.input}
                    />
                    <div className={styles.fileinput}>
                        <input 
                            onChange = {handleimginp} 
                            type="file" 
                            id="file" 
                            className={styles.file}          
                        />
                        <label className={styles.label} htmlFor="file">{filename}</label>
                    </div>           
                    <input onClick={handleSubmit} type="submit" value="Add API" className={styles.button} />
            </form>
        </div>      
    )
}
