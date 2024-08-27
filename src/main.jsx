import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx'
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter

createRoot( document.getElementById( 'root' ) ).render(
  <BrowserRouter>
    <Header />
    <App />
    <Footer />
  </BrowserRouter>,
)
