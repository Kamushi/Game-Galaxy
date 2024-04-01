
interface Props{
 imga: String;
}

function MyImgs(props:Props){
    return(
        <img src={"props.imga"}></img>
    )
}
export default MyImgs;