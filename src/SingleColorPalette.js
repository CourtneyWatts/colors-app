import React, { Component } from 'react'
import ColorBox from './ColorBox'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
import PaletteFooter from './PaletteFooter'

class SingleColorPalette extends Component {
  constructor(props) {
    super(props)
    this.state = {
      format: 'hex',
    }
    this.changeFormat = this.changeFormat.bind(this)
    this._shades = this.gatherShades(this.props.palette, this.props.colorId)
  }
  gatherShades(palette, colorToFilterBy) {
    let shades = []
    let allColors = palette.colors
    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter((color) => color.id === colorToFilterBy)
      )
    }
    return shades.slice(1)
  }
  changeFormat(newFormat) {
    console.log(newFormat)
    this.setState({
      format: newFormat,
    })
  }

  render() {
    const { paletteName, emoji, id } = this.props.palette
    const { format } = this.state
    const colorBoxes = this._shades.map((color) => (
      <ColorBox
        key={color.name}
        name={color.name}
        background={color[format]}
        showLink={false}
      />
    ))

    return (
      <div className='SingleColorPalette Palette'>
        <NavBar
          handleChange={this.changeFormat}
          changeLevel={this.changeLevel}
          showingAllColors={false}
        />
        <div className='Palette-colors'>
          {colorBoxes}
          <div className='ColorBox go-back'>
              <Link to={`/palette/${id}`} className='back-button'>Go Back</Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    )
  }
}

export default SingleColorPalette
