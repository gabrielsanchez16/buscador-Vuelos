import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const PaginaRegistro = ({vueloComprado,setVueloComprado}) => {

    const navigate = useNavigate();

    const [nombre, setNombre] = useState('')
    const [cedula, setCedula] = useState(0)
    const [correo, setCorreo] = useState('')
    const [direccion, setDireccion] = useState('')

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const requestBody = {
            nombre,
            cedula,
            correo,
            direccion,
            nro_vuelo: vueloComprado[0],
            cantidad_ticket: vueloComprado[1],
            precio: vueloComprado[2],
            origen: vueloComprado[3],
            destino: vueloComprado[4]
        }
        console.log(requestBody)

        try{
            const {data} = await axios.post('https://api-pdt-production.up.railway.app//api/v1/usuario/register', requestBody)
            console.log(data)
          }catch(err){
            console.log(err)
          }
        // setVueloComprado([])
        // navigate("/")
    }

  return (
    <div className='interface'>
        <h2>Comprar Ticket</h2>
        <form className="form" onSubmit={handleSubmit}>
            <div className='campo'>
                <label htmlFor="nombre">Nombre</label>
                <input id='nombre' type="text" placeholder='Tu Nombre' onChange={e=>{setNombre(e.target.value)}}/>
            </div>
            <div className='campo'>
                <label htmlFor="cedula">Cedula</label>
                <input id='cedula' type="number" placeholder='Tu Cedula' onChange={e=>{setCedula(Number(e.target.value))}} />
            </div>
            <div className='campo'>
                <label htmlFor="correo">Correo</label>
                <input id='correo' type="email" placeholder='Tu Correo' onChange={e=>{setCorreo(e.target.value)}}/>
            </div>
            <div className='campo'>
                <label htmlFor="direccion">Direccion</label>
                <input id='direccion' type="text" placeholder='Tu Direccion' onChange={e=>{setDireccion(e.target.value)}}/>
            </div>
            <div className='campo'>
                <label htmlFor="vuelo">Nro Vuelo</label>
                <input id='vuelo' type="number" value={vueloComprado[0]} readOnly="readonly" />
            </div>
            <div className='campo'>
                <label htmlFor="ticket">Nro Ticket</label>
                <input id='ticket' type="number" value={vueloComprado[1]} readOnly="readonly"/>
            </div>
            <div className='campo'>
                <label htmlFor="precio">Precio</label>
                <input id='precio' type="text" value={vueloComprado[2]} readOnly="readonly"/>
            </div>
            <div className='campo'>
                <label htmlFor="origen">Origen</label>
                <input id='origen' type="text" value={vueloComprado[3]} readOnly="readonly"/>
            </div>
            <div className='campo'>
                <label htmlFor="destino">Destino</label>
                <input id='destino' type="text" value={vueloComprado[4]} readOnly="readonly"/>
            </div>
            <input className="buscar" type="submit" value={"Comprar Ticket"} />
        </form>
    </div>
  )
}

export default PaginaRegistro