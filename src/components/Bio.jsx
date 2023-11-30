import Options from "./Options"
import InputInfo from "./InputInfo";
import { useState } from "react";
export default function Bio(){
    const [selected, setSelectted] = useState(["First Name", "Last Name"]);
    
    function selectedHandler(newSelected, checked){
        checked ? setSelectted([...selected, newSelected]) : setSelectted(selected.filter((select) => select != newSelected))
    }
    return <>
         <h2> Bio </h2>
         <Options className="options" callBack={selectedHandler}></Options>
         {selected.map((select) => <InputInfo title={select}/> )}
    </>

}