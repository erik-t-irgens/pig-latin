$(document).ready(function() {
    $("form#pigLatinGenerator").submit(function(event) {
        
        var userSentence = $("#userSentence").val();
        var words = userSentence.split(' ');
        // alert(userSentence);
        // alert(words);
     
        
        // The following variale is a boolean that asserts if letter is a consonant
        function isConsonant(letter) {
            return letter === "b" || letter === "c" || letter === "d" || letter === "f" || letter === "g" || letter === "h" || letter === "j" || letter === "k" || letter === "l" || letter === "m" || letter === "n" || letter === "p" || letter === "q" || letter === "r" || letter === "s" || letter === "t" || letter === "v" || letter === "w" || letter === "x" || letter === "y" || letter === "z" || letter === "B" || letter === "C" || letter === "D" || letter === "F" || letter === "G" || letter === "H" || letter === "J" || letter === "K" || letter === "L" || letter === "M" || letter === "N" || letter === "P" || letter === "Q" || letter === "R" || letter === "S" || letter === "T" || letter === "V" || letter === "W" || letter === "X" || letter === "Y" || letter === "Z";
        };
        
        
        // The following variable is a boolean (true or false) that asserts that a letter (as displayed) is a vowel or not (isVowel)
        function isVowel(letter) {
            return letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u" || letter === "A" || letter === "E" || letter === "I" || letter === "O" || letter === "U";
        };
        
        debugger;
        isVowel("x");
        isConsonant("A");
        isVowel("I");
        isConsonant("b");
        
        words.map(function(word){ 
            if(isVowel(word[0])) {
              return word + "way";
             }
            if (word[0] == 'q' && word[1] == 'u') {
                  return word.slice(2) + 'quay';
              }
          // ex: stop -> opstay
          var takeUntilIndex = 0;
          for (var index = 0; !isVowel(word[index]); index++){
            takeUntilIndex++;
          }
          return word.slice(takeUntilIndex) + word.slice(0, takeUntilIndex) + 'ay';
          })
        
        
        
        event.preventDefault();
    });
});