
import './App.css'
import MyButton from './MyButton'
import MyInput from './MyInput'
import './res/font-awesome-4.7.0/css/font-awesome.min.css'

function App() {
  return(
    <div className='Topo'>
      <div className='Input'>
        <MyInput type='text' placeHolder='Procurar' largura='500px' fontSize='18px'/>
      </div>
      <div className='buttons'>
        <div className='buttonPesquisa'>
          <MyButton bgColor='white' altura='33px' largura='40px'><i className="fa fa-space-shuttle" aria-hidden="true"></i></MyButton>
        </div>
        <div className='buttonsExtras'>
          <MyButton bgColor='white' altura='33px' largura='40px'><i className="fa fa-space-shuttle" aria-hidden="true"></i></MyButton>
          <MyButton bgColor='white' altura='33px' largura='40px'><i className="fa fa-space-shuttle" aria-hidden="true"></i></MyButton>
          <MyButton bgColor='white' altura='33px' largura='40px'><i className="fa fa-space-shuttle" aria-hidden="true"></i></MyButton>
        </div>
      </div>
    </div>
  )
}

export default App
