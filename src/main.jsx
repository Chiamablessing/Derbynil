import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Gopro from './Component/Gopro/Gopro.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Gopro/>
  

  </StrictMode>,
)
