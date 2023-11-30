import OptionTicks from "./OptionTicks"
// import { useState } from "react"
export default function Options(props){
    // const [checked, setCheck] = useState([])
    function checkBoxHandler(newSelected, checked){
        props.callBack(newSelected, checked)
    }
    return <>
        <OptionTicks callBack={checkBoxHandler} optionName="Phone" ></OptionTicks>
        <OptionTicks callBack={checkBoxHandler} optionName="Email"></OptionTicks>
        <OptionTicks callBack={checkBoxHandler} optionName="Location"></OptionTicks>
        <OptionTicks callBack={checkBoxHandler} optionName="Linkdin"></OptionTicks>
        <OptionTicks callBack={checkBoxHandler} optionName="Github"></OptionTicks>
        <OptionTicks callBack={checkBoxHandler} optionName="Instagram"></OptionTicks>
    </>

}