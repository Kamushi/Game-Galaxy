    import './first.css'
    import MyButton from '../MyButton'
    import MyInput from '../MyInput'
    import '../res/font-awesome-4.7.0/css/font-awesome.min.css'
    import image from '../res/Game galaxy.png'
    import pspimage from '../res/download.png'
    import xboximage from "../res/640px-Xbox_one_logo.svg.jpg"
    import bignimage from "../res/mc5.png.png"
    import ImagensBanner from '../ImagensBanner'
    import godc from '../res/God_of_War_Ragnarök_capa.jpg'
    import ts from '../res/The_Sims_4_29.webp'
    import sf6 from '../res/Street_Fighter_6_box_art.jpg'
    import ds from  '../res/Dark_Souls_1_capa.png'
    import ba from '../res/batman-arkham-knight-bd-3.jpg'
    import mk1 from '../res/mortal-kombat-1-key-art-vb944bnawzlk.webp'
    import lego from '../res/lego.webp'
    import sfr from '../res/Streets_of_Rage_4_-_Capa.jpg'






    function First(){
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
                <a href='/formulatio'><MyButton bgColor='white' altura='33px' largura='40px'><i className="fa fa-comments-o" aria-hidden="true"></i></MyButton></a>
                <a href='/login'><MyButton bgColor='white' altura='33px' largura='40px'><i className="fa fa-user-circle" aria-hidden="true"></i></MyButton></a>
                <a href='/Carro'><MyButton bgColor='White' altura='33px' largura='40px'><i className="fa fa-cart-arrow-down" aria-hidden="true"></i></MyButton></a>
              </div>
            </div>
          </div>
          <div className='Center'>
            <div className='buttonsCatalogo'>
            
              <a className='card' style={{background: `url(${pspimage})`, backgroundSize: `cover`}} href= '/ps5'/>
              <a className='card' style={{background: `url(${xboximage})`, backgroundSize: `cover`}} href='/xbox' />
              <a className='card' style={{background: `url(${bignimage})`, backgroundSize: `cover`}} href='/nintendo'/>
            </div>
          </div>

          <ImagensBanner/>

          <div className='linha'>
          <h1> 12 vezes s﻿em juros  15% de descontono boleto  Entrega em todo o Brasil Site 100% seguro</h1> 
          </div>

          <div className='jogos'>
            <a className='card' style={{background: `url(${godc})`, backgroundSize: `cover`}} href='/Gfw'/> 
            <a className='card' style={{background: `url(${ts})`, backgroundSize: `cover`}} href='/Ts'/>
            <a className='card' style={{background: `url(${sf6})`, backgroundSize: `cover`}} href='/Sf6'/>
            <a className='card' style={{background: `url(${ds})`, backgroundSize: `cover`}} href='/ds1'/>

          </div>  

            <div className='jogos'>
            <a className='card' style={{background: `url(${ba})`, backgroundSize: `cover`}} href='/Bta'/>
            <a className='card' style={{background: `url(${mk1})`, backgroundSize: `cover`}} href='/Mk1'/>
            <a className='card' style={{background: `url(${lego})`, backgroundSize: `cover`}} href='/Lego'/>
            <a className='card' style={{background: `url(${sfr})`, backgroundSize: `cover`}} href='/Sfr'/>

            </div>

        </div>
        
        )

        
    }

    export default First;