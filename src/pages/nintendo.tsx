import './nintendo.css'
import poke from '../res/Pokemon-Scarlet-Violet-Scrn12072022.jpg'

function nintendo  (){
    return(
        <div className='jogos'>
            <a className='card' style={{background: `url(${poke })`, backgroundSize: `cover`}} href='/poké'/>
        </div>
    )
}

export default nintendo 