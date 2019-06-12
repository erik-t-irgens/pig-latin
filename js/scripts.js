$(document).ready(function() {
    $("form#pigLatinGenerator").submit(function(event) {
        
        var userSentence = $("#userSentence").val();
        var words = userSentence.split(' ');
        // alert(userSentence);
        // alert(words);
     
        
        // // The following variale is a boolean that asserts if letter is a consonant
        // function isConsonant(letter) {
        //     return !isVowel(letter);
        // };
        
        
        // The following variable is a boolean (true or false) that asserts that a letter (as displayed) is a vowel or not (isVowel)
        function isVowel(letter) {
            return letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u" || letter === "A" || letter === "E" || letter === "I" || letter === "O" || letter === "U";
        };

        function isVowelOrY(letter) {
            return isVowel(letter) || letter === 'y' || letter === 'Y';
        }
        
        // debugger;
        // isVowel("x");
        // isConsonant("A");
        // isVowel("I");
        // isConsonant("b");

        // other -> otherway
        // queen -> eenquay
        // yes -> esyay
        // straight -> aightstray
        // this -> isthay
        //// Something's different here....
        // my -> ymay
        // ymy -> yymay
        // this. -> isthay.
        // thyme -> ymethay
        var resultingSentence = words.map(function(word){ 
            if(isVowel(word[0])) {
              return word + "way";
             }
            if (word[0] === 'q' && word[1] === 'u' || word[0] === "Q" && word[1] === "u") {
              return word.slice(2) + word.slice(0,2) + 'ay';
              }

            if (word[0] === "y" || word[0] === "Y" || !isVowel(word[0])) {
                var wordIndex = 1;
                // for (var index = 1; word[index] !== 'y' && word[index] !== 'Y' && !isVowel(word[index]); index++){
                for (var index = 1; index < word.length && !isVowelOrY(word[index]); index++){
                    wordIndex++;
                }
                return word.slice(wordIndex) + word.slice(0, wordIndex) + 'ay';
            }
        });

        $("#resultingSentence").append("<p>" + resultingSentence.join(' ') + "</p>");
        
        event.preventDefault();
    });
});