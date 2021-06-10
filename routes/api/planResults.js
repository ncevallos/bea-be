const express = require('express');
const router = express.Router();
const config = require('config');
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');

const UserModel = require('../../models/User');
const PlanResults = require('../../models/PlanResults');
const { getDate } = require('date-fns');


// @route    POST api/planResults
// @desc     Post Plan Conversation Results
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
        plangoal4,
        plangoal5,
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
            user,
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
            plangoal4,
            plangoal5
            
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

// @route    GET api/planResults
// @desc     Get all plan results for associated user
// @access   Public
router.get('/', async (req, res) => {
  try {
    const start = new Date();
    // const results = await PlanResults.find({ user : req.user.id});
    //user : "60217a517f2b961147d214f0", 
    const results = await PlanResults.find({ user : "60217a517f2b961147d214f0"}
    );

    if(!results){
      return res.status(400).json({msg: "There are no results for this user"});
    }

    res.json(results);
  } catch(err){
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/planResults/today
// @desc     Get all plan results for associated user
// @access   Public
router.get('/today', async (req, res) => {
  try {
    const start = new Date();
    start.setHours(0,0,0,0);
    const end = new Date();
    end.setHours(23,59,59,999);
    // const results = await PlanResults.find({ user : req.user.id});
    //user : "60217a517f2b961147d214f0", 
    const results = await PlanResults.findOne({ user : "60217a517f2b961147d214f0", date : {"$gte": start, $lt: end}}
    );

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