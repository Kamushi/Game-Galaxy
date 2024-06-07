import MyButton from '../MyButton';
import './car.css'

function car(){
    return (
        <div className='text'>
        <h1> no noneto o seu carrinho esta  vazio </h1>
        <h1> por favor escolha um jogo</h1>
        <div className='mb'>
            <MyButton>
             <a href='/'><h4> página principai </h4></a>
            </MyButton>
        </div>
        </div>
    )

}

export default car;