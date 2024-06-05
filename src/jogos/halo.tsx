import'./jogos.css'
import MyButton from '../MyButton'
import helo from '../res/halo.jpg'
function halo(){
    return(
<div className='jogo'>
            {/* <a className='card' style={{background: `url(${Gfw})`, backgroundSize: `cover`}} href='/Gfw'/> */}
            <div className='jogo-img' style={{background: `url(${helo})`, backgroundSize: `cover`}}></div>
            <div className='P'>
                <h1> Halo Reach</h1>
                <h2> 55.00 </h2>
                <h4>Você é um novo membro do esquadrão Noble que segue em uma missão no planeta Reach. </h4>
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

export default halo