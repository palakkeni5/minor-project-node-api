var mongoose = require('mongoose')

var Videos = mongoose.model('Videos',{
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
            type: String
        }
    }]
})

module.exports = { Videos }