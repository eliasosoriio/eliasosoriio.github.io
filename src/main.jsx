import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/styles.css'
import App from './App.jsx'

const redirect = new URLSearchParams(window.location.search).get('p')

if (redirect) {
  const restoredPath = redirect.startsWith('/') ? redirect : `/${redirect}`
  const search = new URLSearchParams(window.location.search)

  search.delete('p')

  const query = search.toString()
  const url = `${restoredPath}${query ? `?${query}` : ''}${window.location.hash}`

  window.history.replaceState(null, '', url)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
