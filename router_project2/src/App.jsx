import './App.css'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import { Routes,Route } from 'react-router-dom'

function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/about' element = {<About />} />
        <Route path='/blog'/>
        <Route path='/contact' element = {<Contact />} />
      </Routes>
    </>
  )
}

export default App
