import { useState } from "react";
export default function OptionTick(props){
    const [option, setOption] = useState(props.option);
    function checkHandler(){
        const updatedOption = {...option, checked:!option.checked}
        setOption(updatedOption)
        props.callBack(updatedOption)
    }
    return  <>
        <input type="checkbox" checked = {option.checked} onChange={checkHandler} />
        <label className="option">{props.option.optionName}</label>
    </>
}