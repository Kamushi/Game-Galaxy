import'./jogos.css'
import MyButton from '../MyButton'
import Ts from '../res/Nova_capa_de_The_Sims_4.png'
function TS(){
    return(
        <div className='jogo'>
        <div className='jogo-img' style={{background: `url(${Ts})`, backgroundSize: `cover`}}></div>
        <div className='P'>
            <h1> The Sims Sims </h1>
            <h2> R$ 39.99</h2>
            <h4>Nesse jogo não tem objetivo ou histótia, </h4>
            <h4>sendo a graça poder criar sua própria vida e viver.</h4>
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

export default TS