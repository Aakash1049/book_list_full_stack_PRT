const express=require("express")
const mongoose=require("mongoose")

let UserSchema= mongoose.Schema({
    email:{
        type:String,
        unique:true
    },
    password:String,
    books:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Book"
        }
    ]

})

let User=mongoose.model("users", UserSchema)
module.exports= User