import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PaletteList extends Component {
  render() {
    const { palettes } = this.props

    return (
      <div>
        {palettes.map((pal) => {
          return (
            <Link to={`/palette/${pal.id}`}>
              <h1>{pal.paletteName}</h1>
            </Link>
          )
        })}
      </div>
    )
  }
}

export default PaletteList
