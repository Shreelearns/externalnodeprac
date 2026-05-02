import express from "express";
import { log } from "node:console";

const app = express();

app.get('/',(req,res)=>{
    console.log("GET  REQUEST"); 
    res.send("GET");
});

app.post('/',(req,res)=>{
    console.log("POST  REQUEST"); 
    res.send("POST");
});

app.listen(3000,()=>{
    console.log("RUNNING");
    
})