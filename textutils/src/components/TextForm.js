import React, {useState} from 'react'


export default function TextForm(props) {
    const handleClickUpperCase = () => {
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handleClickLowerCase = () => {
        let newText = text.toLowerCase()
        setText(newText)
    }

    const handleOnChange = (event) => {
        console.log("Onchange was clicked")
        setText(event.target.value)
    }
    const [text, setText] = useState("Enter your text")
    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                <button className="btn btn-primary mx-2" onClick={handleClickUpperCase}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleClickLowerCase}>Convert to LowerCase</button>
            </div>
        </div>
        <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words & {text.length} characters</p>
            <p>{0.008 * text.split(" ").length } minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
            
        </>

    )
}
