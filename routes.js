const express = require('express')
const { routes } = require('./server')
const router = express.Router()

const db = require('./db')

router.get('/' ,(req,res) => {
    const viewData = {}
    db.getAllPosts()
        .then(posts => {
            viewData.posts = posts

            db.getAllTags()
            .then(tags => {
                viewData.tags = tags
                
                res.render('index', viewData)
            })
        })

})

router.get('/viewPost/:id', (req, res) => {
    const urlId = req.params.id

    db.getPostById(urlId)
    .then (postData => {

        const viewData = {
            id: postData.id,
            title: postData.title,
            content: postData.content,
            url: postData.url,
            author: postData.author
        }
        db.getTagsFromPost(urlId)
        .then(postTags =>{
            viewData.postTags = postTags
            console.log(viewData)
            res.render('postView', viewData)
        })

        

        
    })
})
router.get('/viewbytag', (req,res)=>{
    
})


router.get('/viewPost/:id', (req, res) => { 
    const urlId = req.params.id


router.get('/editPost/:id' ,(req,res) => {
    const urlId = req.params.id
    db.getPostById(urlId)
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

router.post('/new_post', (req,res) => {
    db.addPost()

    res.redirect("/")
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