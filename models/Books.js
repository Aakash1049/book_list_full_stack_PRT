const express=require("express")
const mongoose=require("mongoose")

let BookSchema= mongoose.Schema({
    title:String,
    isbn:String,
    author:String,
    description:String,
    published:Date,
    publisher:String,
    genre:String
})

let Book=mongoose.model("books", BookSchema)
module.exports= Book