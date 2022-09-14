import React from 'react'
import { createRoot } from 'react-dom/client'
import '@babel/polyfill'
import App from './App'
import './styles.css'

const container = document.getElementById('app')
const root = createRoot(container)

root.render(<App />)
