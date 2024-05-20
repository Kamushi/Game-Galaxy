import './gfw.css'
import Gfw from '../res/God_of_War_Ragnarök_capa.jpg'
import MyButton from '../MyButton'
import MyInput from '../MyInput'
import image from '../res/Game galaxy.png'

 function gfw(){
    return(
        <div className='container'>
            <div className='Topo'>
                <div className='title'>
                <img src={image} alt="imagem"/>
                </div>
                <div className='Input'>
                <MyInput type='text' placeHolder='Procurar' largura='500px' fontSize='18px'/>
                </div>
                <div className='buttons'>
                <div className='buttonPesquisa'>
                    <MyButton bgColor='white' altura='33px' largura='40px'><i className="fa fa-space-shuttle" aria-hidden="true"></i></MyButton> 
                </div>
                <div className='nome'>
                    <h1> God of War Ragnarök</h1>
                    <h2> r$ 100,00</h2>
                </div>
                <div className='buttonsExtras'>
                    <a href='/formulatio'><MyButton bgColor='white' altura='33px' largura='40px'><i className="fa fa-comments-o" aria-hidden="true"></i></MyButton></a>
                    <a href='/login'><MyButton bgColor='white' altura='33px' largura='40px'><i className="fa fa-user-circle" aria-hidden="true"></i></MyButton></a>
                </div>
            
                </div>
            </div>
                <div className='img'>
                <a className='card' style={{background: `url(${Gfw})`, backgroundSize: `cover`}} href='/Gfw'/>
                </div>
                
        </div>

    )
           
 }

 export default gfw