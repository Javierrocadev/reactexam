import React, { Component } from 'react'
import background from '../assets/images/backgroundSeries.jpg'
export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Página de series </h1>
        <img src={background} alt='background'/>
      </div>
    )
  }
}