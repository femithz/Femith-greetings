var express = require('express');
var router = express.Router();
var Message=require('../models/message');

//messages from user
router.post('/message', function (req,res) {
    const message = new Message({
      name:req.body.name,
      email:req.body.email,
      message:req.body.message,
      sent_dt:Date.now(),
    });
    message.save(function (err,message) {
      if (err) {return res.status(501).json()}else{
        return res.status(200).json({
          message:'message has been created successfully',
        })
      };
    })  
  })
module.exports = router;
