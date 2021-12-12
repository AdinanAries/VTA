const dialogs = require("../data/dialogs.json");

//function for replying to query
//may contain sub-functions
/*---Interface---*/
const talk = () => {
    //console.log(dialogs);
    console.log(evaluate("What's? are you doing?"))
}

//function to evaluate request from user
//may contain sub-functions
/*---Interface---*/
const evaluate = (submited_query) => {

    //1. removing noise words returs {words, key_words}
    const cleaned_query = cleanup(submited_query);

    console.log(cleaned_query.key_words);
    //console.log("function to evaluate request from user")
}

//removing noise words
const cleanup = (sentence) => {
    //1. turn query to array
    let words = sentence.split(" ");
    //2. removing punctuations
    words = words.map(word => {
        return punct_cleanup(word);
    });
    //3. removing noise words
    let key_words = words.filter(each=>{
        return !dialogs.Noises.includes(each);
    });

    return {
        words, //all words
        key_words, //words without noises
    }
}

//removing punctuations
const punct_cleanup = (word_p) => {
    
    let word = word_p;

    dialogs.Punctuations.forEach(punct=>{
        word = word.split(punct).join("");
    });

    return word;
}

//finding synonyms of words
const get_synonyms = (word_p) => {

    let word = word_p;
    let synonyms = []

    return {
        word,
        synonyms
    }
}




module.exports = {
    talk,
    evaluate
}