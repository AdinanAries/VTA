const dialogs = require("../data/dialogs.json");

const talk = () => {
    console.log(dialogs);
}

//function to evaluate request from user
//may contain sub-functions
const evaluate = () => {
    console.log("function to evaluate request from user")
}

module.exports = {
    talk,
    evaluate
}