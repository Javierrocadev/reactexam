import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'
import { Navigate } from 'react-router-dom'

export default class InsertarApuestas extends Component {
      state={
        series:[],
        personajes:[],
        statuscambiado:false,
        selectedSerieImage:"",
        selectedPersonajeImage:""
    }
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
    loadPersonajes=()=>{
        var request = "api/Personajes"
        var url = Global.apiSeries+ request
        console.log(url)
        axios.get(url).then(response=>{
            this.setState({
                personajes: response.data
            })
        })
    }
    componentDidMount=()=>{
      this.loadSeries()
      this.loadPersonajes()
  }
    cajaPersonaje = React.createRef()
    cajaSerie = React.createRef()
    modificarPersonaje=(e)=>{
      e.preventDefault();
      var serie = parseInt( this.cajaSerie.current.value)
      var personaje = parseInt( this.cajaPersonaje.current.value)
    //   var personaje={
    //     idPersonaje:7,
    //     nombre:nombre,
    //     imagen:imagen,
    //     idSerie:serie
    //   }
   
      var request = "api/Personajes/"+personaje+"/"+serie
      var url = Global.apiSeries+request
      axios.put(url).then(response=>{
        this.setState({
          statuscambiado:true
        })
      })
    }

    //para cargar las imagenes
    imagenSerie=()=>{
        var serie = parseInt( this.cajaSerie.current.value)
        var request = "api/Series/"+serie
        var url = Global.apiSeries+request
        axios.get(url).then(response=>{
            this.setState({
                selectedSerieImage:response.data.imagen
            })
          })
    }
    imagenPersonaje=()=>{
        var personaje = parseInt( this.cajaSerie.current.value)
        var request = "api/Personajes/"+personaje
        var url = Global.apiSeries+request
        axios.get(url).then(response=>{
            this.setState({
                selectedPersonajeImage:response.data.imagen
            })
          })
    }
  render() {
    if(this.state.statuscambiado==true){
       return <Navigate to="/"></Navigate>
    }
    else{
        return (
            <div>
            <div className='m-5'>
                <h3 className='text-center bg-dark text-light'>modificarPersonaje</h3>
            
                <form>
               
                <label>seleccione una serie</label>
                <select onChange={this.imagenSerie}  ref={this.cajaSerie} class="form-control">
                  {
                      this.state.series.map((serie,index)=>{
                        return(
                            <option value={serie.idSerie} key={index}>{serie.nombre}</option>
                        )
                    })
                  }
                </select>
                <label>seleccione un personaje</label>
                <select onChange={this.imagenPersonaje} ref={this.cajaPersonaje} class="form-control">
                  {
                      this.state.personajes.map((personaje,index)=>{
                        return(
                            <option value={personaje.idPersonaje} key={index}>{personaje.nombre}</option>
                        )
                    })
                  }
                </select>
                
                <button type="button" class="btn btn-info" onClick={this.modificarPersonaje}>Insertar personaje</button>
            </form>
            <img
                src={this.state.selectedSerieImage}
                alt="Imagen de personaje"
                style={{ minWidth: '200px',minHeight:"200px",maxWidth: '200px',maxHeight:"200px",background:'gray' }}
            />
          <img
                src={this.state.selectedPersonajeImage}
                alt="Imagen de personaje"
                style={{ minWidth: '200px',minHeight:"200px",maxWidth: '200px',maxHeight:"200px",background:'blue' }}
            />
          </div>
        
          </div>
        )
    }

  }
}