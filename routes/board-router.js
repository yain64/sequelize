const express = require('express')
const router = express.Router()
const { Board } = require('../models/Board')


router.get('/create', async(res,req,next) => {
  rs = await Board.create({
    title: '테스트',
    writer: '별주부',
    content: '내용'
  })
})

module.exports = router