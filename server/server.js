const express = require('express');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb')
const _  = require('lodash')

var {mongoose} = require('./db-config/mongoose');
var { Blogs } = require('./models/blogs');
var {Videos} = require('./models/videos');

var app=express();
app.use(bodyParser.json());

const port = process.env.PORT || 3000


app.post('/blogs',(req, res)=>{
    console.log(req.body)
    var body = _.pick(req.body, ['name' , 'author' , 'url' , 'date', 'content'])
    var blog = new Blogs(body)

    blog.save().then((doc)=>{
        res.send(doc)
    }, (e)=>{
        res.status(400).send(e)
    })
})

app.get('/blogs', (req,res)=>{
    Blogs.find().then((blogs)=>{
        res.send(blogs)
    },(e)=>{
        res.status(400).send(e)
    })
})


app.post('/videos',(req,res)=>{
    console.log(req.body)

    var body = _.pick(req.body, ['name' , 'author' , 'url' , 'date', 'content'])
    console.log(body)

    var video = new Videos(body)

    video.save().then((doc)=>{
        res.send(doc)
    },(e)=>{
        res.status(400).send(e)
    })

})

app.get('/videos', (req,res)=>{
    Videos.find().then((videos)=>{
        res.send(videos)
    },(e)=>{
        res.status(400).send(e)
    })
})



app.listen(port, ()=>{
    console.log(`Started server on port  ${port} `)
})

module.exports = {app}