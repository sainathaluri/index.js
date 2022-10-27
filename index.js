let readlineSync = require('readline-sync')

let score = 0

var highScores = [
  {
    name: "Sainath",
    score: 5,
  },

  {
    name: "Achyuth",
    score: 3,
  },
]

let quesArr = [{
  question : 'where do i live? ',
  answer : 'hyderabad'
},{
  question: 'what is my favourite food? ',
  answer : 'panner biryani'
},{
  question : 'what is my favourite sport? ',
  answer : 'cricket'
},{
  question : 'what is my favourite movie? ',
  answer : 'old gaurd'
},{
  question : 'what is my favourite tourist place? ',
  answer : 'munnar'
}]

function hello(){
  let yourName = readlineSync.question('what is your name ')
  console.log('Hi' + " " + yourName + " " + 'let start the game')
}
function play(question,answer){
  let yourAns = readlineSync.question(question )
  if(yourAns.toLowerCase() === answer.toLowerCase()){
    score++;
    console.log('your score is' + ' ' +score)
  }else{
    score = 0;
    console.log('your score is' + ' ' +score)
  }
}
function startGame(){
  for(let i = 0; i < quesArr.length; ++i){
    play(quesArr[i].question,quesArr[i].answer)
    
  }
}
hello();
startGame();
