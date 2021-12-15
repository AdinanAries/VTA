const express = require("express");
const cors = require('cors');
const app = express();

const { talk } = require("./src/funcs");

//talk();

//Middlewares
// For parsing application/json 
app.use(express.json()); 
// For parsing application/x-www-form-urlencoded 
app.use(express.urlencoded({ extended: true }));
// For cross origin resource sharing
app.use(cors({
    origin: '*',
    "Access-Control-Allow-Origin": '*'
}));

app.get("/", (req, res, next)=>{
    res.send("hello")
})

app.post("/query_bot/", (req, res, next)=>{
    console.log(req.body);
    let req_body = req.body;
    let res_obj = {
        msg: ""
    }
    let bot_reply = talk(req_body.q);
    res_obj.msg = bot_reply.reply;
    //console.log(talk(req_body.q));
    res.send(res_obj);
});



const PORT = process.env.PORT || 5001
app.listen(PORT, ()=>console.log(`Server started on ${PORT}...`));
