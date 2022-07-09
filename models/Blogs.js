const mongoose = require('mongoose');

const blogsSchema = new mongoose.Schema( {
    title: {
        type: String,
        required: true
    },
    author: { 
        type: String,
        required: true,
    },
    description: {
        type: String
    },
    timeCreated:{
        type: Date,
        default:()=>Date.now()
    },
    img: {
        type: String,
        default:"placeholder.jpg"
    }

});

module.exports = mongoose.model("Blogs", blogsSchema)