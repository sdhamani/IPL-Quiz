
//importing the packages required

var readlineSync =  require("readline-sync");

var chalk =  require("chalk");

// Taking the input from user 

var userName = readlineSync.question(chalk.cyanBright("Enter your Name: " ));

// declaring the variable

var score = 0;

console.log("--------------------------")

console.clear()

console.log(chalk.cyanBright.underline.bold.bgGray("Welcome to the IPL Quiz",userName ,"\n"));
 
console.log(chalk.redBright("\nPlease select any option out of a,b or c"))

// an array of all the questions

var questions = [{
  question : `
1.Which team won the IPL 2020 final? 
  a. Mumbai Indians
  b. RCB
  c. Delhi
  Answer : `,
  answer : "a",
  exp : "Mumbai Indians won by 5 wickets"
},
{
  question : `
2.Who was the orange cap winner in the IPL 2020? 
  a. Shikhar Dhawan
  b. KL Rahul
  c. David Warner
  Answer : `,
  answer : "b",
  exp : "KL Rahul finished top in the run race to win the Orange Cap with 670 runs."
},
{
  question : `
3.Who was the first indian captain to hold IPL trophy?
  a. Rohit Sharma
  b. Gautam Gambhir
  c. Ms Dhoni
  Answer : `,
  answer : "c",
  exp : "MS Dhoni -In 2010 and 2011 consecutively he hold the ipl trophy as the captain of Chennai super kings."
},
{
  question : `
4.What is the individual highest score in IPL in one Match ?
  a. 175
  b. 116
  c. 159
  Answer : `,
  answer : "a",
  exp : "Chris Gayle -175 runs off 66"
},
{
  question : `
5.Which player has never captained Pune Warriors India?
  a. Steve Smith
  b. Michael Clarke
  c. Ross Taylor
  Answer : `,
  answer : "b",
  exp : "Clarke was the front-runner to lead the side in 2013 but was ruled out of the season due to injury."
},
{
  question : `
6.Which Indian player has the fastest 100 in IPL?? 
  a. Yusuf Pathan
  b. Virat Kohli
  c. Virender Sehwag
  Answer : `,
  answer : "a",
  exp : "In 2010, Yusuf Pathan scored a 37-ball 100 for Rajasthan Royals against Mumbai Indians."
},
{
  question : `
7.Which player holds the record for the fastest fifty in IPL? 
  a. K. L. Rahul
  b. Sunil Narine
  c. Yuvraj Singh
  Answer : `,
  answer : "a",
  exp : "KL Rahul scored a 14-ball fifty for Kings XI Punjab against Delhi Daredevils in 2018."
},
{
  question : `
8.Who won the match when two super over happened IPL 2020?
  a. Kings XI Punjab
  b. Mumbai Indians
  c. Royal Challengers Bangalore
  Answer : `,
  answer : "a",
  exp : "Kings XI Punjab went on to win the 2nd Super Over"
},
]

//function to check the answer of a question

function play(question,answer){

var userAsnwer = readlineSync.question(chalk.blueBright(question))

while (userAsnwer.toUpperCase() !== 'A' && userAsnwer.toUpperCase() !== 'B'&& userAsnwer.toUpperCase() !== 'C' )
{
  console.log(chalk.redBright("\nPlease select any option out of a,b or c"))

  var userAsnwer = readlineSync.question(chalk.blueBright(question))
}

if(userAsnwer.toUpperCase() === answer.toUpperCase()){
  console.log(chalk.greenBright("\nYou answer is correct!!!"));

  score += 1;

  console.log(chalk.greenBright("\nYour score is ",score));
}
else{
  console.log(chalk.redBright("\nOops, your answer is wrong "))

  console.log(chalk.redBright("\nYour score is ",score));
}

}

for (i=0 ; i<questions.length ; i++){
  var currentQuestion = questions[i];

  play(currentQuestion.question,currentQuestion.answer);

  console.log(chalk.blueBright("\nExplanation: " ,currentQuestion.exp));

  console.log("-----------------------------")

}

//variable to check if user has achieveachieve the highscore

var highScored = false;

var highscores = [{
  name : 'Sagar D',
  score : 6
},
]

// loop to check if user has secured a place in leaderboard

for (j=0 ; j<highscores.length ; j++)
{
  var scorer = highscores[j]
  if(score>=scorer.score)
  {
    console.log(chalk.black.bold.underline.bgYellowBright("Congratulations,you have secured a place in our leaderboard"));
    var highScored = true;
    
  }
  else{
    console.log(chalk.red("You missed to get highscore...No worries you can attempt the quiz again!!!"))
  }
}

console.log("-----------------------------")

// adding user to the leaderboard
if (highScored == true){
  highscores.push({
        name: userName,
        score: score
      })
}

//scorting the leaderboard on basis of score property using the compare function
highscores.sort(function (x, y) {
    return y.score - x.score;
});



console.log(chalk.black.bold.underline.bgYellowBright("Below are our High scorers"));

// displaying the highScores
console.table(highscores)

console.log()
