import'./jogos.css'
import MyButton from '../MyButton'
import helo3 from '../res/halo 3.jpg'
function halo3(){
    return(
        <div className='jogo'>
        <div className='jogo-img' style={{background: `url(${helo3})`, backgroundSize: `cover`}}></div>
        <div className='P'>
            <h1> Halo 3 </h1>
            <h2> 77.00 </h2>
            <h4>Você é um novo membro do esquadrão Noble que segue em uma missão no planeta Reach.</h4>
            <h4> Os acontecimentos são ligados a saga Master Chief.</h4>
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

export default halo3