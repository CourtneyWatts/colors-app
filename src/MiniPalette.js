import React from 'react'
import { withStyles } from '@material-ui/styles'

const styles = {
  root: {
    backgroundColor: 'white',
    borderRadius: '5px',
    border: '1px solid black',
    padding: '0.5rem',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  colors: {
    backgroundColor: 'grey',
    display: 'flex',
    flexWrap: 'wrap',
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0',
    color: 'black',
    paddingTop: '0.5rem',
    fontSize: '1rem',
    position: 'relative',
  },
  emoji: {
    marginLeft: '0.5rem',
    fontSize: '1.5rem',
  },
  miniColorBoxes: {
    display: 'flex',
  },
  miniBox: {
    backgroundColor: 'red',
    height: '30px',
    width: '20%',
  },
}

function MiniPalette(props) {
  const { classes, paletteName, emoji, colors } = props
  const miniColorBoxes = colors.map((col) => (
    <div
      className={classes.miniBox}
      style={{ backgroundColor: col.color }}
      key={col.name}
    />
  ))

  return (
    <div className='col-4 mb-4'>
      <div className={classes.root} onClick={props.handleClick}>
        <div className={classes.colors}>{miniColorBoxes}</div>
        <h5 className={classes.title}>
          {paletteName} <span className={classes.emoji}>{emoji}</span>
        </h5>
      </div>
    </div>
  )
}

export default withStyles(styles)(MiniPalette)
