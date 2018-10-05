const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = require('../models/users');
const Room = require('../models/rooms')
const jwt = require('jsonwebtoken');

router.post('/users', (req, res, next) => {
    const user = new User({...req.body, _id: new mongoose.Types.ObjectId()})
    user
      .save()
      .then(result => {
          res.send(result)
      })
      .catch((err) => {
          res.send(err)
      })
})

router.post('/login', (req, res) => {
    User.findOne({email: req.body.email, password: req.body.password})
        .then(result => {
          jwt.sign(req.body, 'keysecret', (err, token) => {
              res.json({logged: true, token: token, message: "Loggin success"})
          })
        })
        .catch((err) => {
            res.status(500).send(err)
        })
})


module.exports = router
