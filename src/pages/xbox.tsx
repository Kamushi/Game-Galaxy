import './xbox.css'
import helo from '../res/halo.jpg'
import helo3 from '../res/halo 3.jpg'
function Xbox (){
    return(
        <div className='body01'>
        <div className='jogos'>
        <a className='card' style={{background: `url(${helo })`, backgroundSize: `cover`}} href='/halo'/>
        <a className='card' style={{background: `url(${helo3 })`, backgroundSize: `cover`}} href='/halo3'/>
        </div>
        </div>
    )
}

export default Xbox