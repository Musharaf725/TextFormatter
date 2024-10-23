import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick =()=>{
        // console.log("Uppere case was clicked" + text);
        let newText= text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!","success");
    }

    const handleLoClick =()=>{
      // console.log("Uppere case was clicked" + text);
      let newText= text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to Lowercase!","success");
    }

    const handleClearClick =()=>{
      // console.log("Uppere case was clicked" + text);
      let newText='';
      setText(newText)
      props.showAlert("Text Cleared!","success");
    }

    const handleCopy=()=>{
      var text=document.getElementById("mybox")
      text.select();
      navigator.clipboard.writeText(text.value);
      document.getSelection().removeAllRanges();
      props.showAlert("Copied to Clipboard!","success");
    }

    const handleSpace=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Extra spaces removed!","success");
    }

    const handleOnchange =(event)=>{
        // console.log("On change");
        setText(event.target.value)
    }
    const [text, setText] = useState("");
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <label htmlFor="myBox" className="form-label">Example textarea</label>
        <textarea className="form-control" value={text} onChange={handleOnchange} style={{background: props.mode==='dark'?'#13466e':'white',
        color: props.mode==='dark'?'white':'black'}} id="mybox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>ClearText</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>CopyText</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleSpace}>DeleteExtraSpace</button>
    </div>
    <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
      <h3>Your text summary</h3>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.08 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
