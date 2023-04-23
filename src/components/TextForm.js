import React, {useState} from 'react'

export default function TextForm(props) {
    const toupCase = ()=>{
        console.log("UpperCase was clicked");
        getText(text1.toUpperCase());
        console.log(text2);
    }

    const tolowCase = ()=>{
        console.log("LowerCase was clicked");
        getText(text1.toLowerCase());
        console.log(text2);
    }

    const wordCount = ()=>{
        console.log("Word Count was clicked");
        let str = text1.replace(/\s+/g,' ').trim();
        getText(str.split(" ").length);
        console.log(text2);
    }

    const removeSpaces = ()=>{
        console.log("Remove Unnecessary Spaces was clicked");
        getText(text1.replace(/\s+/g,' ').trim());
        console.log(text2);
    }

    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value);
    }

    const handleOnClick = ()=>{
        console.log("Text area Clicked");
        setText("");
    }

    const clearText = ()=>{
        console.log("Clear Text was clicked");
        setText("");
        getText("");
        props.toggleAlert("warning", "Text cleared");
    }

    const copyText = ()=>{
        console.log("Copy was clicked");
        navigator.clipboard.writeText(text2);
        props.toggleAlert("success", "Copied text successfully");
    }

    const [text1, setText] = useState("Enter text here");
    const [text2, getText] = useState("");

    return (
        <>    
        <div style={{backgroundColor : props.mode === 'light' ? 'white' : 'black'}}>
            <div>
                <div className="mb-3 my-4">
                <h2>{props.heading1}</h2>
                        <textarea className={`form-control text-${props.mode === 'light' ? 'dark' : 'light'}`} value={text1} style={{backgroundColor : props.mode === 'light' ? 'rgb(129, 173, 218)' : 'black'}} onClick={handleOnClick} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>

                    <div className='d-flex justify-content-center row-gap-3 flex-wrap'>
                        <button className="btn btn-primary mx-2" onClick={toupCase}>Upper Case</button>
                        <button className="btn btn-primary mx-2" onClick={tolowCase}>Lower Case</button>
                        <button className="btn btn-primary mx-2" onClick={wordCount}>Word Count</button>
                        <button className="btn btn-primary mx-2" onClick={removeSpaces}>Remove Unnecessary Spaces</button>
                        <button className="btn btn-danger mx-2" onClick={clearText}>Clear Text</button>
                    </div>
                    
                    <div className="mb-3 my-4">
                    <h2>{props.heading2}</h2>
                        <textarea className={`form-control text-${props.mode === 'light' ? 'dark' : 'light'}`} value = {text2} id="myBox" rows="8" style={{backgroundColor : props.mode === 'light' ? 'lightseagreen' : 'black'}}></textarea>
                        <button className="btn btn-success mx-2" onClick={copyText}>Copy</button>
                    </div>
            </div>
        </div>
        </>
    )
}