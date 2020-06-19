import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Palette from './Palette.js'
import seedPalettes from './seedPalettes'
import { generatePalette } from './ColorHelpers'

function App() {
  console.log(generatePalette(seedPalettes[4]))
  return (
    <Switch>
      <Route exact path='/' render={() => <h1>Palette list GOES HERE</h1>} />
      <Route
        exact
        path='/palette/:id'
        render={() => <h1>Palette individual</h1>}
      />
    </Switch>
    // <div>
    //   <Palette palette={generatePalette(seedPalettes[4])} />
    // </div>
  )
}

export default App
