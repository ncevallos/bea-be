const express = require('express');
const router = express.Router();
const config = require('config');
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');

const UserModel = require('../../models/User');
const MotivateResults = require('../../models/MotivateResults');


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
        lastblockvisited,
        temptedlevel,
        vistype,
        plan2eat, //open ended
        whyhungry,
        overindulgeresult, //possibly open ended
        differentchoice,
        differentchoice2,
        planphasefeel,
        planphaselength,
        iephasefeel,
        iephaselength,
        fullphasefeel,
        fullphaselength,
        aefeel,
        aelength,
        mindfultype,
        mindfulresult,
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
        console.log("in motivate results");
        motivateResults = new MotivateResults({
            user,
            lastblockvisited,
            temptedlevel,
            vistype,
            plan2eat, //open ended
            whyhungry,
            overindulgeresult, //possibly open ended
            differentchoice,
            differentchoice2,
            planphasefeel,
            planphaselength,
            iephasefeel,
            iephaselength,
            fullphasefeel,
            fullphaselength,
            aefeel,
            aelength,
            mindfultype,
            mindfulresult
            
        });
        // user = new User({
        //     name,
        //     email,
        //     password
        // });

        // await user.save();
        await motivateResults.save();

        // const payload = {
        //   user: {
        //     id: user.id
        //   }
        // };
  

        console.log('Motivate Results Saved Success');
        res.status(200).send('Motivate Results Saved Success!');
    //   }

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

// @route    GET api/motivateResults
// @desc     Get all motivate results for associated user
// @access   Public
router.get('/', async (req, res) => {
  try {
    // const results = await PlanResults.find({ user : req.user.id});
    const results = await MotivateResults.find({ user : "60217a517f2b961147d214f0"});

    if(!results){
      return res.status(400).json({msg: "There are no results for this user"});
    }

    res.json(results);
  } catch(err){
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/motivateResults/today
// @desc     Get today's motivate results for associated user
// @access   Public
router.get('/today/:id/', async (req, res) => {
  console.log('reached get motivate results today', req.params)
  try {
    const start = new Date();
    start.setHours(0,0,0,0);
    const end = new Date();
    end.setHours(23,59,59,999);
    //const sentDate = req.params.date;
    // console.log("in get today sent params are", req.params.date);
    // if(req.params.date){
    //   console.log("date was sent")
    // } else{
    //   console.log("date was not sent")
    // }
    // const results = await PlanResults.find({ user : req.user.id});
    //user : "60217a517f2b961147d214f0", 
    const results = await MotivateResults.findOne({ user : req.params.id, date : {"$gte": start, $lt: end}}
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