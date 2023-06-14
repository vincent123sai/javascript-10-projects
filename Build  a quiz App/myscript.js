var questions = [{
    question: "what is the baby of a Moth known as?",
    choices: ["baby", "infant", "kit", "larva"],
    correctAnswer: 3
},  {
    question: "what is the adult of a kid called",
    choices: ["calf", "doe", "goat", "chick"],
    correctAnswer: 2
},  {
    question: "what is the young of Buffalo called?",
    choices: ["calf", "baby", "pup", "cow"],
    correctAnswer: 0
}, {
    question: "what a baby Aligator called",
    choices: ["baby", "gator", "hatchling", "calf"],
    correctAnswer: 2
}, {
    question: "what is the baby Goose called?",
    choices: ["gooser", "gosling", "gup", "pup"],
    correctAnswer: 1
}, {
    question: "what is the baby whale called?",
    choices: ["whala", "cub", "grub", "infant"],
    correctAnswer: 1
},  {
    question: "what is the baby of a Monkey called?",
    choices: ["infant", "baby", "calf", "pup"],
    correctAnswer: 0
},  {
    question: "what is the baby Bear called?",
    choices: ["cub", "baby balu", "young bear", "bearlet"],
    correctAnswer: 0
}
];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

$(document).ready(function () {
    displayCurrentQuesstion();
    $(this).find(".quizMessage").hide();
    $(this).find(".nextButton").on("click", function () {
        if (!quizOver) {
            value ==  $("input[type='radio']: checked").val();
            if (value == undefined) {
                $(document) .find(".quizMessage") .text("please select an answer");
                $(document) .find(".quizMessage") .show();
            } else {
                $(document) .find(".quizMessage") .hide();
                if (value == questions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                }
                currentQuestion++;
                if  (currentQuestion < questions.length)  {
                    displayCurrentQuesstion();
                } else {
                    displayScore();
                    $(document) .find(".nextButton") .text("play Again?");
                    quizOver = true;
                }
            }
        } else {
            quizOver = false;
            $(document) .find(".nextButton") .text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });
});

function displayCurrentQuestion() {
    console.log("In display current Question");

    var question = questions[currentQuestion] .question;
    var questionClass = $(document) .find(".quizContainer > .question");
    var choicesList = $(document) .find(".quizContainer > .choiceList");
    var numChoices  = questions[currentQuestion].choices.length;

    // set the questionclass text to the current question
    $(questionClass) .text(question);

    //remove all current <li> elements (if any)
    $(choiceList).find("li").remove();

    var choice;
    for (i = 0; i < numChoices; i++)  {
        choice = questions[currentQuestion].choices[i];
    $('<li><input type = "radio" value=' + i + ' name= "dynradio"/>' + choice + '</li>').appendTo(choiceList);
    }

}