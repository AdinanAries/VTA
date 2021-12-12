const dialogs = require("../data/dialogs.json");
const snms = require("../data/synonyms.json");

//function for replying to query
//may contain sub-functions
/*---Interface---*/
const talk = () => {
    //console.log(dialogs);
    //console.log(evaluate("Sup What's? are you doing?"))
    console.log(evaluate("Hey!, I want to cancel my flight"))
}

//function to evaluate request from user
//may contain sub-functions
/*---Interface---*/
const evaluate = (submited_query) => {

    //1. removing noise words returs {words, key_words}
    const { key_words, words } = cleanup(submited_query);
    //2. finding synonyms of key words
    const words_and_synonyms = []
    key_words.forEach(each=>{
        words_and_synonyms.push({
            word: each,
            synonyms: get_synonyms(each)
        });
    });
    //3. looking for matching dialogs
    let matching_dialogs = [];
    words_and_synonyms.forEach(each=>{
        if(each.synonyms.length == 0){
            let mtchdlg = [
                {
                    is_synonym: false,
                    word_from_query: each.word,
                    matches: get_matching_dialogs(each.word)
                }
            ]
            matching_dialogs.push(mtchdlg);
        }else{
            each.synonyms.forEach(syns=>{
                syns.forEach(each=>{
                    let maching_dlgs = get_matching_dialogs(each)
                    matching_dialogs.push({
                        is_synonym: true,
                        word_from_query: each,
                        matches: maching_dlgs
                    });
                })
                
            })
        }
    });


    console.log(key_words);
    console.log(words_and_synonyms);
    console.log(matching_dialogs);
    //console.log("function to evaluate request from user")
}

//removing noise words
const cleanup = (sentence) => {
    //1. turn query to array
    let words = sentence.split(" ");
    //2. lower casing words
    words = words.map(each=>{
        return each.toLowerCase();
    });
    //3. removing suffixes
    words = words.map(word => {
        return suffix_cleanup(word);
    });
    //4. removing punctuations
    words = words.map(word => {
        return punct_cleanup(word);
    });
    //5. removing noise words
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
        if(word)
            word = word.split(punct).join("");
        else word = ""
    });

    return word;
}

//removing suffixes
const suffix_cleanup = (word_p) => {
    
    let word = word_p;

    dialogs.Suffixes.forEach(sfx=>{
        if(word)
            word = word.split(sfx).join("");
        else word = ""
    });

    return word;
}

//finding synonyms of words returns dialogs
const get_synonyms = (word_p) => {

    let word = word_p;
    let synonyms = snms.SNMS.filter(each=>{
        return each.includes(word);
    });

    return synonyms
}

//finding matching dialogs
const get_matching_dialogs = (word_or_array) => {
    let isArry = Array.isArray(word_or_array);
    //dialog array is array of arrays
    //with each array represeting a word and the dialogs that contain it
    let dialogArr = [];
    
    if(isArry){
        
        word_or_array.forEach(word=>{
            let dlg = dialogs.Dialogs.filter(dialog=>{
                return dialog.Query.split(" ").includes(word);
            });

            dialogArr.push(dlg);
        });
    }else{
        dialogArr = dialogs.Dialogs.filter(dialog=>{
            return dialog.Query.split(" ").includes(word_or_array);
        });
    }

    return dialogArr;
}


module.exports = {
    talk,
    evaluate
}