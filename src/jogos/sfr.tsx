import'./sfr.css'
import MyButton from '../MyButton'
import Sfr from '../res/Streets_of_Rage_4_-_Capa.jpg'
function sfr(){
    return(
<div className='jogo'>
        <div className='jogo-img' style={{background: `url(${Sfr})`, backgroundSize: `cover`}}></div>
        <div className='P'>
            <h1>  Streets of rage 4</h1>
            <h2> R$ 143.00</h2>
            <h4>Onde um novo sindicato do crime assuimiu o controle das ruas e da polícia, apenas você pode fazer algo. Traz gráficos inspirados em quadrinhos desenhados a mão, carreganhdo a ostalgia de uma vibe mais retro.  </h4>
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

export default sfr