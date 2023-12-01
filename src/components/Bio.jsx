import Options from "./Options"
import InputInfo from "./InputInfo";
import { useState } from "react";
export default function Bio(){
    // First name and last name are always required
    const defaultInputs = [{id: crypto.randomUUID(), checked:true, optionName:"First Name"},
                           {id: crypto.randomUUID(), checked:true, optionName:"Last Name"}]
    // Other infos that are optional
    const optionalInputs =[{id: crypto.randomUUID(), checked:false, optionName: "Phone"},
                           {id: crypto.randomUUID(), checked:false, optionName: "Email"},
                           {id: crypto.randomUUID(), checked:false, optionName: "Location"},
                           {id: crypto.randomUUID(), checked:false, optionName: "Linkdin"},
                           {id: crypto.randomUUID(), checked:false, optionName: "Github"},
                           {id: crypto.randomUUID(), checked:false, optionName: "Instagram"}]

    // Only those with checked == true should have an input field
    const [inputs, setInputs] = useState(defaultInputs.concat(optionalInputs.filter(option => option.checked == true)))
    
    function selectedHandler(updatedOptions){
        const updatedInputs = defaultInputs.concat(updatedOptions.filter(option => option.checked == true))
        setInputs(updatedInputs)
    }
    return <>
         <h2> Bio </h2> 
         <Options className="options" callBack={selectedHandler} options={optionalInputs}></Options>
         {inputs
          .map((option) => <InputInfo title={option.optionName} key={option.id}/> )}
    </>

}