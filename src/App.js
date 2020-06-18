import React from 'react'
import Palette from './Palette.js'
import seedPalettes from './seedPalettes'
import { generatePalette } from './ColorHelpers'

function App() {
  console.log(generatePalette(seedPalettes[4]))
  return (
    <div className='App'>
      <Palette palette={generatePalette(seedPalettes[4])} />
    </div>
  )
}

export default App
