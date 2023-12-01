import Options from "./Options"
import InputInfo from "./InputInfo";
import { useState } from "react";
export default function Bio(){
    const [options, setOptions] = useState([{id: crypto.randomUUID(), optionName:"First Name", checked:true}, 
                                            {id: crypto.randomUUID(), optionName:"Last Name", checked:true},
                                            {id: crypto.randomUUID(), checked:false, optionName: "Phone"},
                                            {id: crypto.randomUUID(), checked:false, optionName: "Email"},
                                            {id: crypto.randomUUID(), checked:false, optionName: "Location"},
                                            {id: crypto.randomUUID(), checked:false, optionName: "Linkdin"},
                                            {id: crypto.randomUUID(), checked:false, optionName: "Github"},
                                            {id: crypto.randomUUID(), checked:false, optionName: "Instagram"}]);
    
    function selectedHandler(updatedOptions){
        setOptions(updatedOptions)
    }
    return <>
         <h2> Bio </h2> 
         <Options className="options" callBack={selectedHandler} options={options}></Options>
         {options
          .filter((option) => option.checked == true)
          .map((option) => <InputInfo title={option.optionName} key={option.id}/> )}
    </>

}