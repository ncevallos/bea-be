const express = require('express');
const router = express.Router();
const config = require('config');
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');

const UserModel = require('../../models/User');
const MeditateResults = require('../../models/MeditateResults');


// @route    POST api/motivateResults
// @desc     Post Motivate Conversation Results
// @access   Public
router.post(
  '/',
  // auth,
  async (req, res) => {
      console.log("body contains", req.body);
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({ errors: errors.array() });
    // }

    const {
        user,
        videoswatched
    } = req.body;
    // const { name, email, password } = req.body;

    try {
    //   let user = await User.findOne({ email });

    //   if (user) {
    //       const payload = {
    //         user: {
    //           id: user.id
    //         }
    //       };
    
          
    //       console.log('Login Success');
    //       res.status(200).send('Login Success!');
    //   }
    //   else {
        console.log("in meditate results");
        meditateResults = new MeditateResults({
            user,
            videoswatched
            
        });
        await meditateResults.save();


        console.log('Meditate Results Saved Success');
        res.status(200).send('Meditate Results Saved Success!');
    //   }

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

// @route    GET api/meditateResults
// @desc     Get all meditate results for associated user
// @access   Public
router.get('/', async (req, res) => {
  try {
    // const results = await PlanResults.find({ user : req.user.id});
    const results = await MeditateResults.find({ user : "60217a517f2b961147d214f0"});

    if(!results){
      return res.status(400).json({msg: "There are no results for this user"});
    }

    res.json(results);
  } catch(err){
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});



module.exports = router;