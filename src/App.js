import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Home from './Home'
import About from './About'
import './App.css'

const App = () => {
    return (
        <div>
        <Router>
            <div className="Linq">
            <Link className="Link" id="home" to='/'>Home</Link>
            <Link className="Link" to='/about'>About</Link>
            <Link className="Link" to="/users">Users</Link>
            </div>

        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
        </Router>
        </div>
    )
}

export default App;