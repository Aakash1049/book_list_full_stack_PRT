const bodyparser = require("body-parser")
let express = require("express")
let router = express.Router()
let User = require("../models/User")

router.post("/signup", async (req, res) => {
    try {
        console.log(req.body)
        let { email, password } = req.body
    let user = await User.findOne({ email: email })
    if (user) {
        console.log(user)
        return res.json({
            error: "User already exists"
        })
    }
    user = await User.create({ email, password })
    res.json({
        messagge: "Account created successfully"
    })

    } catch (error) {
        console.log("error in signup",error)
        res.json({
            error:error.messagge
        })
    }
    
})
router.post("/signin", async (req, res) => {
    try {
        let { email, password } = req.body
        console.log(email, password, req.body)
    let user = await User.findOne({ email: email })
    if (!user) {
        return res.json({
            error: "User does not exists"
        })
    }
    if(user.password!==password){
        return res.json({
            error: "password does not match"
        })
    }
    
    res.json({
        messagge: "logged in successfully",
        user
    })

    } catch (error) {
        res.json({
            error:error.messagge
        })
    }
    
})

module.exports=router