import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Navbar from './Components/Navbar'
import UserProfile from './Components/UserProfile'
import Main from './Components/Main'

const App = () =>(
  <>
    <Navbar/>
    <Switch>
      <Route exact path='/' component={Main}/>
      <Route exact path ='/user/profile' render={()=><UserProfile/>} />
    </Switch>
  </>
)

export default App;
