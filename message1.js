const { log } = require('console');
const fs = require('fs');

function readFile() {
    fs.readFile("text.txt",(err,data)=>{
        if (err) {
            console.log("Error");
            
        } else {
            console.log("File Content:");
            console.log(data.toString);
        }
    })  
}
function writeFile(content){
    fs.writeFile("text.txt",content,(err)=>{
        if(err){
            console.log("Error Writing File");
        }else{
            console.log("File Created Successfullly");
            
        }
    });
}

function deleteFile(){
    fs.unlink("text.txt",(err)=>{
        if(err){
            console.log("Error Deleting File");
        } else{
            console.log("File Deleted Successfully");
        }
    });
}

function makeDirectory(){
    fs.mkdir("NewFolder",(err)=>{
        if(err){
            console.log("Error Creating Directory");
        }else{
            console.log("Directory Created Successfully");
            
        }
    });
}
function removeDirectory(){
    fs.rmdir("NewFolder",(err)=>{
        if(err){
            console.log("Error Removing Directory");
        }else{
            console.log("Directory Created Successfully");
            
        }

    });
}

module.exports={
    readFile,
    writeFile,
    deleteFile,
    makeDirectory,
    removeDirectory
};