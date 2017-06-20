//JS Basics
//Run npm test in the command line to test your solutions
module.exports = {
  reverseIt: function (strIn) {
    return strIn.split('').reverse().join('');
  },

  //uncomment and finish the reverseIt function. It will take in one parameter which is a String and
  //reverse it

  removeDups: function (arr) {
    let itBe = [];
    for (let i = 0; i < arr.length; i++) {
      let temp = true;
      for (let j = 0; j < itBe.length; j++) {
        if (arr[i] === itBe[j]){
          temp = false;
        }
      }
      if (temp){
        itBe.push(arr[i]);
      }
    }
    return itBe;
  },
  //The above solution will not work for arrays containing arrays or objects.

  //uncomment and finish the removeDups function. It will take in one parameter which is an Array
  //remove all duplicates

  titleIt: function (strIn) {
    let arr = strIn.split(' ');
    for (let i = 0; i < arr.length; i++){
      if(arr[i][0].toLowerCase() === arr[i][0]){
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
      }
    }
    return arr.join(' ');
  },

  //uncomment and finish the titleIt function. It will take in one parameter which is a String and
  //capitalize the first letter of each word

  vowelCounter: function (strIn) {
    let counter = 0;
    for (var i = 0; i < strIn.length; i++) {
      let j = strIn[i].toLowerCase();
      if (j === 'a' || j === 'e' || j === 'i' || j === 'o' || j === 'u'){
        counter++;
      }      
    }
    return counter;
  },

  //uncomment and finish the vowelCounter function. It will take in one parameter which is a String and
  //return the number of vowels in the string

  isPrime: function (n) {
    if (n < 2){
      return false;
    }
    if (n === 2){
      return true;
    }
    if (n % 2 === 0){
      return false;
    }
    for (let i = 3; i < (n/2); i += 2){
      if (n % i === 0){
        return false;
      }
    }
    return true;
  },

  //uncomment and finish the isPrime function. It will take in one parameter which is a Number and
  //return true if it is prime and false if it is not

  //what is the value of foo?
  //var foo = 10 + '20';
  //uncomment the foo property and give your answer as its value

  foo: '1020',

  //what is the outcome of the two console.logs below?
  //   var foo = "Hello";
  // (function() {
  //   var bar = " World";
  //   console.log(foo + bar);
  // })();
  // console.log(foo + bar);
  // uncomment the log1 and log2 properties and give your answers as their values

  log1: "Hello World",
  log2: undefined
}
