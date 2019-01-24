var mongoose = require('mongoose')

var Blogs = mongoose.model('Blogs',{
    name : {
        type : String,
        required : true ,
        minlength : 1,
        trim : true
    },
    author : {
        type : String,
        trim : true,
        required : true ,
    },
    url : {
        type : String ,
        trim: true ,
        required : true , 
    },
    date : {
        type : String,
        required : true ,
    },
    likes : [{
        name :{
            type: String
        }
    }],
    comments :[{
        name : {
            type: String,
            trim: true
        },comment : {
            type: String,
            trim: true
        }
    }],
    shares: [{
        name :{
            type: String
        }
    }],
    content : [{
        subject:{
            type: String,
            trim: true
        }
    }]
})

module.exports = { Blogs }