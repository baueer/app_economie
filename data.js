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
        "Bazata pe proprietatea privata asupra mijloacelor de productie",
        "Caracteristica economiei naturale",
        "Bazata pe proprietatea comuna asupra mijloacelor de productie",
        "Denumita si interventia statului in economie",
    1],
    ["Reprezinta o trasatura a economiei de piata:",
        "Desfasurarea activitatii economice pe baza de plan",
        "Administrarea preturilor numai de catre stat",
        "Faptul ca bunurile imbraca forma de marfa",
        "Centralizarea activitatii economice",
    1000],
    ["In economia de piata, satisfacerea nevoilor are loc:",
        "Numai prin autoconsum",
        "Prin producerea bunurilor necesare de fiecare consumator",
        "Prin repartizarea echitabila a bunurilor",
        "Prin intermediul schimbului",
    4]
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