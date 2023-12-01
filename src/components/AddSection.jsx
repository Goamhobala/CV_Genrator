// AddSection.jsx
import { useState } from "react"
export default function AddSection(props){
    const [title, setTitle] = useState("")
    function inputHandler(e){
        setTitle(e.target.value)
    }
    function onClickHandler(){
        props.callBack(title)
        setTitle("")
    }
    return <>
    <h2>Title</h2>
    <input type="text" onChange={inputHandler} value={title}/>
    <button onClick={onClickHandler}>Add</button>
    </>
}