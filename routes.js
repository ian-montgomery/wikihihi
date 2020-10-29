const express = require('express')
const { routes } = require('./server')
const router = express.Router()
const db = require('./db')//possible conflict in name different

router.get('/' ,(req,res) => {
    res.render('index')
})

router.get('/editPost/:id' ,(req,res) => {
    const urlId = req.params.id
    db.getPost(urlId)
    .then (postData => {

        const viewData = {
            id: postData.id,
            title: postData.title,
            content: postData.content,
            url: postData.url,
            author: postData.author
        }
    })

    res.render('editPost', viewData)
})



module.exports = router