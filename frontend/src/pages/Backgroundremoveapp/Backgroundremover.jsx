import React, {useRef, useState, useEffect}  from 'react'

import styles from "./backgroundremover.module.css"
import backgroundremove from "../../Image/backgroundremove.svg"
import addimage from "../../Image/addimage.svg"
import {useDropzone} from "react-dropzone";
import Header from '../../components/Header/Header'
const axios = require('axios');

const formData = new FormData();



const Backgroundremover = () => {
    const fileInputRef = useRef();
    const [image, setImage] = useState(null);
    const [afterimage, setafterImage] = useState(null);
    const [preview, setPreview] = useState("");

    const {getRootProps, getInputProps} = useDropzone({
    	accept:"image/*",
    	onDrop:(file)=>{
    	  	if(file.length>1){
    	    	setImage(null);
    	    	return alert("Only one file can be uploaded at once");
    	  	} else if(file[0].size>4999999){
    	    	setImage(null);
    	    	return alert("File size should be less than 5mb");
    	  	} else {
    	    	setImage(file[0]);
    	  	}
    	},
    });


  	useEffect(()=>{
    	if(afterimage){
      		setPreview("data:image/png;base64," + afterimage);
    	} else if(image){
      		const reader = new FileReader();
      		reader.onloadend = () =>{
				const temp = reader.result;
        		setPreview(temp);

				const imageData = temp.substring(temp.indexOf(",") + 1);
  				formData.append("size", "auto");
  				formData.append("image_file_b64", imageData);

    			const headers = { 
      				"X-Api-Key": process.env.REACT_APP_REMOVEBG_API,
      				Accept: "application/json",
    			};		
				axios.post("https://api.remove.bg/v1.0/removebg", formData, {headers})
				.then(res => {
					setafterImage(res.data.data.result_b64);
				})
				.catch(err => {
					console.log(err);
				})
        }
        reader.readAsDataURL(image);
        } else { 
       		setPreview(null);
    	}
  	}, [image, afterimage]);

return (
	<div>
	<Header/>
    <div className={styles.container}>
        <div className={styles.leftside}>
        <div className={styles.leftContainer}>
        	<div className={styles.header}>Remove image background</div>
          	<div className={styles.text}>100% automatic and free</div>
          	<div className={styles.imgContainer}>
            	<img src={backgroundremove} alt="Background remove" />
         	</div>
        </div>
      	</div>
    	<div className={styles.rightside}>
        <div>
			{image && !afterimage && <h3 className='styles.msg'>Removing background ..... </h3>}
            {preview ? (
            <div className={styles.Card} >
      		<img
			  	className={styles.previewimage}
      			src={preview}
				alt="Preview for user"
      		/>
      		<button onClick={()=>{
        		setImage(null);
        		setafterImage(null);
      		}} className = {styles.removebtn}>
			  	Remove image
      		</button>
      		{afterimage && (
        		<a	
                   href={`data:image/png; base64, ${afterimage}`}
                   download={"Image.png"}
                   className={styles.downloadbtn}
                >
                  Download Image
                </a>
      		)}
      		</div>
    		):(
      			<div className={styles.Card} {...getRootProps()}>
      			<img className={styles.addimagebtn} alt="upload by user" src={addimage} />
      			<p className={styles.textTop}>File should be png, jpg and <br /> less than 5mb</p>
      			<button type="submit" name="button"
		  			className={styles.formButton}
      				onClick={(e)=>{
          				e.preventDefault();
          				fileInputRef.current.click();
        			}}>Upload Image<span> &#8594;</span>
				</button>
      			
				<input type="file" style={{display:"none"}} ref={fileInputRef} accept="image/*"
      				{...getInputProps()}
      				onChange={
        			(event) =>{
          				const file=event.target.files[0];
						console.log(file);
          				if(file){
            				if(!file.type.includes("image")){
              					setImage(null);
              					return alert("File format must be .jpeg, .png, .jpg");
            				} else if(file.size>4999999){
              					setImage(null);
             			 		return alert("File size should be less than 5mb");
            				} else {
             				 	setImage(file);
            				}
          				} else {
           					setImage(null);
          				}
       				}}/>
        		<p className={styles.drop}>Or drop a file</p>
    		</div>
			)}
    	</div>
    </div>
    </div>
    </div>
)}

export default Backgroundremover