import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Test from './components/Test'

export const Path = {
  test: '/test',
}

export class Routes extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path={Path.test} component={Test} />
            <Redirect to={Path.test} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
