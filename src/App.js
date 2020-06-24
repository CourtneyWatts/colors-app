import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import PaletteList from './PaletteList'
import Palette from './Palette.js'
import seedPalettes from './seedPalettes'
import { generatePalette } from './ColorHelpers'
import SingleColorPalette from './SingleColorPalette'

class App extends Component {
  findPalette(id) {
    return seedPalettes.find(function (palette) {
      return palette.id === id
    })
  }
  render() {
    return (
      <Switch>
        <Route
          exact
          path='/'
          render={(routeProps) => (
            <PaletteList palettes={seedPalettes} {...routeProps} />
          )}
        />
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
        <Route
          exact
          path='/palette/:paletteId/:colorId'
          render={(routeProps) => (
            <SingleColorPalette
            colorId={routeProps.match.params.colorId}
              palette={generatePalette(
                this.findPalette(routeProps.match.params.paletteId)
              )}
            />
          )}
        />
      </Switch>
    )
  }
}

export default App
