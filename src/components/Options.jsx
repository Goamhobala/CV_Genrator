import OptionTick from "./OptionTick"
import { useState } from "react"
export default function Options(props){
    const [options, setOptions] = useState(props.options)
    function checkBoxHandler(updatedOption){
        // Change the checked property
        const updatedOptions = options.map((option) => (option.id == updatedOption.id 
                                        ? {...option, checked: !option.checked}
                                        : option))
        setOptions(updatedOptions)
        props.callBack(updatedOptions)
    }
    return <>
        {options.map((option) => <OptionTick callBack={checkBoxHandler} key={option.id} option={option}/>)}
    </>

}