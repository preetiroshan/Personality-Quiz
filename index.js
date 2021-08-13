const readLineSync = require('readline-sync');
const chalk = require('chalk');

welcomeMessage = chalk.underline.yellowBright("How Well Do You Know Me");
console.log(welcomeMessage);

const rules = "Rules: You're score is incremented by 1 if you answer a question correctly.";
console.log(rules);


const highScores = {
  Megha: 5,
  Priyam: 4
};

function objectKeyValues(options) {
  let myString = "";
  for (const option in options) {
    myString += chalk.blue(option +":" + options[option] + "\n");
  }
  return myString;
}

const highScoreInfo = chalk.blue("The scores till now are: \n" + objectKeyValues(highScores)) + "\n Let's begin! \n";
console.log(highScoreInfo);

let score = 0;
const questions = [
  {
    question: "Where do I live",
    options: {
        a: "New Delhi",
        b: "Gurgaon",
        c: "Greater Noida",
        d: "Bangalore",
    },
    answer: "c"
  },
  {
    question: "Where do I work?",
    options: 
      {
        a: "GlobalLogic",
        b: "Infosys",
        c: "Congruex",
        d: "HCL",
      }
    ,
    answer: "a"
  },
  {
    question: "Which school did I go to?",
    options: 
      {
        a: "Delhi Public School",
        b: "Jaypee Interntional",
        c: "Aster Public School",
        d: "Somerville School",
      }
    ,
    answer: "d"
  },
  {
    question: "Which one of these is my favourite book?",
    options: 
      {
        a: "Wings of Fire",
        b: "The Alchemist",
        c: "A Walk to Remember",
        d: "Gone Girl",
      }
    ,
    answer: "b"
  },
  {
    question: "What do I like more, Chhole Bhature or Daal Makhni?",
    options: 
      {
        a: "Chhole Bhaturw",
        b: "Daal Makhni",
        c: "Both",
        d: "None",
      }
    ,
    answer: "a"
  }
];

function scoreAlert(type) {
  const myAlert = "Your " + type + " score is " + score;
  return myAlert;
}
function play(myQuestion) {
  const myAnswer = myQuestion.answer;

  const question = chalk.bold.yellow(myQuestion.question) + '\n' + objectKeyValues(myQuestion.options);

  let userAnswer = readLineSync.question(question);

  if (userAnswer === myAnswer) {
    score += 1;
    const message = chalk.green("Yes! You're right!")
    console.log(message);
  }
  else {
    const message = chalk.red("No:( You're wrong!")
    console.log(message);
  }
  console.log(scoreAlert("current"));
}

for (let i in questions) {
  play(questions[i]);
}

const result = chalk.rgb(150, 120, 39);
console.log(result.bold("\n" + scoreAlert("final")));

console.log("Send a screenshot if you beat the high score! \n");
