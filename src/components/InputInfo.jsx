export default function InputInfo(props){
    return <>
        <h3>{props.title}</h3>
        <input type="text" name={props.title} key={crypto.randomUUID} />
    </>
}