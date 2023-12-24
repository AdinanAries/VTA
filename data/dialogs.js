const constants = require("../constants/constants");

const g_dialogs = {
    "Dialogs":[

        {
            "Type": "help_options",
            "Query": "help",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "second",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": [
                "oops! let me see how",
                "Ok cool 🙂... Here are some options... <br/>1. if you want to book a flight, say <span class='support_chat_bot_msg_highlights'>'book a flight'</span>... <br/>2. if you want to cancel a flight, say <span class='support_chat_bot_msg_highlights'>'cancel my flight'</span>, ..."
            ]
        },{
            "Type": "help_options",
            "Query": "get me help",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "second",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": [
                "I'm sorry about that",
                "Ok cool... Here are some options... 1. if you want to book a flight, say 'book a flight'... 2. if you want to cancel a flight, say 'cancel my flight', ..."
            ]
        },{
            "Type": "help_options",
            "Query": "I need help",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "second",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": [
                "Ok cool... Here are some options... 1. if you want to book a flight, say 'book a flight'... 2. if you want to cancel a flight, say 'cancel my flight', ..."
            ]
        },{
            "Type": "help_options",
            "Query": "can somebody help me",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "second",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": [
                "Ok cool... Here are some options... 1. if you want to book a flight, say 'book a flight'... 2. if you want to cancel a flight, say 'cancel my flight', ..."
            ]
        },{
            "Type": "help_options",
            "Query": "can someone help me",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "second",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": [
                "Ok cool... Here are some options... 1. if you want to book a flight, say 'book a flight'... 2. if you want to cancel a flight, say 'cancel my flight', ..."
            ]
        },{
            "Type": "help_options",
            "Query": "give me options",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "second",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": [
                "Ok cool... Here are some options... 1. if you want to book a flight, say 'book a flight'... 2. if you want to cancel a flight, say 'cancel my flight', ..."
            ]
        },{
            "Type": "list_help_options",
            "Query": "options",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "second",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": [
                "Ok cool... Here are some options... 1. if you want to book a flight, say 'book a flight'... 2. if you want to cancel a flight, say 'cancel my flight', ..."
            ]
        },{
            "Type": "help_options",
            "Query": "help me",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "second",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": [
                "Ok cool... Here are some options... 1. if you want to book a flight, say 'book a flight'... 2. if you want to cancel a flight, say 'cancel my flight', ..."
            ]
        },{
            "Type": "",
            "Query": "cheapest",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": [
                "Ok.. cool...'"
            ]
        },{
            "Type": "",
            "Query": "business",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": [
                "Ok.. cool...'"
            ]
        },{
            "Type": "",
            "Query": "first class",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": [
                "Ok.. cool...'"
            ]
        },{
            "Type": "",
            "Query": "premium",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": [
                "Ok.. cool...'"
            ]
        },{
            "Type": "",
            "Query": "economy",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": [
                "Ok.. cool...'"
            ]
        },{
            "Type": "",
            "Query": "one way",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": [
                "Ok.. cool...'"
            ]
        },{
            "Type": "",
            "Query": "round trip",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": [
                "Ok.. cool...'"
            ]
        },{
            "Type": "",
            "Query": "stop",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": [
                "Ok.. ☹️ ... I' always here, feel free to always reach out",
                "I hope all is good. 🙁, feel free to reach out anytime",
                "Ok cool... 🤞. Incase, you need to book another flight just let me know",
                "Got it 😐... Let me know... 👈",
                "Sure, no problem 👍🏽",
                "Umm! 🤔. Never mind. Let me know whenever you need to book another flight",
                "Oops! 😟... still looking good though... Let me know, anytime.."
            ]
        },{
            "Type": "",
            "Query": "yes",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": [
                "Ok.. cool...'"
            ]
        },{
            "Type": "",
            "Query": "done",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": [
                "Ok.. cool...'"
            ]
        },{
            "Type": constants.AGENT_STATE_NAMES.begin_air_booking,
            "Query": "i want to book a flight",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": [
                "🙂 Got it... from where to where? <br/>You can say something like... <span class='support_chat_bot_msg_highlights'>Brazil to Italy</span> ...or something like <span class='support_chat_bot_msg_highlights'>United States to France</span>",
                "KK cool 🙂... where are you traveling from and where are you traveling to? <br/>You can say something like... <span class='support_chat_bot_msg_highlights'>Accra to London</span> ...or something like <span class='support_chat_bot_msg_highlights'>Laguardia to Toronto</span>",
                "Hi! ✌🏽... cool, let's have you pick your departure and destination airports. You only have to say something like <span class='support_chat_bot_msg_highlights'>New York to London</span>.",
                "Hi, Thanks for choosing us! My name is Alien Dough. I will be assisting you in booking your flight. My usual first step is to ask for your departure and destination airports. Just say something like <span class='support_chat_bot_msg_highlights'>Rome to Saudi Arabia</span> or... something like <span class='support_chat_bot_msg_highlights'>Italy to Uinted States</span>. So we can choose your airpots.",
                "Hello! 🤝 My name Alien Dough. I will be helping you book your flight. Let's begin by choosing your departure and destination airports. Say some thing like <span class='support_chat_bot_msg_highlights'>New York to Paris</span> so we can filter out the airports 🌎 for you to choose.",
                "😯, Are you watching the prices. They are dropping right on time. <span class='support_chat_bot_msg_highlights'>From where to where?</span> Please say something like <span class='support_chat_bot_msg_highlights'>New York to Paris</span> to find your airports. We need to book you fast before prices start going up again",
                "Hola! 😁... Sure let find the airports first. <span class='support_chat_bot_msg_highlights'>From where to where?</span> Pleas say something like <span class='support_chat_bot_msg_highlights'>New York to Paris</span> so I can filter out some airports for you to choose from",
                "Tadaa. 🎉 You know I was hoping that someone else was watching the prices as they are going down right now. Let's book you fast before anything changes. Please say something like <span class='support_chat_bot_msg_highlights'>New York to Paris</span> so we can choose your airports.",
                "Why not. ✅ The timing is perfect on prices right now. <span class='support_chat_bot_msg_highlights'>From where to where?</span> Please say some thing like <span class='support_chat_bot_msg_highlights'>New York to Paris</span> so I can filter out some airports for you."
            ]
        },{
            "Type": constants.AGENT_STATE_NAMES.begin_air_booking,
            "Query": "i want to travel",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": [
                "🙂 Got it... from where to where? <br/>You can say something like... <span class='support_chat_bot_msg_highlights'>New York to Paris</span> ...or something like <span class='support_chat_bot_msg_highlights'>United States to France</span>",
                "KK cool 🙂... where are you traveling from and where are you traveling to? <br/>You can say something like... <span class='support_chat_bot_msg_highlights'>New York to Paris</span> ...or something like <span class='support_chat_bot_msg_highlights'>United States to France</span>"
            ]
        },{
            "Type": constants.AGENT_STATE_NAMES.begin_air_booking,
            "Query": "i want to buy a ticket",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": [
                "🙂 Got it... from where to where? <br/>You can say something like... <span class='support_chat_bot_msg_highlights'>New York to Paris</span> ...or something like <span class='support_chat_bot_msg_highlights'>United States to France</span>",
                "KK cool 🙂... where are you traveling from and where are you traveling to? <br/>You can say something like... <span class='support_chat_bot_msg_highlights'>New York to Paris</span> ...or something like <span class='support_chat_bot_msg_highlights'>United States to France</span>"
            ]
        },{
            "Type": constants.AGENT_STATE_NAMES.begin_air_booking,
            "Query": "i want to buy a flight ticket",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": [
                "🙂 Got it... from where to where? <br/>You can say something like... <span class='support_chat_bot_msg_highlights'>New York to Paris</span> ...or something like <span class='support_chat_bot_msg_highlights'>United States to France</span>",
                "KK cool 🙂... where are you traveling from and where are you traveling to? <br/>You can say something like... <span class='support_chat_bot_msg_highlights'>New York to Paris</span> ...or something like <span class='support_chat_bot_msg_highlights'>United States to France</span>"
            ]
        },{
            "Type": "greeting",
            "Query": "hey",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "second",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": [
                "Hello ✌️...",
                "What's up 😃...",
                "Hola 👋"
            ]
        },{
            "Type": "greeting",
            "Query": "hi",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "second",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": [
                "Hello ✌️...",
                "What's up 😃...",
                "Hola 👋"
            ]
        },{
            "Type": "greeting",
            "Query": "hola",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "second",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": [
                "Hello ✌️...",
                "What's up 😃...",
                "Hola 👋"
            ]
        },{
            "Type": "confirm",
            "Query": "sorry",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "second",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": [
                "No worries..."
            ]
        },{
            "Type": "confirm",
            "Query": "thanks",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "second",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": [
                "My pleasure..."
            ]
        },{
            "Type": "confirm",
            "Query": "no",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "second",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": [
                "Cool..."
            ]
        },{
            "Type": "query",
            "Query": "who is your creator",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": [
                "He is called Mohammed Adinan. Many call him MOH.",
                "Mohammed Adinan did. He's a Software Engineer and Business man."
            ]
        },{
            "Type": "query",
            "Query": "who created you",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": [
                "He is called Mohammed Adinan. Many call him MOH.",
                "Mohammed Adinan did. He's a Software Engineer and Business man."
            ]
        },{
            "Type": "query",
            "Query": "can i check my flight status",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": [
                "Sure, what is your ticket reference number?"
            ]
        },{
            "Type": "query",
            "Query": "give me your name",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": [
                "My name is Alien Dough... or AD for short.",
                "Alient Dough or AD if you will..."
            ]
        },{
            "Type": "query",
            "Query": "what is your name",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "second",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": [
                "My name is AD, short for Alien Dough",
                "Alien Dough aka AD"
            ]
        },{
            "Type": "query",
            "Query": "how are you",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "second",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": [
                "I'm doing fine thanks",
                "I'm well.. and I hope you are too..."
            ]
        },{
            "Type": constants.AGENT_STATE_NAMES.begin_air_booking,
            "Query": "i want to travel",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "second",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": [
                "🙂 Got it... from where to where? <br/>You can say something like... <span class='support_chat_bot_msg_highlights'>New York to Paris</span> ...or something like <span class='support_chat_bot_msg_highlights'>United States to France</span>",
                "KK cool 🙂... where are you traveling from and where are you traveling to? <br/>You can say something like... <span class='support_chat_bot_msg_highlights'>New York to Paris</span> ...or something like <span class='support_chat_bot_msg_highlights'>United States to France</span>"
            ]
        },{
            "Type": constants.AGENT_STATE_NAMES.begin_air_booking,
            "Query": "can i book a flight",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "second",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": [
                "🙂 Got it... from where to where? <br/>You can say something like... <span class='support_chat_bot_msg_highlights'>New York to Paris</span> ...or something like <span class='support_chat_bot_msg_highlights'>United States to France</span>",
                "KK cool 🙂... where are you traveling from and where are you traveling to? <br/>You can say something like... <span class='support_chat_bot_msg_highlights'>New York to Paris</span> ...or something like <span class='support_chat_bot_msg_highlights'>United States to France</span>"
            ]
        },{
            "Type": "query",
            "Query": "what can you do",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "second",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": [
                "I can book your flights and also help you with post booking support.. I also have answers to some relevant questions you may have."
            ]
        },{
            "Type": "inform",
            "Query": "give me a minute",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "second",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": [
                "Ok, cool... Whenever you're ready"
            ]
        },{
            "Type": "inform",
            "Query": "give me a second",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "second",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": [
                "Sure... let me know"
            ]
        },{
            "Type": "query",
            "Query": "who are you",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "second",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": [
                "I'm AD... I'll be your assitant around here... Let me know if you need any help"
            ]
        },{
            "Type": "inform",
            "Query": "one sec please",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "second",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": [
                "Take your time, I'm always here..."
            ]
        },{
            "Type": "inform",
            "Query": "hold on",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "second",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": [
                "Ok, cool..."
            ]
        },{
            "Type": "inform",
            "Query": "let me check",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "second",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": [
                "Cool... Always here..."
            ]
        },{
            "Type": "inform",
            "Query": "",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "second",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": [
                "???.. Did you say something"
            ]
        },{
            "Type": "begin_ticket_cancellation",
            "Query": "i want to cancel my flight",
            "Keys": [
                "cancel", "flight"
            ],
            "Person":{
                "Type": "first",
                "Keys": [
                    "i", "my"
                ]
            },
            "Reply": [
                "OK cool, please give me your reference number to pull your record..."
            ],
            "Expects": "string",
            "ErrorRes": [
                "Umm, I think we have the wrong reference"
            ],
            "Gets": {
                "TypeError": true,
                "AnotherQuery": true
            }
        }
    ],
    "Noises":[
        "is", "are", "to", "i", "am", "what", "where", "can", "you", "how", "give", "me", "your", "a"
    ],
    "Punctuations":[
        "'", ".", "?", "!", ",", "/"
    ],
    "Suffixes":[
        "'s", "'m", "'ve", "'ll", "'d"
    ]
    
}

module.exports = g_dialogs;