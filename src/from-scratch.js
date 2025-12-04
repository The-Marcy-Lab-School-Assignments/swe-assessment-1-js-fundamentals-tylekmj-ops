/*
  Write your functions here!

  Each function should:
  - Be exported so tests can use it
  - Follow the exact specifications
  - Pass all test cases
  - Use descriptive variable names
  - Have no linting errors
*/

// ============================================
// Question 1: petJudger
// ============================================

const petJudger = (petBreed, petName) => {
  // Your code here
  if (petBreed == undefined || petName == undefined) {
    console.log("Missing information. Please provide a valid pet.");
    return;
  }

  if (petBreed === "dog") {
    console.log(`I love dogs! ${petName} is so cute!`);
  } else if (petBreed === "cat") {
    console.log(`I love cats! ${petName} is so cute!`);
  } else if (petBreed === "turtle") {
    console.log(`Who doesn't love a good turtle? ${petName} is the tops.`);
  } else if (petBreed === "snake") {
    console.log(`Not a fan, please take ${petName} and leave.`);
  } else {
    console.log(`What an...interesting pet.`);
  }
};

// ============================================
// Question 2: loopFromOneUpToAnother
// ============================================

const loopFromOneUpToAnother = (firstNum, secondNum) => {
  // Your code here
  for (let i = firstNum; i < secondNum; i++) {
    console.log(i);
  }
};

// ============================================
// Question 3: shoutEveryLetterForLoop
// ============================================

const shoutEveryLetterForLoop = (str) => {
  // Your code here
  for (let i = 0; i < str.length; i++) {
    console.log(`${str[i].toUpperCase()}!`);
  }
};

// ============================================
// Question 4: letterCaseCounts
// ============================================

const letterCaseCounts = (str) => {
  // Your code here
  let cases = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  };

  let list_of_neithers = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "-",
    "_",
    "=",
    "+",
    "[",
    "{",
    "}",
    "]",
    "|",
    ";",
    ":",
    "`",
    "~",
    ",",
    "<",
    ".",
    ">",
    "/",
    "?",
    " ",
  ]; //There's definitely a much easier way to do this ;-;

  for (let i = 0; i < str.length; i++) {
    if (list_of_neithers.includes(str[i])) {
      cases.neither++;
      continue;
    } else if (str[i] === str[i].toUpperCase()) {
      cases.uppercase++;
      continue;
    } else if (str[i] === str[i].toLowerCase()) {
      cases.lowercase++;
      continue;
    }
  }

  return cases;
};

// ============================================
// Question 5: getNamesOfGreedyGnomes
// ============================================

const getNamesOfGreedyGnomes = (gnomes) => {
  // Your code here
  let greedyGnomes = [];

  for (let i = 0; i < gnomes.length; i++) {
    console.log(gnomes[i]);
    if (gnomes[i].stolenDecorations.length > 1) {
      greedyGnomes.push(gnomes[i].name);
    }
  }

  return greedyGnomes;
};

// ============================================
// Exports
// ============================================

module.exports = {
  petJudger,
  loopFromOneUpToAnother,
  shoutEveryLetterForLoop,
  letterCaseCounts,
  getNamesOfGreedyGnomes,
};
