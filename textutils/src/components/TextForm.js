import React, {useState} from 'react'


export default function TextForm(props) {
    const handleClickUpperCase = () => {
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handleOnChange = (event) => {
        console.log("Onchange was clicked")
        setText(event.target.value)
    }
    const [text, setText] = useState("Enter your text")
    return (
        <div>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                <button className="btn btn-primary" onClick={handleClickUpperCase}>Convert to UpperCase</button>
            </div>
        </div>

    )
}
