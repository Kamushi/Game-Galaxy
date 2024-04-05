
import './App.css'
import MyButton from './MyButton'
import MyInput from './MyInput'
import './res/font-awesome-4.7.0/css/font-awesome.min.css'
import image from './res/Game galaxy.png'
import mc4Image from './res/mc4.webp'
import godImage from './res/download.png'
import xboximage from "./res/640px-Xbox_one_logo.svg.jpg"
import mc5image from "./res/mc5.jpg"
import mc7image from "./res/mc7.jpg"
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
            <MyButton bgColor='white' altura='33px' largura='40px'><i className="fa fa-shopping-cart" aria-hidden="true"></i></MyButton>
            <MyButton bgColor='white' altura='33px' largura='40px'><i className="fa fa-comments-o" aria-hidden="true"></i></MyButton>
            <MyButton bgColor='white' altura='33px' largura='40px'><i className="fa fa-user-circle" aria-hidden="true"></i></MyButton>
          </div>
        </div>
      </div>
      <div className='Center'>
        <div className='buttonsCatalogo'>
         <div className='card' style={{background: `url(${mc4Image})`, backgroundSize: `cover`}}>
            {/* <MyButton bgColor='white' altura='100px' largura='150px'><h2>Todas Categorias</h2></MyButton> */}
          </div>
          <div className='card' style={{background: `url(${godImage})`, backgroundSize: `cover`}}>
           {/* <MyButton bgColor='white'  altura='100px' largura='100px'> */}
            
            {/* <h3>Playstation</h3> */}
           {/* </MyButton> */}
          </div>
          <div className='card'style={{background: `url(${xboximage})`, backgroundSize: `cover`}}>
           {/* <MyButton bgColor='white' altura='100px' largura='100px'><h2>Xbox</h2></MyButton> */}
         </div>
          <div className='card' style={{background: `url(${mc5image})`, backgroundSize: `cover`}}>
            {/* <MyButton bgColor='white' altura='100px' largura='100px'><h2>Nintendo</h2></MyButton> */}
          </div>
          <div className='card' style={{background: `url(${mc7image})`, backgroundSize: `cover`}}>
            {/* <MyButton bgColor='white' altura='100px' largura='150px'><h2>Ofertas</h2></MyButton> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
