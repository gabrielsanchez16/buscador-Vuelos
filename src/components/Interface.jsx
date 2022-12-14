import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select"
import CardVuelos from "./CardVuelos"
import Mensaje from "./Mensaje"


const Interface = ({ setInfoVuelo,infoVuelo,setVueloComprado }) => {
  const [departureCity, setDepartureCity] = useState("");
  const [arrivalCity, setArrivalCity] = useState("");
  const [hour, setHour] = useState("");
  const [qtyPassengers, setQtyPassengers] = useState(1);
  const [adult, setAdult] = useState(1);
  const [child, setChild] = useState(0);
  const [airports, setAirports] = useState([]);
  const [error, setError] = useState(false)

  useEffect(() => {
    axios
      .get("https://travelflight.pdtcomunicaciones.com/api/airports")
      .then((res) => setAirports(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestBody = {
      searchs: 4,
      qtyPassengers: qtyPassengers,
      adult,
      child,
      itinerary: [
        {
          departureCity,
          arrivalCity,
          hour,
        },
      ],
    };

console.log(requestBody)
    try{
      const {data} = await axios.post('https://travelflight.pdtcomunicaciones.com/api/flights', requestBody)
      setInfoVuelo(data.data)
      console.log(data.data)
    }catch(err){
      console.log(err)
      setError(true)
      setTimeout(()=>{
        setError(false)
    },3000)
    }

  };


  
  return (
    <>
    <div className="interface">
      <h2>Busca tu vuelo</h2>
      <form className="form" onSubmit={handleSubmit}>
      {error ? <Mensaje ></Mensaje> : ""}
        <div className="campo">
          <label htmlFor="departure">Salida</label>
          <Select defaultValue={{label:'Punto de Origen', value:""}} options={airports?.map(airport=>({label:airport?.name,value:airport?.gcd_iata}))}
          onChange={(e)=>{
            setDepartureCity(e.value)
          }}/>
        </div>
        <div className="campo">
          <label htmlFor="arrival">Llegada</label>
          <Select defaultValue={{label:'Punto de Llegada', value:""}} options={airports?.map(airport=>({label:airport?.name,value:airport?.gcd_iata}))}
          onChange={(e)=>{
            setArrivalCity(e.value)
          }}/>
        </div>
        <div className="campo">
          <label htmlFor="passenger">Cantidad Pasajeros</label>
          <input
            id="passenger"
            type="number"
            min="1"
            placeholder="Agregar Cantidad"
            value={qtyPassengers}
            onChange={(e) => {
              setQtyPassengers(Number(e.target.value));
            }}
          />
        </div>
        <div className="campo">
          <label htmlFor="adult">Adultos</label>
          <input
            id="adult"
            type="number"
            min="1"
            placeholder="Agregar Cantidad"
            value={adult}
            onChange={(e) => {
              setAdult(Number(e.target.value));
            }}
          />
        </div>
        <div className="campo">
          <label htmlFor="kid">Ni??os</label>
          <input
            id="kid"
            type="number"
            min="0"
            placeholder="Agregar Cantidad"
            value={child}
            onChange={(e) => {
              setChild(Number(e.target.value));
            }}
          />
        </div>
        <div className="campo">
          <label htmlFor="fecha">Fecha</label>
          <input
            id="fecha"
            type="datetime-local"
            placeholder="Agregar Cantidad"
            value={hour}
            onChange={(e) => {
              setHour(e.target.value);
            }}
          />
        </div>
        <input className="buscar" type="submit" value={"Buscar"} />
      </form>
    </div>
    {infoVuelo.map(vuelo=>(
      <CardVuelos
      key={vuelo?.segments[0].flightOrtrainNumber}
      infoVuelo={vuelo}
      setInfoVuelo={setInfoVuelo}
      setVueloComprado={setVueloComprado}
      />))}
</>

  );
};

export default Interface;
