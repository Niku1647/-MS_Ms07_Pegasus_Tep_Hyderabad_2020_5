import React from 'react';
import './App.css';
import Nav from './Nav'
import About from './About'
import Newpost from './Newpost'
import Login from './Login'
import Logout from './Logout'
import Register from './Register'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App() {
  return (
    <Router> 
    <div className='App'>
      <Nav/>
      <Switch>
        <Route path='/' exact component ={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/newpost' component={Newpost}/>
        <Route path= '/login' component={Login}/>
        <Route path= '/logout' component={Logout}/>
        <Route path= '/register' component={Register}/>
      </Switch>    
    </div>
    </Router>
  );
}

const Home = () => {
  return(
  <div>
  <h1> subhakantha desing img grid come in here </h1>
  </div>
  );
}

export default App;