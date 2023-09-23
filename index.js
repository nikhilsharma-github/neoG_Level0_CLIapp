console.log("neoG_Level0_Mark1Assignment_23092023")
console.log("____________________________________")

// An input taking library 
let readlinesync=require('readline-sync')

// Variable to store score values 
let score=0

//An array of objects which has question, options and answer in a single object
let questions=[
  {
    question:"Name of my First letter?",
    options:" A:N  B:M  C:R ",
    answer:"A",
    value:"Nikhil"
  },
  {
    question:"My age?",
    options:" A:19  B:21  C:24 ",
    answer:"B",
    value:"21"
  },
  {
    question:"What Course I am enrolled in?",
    options:" A:Udemy  B:Coursera  C:neoG ",
    answer:"C",
    value:"neoG"
  },
  {
    question:"What I love the most?",
    options:" A:Fluting  B:Coding  C:Typing ",
    answer:"B",
    value:"Coding"
  }
]

function checkValues(question,answer){
  let input=readlinesync.question("Input Here : ")
  if(input==answer){
    console.log("Yay, you guessed it right")
    score+=1
  }
  else{
    console.log("Sorry, Try again, no worries")
  }
}

console.log("Welcome to neoG Mark1 Assignment")
console.log("????DO YOU KNOW ME????")

console.log("____________________________________")
for(let i=0;i<questions.length;i++){
  console.log("Here is the question "+(i+1))
  console.log(questions[i].question)
  console.log("Your options are : ")
  console.log(questions[i].options)
  checkValues(questions[i].question,questions[i].answer)
  console.log("____________________________________")
}
console.log("____________________________________")
console.log("The answers for the questions are as follows :")
for(let i=0;i<questions.length;i++){
  console.log(questions[i].value)
}

console.log("____________________________________")
console.log("Your final score is : "+score)
console.log("THANKYOU FOR PARTICIPATING")