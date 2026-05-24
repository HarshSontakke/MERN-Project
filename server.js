const express = require('express');


const { connectDB, studModel } = require('./models/students');
const app = express();
app.use(express.json());
connectDB();

app.post('/addStud', async (req, resp) => {
    try{
        const data=new studModel({
            name:req.body.name,
            email:req.body.email,
            course:req.body.course,
            age:req.body.age
        })

        const result=await data.save();
        
        resp.json(result);
    }
    catch(err){
        console.log(err);
       
    }
})

app.get('/showStud', async (req, resp) => {
    try{
        const data=await studModel.find();
        
        resp.json(data);
    }
    catch(err){
        console.log(err);   
    }
})

app.delete('/deleteStud/:id', async (req, resp) => {
    try{
        const data=await studModel.findByIdAndDelete(req.params.id);
        resp.json(data);
    }
    catch(err){
        console.log(err);
        
    }
})

app.patch('/updateStud/:id', async (req, resp) => {
    try{
        const data=await studModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
        resp.json(data);
    }
    catch(error){
        console.log(error);
    }
})

app.listen(4000, () => {
    console.log("Server is running on port 4000");
});