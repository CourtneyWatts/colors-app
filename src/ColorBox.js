import React, { Component } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Link } from 'react-router-dom'
import chroma from 'chroma-js'
import { withStyles } from '@material-ui/styles'
import './ColorBox.css'

const styles = {
  ColorBox: {
    width: '20%',
    height: (props) => (props.showingFullPalette ? '25%' : '50%'),
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-6px',
    '&:hover button': {
      opacity: 1,
      transition: '0.5s',
    },
  },
  copyText: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.7 ? 'black' : 'white',
  },
  colorName: {
    color: (props) =>
      chroma(props.background).luminance() <= 0.5 ? 'white' : 'black',
  },
  seeMore: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.7
        ? 'rgba(0, 0, 0, 0.5)'
        : 'white',
    background: 'rgba(255, 255, 255, 0.3)',
    position: 'absolute',
    border: 'none',
    right: '0px',
    bottom: '0px',
    width: '60px',
    height: '30px',
    textAlign: 'center',
    lineHeight: '30px',
    textTransform: 'uppercase',
  },
  copyButton: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.7
        ? 'rgba(0, 0, 0, 0.5)'
        : 'white',
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
    opacity: 0,
    '&:focus': {
      outline: 'none',
    },
  },
  boxContent: {
    position: 'absolute',
    width: '100%',
    left: '0px',
    bottom: '0px',
    padding: '10px',
    color: 'black',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontSize: '12px',
  },
  copyOverlay: {
    opacity: '0',
    zIndex: '0',
    height: '100%',
    width: '100%',
    transition: 'transform 0.6s ease-in-out',
    transform: 'scale(0.1)',
  },
  showOverlay: {
    opacity: '1',
    transform: 'scale(50)',
    zIndex: '1',
    position: 'absolute',
  },
  copyMSG: {
    position: 'fixed',
    left: '0',
    right: '0',
    top: '0',
    bottom: '0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    transform: 'scale(0.1)',
    opacity: '0',
    color: 'white',
    '& h1': {
      fontWeight: '400',
      textShadow: '1px 2px black',
      background: 'rgba(255, 255, 255, 0.2)',
      width: '100%',
      textAlign: 'center',
      marginBottom: '0',
      padding: '1rem',
      textTransform: 'uppercase',
      fontSize: '6rem',
    },
    '& p': {
      fontSize: '2rem',
      fontWeight: '100',
    },
  },
  showMSG: {
    opacity: '1',
    transform: 'scale(1)',
    zIndex: '25',
    transition: 'all 0.4s ease-in-out',
    transitionDelay: '0.3',
  },
}

class ColorBox extends Component {
  constructor(props) {
    super(props)
    this.state = { copied: false }
    this.changeCopyState = this.changeCopyState.bind(this)
  }
  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500)
    })
  }
  render() {
    const {
      name,
      background,
      paletteId,
      colorId,
      showingFullPalette,
      classes,
    } = this.props
    const { copied } = this.state
    return (
      <CopyToClipboard text='test copy' onCopy={this.changeCopyState}>
        <div style={{ background }} className={classes.ColorBox}>
          <div
            style={{ background }}
            className={`${classes.copyOverlay} ${
              copied && classes.showOverlay
            }`}
          />
          <div className={`${classes.copyMSG} ${copied && classes.showMSG}`}>
            <h1>copied</h1>
            <p className={classes.copyText}>{background}</p>
          </div>
          <div>
            <div className={classes.boxContent}>
              <span className={classes.colorName}>{name}</span>
            </div>
            <button className={classes.copyButton}>Copy</button>
          </div>
          {showingFullPalette && (
            <Link
              to={`/palette/${paletteId}/${colorId}`}
              onClick={(e) => e.stopPropagation()}
            >
              <span className={classes.seeMore}>more</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    )
  }
}

export default withStyles(styles)(ColorBox)
