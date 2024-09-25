import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import './Login.css'
// import './Card.jsx'
// import './Slider.jsx'
// import './GalleryCompo.jsx'
// import './TabComponent.jsx'
// import  './Footerpage.jsx'
import './index.css'
// import './app.css'
// import './components/Productcard.jsx'
// import './components/Home.jsx'   
// import './components/Dashboard.jsx'
// import './components/Darkmodetoggle.jsx'
import "./main.css"


import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
