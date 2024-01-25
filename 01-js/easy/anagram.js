/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

console.log(isAnagram("may","MAy"));

function isAnagram(str1, str2) {

    if(str1.length===str2.length){
    const arr1 = str1.toLowerCase().split('');
    const arr2 = str2.toLowerCase().split('');

    arr1.sort();
    arr2.sort();
     
    return arr1.every((val, index) => val ===arr2[index]);
  }
  return false;
}

module.exports = isAnagram;
