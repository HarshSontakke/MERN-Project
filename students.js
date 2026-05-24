const mongoose = require('mongoose');


const connectDB=()=>{
mongoose.connect("mongodb://localhost:27017/School").then(()=>{  
    console.log("Connected.....");
      
}).catch((err)=>{
    console.log(err);
    
})
}
const studSchema = mongoose.Schema({
    name :
    {
        type : String,
        required : true
    },

email : {
    type : String,
    required : true
},
course:{
    type : String,
    enum : ["Python","Java","Dsa"],
    required : true
}

},
{
age : {
    type : Number,
    required : true
}
},{timestamps : true},)

const studModel = mongoose.model("Student",studSchema);

module.exports= {connectDB,studModel}











