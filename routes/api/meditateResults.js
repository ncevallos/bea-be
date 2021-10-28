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
        videoid,
        videotitle
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
            videoid,
            videotitle
            
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
router.get('/:id', async (req, res) => {
  try {
    console.log("request in meditate results has", req.params.id);
    const results = await MeditateResults.find({ user : req.params.id}).sort( { date: -1 });

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
  console.log('reached get meditate results today', req.params)
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
    const results = await MeditateResults.findOne({ user : req.params.id, date : {"$gte": start, $lt: end}}
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