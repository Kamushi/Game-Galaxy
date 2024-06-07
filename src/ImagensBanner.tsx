import './imagensBanner.css'
import { Swiper, SwiperSlide} from 'swiper/react'
import { useEffect, useState } from 'react'
import { EffectFade,EffectCoverflow  } from 'swiper/modules'

import bu2024 from './res/Battlefield-2042.webp'
import gfg4 from './res/god of war.jpeg'
import helo from './res/halo.jpg'
import hifi from './res/hi-fi.jpg'
import poke from './res/Pokemon-Scarlet-Violet-Scrn12072022.jpg'
import oul from './res/poster-outlast-2-e432a5e7.webp'
import r4 from './res/resident.jpg'




function App () {
    const [slidesPerView, setSlidePerView,] = useState (3)
    const data =[
        {id:'1', Image: bu2024} ,
        {id: '2', Image: gfg4},
        {id: '3', Image: helo},
        {id: '4', Image: hifi},
        {id: '5', Image: poke},
        {id: '6',Image: oul},
        {id: '7', Image: r4},
    

    ]

    useEffect(() => {
       function HandleResie(){
        if(window.innerHeight < 720){
            setSlidePerView(7)
        }else{
            setSlidePerView(2)
        }
       }
    
    HandleResie();

    window.addEventListener("resize",HandleResie)

    return() =>{
        window.removeEventListener("resize",HandleResie)
    }

    }, [])

    
    return  (
        <div className= "contaienr06">

    
    <Swiper
        modules={[EffectCoverflow]}
        effect="coverflow"
        slidesPerView={1}
        pagination={{ clickable: true}}
        navigation
    >
    
     {data.map( (item) =>(
        <SwiperSlide key={item.id}>
            <img
                src={item.Image}
                alt="Slide"
                className='silde-item'
            />
        </SwiperSlide>
    ))}    
    </Swiper>
    </div>
    )
}

export default App