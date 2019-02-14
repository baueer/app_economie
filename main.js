var questionTab = document.getElementById('question-tab');
var questionIndexTab = document.getElementById('question-index');
var nextQuestionBtn = document.getElementById('next-btn');
var selectedAnswer;
var questionIndex = 1;

var inGame = true
function setTime() {
    if(inGame) ++totalSeconds;
    secondsLabel.innerHTML = zeroing(totalSeconds % 60);
    minutesLabel.innerHTML = zeroing(parseInt(totalSeconds / 60));
}
function zeroing(value) {
    var valueString = value + "";
    if(valueString.length < 2) return "0" + valueString;
        else return valueString;
}
var minutesLabel = document.getElementById('time-min');
var secondsLabel = document.getElementById('time-sec');
var totalSeconds = 0;
setInterval(setTime, 1000);

function rollQuestion() {
    loadQuestion();
    questionTab.style.display = "block";
    questionIndexTab.innerHTML = questionIndex;
}
var selectedAnswerInt = 0;
function closeQuestion() {
    switch(selectedAnswer.id) {
        case "answer-1": selectedAnswerInt = 1; break;
        case "answer-2": selectedAnswerInt = 2; break;
        case "answer-3": selectedAnswerInt = 3; break;
        case "answer-4": selectedAnswerInt = 4; break;
    }
    let correctAnswer = data[questionIndex-1][5];
    let correct = false;
    if(selectedAnswerInt == correctAnswer) {
        correct=true;
        correctAnswered++;
    } else {
        wrongAnswered++;
    }
    if(correct) pickupData[areaIndex-1][1]++;
        else pickupData[areaIndex-1][2]++;

    questionTab.style.display = "none";
    nextQuestionBtn.style.display = "none";
    selectedAnswer.classList.remove('active');
    selectedAnswer.children[0].classList.remove('active');
    questionIndex++;
}
function closeTab() {
    var tab = document.getElementById('tutorial-tab');
    tab.style.display = "none";
}
function selectAnswer(id) {
    for(let i=1; i<=4; i++) {
        document.getElementById(`answer-`+i).classList.remove('active');
        document.getElementById('answer-'+i).children[0].classList.remove('active');
    }
    selectedAnswer = document.getElementById(id);
    selectedAnswer.classList.add('active');
    selectedAnswer.children[0].classList.add('active');
    nextQuestionBtn.style.display = "block";
}

var resultsTab = document.getElementById('results-tab');
var pointsTab = document.getElementById('points-display');
var finishTimeSecondsTab = document.getElementById('time-display-seconds');
var finishTimeMinutesTab = document.getElementById('time-display-minutes');
var correctAnsweredTab = document.getElementById('correct-display');
var wrongAnsweredTab = document.getElementById('wrong-display');
var answeredTab = document.getElementById('answers-display');
function showResults() {
    loadResults();
    resultsTab.style.display = "block";
}
function loadResults() {
    let result = (correctAnswered*0.3) + 1;
    pointsTab.innerHTML = result; 
    finishTimeMinutesTab.innerHTML = zeroing(parseInt(totalSeconds / 60));
    finishTimeSecondsTab.innerHTML = zeroing(totalSeconds % 60);
    correctAnsweredTab.innerHTML = correctAnswered;
    wrongAnsweredTab.innerHTML = answered-correctAnswered;
    answeredTab.innerHTML = answered;
}