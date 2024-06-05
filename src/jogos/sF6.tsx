
import './sF6.css'
import MyButton from '../MyButton'
import Sf6 from '../res/Street_Fighter_6_box_art.jpg'
function sF6(){
    return(
        
        <div className='jogo'>
        <div className='jogo-img' style={{background: `url(${Sf6})`, backgroundSize: `cover`}}></div>
        <div className='P'>
            <h1> Street fighter 6 </h1>
            <h2> R$ 190.00</h2>
            <h4>A trama aontece em um torneio mundial de artes marciais, </h4>
            <h4> mas no meio da copetição uma nova ameaça surge,  </h4>
            <h4>fazendo com que nossos heróis tenham que se juntar para derrota-lá.</h4>
            <div className='button2'>
                <MyButton>
                <p>comprar agora</p>
                </MyButton>
                <div className='button3'>
                    <MyButton>
                    <p>adicionar ao carrinho</p>
                    </MyButton>
                </div>
            </div>
        </div>
    </div>



)   
}

export default sF6