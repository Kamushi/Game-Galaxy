import MyButton from '../MyButton';
import './car.css'

function car(){
    return (
        <div className='body50'>
        <div className='text'>
        <h1> No momento o seu carrinho está vazio </h1>
        <h1> por favor escolha um jogo</h1>
        <div className='mb'>
            <MyButton>
             <a href='/'><h4>voltar para página principal</h4></a>
            </MyButton>
                </div>
            </div>
        </div>
    )

}

export default car;