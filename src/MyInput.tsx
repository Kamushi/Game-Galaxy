import'./MyInput.css'
import'./App.css'

interface Props{
    type: string;
    placeHolder: string;
}

function MyInput(props:Props){
    return(
        <input type={props.type} placeholder={props.placeHolder} />
    )

}

export default MyInput;