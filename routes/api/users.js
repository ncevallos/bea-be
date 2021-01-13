const express = require('express');
const router = express.Router();
const config = require('config');
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const normalize = require('normalize-url');

const User = require('../../models/User');

// @route    GET api/auth
// @desc     Get user by token
// @access   Private
// router.get('/', auth, async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id);
//     res.json(user);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// });


// @route    POST api/login
// @desc     Register user
// @access   Public
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('fbid', 'Facebook ID is required').not().isEmpty(),
    // check('email', 'Please include a valid email').isEmail(),
    // check(
    //   'password',
    //   'Please enter a password with 6 or more characters'
    // ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, fbid, email, profileimageURL } = req.body;

    try {
      let user = await User.findOne({ fbid });

      if (user) {
          const payload = {
            user: {
              id: user.id
            }
          };
    
          jwt.sign(
            payload,
            config.get('jwtSecret'),
            { expiresIn: '5 days' },
            (err, token) => {
              if (err) throw err;
              res.json({ token });
            }
          );
          console.log('Login Success');
          res.status(200).send('Login Success!');
      }
      else {

        user = new User({
            name,
            profileimageURL,
            email,
            fbid
        });

        //   const salt = await bcrypt.genSalt(10);

        //   user.password = await bcrypt.hash(password, salt);
        await user.save();

        const payload = {
          user: {
            id: user.id
          }
        };
  
        jwt.sign(
          payload,
          config.get('jwtSecret'),
          { expiresIn: '5 days' },
          (err, token) => {
            if (err) throw err;
            res.json({ token });
          }
        );
        console.log('Register Success');
        res.status(200).send('Register Success!');
      }

    //   user = new User({
    //     name,
    //     profileimageURL,
    //     email,
    //     fbid
    //   });

    //   const salt = await bcrypt.genSalt(10);

    //   user.password = await bcrypt.hash(password, salt);

    //   await user.save();

    //   const payload = {
    //     user: {
    //       id: user.id
    //     }
    //   };

    //   jwt.sign(
    //     payload,
    //     config.get('jwtSecret'),
    //     { expiresIn: '5 days' },
    //     (err, token) => {
    //       if (err) throw err;
    //       res.json({ token });
    //     }
    //   );
    //   res.status(200).send('Success!');
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;