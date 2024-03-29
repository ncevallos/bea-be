import React, {useState} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { login } from '../../actions/auth';
import PropTypes from 'prop-types';

export const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
      email: '',
      password: ''
    });
  
    const { email, password } = formData;
  
    const onChange = e =>
      setFormData({ ...formData, [e.target.name]: e.target.value });
  
    const onSubmit = e => {
      e.preventDefault();
      login(email, password);
    };
  
    if (isAuthenticated) {
      return <Redirect to="/dashboard" />;
    }
  
    return (

                  <div className="block">
                      <div>
                          
                    <h1 className="large text-primary">Sign In</h1>
                    <p className="lead">
                      <i className="fas fa-user" /> Sign Into Your Account
                    </p>
                    <form className="form" onSubmit={onSubmit}>
                      <div className="form-group">
                        <input
                          type="email"
                          placeholder="Email Address"
                          name="email"
                          value={email}
                          onChange={onChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          placeholder="Password"
                          name="password"
                          autoComplete="password"
                          value={password}
                          onChange={onChange}
                          minLength="6"
                        />
                      </div>
                      <input type="submit" className="btn btn-primary" value="Login" />
                    </form>
                    <p className="my-1">
                      Don't have an account? <Link to="/register">Sign Up</Link>
                    </p>
                    </div>
                  </div>
    );
};

Login.propTypes = {
  setAlert: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

// export default connect(mapStateToProps, { setAlert, register})(Login);
export default connect(mapStateToProps, { setAlert, login })(Login);
// export default Login;