
import './App.css'
import MyButton from './MyButton'
import MyInput from './MyInput'
import './res/font-awesome-4.7.0/css/font-awesome.min.css'
import image from './res/Game galaxy.png'
import todos from './res/mc4.webp'
import pspimage from './res/download.png'
import xboximage from "./res/640px-Xbox_one_logo.svg.jpg"
import bignimage from "./res/mc5.png.png"
import Cinquentaimage from "./res/mc7.png.png"
import ImagensBanner from './ImagensBanner'

function App() {
  return(
    <div className='container'>
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
            <MyButton bgColor='white' altura='33px' largura='40px'><i className="fa fa-comments-o" aria-hidden="true"></i></MyButton>
            <MyButton bgColor='white' altura='33px' largura='40px'><i className="fa fa-user-circle" aria-hidden="true"></i></MyButton>
          </div>
        </div>
      </div>
      <div className='Center'>
        <div className='buttonsCatalogo'>
         
          <a className='card' style={{background: `url(${todos})`, backgroundSize: `cover`}} href=''/>
          <a className='card' style={{background: `url(${pspimage})`, backgroundSize: `cover`}} href= ''/>
          <a className='card' style={{background: `url(${xboximage})`, backgroundSize: `cover`}} href='https://search.brave.com/images?q=xbox' />
          <a className='card' style={{background: `url(${bignimage})`, backgroundSize: `cover`}} href=''/>
          <a className='card' style={{background: `url(${Cinquentaimage})`, backgroundSize: `cover`}} href=''/>
        </div>
      </div>

      <ImagensBanner />
    </div>
  )
}

export default App
