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

router.get('/newPost', (req,res) => {
    res.render('newPost')
})

router.get('/viewPost/:id', (req, res) = >{ 
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

        res.render('postView', viewData)
    })
})

router.post('/newPost', (req, res) => {

    //const newPost may change need to test
    const newPost = {
        id:req.body.id,
        title:req.body.title,
        content:req.body.content,
        url:req.body.url,
        author:req.body.author,
    }

    db.addPost(newPost)

    //db.addpost function may change need to test
})



module.exports = router