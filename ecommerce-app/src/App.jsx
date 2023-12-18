import {} from 'react'
 import Navbar from './Components/navbar'
 import Hero from './Components/Hero'
 import MenuCard from './Components/MenuCard'
 import Technology from './Components/Technology'
 import CaseStudy from './Components/CaseStudy'
 import Description from './Components/Description'
 import Footer from './Components/Footer/Footer'
 import Products from './Components/Products'
import './App.css'

function App() {
 

  return (
    <>
     
  <div className='container  mx-auto p-3'>
 <Navbar/>
 <Hero/>
  </div>
  <MenuCard/>
  <div className='container  mx-auto p-3'>
<Technology/>
<CaseStudy/>
<Description/>
<Products/>
<Footer/>
  </div>
 
    </>
  )
}

export default App
