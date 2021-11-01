import React from 'react'
import { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("");
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
    const handleClearClick = () => {
        setText("");
    }
    const handleCopy = () => {
        console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        alert("Copied to Clipboard");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    return (
        <>
        <div className="container"> 
            <h1>{props.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters.</p>
            <p>{0.008*text.split(" ").length} minutes read.</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
