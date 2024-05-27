import'./jogos.css'
import MyButton from '../MyButton'
import heloi from '../res/halo infinite.jpg'
function haloi(){
    return(
        <div className='jogo'>
        <div className='jogo-img' style={{background: `url(${heloi})`, backgroundSize: `cover`}}></div>
        <div className='P'>
            <h1> Halo Infinite  </h1>
            <h2> 50.00 </h2>
            <h4>"Quando toda a esperança foi perdida eo destino da humanidade está em risco, o Master Chief está pronto para encarar o inimigo mais cruel que já enfrentou." Se passa após Halo 5::Guardians e Halo Wars 2..</h4>
            <div className='button2'>
                <MyButton>
                <p>comprar agora</p>
                </MyButton>
                <div className='button2'>
                    <MyButton>
                    <p>adicionar ao carrinho</p>
                    </MyButton>
                </div>
            </div>
        </div>
    </div>

)   
}

export default haloi