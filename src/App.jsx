import { Outlet, Route, BrowserRouter as Router, Routes } from "react-router-dom"
import './App.css'

import Footer from "./Components/Component/Root/Footer"
import Home from "./Components/Component/Home"
import About from "./Components/Component/About"
import Blog from "./Components/Component/Blog"
import Contact from "./Components/Component/Contact"
import Nav from "./Components/Component/Root/Nav"
import Mega from "./Components/Component/Mega"

function Layout(){
   return (
    <>
   <Nav></Nav>
   <Outlet/>
   <Footer/>
      
    </>
  )
};
function App() {
 
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
   
        <Route index element={<Home/>}/>
        <Route path="/mega" element={<Mega/>}/>

        <Route path="/about" element={<About/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </Router>
      
    </>
  )
}

export default App;
