const express = require('express')
const { routes } = require('./server')
const router = express.Router()


router.get('/' ,(req,res) => {
    res.render('home')
})


module.exports = router