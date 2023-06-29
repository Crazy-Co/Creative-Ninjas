import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import NotFoundPage from './components/404-Page';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/'> <Home /> </Route>
          <Route path='/resume'> <Resume /> </Route>
          <Route path='/contact'> <Contact /> </Route>
          <Route path='/signin'> <Login /> </Route>
          <Route path='/signup'> <Signup /> </Route>
          <Route path=''> <NotFoundPage /></Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App