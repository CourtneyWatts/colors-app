import React from 'react'
import Palette from './Palette.js'
import seedPalettes from './seedPalettes'

function App() {
  return (
    <div className='App'>
      <Palette {...seedPalettes[4]} />
    </div>
  )
}

export default App
