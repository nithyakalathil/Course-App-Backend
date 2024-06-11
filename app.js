const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const {coursemodel}=require("./models/course")

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://nithya:nithya913@cluster0.r7eo1il.mongodb.net/coursesdb?retryWrites=true&w=majority&appName=Cluster0")


app.post("/add",(req,res)=>{
let input=req.body
let course=new coursemodel(input)
course.save()
console.log(course)
res.json({status:"Success"})
    
}
)


app.get("/view",(req,res)=>{
coursemodel.find().then((data)=>{
    res.json(data)
})

    
})


app.listen(8081,()=>{
    console.log("server started")
})