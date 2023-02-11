let express = require("express")
let router = express.Router()
let Book = require("../models/Books")
let User = require("../models/User")


router.post("/addBook", async (req, res) => {
    try {
    let user= await User.findById(req.body.user._id)
    let {title,isbn,author,description,published,publisher,genre}=req.body
    let book= await Book.create({title,isbn,author,description,published,publisher,genre})
    user.books.push(book._id)
    await user.save()
    res.json({
        message:"Book added succcesfully",
        book
    })

    } catch (error) {
        res.json({
            error:error.message
        })
    }
    
})
router.get("/books/:id", async (req, res) => {
    try {
        let user= await User.findById(req.params.id)
       let books=user.books
       var book_ids= books.map(function(id){return String(id)})
       let data= await Book.find({"_id":{$in:book_ids}})   
       res.json(data)   

    } catch (error) {
        res.json({
            error:error.message
        })
    }
    
})

router.put("/books/:id", async (req, res) => {
    try {
       let book= await Book.findById(req.params._id)
       let update= await Book.updateOne(
        {_id:req.params.id},
        {
            $set:req.body
        }
       )
        res.json({
            messgae:"book updated",
            book
        })
    } catch (error) {
        res.json({
            error:error.message
        })
    }
    
})
router.delete("/books/:id/:userId", async (req, res) => {
    try {
       let book= await Book.findById(req.params.id)
       await book.remove()
       let user= await User.findById(req.params.userId)
       let index=user.books.indexOf(req.params.id)
       user.books.splice(index,1)
       await user.save()
        res.json({
            messgae:"book deleted"
        })
    } catch (error) {
        res.json({
            error:error.message
        })
    }
    
})
module.exports=router