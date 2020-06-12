// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverse;

function reverse(str) {
  return str
    .split('')
    .reverse()
    .join('');
}

function reverse(str) {
  let reversed = '';

  for (let character of str) {
    reversed = character + reversed;
  }

  return reversed;
}


// third way; alternaive sol'n if we dont use reverse

//psuedocode:
//create an emptty string called 'reversed'
//for each character in the provided string
// take the character and add it o the start of the reversed

funcion reverse(str){
  let reversed = '';

  for (let character of str){ //itereate through each string
    reversed = character + reversed;
  }

  return reversed;
}

// fourth way:
funcion reverse(str){
  return str.split('').reduce((reversed, character) => character + reversed, '')
}
