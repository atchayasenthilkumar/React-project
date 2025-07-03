import Home from './components/Home'
import About from './components/About'
import Careers from './components/Careers'
import Product from './components/Product'
import Contact from './components/Contact'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import NoMatchRoute from './components/NoMatchRoute'
import Computer from './components/Computer'
import Furniture from './components/Furniture'

function App() {
  

  return (
    <>
    <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/careers' element={<Careers/>}/>

        <Route path='/product' element={<Product/>}>
        <Route path='furniture' element={<Furniture/>}/>
        <Route path='computer' element={<Computer/>}/>
        </Route>
        
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<NoMatchRoute/>}/>
      </Routes>
    </>
  )
}

export default App 
