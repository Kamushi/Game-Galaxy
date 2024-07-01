import'./bta.css'
import MyButton from '../MyButton'
import Bta from '../res/batman-arkham-knight-bd-3.jpg'
function bat(){
    return(
        <div className='jogo'>
        <div className='jogo-img' style={{background: `url(${Bta})`, backgroundSize: `cover`}}></div>
        <div className='P'>
            <h1> Batman: Arkhan knight </h1>
            <h2> R$ 99.00</h2>
            <h4>Situada um ano após os eventos de Arkhan City, em que Batman, em seu auge, precisa</h4>
            <h4> enfrentar o super-vilão Espantalho que em uma ataque causou a evacuação da cidade.</h4>
            <div className='button2'>
                <MyButton>
                <a href='/Pagamento'> <p>comprar agora</p> </a>
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

export default bat