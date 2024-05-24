import './xbox.css'
import helo from '../res/halo.jpg'
import helo3 from '../res/halo 3.jpg'
import heloi from '../res/halo infinite.jpg'
function Xbox (){
    return(
        <div className='jogos'>
        <a className='card' style={{background: `url(${helo })`, backgroundSize: `cover`}} href='/halo'/>
        <a className='card' style={{background: `url(${helo3 })`, backgroundSize: `cover`}} href='/halo3'/>
        <a className='card' style={{background: `url(${heloi })`, backgroundSize: `cover`}} href='/halo3'/>
        </div>
    )
}

export default Xbox