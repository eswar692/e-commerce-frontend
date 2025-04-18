import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.tsx'
import {BrowserRouter} from 'react-router-dom'
import { Toaster } from './components/ui/sonner.tsx'
import { Provider } from 'react-redux'
import store from './stores/store.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
      <Toaster/>
    </BrowserRouter>
  </StrictMode>,
)
