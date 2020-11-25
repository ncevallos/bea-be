import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';
import Dashboard from './components/layout/Dashboard';
import Meditate from './components/layout/Meditate';
import Motivate from './components/layout/Motivate';
import Plan from './components/layout/Plan';
import Login from './components/auth/Login';

const App = () =>
  <Router>
    <Fragment>
      <Navbar/>
      <Sidebar/>
      <section className="sbspace">
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/meditate" component={Meditate} />
          <Route exact path="/motivate" component={Motivate} />
          <Route exact path="/plan" component={Plan} />
        </Switch>
      </section>
      <Footer/>
    </Fragment>
    </Router>


export default App;
