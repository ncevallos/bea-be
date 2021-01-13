import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';
import Dashboard from './components/layout/Dashboard';
import Meditate from './components/layout/Meditate';
import Motivate from './components/layout/Motivate';
import Plan from './components/layout/Plan';
import Helpcenter from './components/layout/Helpcenter';
import Settings from './components/layout/Settings';
import Termsconditions from './components/layout/Termsconditions';
import Privacy from './components/layout/Privacy';
import Alert from './components/layout/Alert';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Register from './components/auth/Register';
import { LOGOUT } from './actions/types';
// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

const App = () => {
  // useEffect(() => {
  //   // check for token in LS
  //   if (localStorage.token) {
  //     setAuthToken(localStorage.token);
  //   }
  //   store.dispatch(loadUser());

  //   // log user out from all tabs if they log out in one tab
  //   window.addEventListener('storage', () => {
  //     if (!localStorage.token) store.dispatch({ type: LOGOUT });
  //   });
  // }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
        <Sidebar/>
        <section className="sbspace">
          <Alert />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/meditate" component={Meditate} />
            <Route exact path="/motivate" component={Motivate} />
            <Route exact path="/plan" component={Plan} />
            <Route exact path="/privacy" component={Privacy} />
            <Route exact path="/termsconditions" component={Termsconditions} />
            <Route exact path="/helpcenter" component={Helpcenter} />
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </section>
        <Footer/>
        </Fragment>
      </Router>
    </Provider>
  );
};


// const App = () =>
//   <Provider store={store}>
//     <Router>
//       <Fragment>
//         <Navbar/>
//         <Sidebar/>
//         <section className="sbspace">
//           <Alert />
//           <Switch>
//             <Route exact path='/' component={Dashboard} />
//             <Route exact path="/login" component={Login} />
//             <Route exact path="/signup" component={Signup} />
//             <Route exact path="/meditate" component={Meditate} />
//             <Route exact path="/motivate" component={Motivate} />
//             <Route exact path="/plan" component={Plan} />
//             <Route exact path="/privacy" component={Privacy} />
//             <Route exact path="/termsconditions" component={Termsconditions} />
//             <Route exact path="/helpcenter" component={Helpcenter} />
//             <Route exact path="/settings" component={Settings} />
//             <Route exact path="/register" component={Register} />
//           </Switch>
//         </section>
//         <Footer/>
//       </Fragment>
//       </Router>
//     </Provider>

export default App;