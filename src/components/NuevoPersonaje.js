import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'
import { Navigate } from 'react-router-dom'

export default class InsertarApuestas extends Component {
      state={
        series:[],
        statusInsertado:false
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
    componentDidMount=()=>{
      this.loadSeries()
  }
    cajaNombre = React.createRef()
    cajaImagen = React.createRef()
    cajaSerie= React.createRef()
    crearPersonaje=(e)=>{
      e.preventDefault();
      var nombre= this.cajaNombre.current.value
      var imagen = this.cajaImagen.current.value
      var serie = parseInt( this.cajaSerie.current.value)
      var personaje={
        idPersonaje:7,
        nombre:nombre,
        imagen:imagen,
        idSerie:serie
      }
      console.log(personaje)
      var request = "api/Personajes"
      var url = Global.apiSeries+request
      axios.put(url,personaje).then(response=>{
        this.setState({
          statusInsertado:true
        })
      })
    }
  render() {
    if(this.state.statusInsertado==true){
       return <Navigate to="/"></Navigate>
    }
    else{
        return (
            <div>
            <div className='m-5'>
                <h3 className='text-center bg-dark text-light'>Nuevo personaje</h3>
            
                <form>
                <label>Nombre</label>
                <input type="text" class="form-control" ref={this.cajaNombre}/>
                <label>Imagen</label>
                <input type="text" class="form-control" ref={this.cajaImagen}/>
                <label>Serie</label>
                <select  ref={this.cajaSerie} class="form-control">
                  {
                      this.state.series.map((serie,index)=>{
                        return(
                            <option value={serie.idSerie} key={index}>{serie.nombre}</option>
                        )
                    })
                  }
                </select>
                
                <button type="button" class="btn btn-info" onClick={this.crearPersonaje}>Insertar personaje</button>
            </form>
          </div>
          </div>
        )
    }


 
  }
}