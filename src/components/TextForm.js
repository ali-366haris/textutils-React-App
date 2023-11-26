import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    //setText ("write your text");
    const handleUpClick = ()=>{
        console.log("ur button was clicked" + text)
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("It is in upper case now", "success");
        
    }
    const handleDownClick = ()=>{
        console.log("ur button was clicked" + text)
        let newtext1 = text.toLowerCase();
        setText(newtext1)
        props.showAlert("It is in lower case now", "success");
        
    }
    const handleclearClick = ()=>{
        //console.log("ur button was clicked" + text)
        let newtext2 = '';
        setText(newtext2)
        props.showAlert("It is in cleared now", "success");
    }
    
    const handlesentenceClick = ()=>{
        //console.log("ur button was clicked" + text)
        if (text.length>0) {
            const newtext3 = text.charAt(0).toUpperCase( ) + text.slice(1);
            setText(newtext3)
            props.showAlert("It is in sentence case now", "success");
        }
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
        const toogle = document.getElementById('toggle')
        
        if (toogle.textContent === "Speak") {
            toogle.innerHTML = "Stop"
        }
        else {
            toogle.innerHTML = "Speak"
            if (toogle.innerHTML === "Speak"){
                window.speechSynthesis.cancel()
            }
        }
    }
    const handlecopyClick=()=>{
        console.log("It is copied");
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard ", "success");

    }
    const handleOnChange = (event)=>{
        console.log("On change")
        setText(event.target.value)
    }
   
    
  return (
    <>
   
    <div className='container' style={ {color: props.mode === 'dark'?  'white':'black'}} >
     <h1>{props.heading} </h1>
<div className ="mb-3">

  <textarea  className ="form-control" value={text} onChange={handleOnChange} style={ {backgroundColor: props.mode === 'dark'?  '#B9B4C7' : 'light'}} id="myBox" rows="8"></textarea>
</div>

<div className="d-grid gap-2 d-md-flex justify-content-md-center">
  <button  type="button" onClick={handleUpClick} className ="btn btn-dark">Convert to Uppercase</button>
  <button  type="button" onClick={handleDownClick} className ="btn btn-primary ">Convert to Lowercase</button>
  <button  type="button" onClick={handleclearClick}  className ="btn btn-success " >Clear text</button>
  <button type="submit" onClick={speak} className="btn btn-danger " id ="toggle">Speak</button>
  <button  type="button" onClick={handlesentenceClick}  className ="btn btn-warning " >Sentence case</button>
  <button  type="button" onClick={handlecopyClick}  className ="btn btn-info " >Copy text</button>
</div>

    </div>
    <div className="container my 4" style={ {color: props.mode === 'dark'?  'white':'black'}}>
       
        <h2 >Text Summary</h2>
        <p >{text.split(" ").length} <b style={ {color: props.mode === 'dark'?  'red':'blue'}}> Words </b>"&" {text.length} <b style={ {color: props.mode === 'dark'?  'red':'blue'}}>Characters</b></p>
        <p>{0.008*text.split(" ").length} <b style={ {color: props.mode === 'dark'?  'red':'blue'}}>Minutes to read</b> </p>
        <h2>Preview</h2>
        
        <p>{text.length>0? text: "Enter above to preview it here"}</p>
        
    </div>
    </>
  )
}
