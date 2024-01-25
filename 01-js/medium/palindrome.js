/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/


function isPalindrome(str) {

  str = str.toLowerCase();
  let refined = "";
  let rev = "";
  let alphabets = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];

  for (let i = 0 ; i < str.length; i++){

    if (alphabets.includes(str[i]) ){

      rev = str[i] + rev;
      refined += str[i];
      
    }

  }

  return refined === rev;

}

module.exports = isPalindrome;
