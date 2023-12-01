// Sections.jsx
import AddSection from "./AddSection"
import Section from "./Section"
import { useState } from "react"
export default function Sections(){
    const [headings, setSections] = useState([])
    function onClickHandler(heading){
        setSections([...headings, {heading: heading, id: crypto.randomUUID}])
    }
    return <>
        <h2>sections</h2>
        <AddSection callBack={onClickHandler}></AddSection>
        {headings.map((heading) => <Section heading={heading.heading} key={heading.id}/>)}
    </>
}