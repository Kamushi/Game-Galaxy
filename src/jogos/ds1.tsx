import'./ds1.css'
import MyButton from '../MyButton'
import Ds1 from '../res/Dark_Souls_1_capa.png'
function ds1(){
    return(
        <div className='jogo'>
        <div className='jogo-img' style={{background: `url(${Ds1})`, backgroundSize: `cover`}}></div>
        <div className='P'>
            <h1> Drak souls  </h1>
            <h2> R$ 120.00 </h2>
            <h4>Onde o jogador assume oa vida de um morto vivo amaldiçoado </h4>
            <h4>que iniciou uma peregrinação para descrobrir o destino de sua espécie</h4>
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

export default ds1