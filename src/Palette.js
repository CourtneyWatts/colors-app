import React, { Component } from 'react'
import ColorBox from './ColorBox'
import NavBar from './NavBar'
import './Palette.css'

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
    const { colors } = this.props.palette
    const colorBoxes = colors[level].map((color) => (
      <ColorBox background={color[format]} name={color.name} />
    ))
    return (
      <div className='Palette'>
        <NavBar
          level={level}
          handleChange={this.changeFormat}
          changeLevel={this.changeLevel}
        />
        <div className='Palette-colors'>{colorBoxes}</div>
      </div>
    )
  }
}

export default Palette
