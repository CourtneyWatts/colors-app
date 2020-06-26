import React, { Component } from 'react'
import ColorBox from './ColorBox'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
import PaletteFooter from './PaletteFooter'
import { withStyles } from '@material-ui/styles'

const styles = {
  Palette: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  PaletteColors: {
    height: '90%',
  },
  goBack: {
    width: '20%',
    height: '50%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'default',
    marginBottom: '-6px',
    backgroundColor: 'black',
    opacity: 1,
    '& a': {
      width: '100px',
      height: '30px',
      position: 'absolute',
      display: 'inline-block',
      top: '50%',
      left: '50%',
      marginTop: '-15px',
      marginLeft: '-50px',
      textAlign: 'center',
      outline: 'none',
      background: 'rgba(255, 255, 255, 0.3)',
      fontSize: '1rem',
      lineHeight: '30px',
      textTransform: 'uppercase',
      border: 'none',
      cursor: 'pointer',
      textDecoration: 'none',
      color: 'white',
      '&:hover': {
        color: 'white',
        textDecoration: 'none',
      },
    },
  },
}

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
    const { classes } = this.props
    const { paletteName, emoji, id } = this.props.palette
    const { format } = this.state
    const colorBoxes = this._shades.map((color) => (
      <ColorBox
        key={color.name}
        name={color.name}
        background={color[format]}
        showingFullPalette={false}
      />
    ))

    return (
      <div className={`SingleColorPalette ${classes.Palette}`}>
        <NavBar
          handleChange={this.changeFormat}
          changeLevel={this.changeLevel}
          showingAllColors={false}
        />
        <div className={classes.PaletteColors}>
          {colorBoxes}
          <div className={classes.goBack}>
            <Link to={`/palette/${id}`} className={classes.backButton}>
              Go Back
            </Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    )
  }
}

export default withStyles(styles)(SingleColorPalette)
