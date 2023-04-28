import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Upper case was clicked");
        setText(text.toUpperCase());
    }
    const handleLoClick = () =>{
        // console.log("Lower case was clicked");
        setText(text.toLowerCase());
    }
    const handleclrClick = () =>{
      // console.log("Lower case was clicked");
      setText("");
    }
    const handleextraspaces = () =>{
      let newtext=text.split(/[ ]+/)
      setText(newtext.join(" "));
    }
    const handleOnChange = (e) =>{
        // console.log("Upper case was change");
        setText(e.target.value);
    }
    const [text, setText] = useState('Enter text here');
  return (
    <>
      <div className='container'>
          <h1>{props.heading}</h1>
        <div className="mb-3">    
          <textarea className="form-control" id="mybox" value={text} onChange={handleOnChange} rows="8"></textarea>
       </div>
       <button  className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to upper case</button>
       <button  className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lower case</button>
       <button  className="btn btn-primary mx-2" onClick={handleextraspaces}>Remove extra spaces</button>
       <button  className="btn btn-primary mx-2" onClick={handleclrClick}>Clear text</button>
      </div>
      <div className='container my-2'>
        <h2>Your Text Summary</h2 >
        <p>{text.split(" ").length } words and {text.length} character</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  )
}
