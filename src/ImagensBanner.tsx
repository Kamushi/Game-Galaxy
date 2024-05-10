import './imagensBanner.css'
import { Swiper, SwiperSlide} from 'swiper/react'
import { useEffect, useState } from 'react'
import { EffectFade,EffectCoverflow  } from 'swiper/modules'

import mk1 from './res/thumb-1920-1331502.jpg'
import sk6 from './res/street-fighter-6-4k-3840x2160-10757.png'
import r4  from './res/1282341.jpg'




function App () {
    const [slidesPerView, setSlidePerView] = useState (2)
    const data =[
        { id:'1', Image: mk1},
        { id: '2', Image: sk6},
        { id: '3', Image: r4},
    


    ]

    useEffect(() => {
       function HandleResie(){
        if(window.innerHeight < 720){
            setSlidePerView(1)
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
        <div className= "contaienr2">

    
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