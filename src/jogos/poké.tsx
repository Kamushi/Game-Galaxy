import'./poké.css'
import MyButton from '../MyButton'
import poke from '../res/Pokemon-Scarlet-Violet-Scrn12072022.jpg'
function poké(){
    return(
        <div className='jogo'>
        <div className='jogo-img' style={{background: `url(${poke})`, backgroundSize: `cover`}}></div>
        <div className='P'>
            <h1> Pokemo Scarlet </h1>
            <h2> R$ 274.00</h2>
            <h4>O jogo se passa na região de Paldea, localizada na Península Ibérica. Existem três histórias separadas, apresenta 103 novos Pokémons, juntamente com 4 novas formas regionais e o fenômeno Terastal.</h4>
            <div className='button2'>
                <MyButton>
                <p>comprar agora</p>
                </MyButton>
                <div className='button3'>
                    <MyButton>
                    <p>adicionar ao carrinho</p>
                    </MyButton>
                    <div className=''>

                    </div>
                </div>
            </div>
        </div>
    </div>

)   
}

export default poké