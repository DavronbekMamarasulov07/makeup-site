import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store/index.ts'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init(); 



createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
  </Provider>
)
