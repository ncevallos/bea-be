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
    const [formData, setFormData] = useState({
      name: 'Natasha',
      email: 'nc@123.com',
      fbid: '23123456',
      profileimageURL: 'http://www.test345.com'
    });

    const { name, email, fbid, profileimageURL } = formData;
    const responseFacebook = (response) => {
      console.log(response);
      setData(response);
      setPicture(response.picture.data.url);

      if (response.accessToken) {
        setLogin(true);
        setAlert('FB Login Success', 'success');
        // setFormData ({name: ('response.name')});
        // setFormData ({email: (response.email)});
        // setFormData ({fbid: (response.id)});
        // setFormData ({profileimageURL: (response.picture.data.url)});
        console.log("email is ... ", email);
        console.log("Name is ... ", name);
        console.log("ID is... ", fbid);
        console.log("Profile Image ID is... ", profileimageURL);
        register({ name, email, fbid, profileimageURL });
      } else {
        setLogin(false);
      }
    }
  
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