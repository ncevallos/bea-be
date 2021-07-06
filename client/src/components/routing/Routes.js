import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Dashboard from '../layout/Dashboard';
import Meditate from '../layout/Meditate';
import Motivate from '../layout/Motivate';
import Motivate2 from '../layout/Motivate2';
import Plan from '../layout/Plan';
import Plan2 from '../layout/Plan2';
import Plan3 from '../layout/Plan3';
import PlanMonthly from '../layout/PlanMonthly';
import PlanDaily from '../layout/PlanDaily';
import TestPlanSubmit from '../layout/TestPlanSubmit';
import Helpcenter from '../layout/Helpcenter';
import Settings from '../layout/Settings';
import Termsconditions from '../layout/Termsconditions';
import Privacy from '../layout/Privacy';
import CalendarPage from '../layout/CalendarPage';
// import NotFound from '../layout/NotFound';
import PrivateRoute from './PrivateRoute';

const NoMatchPage = () => {
  return (
    <div
      style={{ textAlign: 'center', minHeight: 'calc(100vh - 87px - 127px)' }}
    >
      <h3 style={{ paddingTop: '3rem' }}>404 - Not found</h3>
    </div>
  );
};

const Routes = props => {
  return (
      <Switch>
        <Route exact path='/dashboard' component={Dashboard} />
        {/* <Route exact path="/signup" component={Signup} /> */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/privacy" component={Privacy} />
        <Route exact path="/termsconditions" component={Termsconditions} />
        <Route exact path="/helpcenter" component={Helpcenter} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute exact path="/meditate" component={Meditate} />
        <PrivateRoute exact path="/motivate" component={Motivate} />
        <PrivateRoute exact path="/motivate2" component={Motivate2} />
        <PrivateRoute exact path="/calendarpage" component={CalendarPage} />
        <PrivateRoute exact path="/plan" component={Plan} />
        <PrivateRoute exact path="/plan2" component={Plan2} />
        <PrivateRoute exact path="/plan3" component={Plan3} />
        <PrivateRoute exact path="/planmonthly" component={PlanMonthly} />
        <PrivateRoute exact path="/plandaily" component={PlanDaily} />
        <PrivateRoute exact path="/testplansubmit" component={TestPlanSubmit} />
        <Route component={NoMatchPage} />
      </Switch>
  );
};

export default Routes;