const dialogs = require("../data/dialogs.json");

//function for replying to query
//may contain sub-functions
/*---Interface---*/
const talk = () => {
    //console.log(dialogs);
    console.log(evaluate("What are you doing"))
}

//function to evaluate request from user
//may contain sub-functions
/*---Interface---*/
const evaluate = (submited_query) => {

    //1. turn query to array
    const words = submited_query.split(" ");
    //2. removing noise words
    const key_words = words.filter(each=>{
        return !dialogs.Noises.includes(each);
    });


    console.log(key_words);
    console.log("function to evaluate request from user")
}

module.exports = {
    talk,
    evaluate
}