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
    console.log(bot_reply)
    res_obj.msg = bot_reply.reply;
    //console.log(talk(req_body.q));
    res.send(res_obj);
});

//https://khmtravel.com/uncategorized/travel-agent-questions-to-ask-clients/#:~:text=Questions%20a%20Travel%20Agent%20Should%20Ask%201%20How,be%20different%20from%20others%20you%20have%20been%20on%3F
//http://boycottverizonwexford.com/nucpp/conversation-between-travel-agent-and-customer

const PORT = process.env.PORT || 5001
app.listen(PORT, ()=>console.log(`Server started on ${PORT}...`));
