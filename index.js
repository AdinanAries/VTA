const express = require("express");
const cors = require('cors');
const app = express();

const { talk, query_autocomplete } = require("./src/funcs");
const constants = require("./constants/constants");
const axios = require('axios');

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
    try{
        res.status(201).send({
            message: "Hey! I'm your vitual travel assistance bot server! Cheers!",
            version: "1.0.0",
            name: "Bot AD",
            purpose: "Assists with travel activities",
            capabilities: [],
        });
    }catch(e){
        console.log(e);
        res.status(500).send({message: "Server Error!"})
    }
})

app.post("/query_bot/", (req, res, next)=>{
    try{
        //console.log(req.body);
        let req_body = req.body;
        let res_obj = {
            type: "",
            sec_type: "",
            msg: "",
        }
        let bot_reply = talk(req_body.q, req_body.bot_status);
        console.log("reply::)", bot_reply);
        res_obj.msg = bot_reply.reply[Math.floor(Math.random() * bot_reply.reply.length)];
        res_obj.type = bot_reply.action_type;

        // Fall back to third party ai
        if(bot_reply.score===0){
            axios.post(constants.THIRD_PARTY.WELLDUGO_SERVER_URL, {
                topic: "travel",
                prompt: req_body.q,
            }).then(response => {
                res_obj.msg=response.data.answer;
                res_obj.sec_type=constants.AGENT_STATE_NAMES.third_pary_response;
                res.send(res_obj);
            }).catch(error => {
                console.error("There was an error making the POST request to third party ai:", error);
                res.send(res_obj);
            });
        } else {
            //console.log(talk(req_body.q));
            res.send(res_obj);
            //res.send(undefined)
        }

    }catch(e){
        console.log(e);
        res.status(500).send({message: "Server Error!"})
    }
});

app.post("/q_autocomplete/", (req, res, next) => {
    try{
        let q = req.body.q;
        let bot_status = req.body.bot_status
        let obj = query_autocomplete(q, bot_status);
        let query = ""
        if(obj) query = obj.Query;
        console.log(query)
        res.send({q: query});
    }catch(e){
        console.log(e);
        res.status(500).send({message: "Server Error!"})
    }
});

app.post("/q_inform_client/", (req, res, next) => {
    try{
        res.send.status(201).send({
            info: "some necessary information"
        });
    }catch(e){
        console.log(e);
        res.status(500).send({message: "Server Error!"})
    }
});

//https://khmtravel.com/uncategorized/travel-agent-questions-to-ask-clients/#:~:text=Questions%20a%20Travel%20Agent%20Should%20Ask%201%20How,be%20different%20from%20others%20you%20have%20been%20on%3F
//http://boycottverizonwexford.com/nucpp/conversation-between-travel-agent-and-customer

const PORT = process.env.PORT || 5001
app.listen(PORT, ()=>console.log(`Server started on ${PORT}...`));
