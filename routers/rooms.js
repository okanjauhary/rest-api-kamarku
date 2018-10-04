const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Room = require('../models/rooms');
const Auth = require('../helpers/auth');

router.get('/rooms', (req, res) => {
    Room
      .find({})
      .then(result => {
          res.status(200).json({
              success: true,
              data : result
          })
      })
      .catch((err) => {
          res.status(500).send(err)
      })
})

router.get('/rooms/:id', Auth, (req, res) => {
    Room
      .find({_id: req.params.id})
      .then(result => {
          res.status(200).json({
              success: true,
              data : result
          })
      })
      .catch((err) => {
          res.status(500).send(err)
      })
})

module.exports = router
