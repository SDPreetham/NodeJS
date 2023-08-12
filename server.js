const express = require("express");
//Initialisation
const app = express();
app.use(express.json());
const port = 8081;

const toDoList = ["India","US","Japan"];
app.get("/todos",(req,res)=>{
    res.status(200).send(toDoList);
})

app.post("/todos",(req,res)=>{
    let newToDo = req.body.items;
    toDoList.push(newToDo);
    res.status(201).send({
        message:"Task added successfully"
    })
})

app.delete("/todos",(req,res)=>{
    const itemtoDelete =req.body.item;
    toDoList.find((elem,index)=>{
if(elem===itemtoDelete){
toDoList.splice(index,1);}
    })
    res.status(204).send({
        message:`Deleted item "${itemtoDelete}"`
    })
})

app.all("*",(req,res)=>{
    res.status(501).send("Not implemented this feature");
})
app.listen(port,()=>{
    console.log(`Server goes live on the port ${port}`);
})