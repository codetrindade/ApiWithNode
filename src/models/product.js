const mongoose = require("mongoose");
const schema = new mongoose.Schema({ 
    title: {
        type: String,
        required: true,
        trim:true
    },
    slug: {
        type: String,
        required: true,
        trim:true,
        unique:true
    },
    description: {
        type: String,
        required: true,
        trim:true
    },
    price: {
        type: Number,
        required: true
    },
    active: {
        type: Boolean,
        required: true,
        default:true
    },
    tags: [{
        type: String,
        required: true
    }],
});


module.exports = mongoose.model('Products', schema);