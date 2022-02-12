import React, {useState} from 'react';

import styles from "./addapi.module.css"
import {isAuthenticated} from "../SigninForm/helper"
import { API } from '../../backend';
import { useNavigate} from "react-router-dom";

// import react toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../Header/Header';

export default function Addapi() {
    const navigate = useNavigate()
    const [imgwarn, setImgwarn] = useState(false)
    const [filename, setFilename] = useState("Select API image")
    const [apiData, setApiData] = useState({
        title: "",
        desc: "",
        endpoint : "",
        github : "",
    });
    const [file, setFile] = useState({})
    const {title, desc, endpoint, github} = apiData
    const {user} = isAuthenticated();
    
    const handleChange = (e) => {
        const field = e.target.name;
        const val = e.target.value;
        setApiData({...apiData, [field]:val});
    }

    const formData = new FormData();
    const handleimginp = (e) =>{
        const file = e.target.files ;
        setFile(file[0])
        setFilename(file[0].name)
    }

    const handleSubmit = async (e) =>{
        
        e.preventDefault();
        formData.append("photo", file)
        formData.append("title", title)
        formData.append("desc", desc)
        formData.append("endpoint", endpoint)
        formData.append("github", github)
        formData.append("author", user._id)

        if(filename === "Select API image"){
            setImgwarn(true)
        } else {
            const res = await fetch(`${API}addapi`,{
                method : "POST",
                body : formData
            })

            if(res.status === 500){
                toast.error("An error Occured")   
            } else {  
                navigate('/')
                toast('API Data Added Successfully')
            }   
        }
    }

    return (
        <div>
        <Header/>
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
                    {imgwarn && 
                    <p className={styles.textwarn}>
                        *Please select a cover image for the api
                    </p>   
                    }      
                    <input onClick={handleSubmit} type="submit" value="Add API" className={styles.button} />
            </form>
            <ToastContainer />
        </div>  
        </div>    
    )
}
