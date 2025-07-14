import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import CymitApp from './CymitApp'
import './styles/tailwind.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <CymitApp />
        </BrowserRouter>
    </StrictMode>,
)
