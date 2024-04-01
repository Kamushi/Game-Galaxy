
import './App.css'
import MyButton from './MyButton'
import MyInput from './MyInput'
import './res/font-awesome-4.7.0/css/font-awesome.min.css'
import image from './res/Game galaxy.png'


function App() {
  return(
    <div className='Container'>
      <div className='Topo'>
      <div className='title'>
        {/* <MyTitle/> */}
        <img src={image} alt="imagem" />
      </div>
      <div className='Input'>
        <MyInput type='text' placeHolder='Procurar' largura='500px' fontSize='18px'/>
      </div>
      <div className='buttons'>
        <div className='buttonPesquisa'>
          <MyButton bgColor='white' altura='33px' largura='40px'><i className="fa fa-space-shuttle" aria-hidden="true"></i></MyButton>
        </div>
        <div className='buttonsExtras'>
          <MyButton bgColor='white' altura='33px' largura='40px'><i className="fa fa-shopping-cart" aria-hidden="true"></i></MyButton>
          <MyButton bgColor='white' altura='33px' largura='40px'><i className="fa fa-comments-o" aria-hidden="true"></i></MyButton>
          <MyButton bgColor='white' altura='33px' largura='40px'><i className="fa fa-user-circle" aria-hidden="true"></i></MyButton>
        </div>
      </div>
      </div>
      <div className='Center'>
        <div className='buttonsCatalogo'>
        <div className='a'>
        <MyButton bgColor='white' altura='100px' largura='100px'><h1></h1></MyButton>
        </div>
        <MyButton bgColor='white' altura='100px' largura='100px'><h1></h1></MyButton>
        <div className='b'>
        <MyButton bgColor='white' altura='100px' largura='100px'><i className="fa fa-space-shuttle" aria-hidden="true"></i></MyButton>
        </div>
        <div className='c'>
        <MyButton bgColor='white' altura='100px' largura='100px'><i className="fa fa-space-shuttle" aria-hidden="true"></i></MyButton>
        </div>
        </div>
        <div className='Ofertas'>
        <MyButton bgColor='white' altura='100px' largura='100px'><h1></h1></MyButton>
        </div>
      </div>
    </div>
  )
}

export default App
