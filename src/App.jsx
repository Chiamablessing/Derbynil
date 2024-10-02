
import './App.css'
import Home from './Components/Home/Home'
import Inspiration from './Components/inspiration/Inspiration'

import Navbar from './Components/Navbar/Navbar'
import {Routes, Route} from 'react-router-dom'
function App() {
  

  return (
    <>
     <Navbar/>
<Routes>
  <Route path="/"  element={<Home/>}/>
  <Route path="/inspiration"  element={<Inspiration/>}/>
  <Route path="/jobs"  element={<Home/>}/>
  <Route path="/Go pro"  element={<Home/>}/>
</Routes>

    </>
  )
}

export default App
