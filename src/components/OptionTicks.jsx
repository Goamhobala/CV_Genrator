export default function OptionTicks(props){
    return  <>
        <input type="checkbox" className="checkbox" />
        <span className="option">{props.optionName}</span>
    </>
}