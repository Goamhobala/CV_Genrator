import { useState } from "react";
export default function OptionTicks(props){
    const [isChecked, setChecked] = useState(false);
    function checkHandler(){
        setChecked(isChecked => !isChecked);
        // !isChecked because the change has not been rendered yet
        props.callBack(props.optionName, !isChecked)
    }
    return  <>
        <input type="checkbox" className="checkbox" checked = {isChecked} onChange={checkHandler} />
        <label className="option">{props.optionName}</label>
    </>
}