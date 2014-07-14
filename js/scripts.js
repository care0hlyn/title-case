// Second function called
var titleCase = function(input) {
  //Variable Declarations
  var sentenceArray = input.split(" ");

  var lengthOfWord;
  var lowerRestOfWord;
  var capFirstLetter;
  var wholeWord;
  var fullSentence = "";

  // Capitalization loop *EXAMPLE* sentenceArray[0] = "cAt"
  for (var i = 0; i < sentenceArray.length; i++) {
    lengthOfWord = sentenceArray[i].length; // Grabs length of single word *E* lengthOfWord === 3

    // Gets letters after first letter of word & lowercased *E* lowerRestOfWord === "at" instead of "cAt"
    lowerRestOfWord = sentenceArray[i].substring(1, lengthOfWord).toLowerCase();
    sentenceArray[i] = sentenceArray[i].toLowerCase();

    if ((sentenceArray[i] !== "and") &&
       (sentenceArray[i] !== "or") &&
       (sentenceArray[i] !== "the")) {
       // Gets first letter and capitalizes it (Only contains first letter) *E* capFirstLetter === "C" instead of "cAt"
        capFirstLetter = sentenceArray[i].substring(0,1).toUpperCase();
    } else {
        capFirstLetter = sentenceArray[i].substring(0,1).toLowerCase();
    }

    // Combines letters back into word (e.g. "C" + "at" = Cat) *E* wholeWord === "C" + "at" === "Cat"
    wholeWord = capFirstLetter + lowerRestOfWord;

    // Combines words into sentence/phrase separated by a space (*IF*) more than one word is input
    fullSentence += wholeWord;
    if (i < sentenceArray.length - 1) {
      fullSentence += " ";
    }
  } // End for loop

  return fullSentence;
};

// First function called
// var splitString = function(input) {
//   var separator = " ";
//   var sentenceArray = input.split(separator);
//   var fullSentence = titleCase(sentenceArray);
//   return fullSentence;
// };


