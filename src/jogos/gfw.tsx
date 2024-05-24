import './gfw.css'
import Gfw from '../res/God_of_War_Ragnarök_capa.jpg'
import MyButton from '../MyButton'


 function gfw(){
    return(
        <div className='jogo'>
            {/* <a className='card' style={{background: `url(${Gfw})`, backgroundSize: `cover`}} href='/Gfw'/> */}
            <div className='jogo-img' style={{background: `url(${Gfw})`, backgroundSize: `cover`}}></div>
            <div className='P'>
                <h1> God of War Ragnarök</h1>
                <h2> 201.99</h2>
                <h4>O jogo da início ao Ragnarok, uma série de eventos que trazem os fins dos tempos e retrata a morte de alguns dos deuses nórdico.</h4>
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

 export default gfw