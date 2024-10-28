import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/slack-embed-for-backlog-chrome-extention-support/">
      <App />
    </BrowserRouter>
  </StrictMode>,
)
