import React, { Component } from 'react'
import {Routes, Route, BrowserRouter, useParams} from 'react-router-dom';
//import components
import NavegacionSeries from './components/NavegacionSeries';
import HomeSeries from './components/HomeSeries';
import Series from './components/Series'
import Personajes from './components/Personajes';
import NuevoPersonaje from './components/NuevoPersonaje';
import ModificarPersonaje from './components/ModificarPersonaje';


export default class Router extends Component {
  render() {


    function SeriesElement(){
        var {serie}=useParams()
        return <Series serie={serie}/>
    }
    function PersonajesElement(){
        var {serie}=useParams()
        return <Personajes serie={serie}/>
    }

    return (
      <BrowserRouter>
        <NavegacionSeries/>
        <Routes>
            <Route path="/" element={<HomeSeries/>}/>
            <Route path="/nuevopersonaje" element={<NuevoPersonaje/>}/>
            <Route path="/modificarpersonaje" element={<ModificarPersonaje/>}/>
            <Route path="/serie/:serie" element={<SeriesElement/>}/>
            <Route path="/personajes/:serie/" element={<PersonajesElement/>}/>

          
        </Routes>
      </BrowserRouter>
    )
  }
}