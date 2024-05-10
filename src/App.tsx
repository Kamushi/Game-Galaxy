import { BrowserRouter, Route, Routes } from 'react-router-dom'
import First from './pages/first'
import Ps5 from './pages/Ps5'
import Xbox from './pages/xbox'
import Nintendo from './pages/nintendo'
import All from './pages/all.tsx'
import Offer from './pages/offer.tsx'

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
         </Routes>
         </BrowserRouter>
  )
}

export default App
