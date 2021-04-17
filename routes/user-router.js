const express = require('express')
const router = express.Router()
const { User } = require('../models/User')


router.get('/create', async(res,req,next) => {
  rs = await User.create({
    userid: 'user1',
    userpw: '별주부',
    username: '유저1',
    email: 'user1@naver.com'
  })
  res.json(rs)
})

module.exports = router