var questionTab = document.getElementById('question-tab');
var questionIndexTab = document.getElementById('question-index');
var nextQuestionBtn = document.getElementById('next-btn');
var selectedAnswer;
var questionIndex = 1;

function setTime() {
    ++totalSeconds;
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
function closeQuestion() {
    questionTab.style.display = "none";
    nextQuestionBtn.style.display = "none";
    selectedAnswer.classList.remove('active');
    selectedAnswer.children[0].classList.remove('active');
    questionIndex++;
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
