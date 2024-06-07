import MyButton from '../MyButton'
import MyInput from '../MyInput'
import './pagamento.css'
function Pagamento (){
    return(
        <div className='body01'>
            <div className='produto'>
                <h1>Carrinho</h1>
                <h3>Produto:</h3>
                <h3>Preço:</h3>
            </div>
            <div className='CEP'>
                    <h2>Adicione seu CEP:</h2>
                <div className='input'>
                    <MyInput type='' placeHolder='Digite seu CEP' largura='200px' fontSize='20px'  ></MyInput>
                </div>
                <div className='buttonadicionar'>
                    <button>Adicionar</button>
                </div>               
                <h2>Preço Total com frete:</h2>    
            </div>
            <div className='FormaP'>
                <h2>Selecine a forma de pagamento:</h2>
                <button>Pix</button>
                <button>Cartão</button>
                <button>Boleto</button>
                

            </div>
            <div className='buttonfinalizar'>
                    <MyButton>Finalizar Compra</MyButton>
                </div>
            
        </div>
    )
}

export default Pagamento