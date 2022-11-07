import Interface from "./components/Interface"
import {useState} from 'react'
import { Routes, Route } from "react-router-dom";
import PaginaRegistro from "./components/PaginaRegistro"

function App() {

  const [infoVuelo, setinfoVuelo] = useState([])
  const [vueloComprado, setVueloComprado] = useState([])

  return (
    <div className="App">
      
      
      <Routes>
        <Route path="/" 
        element={<Interface
          setInfoVuelo={setinfoVuelo}
          infoVuelo={infoVuelo}
          setVueloComprado={setVueloComprado}
      />}
        />
        <Route path="/registro" 
        element={
        <PaginaRegistro
          vueloComprado={vueloComprado}
          setVueloComprado={setVueloComprado}
      />}/>
      </Routes>
      
    </div>
  )
}

export default App
