const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;



mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/campaignfinancequiz"
);


const quizSeed = [
  {
    question: "Do you have to be a resident of Denver to contribute to Denver mayoral candidates?",
    ans1: "Yes. Outside interests are not allowed to influence Denver elections.",
    ans2: "No. Anyone is allowed to contribute within specific limits.",
    correctAns: "ans2",
    thumbnail: ""
  },
  {
    question: "Can contributors give as much as they want to a mayoral candidate?",
    ans1: "Yes. Contributions are like free speech and cannot be limited.",
    ans2: "No. The limit for each contributor in an election cycle is $3,000. In 2020, the limit will be reduced to $1,000.",
    correctAns: "ans2",
    thumbnail: ""
  },
  {
    question: "Can mayoral candidates accept large contibutions in cash?",
    ans1: "Yes. Cash is preferred.",
    ans2: "No. Candidates cannot accept contributions greater than $50 in cash.",
    correctAns: "ans2",
    thumbnail: ""
  },
  {
    question: "Can mayoral candidates spend campaign contributions on whatever they want?",
    ans1: "Yes. Campaign money is like a personal slush fund for the candidate.",
    ans2: "No. Denver laws limit the use of campaign funds for specific, election-related purposes.",
    correctAns: "ans2",
    thumbnail: ""
  },
  {
    question: "Can mayoral candidates give an unlimited amount of their own money to their campaign?",
    ans1: "Yes. Candidates can give their own campaigns as much money as they can afford or borrow.",
    ans2: "No. Specific dollar limits on contributions apply to everyone.",
    correctAns: "ans1",
    thumbnail: ""
  },
  
]

db.Quiz
  .deleteMany({})
  .then(() => db.Quiz.collection.insertMany(quizSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
