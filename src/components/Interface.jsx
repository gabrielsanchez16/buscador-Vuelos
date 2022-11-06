import React from 'react'
import { useEffect, useState } from 'react'
import axios from "axios"



const Interface = ({setInfoUsuario,infoUsuario}) => {

  const [departureCity, setDepartureCity] = useState('')
  const [arrivalCity, setArrivalCity] = useState('')
  const [itinerary, setItinerary] = useState([])
  const [hour, setHour] = useState('')
  const [qtyPassengers, setQtyPassengers] = useState(1)
  const [adult, setAdult] = useState(1)
  const [child, setChild] = useState(0)
  const [aiports, setAiports] = useState([])

useEffect(() => {

  axios.get('https://travelflight.pdtcomunicaciones.com/api/airports')
  .then(res=>setAiports(res.data))
  .catch(err=>console.log(err))

}, [])



const handleSubmit =  async (e) => {
  e.preventDefault();
  await setItinerary([{departureCity,arrivalCity,hour}]) 
  const searchs = 3;
  await setInfoUsuario({searchs,qtyPassengers,adult,child,itinerary})
  await console.log( infoUsuario)
}


  return (
    <div className='interface'>
      <h2>Busca tu vuelo</h2>
        <form className='form' onSubmit={handleSubmit}>

            <div className='campo'>
                <label htmlFor="departure">Salida</label>
                <select  
                  id="departure"
                  value={departureCity}
                  onChange={e => {setDepartureCity(e.target.value)}}
                >

                  <option value="">--Seleccione--</option>
                  {aiports.map(airport => (
                    <option
                    className='opcion'
                    value={airport?.gcd_iata}
                    key={airport?.id} >{airport?.name}
                    </option>
                  ))}
                  
                </select>
            </div>
            <div className='campo'>
                <label htmlFor="arrival">Llegada</label>
                <select  
                  id="arival"
                  value={arrivalCity}
                  onChange={e => {setArrivalCity(e.target.value)}}
                >
                  <option value="">--Seleccione--</option>
                  {aiports.map(airport => (
                    <option
                    className='opcion'
                    value={airport?.gcd_iata}
                    key={airport?.id} >{airport?.name}
                    </option>
                  ))}
                </select>
            </div>
            <div className='campo'>
                <label htmlFor="passenger">Cantidad Pasajeros</label>
                <input 
                    id='passenger'
                    type="number" 
                    min="1"
                    placeholder='Agregar Cantidad'
                    value={qtyPassengers}
                    onChange={e => {setQtyPassengers(Number(e.target.value))}}
                />
            </div>
            <div className='campo'>
                <label htmlFor="adult">Adultos</label>
                <input 
                    id='adult'
                    type="number" 
                    min="1"
                    placeholder='Agregar Cantidad'
                    value={adult}
                    onChange={e => {setAdult(Number(e.target.value))}}
                />
            </div>
            <div className='campo'>
                <label htmlFor="kid">Niños</label>
                <input 
                    id='kid'
                    type="number" 
                    min="0"
                    placeholder='Agregar Cantidad'
                    value={child}
                    onChange={e => {setChild(Number(e.target.value))}}
                />
            </div>
            <div className='campo'>
                <label htmlFor="fecha">Fecha</label>
                <input 
                    id='fecha'
                    type="datetime-local" 
                    placeholder='Agregar Cantidad'
                    value={hour}
                    onChange={e => {setHour(e.target.value)}}
                />
            </div>
            {/* <div className="campo">
                    <label for="ida-vuelta">Ida y Vuelta</label>
                    <input type="radio" id="ida-vuelta" name="tipo" value={idaVuelta} required/>
              </div>
            <div class="campo">
                    <label for="ida">Ida</label>
                    <input type="radio" id="ida" name="tipo" value={ida} required/>
            </div> */}
            <input 
              className='buscar'  type="submit" value={"Buscar"} />

        </form>
    </div>
  )
}

export default Interface