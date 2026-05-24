const express = require('express');
const path = require('path');
const app = express();

app.get("/",(req,resp)=>{
    resp.sendFile(path.join(__dirname,"views","home.html"));
});
app.get("/about",(req,resp)=>{
    resp.sendFile(path.join(__dirname,"views","about.html"));
});
app.get("/contact",(req,resp)=>{
    resp.sendFile(path.join(__dirname,"views","contact.html"));
});

app.use((req,resp)=>{
    resp.sendFile(path.join(__dirname,"views","error.html"));
});

app.listen(4000,()=>{
    console.log("Runniinngggg....");
    
})