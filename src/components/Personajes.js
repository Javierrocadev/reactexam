import React, { Component } from 'react'
import axios from 'axios'
import { NavLink, Navigate } from 'react-router-dom'
import Global from '../Global'
export default class Equipos extends Component {
    state={
        personajes:[]
    }
  loadPersonajes=()=>{
    
    var request= "api/Series/PersonajesSerie/"+ this.props.serie
    var url = Global.apiSeries + request
    axios.get(url).then(response=>{
        this.setState({
        personajes:response.data
         })      
    })
  }
  componentDidMount=()=>{
    this.loadPersonajes()
  }
  componentDidUpdate=()=>{
    this.loadPersonajes()
  }
  render() {
    return (
      
        <div className='m-5'>
        <h1>personajes de la serie {this.props.serie}</h1>
        <NavLink className='btn btn-info' to={"/serie/"+this.props.serie}>Volver a serie</NavLink>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>id </th>
                    <th>nombre</th>
                    <th>imagen</th>
                  
                </tr>
            </thead>
            <tbody>
                
                    {
                        this.state.personajes.map((personaje, index)=>{
                            return(
                                <tr>
                                    <td>{personaje.idPersonaje}</td>
                                    <td>{personaje.nombre}</td>
                                    <td><img src={personaje.imagen}  alt='d'/></td>
                                    
                                    {/* <td><NavLink to={"/detallesjugador/"+this.props.equipo+"/"+jugador.idJugador} className='btn btn-danger' >Detalles</NavLink></td> */}
                                </tr>
                            )
                        })
                    }
                
            </tbody>
        </table>
       </div>
   
    )
  }
}
