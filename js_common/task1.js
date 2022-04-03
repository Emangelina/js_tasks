// //задача1 способ1
// function getVowels (word) {
//   const wordlist = word.split('');
//   let finalList = [];
//   const alphabet = ["а", "я", "о", "ё", "у", "ю", "э", "е", "ы", "и"];
  
//   for (let i = 0; i < wordlist.length; i++) {
    
//     let letter = wordlist[i].toLowerCase();
//     if (alphabet.includes(letter)) {
//       finalList.push(letter);
//     }
//   }

//   let result = finalList.join("");
//   console.log(result);
// }

// getVowels("Привет, как дела!");

// //задача1 способ2 - модифицировала после просмотра воркшопа
// function getVowels (word) {
//   let finalword ='';
//   const alphabet = ["а", "я", "о", "ё", "у", "ю", "э", "е", "ы", "и"];
  
//   for (let i = 0; i < word.length; i++) {
    
//     let letter = word[i].toLowerCase();
//     if (alphabet.includes(letter)) {
//       finalword += letter;
//     }
//   }

//   return finalword;
// }

// console.log(getVowels("Привет, как дела!"));

function getConsonants (word) {
  let finalword ='';
  const alphabet = ["а", "я", "о", "ё", "у", "ю", "э", "е", "ы", "и"];
  
  for (let i = 0; i < word.length; i++) {
    
    let letter = word[i].toLowerCase();
    if (!alphabet.includes(letter)) {
      finalword += letter;
    }
  }

  return finalword;
}

console.log(getConsonants("Привет, как дела!"));
