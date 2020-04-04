const totalQuestions = questions.length;

var currentQuestion = 0;

var answers = []

const questionImage = document.getElementById("main-image");
const trueButton = document.getElementById("button-true");
const falseButton = document.getElementById("button-false");
const answerDiv = document.getElementById("answer");
const nextDiv = document.getElementById("next");
const resultDiv = document.getElementById("result");
const header = document.getElementById("main-header");

var renderQuestion = function() {
  header.classList.remove("invisible");
  answerDiv.classList.add("invisible");
  questionImage.classList.remove("invisible");
  trueButton.classList.remove("invisible");
  falseButton.classList.remove("invisible");
  questionImage.src = questions[currentQuestion].image;
  questionImage.on
  answerDiv.classList.add("invisible");
  nextDiv.classList.add("invisible")
};


var renderAnswer = function(answer) {
  header.classList.add("invisible");
  answerDiv.classList.remove("invisible");
  questionImage.classList.add("invisible");
  trueButton.classList.add("invisible");
  falseButton.classList.add("invisible");
  nextDiv.classList.remove("invisible");
  var q = questions[currentQuestion];
  var ans = (answer ? q.descriptionTrue : q.descriptionFalse) + "<p class=\"answer-detail\">" + q.description + "</p>";
   
  answerDiv.innerHTML = ans;
};


var renderResult = function() {
  header.classList.add("invisible");
  answerDiv.classList.add("invisible");
  questionImage.classList.add("invisible");
  trueButton.classList.add("invisible");
  falseButton.classList.add("invisible");
  nextDiv.classList.add("invisible");
  resultDiv.classList.remove("invisible");

  resultDiv.innerHTML = "Правильных ответов: " + 
    answers.reduce(((acc, curr) => acc + curr), 0) + 
    ' из ' + questions.length;
}
  


var onAnswerClick = function(answer) {
  if(currentQuestion >= totalQuestions) {
    renderResult();
  } else {
    var answerIsTrue = (answer == questions[currentQuestion].answer);
    answers[currentQuestion] = answerIsTrue;
    renderAnswer(answerIsTrue);
  }
};

var onStepClick = function() {
  currentQuestion++;
  if(currentQuestion >= totalQuestions) {
    renderResult();
  } else {
    renderQuestion();
  }
};


renderQuestion();

