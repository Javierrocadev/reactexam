import React, { Component } from 'react'
import { NavLink , Navigate} from 'react-router-dom'
import logo from '../assets/images/backgroundSeries.jpg'
import Global from '../Global'
import axios from 'axios'

export default class Navegacion extends Component {
    state={
        series:[]
    }
    cajaJugador= React.createRef()
    loadSeries=()=>{
        var request = "api/Series"
        var url = Global.apiSeries+ request
        console.log(url)
        axios.get(url).then(response=>{
            this.setState({
                series: response.data
            })
        })
    }
    componentDidMount=()=>{
        this.loadSeries()
    }
    buscarJugador=()=>{
        var jugadorbuscado= this.cajaJugador.current.value
        alert(jugadorbuscado) //
        return <NavLink to={"jugadorbuscado/"+jugadorbuscado}></NavLink>
    }
  render() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
                <img src={logo} alt="Logo" width="30" height="34" class="d-inline-block align-text-top"/>
            </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                    Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/nuevopersonaje">
                    Nuevo personaje
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/modificarpersonaje">
                    Modificar personaje
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Series
                </a>
                <ul className="dropdown-menu">
                    {
                        this.state.series.map((serie,index)=>{
                            return(
                                <li><NavLink className="dropdown-item" to={"serie/"+serie.idSerie}>{serie.nombre}</NavLink></li>
                            )
                        })
                    }
                </ul>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
