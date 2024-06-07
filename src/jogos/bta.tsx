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
            <h4>Situada a um ano aós os eventos de Arkhan City, em que Batman,no auge, tem de </h4>
            <h4> enfrentar o super-vilão Espantalho que em uma ataque causou a evacuação da  cidade.</h4>
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

export default bat