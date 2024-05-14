import './App.css'
import Home from './Home/Home'
import Blog from './Blog/Blog'
import Header from './Header/Header'
import About from './About/About'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
import { Routes , Route} from 'react-router-dom'

function App() {

  let a = "Mohit Sharma";
  
  return (
    <>

    <Header />


    <Routes>
       <Route path='/' element = {<Home />} />
       <Route path='/about' element = {<About data = {a} />}/>
       <Route path='/blog' element = {<Blog />} />
       <Route path='/contact' element = {<Contact />}/>
    </Routes>
     
    {/* <Footer /> */}
   
    </>
  )
}

export default App
