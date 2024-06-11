const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {"tit":{type:String,required:true},
         "dis":{type:String,required:true},
         "date":{type:String,required:true},
         "dur":{type:String,required:true},
         "ven":{type:String,required:true},
         "tra":{type:String,required:true}}
)

let coursemodel=mongoose.model("courses",schema)
module.exports={coursemodel}