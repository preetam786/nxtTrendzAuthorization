import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <div className="e-commerce-web">
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default App
