var isValid = function(s) {
  const array = s.split('');
  const tally = {
    '[': 0,
    '{': 0,
    '(': 0,
    ')': 0,
    '}': 0,
    ']':0
  };
  function addTally(array, object) {
    array.forEach((char)=> {
      object[char] += 1;
    })
  }
  function checkTally(object) {
    if ((object['{'] === object['}']) && (object['['] === object[']']) && (object['('] === object[')'])) {
      return true
    } else {
      return false
    }
  }
  if (array.length % 2 > 0) {
    return false
  } else if (array[0] === (')' || ']' || '}')) {
    return false
  } else if (array[-1] === ('(' || '[' || '{')) {
    return false
  } else {
    addTally(array, tally);
    return checkTally(tally);
  }
};

// assumptions
// - there are only brackets in the String
//   - if it starts or ends with an open bracket it will automatically return false
//   - if there is an odd number of brackets it will automatically return false
//   - if even number of brackets and then we need to determine if there is true or false
//   - same brackets are needed for it to be true, otherwise false.valueOf

// console.log(isValid('()[]{}'));

// we loop through an array - for each character, we identify which is the corresponding closing bracket
// we use an empty array - called stack to understand which closing bracket we are looking for.
// go through the array, we find an opening bracket, we are looking for the corresponding closing bracket in the stack array


//  my current work process above doesn't account for misordering or brackets nested inside of other brackets.

var isValid = function (s) {



  const array = s.split('')
  if (array.length % 2 > 0) {
    return false
  } else if (array[0] === (')' || ']' || '}')) {
    return false
  } else if (array[-1] === ('(' || '[' || '{')) {
    return false
  } else {
    checkStack(s)
  }
}

//  test cases

const a = '()[]{}';
const b = '(]';
const c = '[(())]';
const d = ']';



console.log(checkStack(a))
console.log(checkStack(b))
console.log(checkStack(c))
console.log(checkStack(d))

function checkStack(s) {
  const brackets = {
    "}" : "{" ,
    "]": "[",
    ")": "("
  };
  const stack = [];

  const array = s.split('')
  array.forEach((char) => {
    // check stack
    if (Object.keys(brackets).includes(char)) {
      if (stack[stack.length-1] === brackets[char]) {
        stack.pop();
      } else {
        stack.push(char);
      }
    } else {
      stack.push(char);
    }
  })
  return stack.length === 0 ? true : false
}
