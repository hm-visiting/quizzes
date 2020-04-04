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

var showElement = function(element) {
  element.classList.remove("invisible");
}

var hideElement = function(element) {
  element.classList.add("invisible");
}

var renderQuestion = function() {
  showElement(header);
  showElement(trueButton);
  showElement(falseButton);

  hideElement(answerDiv);
  hideElement(answerDiv);
  hideElement(nextDiv);

  questionImage.src = questions[currentQuestion].image;
  if(!questionImage.complete) {
    questionImage.addEventListener(
      'load', 
      function() {showElement(questionImage);}
  )} else {
    showElement(questionImage);
  }
};


var renderAnswer = function(answer) {
  showElement(answerDiv);
  showElement(nextDiv);

  hideElement(header);
  hideElement(questionImage);
  hideElement(trueButton);
  hideElement(falseButton);

  var q = questions[currentQuestion];
  var ans = (answer ? q.descriptionTrue : q.descriptionFalse) + "<p class=\"answer-detail\">" + q.description + "</p>";
   
  answerDiv.innerHTML = ans;
};


var renderResult = function() {
  hideElement(header);
  hideElement(answerDiv);
  hideElement(questionImage);
  hideElement(trueButton);
  hideElement(falseButton);
  hideElement(nextDiv);

  showElement(resultDiv);

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

