// Section.jsx
import { useState } from "react"
import SubSection from "./SubSection"
export default function Section(props){
    const [subSections, setSubSections] = useState([<SubSection key={crypto.randomUUID()}/>])
    function addHandler(){
        setSubSections([...subSections, <SubSection key={crypto.randomUUID()}/>])
    }
    function deleteHandler(){
        setSubSections([...subSections.slice(0, -1)])
    }

    return <>
        <h2>{props.heading}</h2>
        <button onClick={deleteHandler}>X</button>
        <button onClick ={addHandler}>Add</button>
        {subSections}
    </>
}