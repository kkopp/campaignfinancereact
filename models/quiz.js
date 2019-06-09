const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quizSchema = new Schema ({
    question: { type: String, required: true },
    ans1: {
        type: String,
    },
    ans2: {
        type: String,
    },
   
    correctAns: {
        type: String,
    
    }
});

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;