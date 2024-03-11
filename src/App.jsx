
import { Route, Switch, Link } from 'react-router-dom/cjs/react-router-dom.min'
import './App.css'
import Welcome from './components/ pages/Welcome'
import Signup from './components/ pages/Signup'
import Browse from './components/ pages/Browse'

function App() {
 

  return (
    <>

    <header>

      <nav>
        <Link to="/signup">Signup</Link>
        <Link to="/browse">Browse</Link>
        <Link to="/welcome">Welcome</Link>
      </nav>
    </header>


    <Switch>

      <Route exact path="/">
        <Signup/></Route>

      <Route path="/signup">
        <Signup/></Route>

      <Route path="/welcome">
      <Welcome/></Route>

      <Route path="/browse">
      <Browse/></Route>

    </Switch>
    
    </>
  )
}

export default App
