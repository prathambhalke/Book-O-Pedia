const mongoose = require("mongoose");

const bookSchema = mongoose.Schema(
    {
        title : {
            type : String,
            required : true
        },
        author : {
            type : String,
            required : true
        },
        publish : {
            type : String,
            required : true
        },
        referenceLink : {
            type : String,
            required : true
        },
        createdAt : {
            type : String,
            required : true
        }
    },
    {
        timestamp : true
    }
)

module.exports = {book : mongoose.model('BookDatabase',bookSchema)}