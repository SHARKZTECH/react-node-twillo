const express=require("express");
const cors=require("cors");
const twilio=require("twilio");

const accountSid="";
const authToken="";
const client=new twilio(accountSid,authToken);

const app=express();


app.use(cors());

app.get("/",(req,res)=>{
    res.send("Welcome to Express Server");
});

app.get("/send-text",(req,res)=>{
    res.send("Hello to the Twilio Server");

    const {recipient,textmessage}=req.query;

    client.messages.create({
        body:textmessage,
        to:recipient,
        from:"+150..."
    }).then((message)=>console.log(message.body));
});

app.listen(5000,()=>console.log("Running...."));