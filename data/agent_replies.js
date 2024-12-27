const constants = require("../constants/constants");

const REPLIES = {
    help_options: [
        "Ok cool 🙂... Here are some options... <br/>1. if you want to book a flight, say <span class='support_chat_bot_msg_highlights'>'book a flight'</span>... <br/>2. if you want to cancel a flight, say <span class='support_chat_bot_msg_highlights'>'cancel my flight'</span>, ...",
        "Ok cool... Here are some options... 1. if you want to book a flight, say 'book a flight'... 2. if you want to cancel a flight, say 'cancel my flight', ...",
        "At this moment, I can only book a flight for you and anwer some general questions. Please say <span class='support_chat_bot_msg_highlights'>'book a flight'</span> or ask me general questions about your travel destination or other...",
        "I can book your flights and also help you with post booking support.. I also have answers to some relevant travel questions you may have."
    ],
    stop_activity: [
        "Ok.. ☹️ ... I' always here, feel free to always reach out",
        "I hope all is good. 🙁, feel free to reach out anytime",
        "Ok cool... 🤞. Incase, you need to book another flight just let me know",
        "Got it 😐... Let me know... 👈",
        "Sure, no problem 👍🏽",
        "Umm! 🤔. Never mind. Let me know whenever you need to book another flight",
        "Oops! 😟... still looking good though... Let me know, anytime..",
    ],
    confirmation: [
        "Ok.. cool...",
        "Got it...",
        "Alright, let me know whenever",
        "You got it!",
        "Great. Feel free to reach out again anytime!"
    ],
    begin_air_booking: [
        "🙂 Got it... From where to where? <br/>You can say something like... <span class='support_chat_bot_msg_highlights'>Brazil to Italy</span> ...or something like <span class='support_chat_bot_msg_highlights'>United States to France</span>",
        "KK cool 🙂... Where are you traveling from and where are you traveling to? <br/>You can say something like... <span class='support_chat_bot_msg_highlights'>Accra to London</span> ...or something like <span class='support_chat_bot_msg_highlights'>Laguardia to Toronto</span>",
        "Hi! ✌🏽... cool, Let's have you pick your departure and destination airports. You only have to say something like <span class='support_chat_bot_msg_highlights'>New York to London</span>.",
        "Hi, Thanks for choosing us! My name is "+constants.AGENT_NAME+". I will be assisting you in booking your flight. My usual first step is to ask for your departure and destination airports. Just say something like <span class='support_chat_bot_msg_highlights'>Rome to Saudi Arabia</span> or... something like <span class='support_chat_bot_msg_highlights'>Italy to Uinted States</span>. So we can choose your airpots.",
        "Hello! 🤝 My name "+constants.AGENT_NAME+". I will be helping you book your flight. Let's begin by choosing your departure and destination airports. Say some thing like <span class='support_chat_bot_msg_highlights'>New York to Paris</span> so we can filter out the airports 🌎 for you to choose.",
        "😯, Are you watching the prices. They are dropping right on time. <span class='support_chat_bot_msg_highlights'>From where to where?</span> Please say something like <span class='support_chat_bot_msg_highlights'>New York to Paris</span> to find your airports. We need to book you fast before prices start going up again",
        "Hola! 😁... Sure let find the airports first. <span class='support_chat_bot_msg_highlights'>From where to where?</span> Pleas say something like <span class='support_chat_bot_msg_highlights'>New York to Paris</span> so I can filter out some airports for you to choose from",
        "Tadaa. 🎉 You know I was hoping that someone else was watching the prices as they are going down right now. Let's book you fast before anything changes. Please say something like <span class='support_chat_bot_msg_highlights'>New York to Paris</span> so we can choose your airports.",
        "Why not. ✅ The timing is perfect on prices right now. <span class='support_chat_bot_msg_highlights'>From where to where?</span> Please say some thing like <span class='support_chat_bot_msg_highlights'>New York to Paris</span> so I can filter out some airports for you.",
        "OK 🙂 ... From where to where? <br/>You can say something like... <span class='support_chat_bot_msg_highlights'>New York to Paris</span> ...or something like <span class='support_chat_bot_msg_highlights'>United States to France</span>",
        "Hey.. Cool.. 🙂... Where are you traveling from and where are you traveling to? <br/>You can say something like... <span class='support_chat_bot_msg_highlights'>New York to Paris</span> ...or something like <span class='support_chat_bot_msg_highlights'>United States to France</span>",
        "Got it 🙂... From where to where? <br/>You can say something like... <span class='support_chat_bot_msg_highlights'>New York to Paris</span> ...or something like <span class='support_chat_bot_msg_highlights'>United States to France</span>",
        "Perfect! 🙂... Where are you traveling from and where are you traveling to? <br/>You can say something like... <span class='support_chat_bot_msg_highlights'>New York to Paris</span> ...or something like <span class='support_chat_bot_msg_highlights'>United States to France</span>",
        "Ok Sure... From where to where? <br/>You can say something like... <span class='support_chat_bot_msg_highlights'>New York to Paris</span> ...or something like <span class='support_chat_bot_msg_highlights'>United States to France</span>",
        "Great... where are you traveling from and where are you traveling to? <br/>You can say something like... <span class='support_chat_bot_msg_highlights'>New York to Paris</span> ...or something like <span class='support_chat_bot_msg_highlights'>United States to France</span>",
        "🙂.. From where to where? <br/>You can say something like... <span class='support_chat_bot_msg_highlights'>New York to Paris</span> ...or something like <span class='support_chat_bot_msg_highlights'>United States to France</span>",
        "Hey, thanks... Please where are you traveling from and where are you traveling to? <br/>You can say something like... <span class='support_chat_bot_msg_highlights'>New York to Paris</span> ...or something like <span class='support_chat_bot_msg_highlights'>United States to France</span>",
        "Please from where to where? <br/>You can say something like... <span class='support_chat_bot_msg_highlights'>New York to Paris</span> ...or something like <span class='support_chat_bot_msg_highlights'>United States to France</span>",
        "OK, please where are you traveling from and where are you traveling to? <br/>You can say something like... <span class='support_chat_bot_msg_highlights'>New York to Paris</span> ...or something like <span class='support_chat_bot_msg_highlights'>United States to France</span>"
    ],
    who_created_you: [
        "He is called Mohammed Adinan who decided to make the travel booking platforms include adequate AI",
        "Mohammed Adinan did. He's a Software Engineer and Business man. He wants to see so much AI integration into the travel booking industry so he started creating me in 2021",
        "Mohammed Adinan started building this travel platform somewhere in 2021. He wanted the platform to include an AI agent, so he started creating me in order to serve that purpose",
        "Mohammed Adinan. He's a Software Engineer and Business man who has obsession with the integration of AI into the travel retail industry",
    ],
    who_am_i: [
        "My name is "+constants.AGENT_NAME+"... or AD for short.",
        constants.AGENT_NAME+" or AD if you will...",
        "My name is AD, short for "+constants.AGENT_NAME,
        +constants.AGENT_NAME+" A.K.A AD",
    ]

}

module.exports = REPLIES;
