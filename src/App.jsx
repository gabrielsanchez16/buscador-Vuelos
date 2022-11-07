import Interface from "./components/Interface"
import {useState} from 'react'
import CardVuelos from "./components/CardVuelos"
import PaginaRegistro from "./components/PaginaRegistro"

function App() {

  const [infoVuelo, setinfoVuelo] = useState([])
  const [vueloComprado, setVueloComprado] = useState([])

  return (
    <div className="App">
      <Interface
      setInfoVuelo={setinfoVuelo}
      infoVuelo={infoVuelo}
      />
      {infoVuelo.map(vuelo=>(
      <CardVuelos
      key={Math.floor(Math.random()*100)}
      infoVuelo={vuelo}
      setVueloComprado={setVueloComprado}
      />))}
      <PaginaRegistro
      vueloComprado={vueloComprado}
      setVueloComprado={setVueloComprado}
      />
    </div>
  )
}

export default App
