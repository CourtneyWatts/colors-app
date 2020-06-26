import React, { Component } from 'react'
import ColorBox from './ColorBox'
import NavBar from './NavBar'
import { withStyles } from '@material-ui/styles'

import './Palette.css'
import PaletteFooter from './PaletteFooter'

const styles = {
  Palette: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  PaletteColors: {
    height: '90%',
  },
}

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
    const { classes } = this.props
    const { level, format } = this.state
    const { colors, paletteName, emoji, id } = this.props.palette
    const colorBoxes = colors[level].map((color) => (
      <ColorBox
        background={color[format]}
        name={color.name}
        key={color.id}
        colorId={color.id}
        paletteId={id}
        showingFullPalette={true}
      />
    ))
    return (
      <div className={classes.Palette}>
        <NavBar
          level={level}
          handleChange={this.changeFormat}
          changeLevel={this.changeLevel}
          showingAllColors={true}
        />
        <div className={classes.PaletteColors}>{colorBoxes}</div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    )
  }
}

export default withStyles(styles)(Palette)
