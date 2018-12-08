import React from 'react'
import { Route, Switch } from 'react-router'
import { Link } from 'react-router-dom'

import Hello from './components/Hello'
import Foo from './components/Foo'
import Bar from './components/Bar'
import NoMatch from './components/NoMatch'
import NavBar from './components/NavBar';

const routes = (
  <div>
  <Link to={{ hash: '#main-container' }} id='skip-link'>Skip to main content</Link>
    <NavBar/>
    <Switch>
      <Route exact path="/" component={Hello} />
      <Route path="/foo" component={Foo} />
      <Route path="/bar/bar/222/e" component={Bar} />
      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default routes