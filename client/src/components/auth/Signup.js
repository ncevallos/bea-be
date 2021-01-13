import React, {useState} from 'react';
import FacebookLogin from 'react-facebook-login';
import { Card, Image } from 'react-bootstrap';

export const Signup = ({register}) => {
    const [login, setLogin] = useState(false);
    const [data, setData] = useState({});
    const [picture, setPicture] = useState('');
  
    const responseFacebook = (response) => {
      console.log(response);
      setData(response);
      if (response.accessToken) {
        setLogin(true);
        setPicture(response.picture.data.url);
        console.log("Picture is ... ", response.picture.data.url);
        console.log("Name is ... ", response.name);
        console.log("ID is... ", response.id);
        console.log("User ID is... ", response.userID);
      } else {
        setLogin(false);
      }
    }
  
    return (
      <div class="container">
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
}

export default Signup;