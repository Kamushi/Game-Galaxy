    import './jogos.css'
    import MyButton from '../MyButton'
    import Gfw from '../res/God_of_War_Ragnarök_capa.jpg'



        function gfw(){
            return(
                <div className='jogo'>
                    <div className='jogo-img' style={{background: `url(${Gfw})`, backgroundSize: `cover`}}></div>
                    <div className='P'>
                        <h1>God of War Ragnarök</h1>
                        <h2>201.99</h2>
                    <h4> O jogo dá início ao Ragnarok, uma série de eventos que trazem os</h4>
                    <h4>fins dos tempos e retrata a morte de alguns dos deuses nórdicos. </h4>
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

 export default gfw