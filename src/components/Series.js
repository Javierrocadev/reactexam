import React, { Component } from 'react'
import axios from 'axios'
import { NavLink, Navigate } from 'react-router-dom'
import Global from '../Global'
export default class Equipos extends Component {
    state={
        serie:[]
    }
  loadSeries=()=>{
    
    var request= "api/Series/"+ this.props.serie
    var url = Global.apiSeries + request
    axios.get(url).then(response=>{
        this.setState({
        serie:response.data
         })      
    })
  }
  componentDidMount=()=>{
    this.loadSeries()
  }
  componentDidUpdate=()=>{
    this.loadSeries()
  }
  render() {
    return (
      
      <div className='container d-flex flex-column justify-content-center m-5'>
        {/* <h1>serie: {this.props.serie}</h1> */}
        <h2>{this.state.serie.nombre}</h2>
        <img className='img-thumbnail' style={{maxWidth:"300px"}} src={this.state.serie.imagen} alt="equipo" />
        <h2>Puntuacion: {this.state.serie.puntuacion}</h2>
        <h5>fecha:  {this.state.serie.anyo}</h5>
        <NavLink className='btn btn-success' to={"/personajes/"+this.props.serie}>Personajes</NavLink>
        {/* <h5>champions: {this.state.equipo.champions}</h5> */}
        {/* <p>{this.state.serie.descripcion}</p> */}
        <div>
        {/* <NavLink className='btn btn-primary' to="/">vovler</NavLink>
        <NavLink className='btn btn-success' to={"/jugadores/"+this.state.equipo.idEquipo}>Jugadores</NavLink>
         */}
      </div>
      </div>
      
   
    )
  }
}
