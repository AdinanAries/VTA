const constants = require("../constants/constants");
const REPLIES = require("./agent_replies");

const g_dialogs = {
    "Dialogs":[

        {
            "Type": constants.AGENT_STATE_NAMES.help_options,
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
            "Reply": REPLIES.help_options
        },{
            "Type": constants.AGENT_STATE_NAMES.help_options,
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
            "Reply": REPLIES.help_options
        },{
            "Type": constants.AGENT_STATE_NAMES.help_options,
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
            "Reply": REPLIES.help_options
        },{
            "Type": constants.AGENT_STATE_NAMES.help_options,
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
            "Reply": REPLIES.help_options
        },{
            "Type": constants.AGENT_STATE_NAMES.help_options,
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
            "Reply": REPLIES.help_options
        },{
            "Type": constants.AGENT_STATE_NAMES.help_options,
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
            "Reply": REPLIES.help_options
        },{
            "Type": constants.AGENT_STATE_NAMES.help_options, //"list_help_options",
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
            "Reply": REPLIES.help_options
        },{
            "Type": constants.AGENT_STATE_NAMES.help_options,
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
            "Reply": REPLIES.help_options
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
            "Reply": REPLIES.stop_activity
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
            "Reply": REPLIES.confirmation
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
            "Reply": REPLIES.confirmation
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
            "Reply": REPLIES.begin_air_booking
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
            "Reply": REPLIES.begin_air_booking
        },{
            "Type": constants.AGENT_STATE_NAMES.begin_air_booking,
            "Query": "can i travel to",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": REPLIES.begin_air_booking
        },{
            "Type": constants.AGENT_STATE_NAMES.begin_air_booking,
            "Query": "may i travel to",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": REPLIES.begin_air_booking
        },{
            "Type": constants.AGENT_STATE_NAMES.begin_air_booking,
            "Query": "i would like to travel to",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": REPLIES.begin_air_booking
        },{
            "Type": constants.AGENT_STATE_NAMES.begin_air_booking,
            "Query": "can i search flights",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": REPLIES.begin_air_booking
        },{
            "Type": constants.AGENT_STATE_NAMES.begin_air_booking,
            "Query": "i want to search flights",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": REPLIES.begin_air_booking
        },{
            "Type": constants.AGENT_STATE_NAMES.begin_air_booking,
            "Query": "can i book a flight ticket",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": REPLIES.begin_air_booking
        },{
            "Type": constants.AGENT_STATE_NAMES.begin_air_booking,
            "Query": "I want to go to",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": REPLIES.begin_air_booking
        },{
            "Type": constants.AGENT_STATE_NAMES.begin_air_booking,
            "Query": "let's book me a ticket",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": REPLIES.begin_air_booking
        },{
            "Type": constants.AGENT_STATE_NAMES.begin_air_booking,
            "Query": "lets book a flight ticket",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": REPLIES.begin_air_booking
        },{
            "Type": constants.AGENT_STATE_NAMES.begin_air_booking,
            "Query": "can you find me some flight tickets",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": REPLIES.begin_air_booking
        },{
            "Type": constants.AGENT_STATE_NAMES.begin_air_booking,
            "Query": "may i book a flight",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": REPLIES.begin_air_booking
        },{
            "Type": constants.AGENT_STATE_NAMES.begin_air_booking,
            "Query": "could i book a flight",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": REPLIES.begin_air_booking
        },{
            "Type": constants.AGENT_STATE_NAMES.begin_air_booking,
            "Query": "let's book a flight",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": REPLIES.begin_air_booking
        },{
            "Type": constants.AGENT_STATE_NAMES.begin_air_booking,
            "Query": "please get me a flight ticket",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": REPLIES.begin_air_booking
        },{
            "Type": constants.AGENT_STATE_NAMES.begin_air_booking,
            "Query": "get me a flight ticket",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": REPLIES.begin_air_booking
        },{
            "Type": constants.AGENT_STATE_NAMES.begin_air_booking,
            "Query": "can you find me some flights to",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": REPLIES.begin_air_booking
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
            "Reply": REPLIES.begin_air_booking
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
            "Reply": REPLIES.begin_air_booking
        },{
            "Type": constants.AGENT_STATE_NAMES.greeting,
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
            "Type": constants.AGENT_STATE_NAMES.greeting,
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
            "Type": constants.AGENT_STATE_NAMES.greeting,
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
            "Type": constants.AGENT_STATE_NAMES.confirm,
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
            "Type": constants.AGENT_STATE_NAMES.confirm,
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
            "Type": constants.AGENT_STATE_NAMES.confirm,
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
            "Type": constants.AGENT_STATE_NAMES.query,
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
            "Reply": REPLIES.who_created_you
        },{
            "Type": constants.AGENT_STATE_NAMES.query,
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
            "Reply": REPLIES.who_created_you
        },{
            "Type": constants.AGENT_STATE_NAMES.query,
            "Query": "who made you",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": REPLIES.who_created_you
        },{
            "Type": constants.AGENT_STATE_NAMES.query,
            "Query": "why were you created",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": REPLIES.who_created_you
        },{
            "Type": constants.AGENT_STATE_NAMES.query,
            "Query": "tell me about your creator",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": REPLIES.who_created_you
        },{
            "Type": constants.AGENT_STATE_NAMES.query,
            "Query": "tell me about the person who created you",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": REPLIES.who_created_you
        },{
            "Type": constants.AGENT_STATE_NAMES.query,
            "Query": "tell me about who created you",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": REPLIES.who_created_you
        },{
            "Type": constants.AGENT_STATE_NAMES.query,
            "Query": "did Mohammed create you?",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": REPLIES.who_created_you
        },{
            "Type": constants.AGENT_STATE_NAMES.query,
            "Query": "did Mohammed Adinan create you",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": REPLIES.who_created_you
        },{
            "Type": constants.AGENT_STATE_NAMES.query,
            "Query": "did Adinan create you",
            "Keys": [
                "", ""
            ],
            "Person":{
                "Type": "",
                "Keys": [
                    "", ""
                ]
            },
            "Reply": REPLIES.who_created_you
        },{
            "Type": constants.AGENT_STATE_NAMES.query,
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
            "Type": constants.AGENT_STATE_NAMES.query,
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
            "Reply": REPLIES.who_am_i
        },{
            "Type": constants.AGENT_STATE_NAMES.query,
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
            "Reply": REPLIES.who_am_i
        },{
            "Type": constants.AGENT_STATE_NAMES.query,
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
            "Reply": REPLIES.begin_air_booking
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
            "Reply": REPLIES.begin_air_booking
        },{
            "Type": constants.AGENT_STATE_NAMES.help_options,
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
            "Reply": REPLIES.help_options
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
            "Type": constants.AGENT_STATE_NAMES.query,
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
