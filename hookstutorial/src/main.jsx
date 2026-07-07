import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Count from './Count.jsx'
import Useeffect from './Useeffect.jsx'
createRoot(document.getElementById('root')).render(
<>
    <App />
    <Count/>
    <Useeffect/>
</>
)
