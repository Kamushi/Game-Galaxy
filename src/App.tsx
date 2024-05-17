import { BrowserRouter, Route, Routes } from 'react-router-dom'
import First from './pages/first'
import Ps5 from './pages/Ps5'
import Xbox from './pages/xbox'
import Nintendo from './pages/nintendo'
import All from './pages/all.tsx'
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
import ark from './jogos/ark.tsx'
import batlle from './jogos/batlle.tsx'
import bta from './jogos/bta.tsx'
import ds1 from './jogos/ds1.tsx'
import ds2 from './jogos/ds2.tsx'
import fifa from './jogos/fifa.tsx'
import gfw from './jogos/gfw.tsx'
import gta from './jogos/gta.tsx'
import halo from './jogos/halo.tsx'
import haloi from './jogos/haloi.tsx'
import halo3 from './jogos/halo3.tsx'
import hrw from './jogos/hrw.tsx'
import jd4 from './jogos/jd4.tsx'
import lego from './jogos/lego.tsx'
import little from './jogos/little.tsx'
import little2 from './jogos/little2.tsx'
import mfs from './jogos/mfs.tsx'
import mine from './jogos/mine.tsx'
import Mk1 from './jogos/Mk1.tsx'
import nba from './jogos/nba.tsx'
import out1 from './jogos/out1.tsx'
import out2 from './jogos/out2.tsx'
import poké from './jogos/poké.tsx'
import rust from './jogos/rust.tsx'
import sF6 from './jogos/sF6.tsx'




function App() {
  return(
    <BrowserRouter>
         <Routes>
            <Route path= "/" element={<First />}/>
            <Route path= "/ps5" element={<Ps5 />}/>
            <Route path= "/xbox" element= {<Xbox/>}/>
            <Route path= "/nintendo" element= {<Nintendo/>}/>
            <Route path= "/all" element= {<All/>}/>
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
         </Routes>
         </BrowserRouter>
  )
}

export default App
