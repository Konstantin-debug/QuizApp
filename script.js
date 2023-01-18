let questions = [
    {
        "question": "Wer hat das Internet erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Burners-Lee",
        "answer_4": "Justin Bierb",
        "right_answer": 3
    },

    {
    "question": "Wie definiert man in JavaScript eine Variable?",
    "answer_1": "let 100 = rate;",
    "answer_2": "100 = let rate;",
    "answer_3": "rate = 100;",
    "answer_4": "let rate = 100;",
    "right_answer": 4
    },

    {
        "question": "Wann wurde das erste iPhone veröffentlicht?",
        "answer_1": "2010",
        "answer_2": "2007",
        "answer_3": "2022",
        "answer_4": "2000",
        "right_answer": 2
    },
    {
        "question": "Welche Programmiersprache gibt es nicht?",
        "answer_1": "NoScript",
        "answer_2": "C#",
        "answer_3": "Rust",
        "answer_4": "JavaScript",
        "right_answer": 1
    },

];

let currentQuestion = 0;


function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();
}

function showQuestion(){
    let question = questions[currentQuestion];

    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(selection) {
    let question = questions[currentQuestion];          //Modul 7- 08 + 09
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if(selectedQuestionNumber == question['right_answer']) {
        console.log('Richtige Antwort');
        document.getElementById(selection).parentNode.classList.add('bg-success');
    }  else {
            console.log('Falsche Antwort');
            document.getElementById(selection).parentNode.classList.add('bg-danger');
            document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        }
        document.getElementById('next-button').disabled = false;
    
    
}

function nextQuestion() {
        currentQuestion++;  //die Variable wird erhöht von 0 auf 1 mit dem ++
        showQuestion();

        document.getElementById('next-button').disabled = true;

        

}

function resetAnswerButtons() {
        document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
        document.getElementById('answer_1').parentNode.classList.remove('bg-success');
        document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
        document.getElementById('answer_2').parentNode.classList.remove('bg-success');
        document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
        document.getElementById('answer_3').parentNode.classList.remove('bg-success');
        document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
        document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}