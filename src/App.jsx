import Exercise from "./components/HomeExercise"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Exercises from "./components/Exercises"
import {Outlet} from 'react-router-dom'

function App() {
  return (
   <>
    <Header />
    {/* <Hero /> */}
    <Outlet />
    {/* <Exercises /> */}
    <Footer />
    
   </>
  )
}

export default App