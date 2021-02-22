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
import Plan2 from './components/layout/Plan2';
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


if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  // useEffect(() => {
  //   // check for token in LS

  //   store.dispatch(loadUser());

  //   // log user out from all tabs if they log out in one tab
  //   // window.addEventListener('storage', () => {
  //   //   if (!localStorage.token) store.dispatch({ type: LOGOUT });
  //   // });
  // }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
        <Sidebar/>
        <section >
      <div className="flex-grow w-full mx-auto lg:px-0 flex">
      <div className="flex-1 min-w-0 lg:flex">
      <div className="bg-white lg:min-w-0 lg:flex-1 z-20 lg:ml-52 mt-16">

<<<<<<< Updated upstream
              <div className="flex px-0 py-0">
=======
              <div className="flex">
>>>>>>> Stashed changes
              <div className="flex flex-col w-full">
  
  
                  <div className="mb-2">
          <Alert />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/meditate" component={Meditate} />
            <Route exact path="/motivate" component={Motivate} />
            <Route exact path="/plan" component={Plan} />
            <Route exact path="/plan2" component={Plan2} />
            <Route exact path="/privacy" component={Privacy} />
            <Route exact path="/termsconditions" component={Termsconditions} />
            <Route exact path="/helpcenter" component={Helpcenter} />
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/register" component={Register} />
          </Switch>
          </div>
              </div>
              </div>
          </div>
          </div>
          </div>
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