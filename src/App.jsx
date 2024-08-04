import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./Pages/Home"
import Men from "./Pages/Men"
import Women from "./Pages/Women"
import Kids from "./Pages/Kids"
import Detailpage from "./Pages/Detailpage"
import "./App.css";




const App = () => {
  return (
  <div>
  <Navbar/>
  <Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/men" element={<Men/>}></Route>
  <Route path="/men/:_id" element={<Detailpage/>}></Route>
  <Route path="/women" element={<Women/>}></Route>
  <Route path="/kids" element={<Kids/>}></Route>
  
  </Routes>
  </div>

    
  )
}

export default App
