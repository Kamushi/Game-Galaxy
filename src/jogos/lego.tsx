import'./jogos.css'
import MyButton from '../MyButton'
import Logo from'../res/lego.webp'

function lego(){
    return(
<div className='jogo'>
        <div className='jogo-img' style={{background: `url(${Logo})`, backgroundSize: `cover`}}></div>
        <div className='P'>
            <h1> Lego Star Wars: Skywalker saga (2021)</h1>
            <h2> R$ 122.00</h2>
            <h4>É um jogo de aventura e ação que abrange toda a saga cinematográfica de star wars, desde A smeaça  Fantasma até a Ascensão Skywalker.</h4>
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

export default lego