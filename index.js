const express=require("express")
const app= express()
const mongoose= require("mongoose")
const bodyParser= require("body-parser")
const PORT=  process.env.PORT || 5000
app.use(express.json())
app.use(bodyParser.urlencoded({
    extended:true
}))
mongoose.connect("mongodb+srv://Aakash1049:Aakash1049@cluster0.0wpp0q5.mongodb.net/?retryWrites=true&w=majority",()=>{
    console.log("connected to database")
})

let user=require("./routes/User")
app.use(user)
let book=require("./routes/Books")
app.use(book)

if (process.env.NODE_ENV === 'production') {
    //*Set static folder
    app.use(express.static('client/build'));
    
    app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'client', 'build','index.html')));
  } 
app.listen(PORT,()=>{
    console.log("server running on", PORT)
})

