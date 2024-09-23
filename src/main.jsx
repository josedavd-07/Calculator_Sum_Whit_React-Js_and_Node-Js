import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CalculadoraSuma } from './CalculadoraSuma'
import './styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CalculadoraSuma />
  </StrictMode>,
)
