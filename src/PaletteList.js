import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MiniPalette from './MiniPalette'
import { withStyles } from '@material-ui/styles'

const styles = {
  root: {
    backgroundColor: 'blue',
    height: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  container: {
    width: '50%',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  nav: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    color: 'white',
  },
  palettes: {
    boxSizing: 'border-box',
    display: 'flex',
    flexWrap: 'wrap',
  },
}

class PaletteList extends Component {
  goToPalette(id) {
    this.props.history.push(`/palette/${id}`)
  }
  render() {
    const { palettes, classes } = this.props
    console.log(palettes)

    return (
      <div className={this.props.classes.root}>
        <div className={classes.container}>
          <nav classes={classes.palettes}>
            <h1>React Colors</h1>
          </nav>
          <div className={classes.palettes}>
            {palettes.map((pal) => {
              return <MiniPalette {...pal} handleClick={()=>this.goToPalette(pal.id)} />
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(PaletteList)
