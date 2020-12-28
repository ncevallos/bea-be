import React, {useState} from 'react';
import FacebookLogin from 'react-facebook-login';
import { Card, Image } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

export const Login = ({ setAlert, register}) => {
    const [login, setLogin] = useState(false);
    const [data, setData] = useState({});
    const [picture, setPicture] = useState('');
    // const [name, setName] = useState('');
    const [formData, setFormData] = useState({
      // name: 'default',
      // email: 'nc@123.com',
      // fbid: '2312345623',
      // profileimageURL: 'http://www.test345.com'
      name: '',
      email: '',
      fbid: '',
      profileimageURL: ''
    });

    const { name, email, fbid, profileimageURL } = formData;
    const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

    const responseFacebook = (response) => {
      console.log(response);
      setData(response);
      setPicture(response.picture.data.url);
      // setName(response.name);

      if (response.accessToken) {
        setLogin(true);
        setAlert('FB Login Success', 'success');
        valuesSet(response.name, response.id, response.picture.data.url, response.email);
        // setFormData ({name: ('response.name')});
        // setFormData ({email: (response.email)});
        // this.setFormData ({fbid: (response.id)});
        // setFormData ({profileimageURL: (response.picture.data.url)});
        console.log("email is ... ", email);
        console.log("Name is ... ", name);
        console.log("ID is... ", fbid);
        console.log("Profile Image ID is... ", profileimageURL);
        console.log('data contains', data);
      } else {
        setLogin(false);
      }
    }
    const valuesSet = (naming, iding, picturing, emailing) => {

        // setFormData ({profileimageURL: ({picture})});
        this.setFormData((formData, naming)=> {
          return {name: naming}
        });
        // this.setFormData ({name: naming});
        setFormData ({fbid: (iding)});
        setFormData ({profileimageURL: (picturing)});
        setFormData ({email: (emailing)});
        console.log("Name noew is ... ", naming);
        console.log("ID1 is now... ", iding);
        console.log("ID2 is now... ", {fbid});
        // register({ name, email, fbid, profileimageURL });
        console.log("2email is ... ", email);
        console.log("2Name is ... ", name);
        console.log("2ID is... ", fbid);
    }
    const onSubmit = async (e) => {
      e.preventDefault();
        register({ name, email, fbid, profileimageURL });
        console.log("registeremail is ... ", email);
        console.log("registerName is ... ", name);
        console.log("registerID is... ", fbid);

    };
    return (
      <div className="container">
        <Card style={{ width: '600px' }}>
          <Card.Header>
            { !login && 
              <FacebookLogin
                appId="1012841372568288"
                autoLoad={true}
                fields="name,email,picture"
                scope="public_profile,user_friends"
                callback={responseFacebook}
                icon="fa-facebook" />
            }
            { login &&
              <Image src={picture} roundedCircle />
            }
          </Card.Header>
          { login &&
            <Card.Body>
              <Card.Title>{data.name}</Card.Title>
              <Card.Text>
                {data.email}
              </Card.Text>
            </Card.Body>
          }
        </Card>
        <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="fbid"
            placeholder="fbid"
            name="fbid"
            value={fbid}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="profileimageURL"
            placeholder="ProfileImageURL"
            name="profileimageURL"
            value={profileimageURL}
            onChange={onChange}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      </div>
    );
};

Login.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  // isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register})(Login);
// export default Login;