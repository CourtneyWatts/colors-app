import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Palette from './Palette.js'
import seedPalettes from './seedPalettes'
import { generatePalette } from './ColorHelpers'

class App extends Component {
  findPalette(id) {
    return seedPalettes.find(function (palette) {
      return palette.id === id
    })
  }
  render() {
    return (
      <Switch>
        <Route exact path='/' render={() => <h1>Palette list GOES HERE</h1>} />
        <Route
          exact
          path='/palette/:id'
          render={(routeProps) => (
            <Palette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
      </Switch>
    )
  }
}

export default App
