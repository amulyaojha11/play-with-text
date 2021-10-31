import React from 'react'
import { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("Enter the text here");
    const handleOnChange = (event) =>{
        // console.log("Event Changed");
        setText(event.target.value);
    }
    const handleUpClick = () => {
        // console.log("handleUpClick clicked");
        const upText = text.toUpperCase();
        setText(upText);
    }
    const handleLowClick = () => {
        // console.log("handleUpClick clicked");
        const lowText = text.toLowerCase();
        setText(lowText);
    }
    return (
        <div> 
            <h1>{props.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-3" onClick={handleLowClick}>Convert to Lowercase</button>
        </div>
    )
}
