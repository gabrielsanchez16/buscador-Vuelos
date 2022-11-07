import { useNavigate } from "react-router-dom"



const CardVuelos = ({infoVuelo, setInfoVuelo, setVueloComprado}) => {
    const navigate = useNavigate();
    
    const formatearPresupuesto = (cantidad) => {
            return cantidad.toLocaleString('en-US', {
                style:'currency',
                currency: 'USD'
            })
        }
    const qtyPassenger = infoVuelo?.fares.paxReference.traveller


    const origen = infoVuelo?.segments[0].location[0].locationId
    const destino = infoVuelo?.segments[0].location[1].locationId
    const salida = `${infoVuelo?.segments[0].productDateTime.dateOfDeparture}${' '}${infoVuelo?.segments[0].productDateTime.timeOfDeparture}`
    const llegada = `${infoVuelo?.segments[0].productDateTime.dateOfArrival}${' '}${infoVuelo?.segments[0].productDateTime.timeOfArrival}`
    const description = infoVuelo?.fares.fare[0].pricingMessage.description
    const nroVuelo = Number(infoVuelo?.segments[0].flightOrtrainNumber)
    const nroTicket = qtyPassenger.length ? qtyPassenger.length : 1
    const precio = formatearPresupuesto(Number(infoVuelo?.fares.paxFareDetail.totalFareAmount))

    
    

    const guardarVuelo = ()=>{
        setVueloComprado([nroVuelo,nroTicket,precio,origen,destino])
        setInfoVuelo([])
        navigate('/registro')
    }
    
  return (
    <div className='card-vuelo'>
        <h3 className="text-center">{infoVuelo?.segments[0].airline.name}</h3>
        <div className="propiedades">
            <div className="camp">
                <p>Origen:<span>{origen}</span></p>
                <p>Destino:<span>{destino}</span></p>
            </div>
            <div className="">
                <p>Salida: <span>{salida}</span></p>
            </div>
            <div className="">
            <p>Llegada: <span>{llegada}</span></p>
            </div>
        </div>
        <div className="propiedades">
            <div className="">
            <p>{description}</p>
            </div>
            <div className="">
                <p>Nro Vuelo: {nroVuelo}</p>
            </div>
            <div className="">
            <p>Nro tickets: {nroTicket}</p>
            </div>
        </div>
        <div className=" text-center">
        <div className=" ">
                <p>Precio: {precio}</p>
            </div>
        </div>
        <div className="container-btn-comprar text-center">
            <button className="btn-comprar" onClick={guardarVuelo}>Comprar</button>
        </div>
    </div>
  )
}

export default CardVuelos