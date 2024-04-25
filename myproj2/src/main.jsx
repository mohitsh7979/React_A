import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import Section from './Section'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Header />
    <Section />
    <Footer />
  </React.StrictMode>,
)
