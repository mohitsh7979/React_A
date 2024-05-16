import "./App.css";
import Header from "./Header";
import Home from "./Home/Home";
import About from "./About/About";
import Blog from "./Blog";
import Contact from "./Contact/Contact";
import { Routes , Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element = {<Home />}></Route>
         <Route path="/About" element = {<About />}></Route>
         <Route path="/blog" element = {<Blog />}></Route>
         <Route path="/contact" element = {<Contact />}></Route>
      </Routes>

   
 
    </>
  );
}

export default App;
