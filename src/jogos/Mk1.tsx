import'./jogos.css'
import mk1 from '../res/mortal-kombat-1-key-art-vb944bnawzlk.webp'
import MyButton from '../MyButton'
function Mk1(){
    return(
        <div className='jogo'>
        <div className='jogo-img' style={{background: `url(${mk1})`, backgroundSize: `cover`}}></div>
        <div className='P'>
            <h1> Mortal Kombat 1 </h1>
            <h2> R$ 201.99</h2>
            <h4>Dando continuidade dos eventos de Aftermath, logo após de absorver os poderes de Raiden para derrotar Kronika, Liu Kang se torna um Deus e recria o universo baseado em suas próprias crença.</h4>
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

export default Mk1