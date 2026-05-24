const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({extended:true}))

app.get("/form",(req,resp)=>{
    resp.sendFile(path.join(__dirname,"views",'form.html'))
})
 
app.post("/data",(req,resp)=>{
    const data= req.body;
    console.log(data);
    resp.json(data)    
})
app.listen(4000,()=>{
    console.log("runnnning......");
    
})