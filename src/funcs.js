const dialogs = require("../data/dialogs.json");
const snms = require("../data/synonyms.json");

//function for replying to query
//may contain sub-functions
/*---Interface---*/
const talk = () => {
    //console.log(dialogs);
    //console.log(evaluate("Sup What's? are you doing?"))
    console.log(evaluate("Hey, who are you"))
}

//function to evaluate request from user
//may contain sub-functions
/*---Interface---*/
const evaluate = (submited_query) => {

    if(submited_query === "" || submited_query === undefined){
        let reply = [
            "Umm, did you say something?",
            "I think something is missing here, come again please?",
            "I don't get your message here. Did you type something"
        ];
        return reply[Math.floor(Math.random() * reply.length)]
    }

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
                
            });
        }
    });
    //3. score matching dialogs and return appropriat response
    let { reply, score, exact_query, reason} = score_dialog(matching_dialogs, submited_query);
    if(score > 50){
        return {exact_query, score, reply, reason};
    }if(score < 50){
        return {reply, score, exact_query, reason};
    }

    //console.log(key_words);
    //console.log(words_and_synonyms);
    //console.log(matching_dialogs);
    //console.log("function to evaluate request from user")
}

const score_dialog = (matches, submited_query) => {
    
    if(matches.length > 0){
        if(matches[0].length > 0){
            if(matches[0][0].matches.length > 0){
                if(matches[0][0].matches[0].Query.trim().replaceAll(" ", "") === submited_query.toLowerCase().trim().replaceAll(" ", "")){
                    //console.log("here");
                    //console.log("matches ", matches[0][0]);
                    return {
                        reason: "exact match",
                        score: 100,
                        reply: matches[0][0].matches[0].Reply,
                        exact_query: matches[0][0].matches[0].Query
                    }
                }
            }
        }
    }

    let q_matches = [];
    let q_unmatches = [];

    //removing all words without matches
    if(matches.length > 0){
        matches.forEach(matches_arr => {
            //console.log(matches_arr);
            let isArry = Array.isArray(matches_arr);
            if(!isArry) matches_arr = [matches_arr]
            console.log(isArry)
            if(matches_arr.length > 0){
                matches_arr.forEach(each => {
                    if(each.matches.length > 0)
                        q_matches.push(each);
                });
            }
        });
    }

    //removing all words with matches
    if(matches.length > 0){
        matches.forEach(unmatches_arr => {
            if(unmatches_arr.length > 0){
                unmatches_arr.forEach(each => {
                    if(each.matches.length < 1)
                        q_unmatches.push(each);
                });
            }
        });
    }

    /*--words with matches------------------------------------*/
    //removing duplicate matches
    let non_repetive_matches = []
    for(let i=0; i<q_matches.length; i++){

        for(let j=i+1; j<q_matches.length; j++){
            
            //all matches that are the same
            if(q_matches[i].matches[0].Query === q_matches[j].matches[0].Query){
                
                let item_found = non_repetive_matches.find( item => {
                     return (
                         item.matches[0].Query === q_matches[j].matches[0].Query ||
                         item.matches[0].Query === q_matches[i].matches[0].Query
                    )
                });
                
                //if item found, just continue, dont add to non repetitive list
                if(item_found){
                    continue;
                }
                //adding first of matches that are the same
                non_repetive_matches.push(q_matches[i])
                continue;
            }
            //all matches that are not the same
            non_repetive_matches.push(q_matches[i]);
            
        }
        
    }
    //console.log(non_repetive_matches);

    let score_current_high = 0;
    let score_current_match = q_matches[0];
    non_repetive_matches.forEach(match=>{
        let { occurrence_score, arrangement_score } = calc_query_score(match.matches[0].Query, submited_query);
        if(score_current_high <= (occurrence_score+arrangement_score)){
            score_current_high = (occurrence_score+arrangement_score);
            score_current_match = match;
        }
    });
    //console.log(score_current_match);

    /*--words without matches--------------------------------------*/
    q_unmatches.forEach(unmatch_arr => {
        //console.log(unmatch_arr);
    });

    //when message has more wrong words than right ones
    //this is usefull for making query suggessions
    if(q_matches.length < q_unmatches.length){
        let error_msg = [
            "Sorry I don't understand what you are saying",
            "Your message isn't clear",
            "I don't get what you're saying"
        ]
        return {
            reason: "more wrong words than right ones",
            score: (100*q_unmatches.length)/(q_matches.length+q_unmatches.length),
            reply: error_msg[Math.floor(Math.random() * error_msg.length)],
            exact_query: ""
        }
    }

    //if everything doesn't make sense
    //worst user case
    if(q_matches.length === 0){
        let error_msg = [
            "What are you saying... I don't understand...",
            "I'm sorry, I can process your message...",
            "Umm... I don't understand that"
        ]
        return {
            reason: "no single word matched a query",
            score: 0,
            reply: error_msg[Math.floor(Math.random() * error_msg.length)],
            exact_query: ""
        }
    }
    
    return {
        reason: "highest score from matches",
        score: score_current_high,
        reply: score_current_match.matches[0].Reply,
        exact_query: score_current_match.matches[0].Query
    }
}

//function to calculate word occurrence(50%), and word arrangement(50%)
const calc_query_score = (match_query, submited_query_p) => {

    let occurrence_score = 0;
    let arrangement_score = 0;
    let submited_query = submited_query_p.toLowerCase();

    console.log(match_query, " : ", submited_query)
    
    //calculating occurrence score
    let each_percentage = (50/match_query.split(" ").length);
    let prev_index = 0;
    let temp_submited_query = submited_query.split(" ");
    match_query.trim().split(" ").forEach(word => {
        if(submited_query.split(" ").includes(word)){
            occurrence_score += each_percentage;

            //calculating arrangement score
            let current_index = temp_submited_query.findIndex(each=>each===word);
            if(prev_index <  current_index){
                arrangement_score += each_percentage;
            }
            temp_submited_query[current_index] = " "
            prev_index = current_index;
            
            
        }
        console.log("OC", occurrence_score, "AC", arrangement_score)
    });

    return {
        occurrence_score,
        arrangement_score
    }
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