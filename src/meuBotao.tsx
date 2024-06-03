import './meubotao.css'

import { ReactNode } from 'react';

interface Props{
    bgColor?: string;
    bgImg?: string;
    children: ReactNode;
    altura?: string;
    largura?:string;
}

function MyButton(props:Props){
    return(
        <button style={{background:`${props.bgColor}`, height:`${props.altura}`, width:`${props.largura}`,}}>{props.children}</button>
    )
}
export default MyButton