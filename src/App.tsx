import { BrowserRouter, Route, Routes } from 'react-router-dom'
import First from './pages/first'
import Ps5 from './pages/Ps5'
import Xbox from './pages/xbox'
import Nintendo from './pages/nintendo'
import Offer from './pages/offer.tsx'
import Login from './login/login.jsx'
import Fro from './form/formulário.tsx'
import Ds1 from './jogos/ds1.tsx'
import Gfw from './jogos/gfw.tsx'
import Bta from './jogos/bta.tsx'
import Ts from './jogos/ts.tsx'
import Sfr from './jogos/sfr.tsx' 
import Lego from './jogos/lego.tsx'
import MK1 from './jogos/Mk1.tsx'
import Sf6 from './jogos/sF6.tsx'
import R4 from './jogos/r4.tsx'
import Ark from './jogos/ark.tsx'
import Batlle from './jogos/batlle.tsx'
import Ds2 from './jogos/ds2.tsx'
import Fifa from './jogos/fifa.tsx'
import Gta from './jogos/gta.tsx'
import Halo from './jogos/halo.tsx'
import Haloiw from './jogos/haloi.tsx'
import Halo3 from './jogos/halo3.tsx'
import Hrw from './jogos/hrw.tsx'
import Jd4 from './jogos/jd4.tsx'
import Little from './jogos/little.tsx'
import Little2 from './jogos/little2.tsx'
import Mfs from './jogos/mfs.tsx'
import Mine from './jogos/mine.tsx'
import Mk1 from './jogos/Mk1.tsx'
import Nba from './jogos/nba.tsx'
import Out1 from './jogos/out1.tsx'
import Out2 from './jogos/out2.tsx'
import Poké from './jogos/poké.tsx'
import Rust from './jogos/rust.tsx'
import SF6 from './jogos/sF6.tsx'
import Tekke8 from './jogos/tekke8.tsx'
import Carro from './pages/car.tsx'
import Pagamento from './pages/pagamento.tsx'







function App() {
  return(
    <BrowserRouter>
         <Routes>
            <Route path= "/" element={<First />}/>
            <Route path= "/ps5" element={<Ps5 />}/>
            <Route path= "/xbox" element= {<Xbox/>}/>
            <Route path= "/nintendo" element= {<Nintendo/>}/>
            <Route path= "/offer" element= {<Offer/>}/>
            <Route path= "/login" element= {<Login/>}/>
            <Route path= "/formulatio" element= {<Fro/>}/>
            <Route path= "/ds1" element= {<Ds1/>}/>
            <Route path= "/ds1" element= {<Ds1/>}/>
            <Route path= "/Gfw" element= {<Gfw/>}/>
            <Route path= "/Bta" element= {<Bta/>}/>
            <Route path= "/ts" element= {<Ts/>}/>
            <Route path= "/Sfr" element= {<Sfr/>}/>
            <Route path= "/Lego" element= {<Lego/>}/>
            <Route path= "/Mk1" element= {<MK1/>}/>
            <Route path= "/Sf6" element= {<Sf6/>}/>
            <Route path= "/R4" element= {<R4/>}/>
            <Route path= "/ark" element= {<Ark/>}/>
            <Route path= "/batlle" element= {<Batlle/>}/>
            <Route path= "/ds2" element= {<Ds2/>}/>
            <Route path= "/Fifa" element= {<Fifa/>}/>
            <Route path= "/Gta" element= {<Gta/>}/>
            <Route path= "/Halo" element= {<Halo/>}/>
            <Route path= "/Haloiw " element= {<Haloiw />}/>
            <Route path= "/Halo3" element= {<Halo3/>}/>
            <Route path= "/Hrw" element= {<Hrw/>}/>
            <Route path= "/Jd4" element= {<Jd4/>}/>
            <Route path= "/Little" element= {<Little/>}/>
            <Route path= "/Little2" element= {<Little2/>}/>
            <Route path= "/Mfs" element= {<Mfs/>}/>
            <Route path= "/Mine" element= {<Mine/>}/>
            <Route path= "/Mk1" element= {<Mk1/>}/>
            <Route path= "/Nba1" element= {<Nba/>}/>
            <Route path= "/Out1" element= {<Out1/>}/>
            <Route path= "/Out2" element= {<Out2/>}/>
            <Route path= "/poké" element= {<Poké/>}/>
            <Route path= "/rust" element= {<Rust/>}/>
            <Route path= "/SF6" element= {<SF6/>}/>
            <Route path= "/Tekke8" element= {<Tekke8/>}/>
            <Route path= "/ts" element= {<Ts/>}/>
            <Route path= "/Carro" element= {<Carro/>}/>
            <Route path= "/Pagamento" element= {<Pagamento/>}/>


         </Routes>
         </BrowserRouter>
  )
}

export default App
