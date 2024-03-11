
import { Route, Switch, Link} from 'react-router-dom'
import './App.css'
import Welcome from './components/ pages/Welcome'
import Signup from './components/ pages/Signup'
import Browse from './components/ pages/Browse'
import { useState } from 'react'


function App() {
 
const[users, setUsers] = useState([
  {name: 'Melis', avatar: 'https://picsum.photos/300?1'},
  {name: 'Meral', avatar: 'https://picsum.photos/300?2'}

]);

return(
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
        <h1>main</h1>
      </Route>

      <Route path="/signup">
        <Signup/></Route>

      <Route path="/welcome">
      <Welcome users={users}/>
      </Route>

      <Route path="/browse">
      <Browse/></Route>

    </Switch>
    
  </>)
  
}

export default App
