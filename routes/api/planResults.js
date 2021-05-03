const express = require('express');
const router = express.Router();
const config = require('config');
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');

const User = require('../../models/User');
const PlanResults = require('../../models/PlanResults');


// @route    POST api/planResults
// @desc     Post Plan Conversation Results
// @access   Public
router.post(
  '/',
  // [ auth
  // ],
  async (req, res) => {
      console.log("body contains", req.body);
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({ errors: errors.array() });
    // }

    const {
        lastblockvisited,
        howdoyoufeel,
        planjournal,
        stayedontrack,
        planbadblock,
        what2change,
        influencedeating,
        whathappened,
        somethingelsebad,
        plangoal,
        plangoal2,
        plangoal3,
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
        console.log("in plan results");
        planResults = new PlanResults({
            // user: req.user.id,
            lastblockvisited,
            howdoyoufeel,
            planjournal,
            stayedontrack,
            planbadblock,
            what2change,
            influencedeating,
            whathappened,
            somethingelsebad,
            plangoal,
            plangoal2,
            plangoal3,
            
        });
        // user = new User({
        //     name,
        //     email,
        //     password
        // });

        // await user.save();
        await planResults.save();

        // const payload = {
        //   user: {
        //     id: user.id
        //   }
        // };
  

        console.log('Plan Results Saved Success');
        res.status(200).send('Plan Results Saved Success!');
    //   }

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

router.get('/', auth, async (req, res) => {
  try {
    const results = await PlanResults.findOne({ user : req.user.id});

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