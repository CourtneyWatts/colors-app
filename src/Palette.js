import React, { Component } from 'react'
import ColorBox from './ColorBox'
import NavBar from './NavBar'
import './Palette.css'
import PaletteFooter from './PaletteFooter'

class Palette extends Component {
  constructor(props) {
    super(props)
    this.state = {
      level: 500,
      format: 'hex',
    }
    this.changeLevel = this.changeLevel.bind(this)
    this.changeFormat = this.changeFormat.bind(this)
  }
  changeLevel(newLevel) {
    console.log(newLevel)
    this.setState({
      level: newLevel,
    })
  }
  changeFormat(newFormat) {
    this.setState({
      format: newFormat,
    })
  }

  render() {
    const { level, format } = this.state
    const { colors, paletteName, emoji, id } = this.props.palette
    const colorBoxes = colors[level].map((color) => (
      <ColorBox
        background={color[format]}
        name={color.name}
        key={color.id}
        colorId={color.id}
        paletteId={id}
        showLink={true}
      />
    ))
    return (
      <div className='Palette'>
        <NavBar
          level={level}
          handleChange={this.changeFormat}
          changeLevel={this.changeLevel}
          showingAllColors={true}
        />
        <div className='Palette-colors'>{colorBoxes}</div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    )
  }
}

export default Palette
