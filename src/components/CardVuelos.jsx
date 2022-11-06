import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const CardVuelos = ({infoUsuario}) => {

    const [infoVuelo, setInfoVuelo] = useState([])

    useEffect(() => {
        if(infoUsuario){
            axios.post('https://travelflight.pdtcomunicaciones.com/api/flights',infoUsuario)
                .then(res=>setInfoVuelo(res.data))
                .catch(err => console.log(err))
                
        console.log(infoVuelo)
        }
    }, [infoUsuario])

    
    
  return (
    <div className='card-vuelo'>
        <h1>{infoUsuario?.[0]?.segments[0]?.airline?.name}</h1>

    </div>
  )
}

export default CardVuelos