import Interface from "./components/Interface"
import {useState} from 'react'
import CardVuelos from "./components/CardVuelos"

function App() {

  const [infoUsuario, setInfoUsuario] = useState([])

  return (
    <div className="App">
      <Interface
      setInfoUsuario={setInfoUsuario}
      infoUsuario={infoUsuario}
      />
      <CardVuelos
      infoUsuario={infoUsuario}
      />
    </div>
  )
}

export default App
