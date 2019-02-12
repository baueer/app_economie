var data = [
    ["Reprezinta forme distincte de economie, economia:", 
        "Naturala si de piata", 
        "Naturala, de schimb si de piata", 
        "Naturala si de schimb", 
        "Numai autoconsumul",
    3],
    ["Economia de piata:", 
        "Se bazeaza pe proprietatea comuna asupra mijloacelor de productie", 
        "Raspunde liber la intrebarile: ce?, cat?, cum?, pentru cine? sa produca", 
        "Presupune ca piata sa fie dirijata", 
        "Preturile administrate sunt predominante pe piata", 
    2],
    ["Care din urmatoarele situatii ilustreaza autoconsumul?",
        "Folosirea unui bun pentru a obtine in schimb un alt bun",
        "Utilizarea unui imprumut pentru a cumpara un automobil",
        "Utilizarea rosiilor din productia proprie pentru hrana familiei",
        "Utilizarea bunurilor cumparate cu venituri proprii",
    3],
    ["Autonomia economica a producatorilor este:",
        "bazata pe proprietatea privata asupra mijloacelor de productie",
        "caracteristica economiei naturale",
        "bazata pe proprietatea comuna asupra mijloacelor de productie",
        "denumita si interventia statului in economie",
    1],
    ["Reprezinta o trasatura a economiei de piata:",
        "desfasurarea activitatii economice pe baza de plan",
        "administrarea preturilor numai de catre stat",
        "faptul ca bunurile imbraca forma de marfa",
        "centralizarea activitatii economice",
    1000]
];

var question = document.getElementById('question');
var answer1 = document.getElementById('answer-1-content');
var answer2 = document.getElementById('answer-2-content');
var answer3 = document.getElementById('answer-3-content');
var answer4 = document.getElementById('answer-4-content');

function loadQuestion() {
    question.innerHTML = data[questionIndex-1][0];
    answer1.innerHTML = data[questionIndex-1][1];
    answer2.innerHTML = data[questionIndex-1][2];
    answer3.innerHTML = data[questionIndex-1][3];
    answer4.innerHTML = data[questionIndex-1][4];
}