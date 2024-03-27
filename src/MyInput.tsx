import'./MyInput.css'
// import'./App.css'

interface Props{
    type: string;
    placeHolder: string;
    largura:string;
    fontSize: string;
}

function MyInput(props:Props){
    return(
        <input type={props.type} placeholder={props.placeHolder} style={{width:`${props.largura}`, fontSize:`${props.fontSize}`}} />
    )

}

export default MyInput;