import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';
import Alert from './components/layout/Alert';
import Routes from './components/routing/Routes';
import { LOGOUT } from './actions/types';
// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import 'bootstrap/dist/css/bootstrap.min.css';


if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  useEffect(() => {
    // check for token in LS

    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);


  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
        <Sidebar/>
        <section >
      <div className="flex-grow w-full mx-auto lg:px-0 flex">
      <div className="flex-1 min-w-0 lg:flex">
      <div className="bg-white lg:min-w-0 lg:flex-1 z-20 lg:ml-52 mt-16 min-h-screen -mb-16">
              

        <div className="flex h-full w-full justify-center">
        <div className="mb-2 w-full max-w-7xl h-full">
          <Alert />
          <Switch>
            {/* <Route exact path='/' component={Login} /> */}
            <Route component={Routes} />
          </Switch>
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


export default App;