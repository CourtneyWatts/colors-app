import React, { Component } from 'react'
import Slider, { Range } from 'rc-slider'
import 'rc-slider/assets/index.css'
import './NavBar.css'

class NavBar extends Component {
  render() {
    const { changeLevel, level } = this.props
    return (
      <header className='NavBar'>
        <div className='logo'>
          <a href='#'>react-color-picker</a>
        </div>
        <div className='slider-container'>
          <span>Level: {level}</span>
          <div className='slider'>
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLevel}
              railStyle={{ Height: '8px' }}
            />
          </div>
        </div>
      </header>
    )
  }
}

export default NavBar
