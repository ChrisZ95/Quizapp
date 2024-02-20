let questions = [
    {
      "question": "Wer hat HTML erfunden?",
      "answer_1": "Robbie Williams",
      "answer_2": "Lady Gaga",
      "answer_3": "Tim Berners-Lee",
      "answer_4": "Justin Bieber",
      "right_answer": 3  
    },
    {
        "question": "Was bedeutet das HTML Tag &lt;a&gt;?",
        "answer_1": "Text fett",
        "answer_2": "Container",
        "answer_3": "Ein Link",
        "answer_4": "Kursiv",
        "right_answer": 3  
      },
      {
        "question": "Wie bindet man eine Website in eine Website ein?",
        "answer_1": "&lt;iframe;, &lt;frame&gt;, and &lt;frameset&gt;",
        "answer_2": "&lt;iframe;",
        "answer_3": "&lt;frame&gt;",
        "answer_4": "&lt;frameset&gt;",
        "right_answer": 2  
      },
      {
        "question": "Wie stellt man am BESTEN fett dar?",
        "answer_1": "&lt;strong&gt;",
        "answer_2": "CSS nutzen",
        "answer_3": "&lt;bold&gt;",
        "answer_4": "spellcheck",
        "right_answer": 1  
      },
      {
        "question": "Welches Attribut kann man NICHT für Textarea verwenden?",
        "answer_1": "readonly",
        "answer_2": "max",
        "answer_3": "from",
        "answer_4": "spellcheck",
        "right_answer": 1  
      },
      {
        "question": "Wie wählst du alle Elemente vom Typ &lt;a&gt; mit dem Attribut title aus?",
        "answer_1": "a[title][...]",
        "answer_2": "a > title [...]",
        "answer_3": "a.title [...]",
        "answer_4": "a-title [...]",
        "right_answer": 1  
      },
      {
        "question": "Wie definiert man in JavaScript eine Variable?",
        "answer_1": "let 100 = rate;",
        "answer_2": "100 = let rate;",
        "answer_3": "rate = 100;",
        "answer_4": "let rate = 100;",
        "right_answer": 4
      }
];

let rightQuestions = 0;
let currentQuestion = 0;
let AUDIO_SUCCESS = new Audio('audio/success.mp3');
let AUDIO_FAIL = new Audio('audio/fail.mp3');

function init() {
    document.getElementById('all-questions').innerHTML = questions.length

    showQuestion();
}

function showQuestion() {
    if(gameIsOver()) {
      showEndScreen(); 
    } else {
      updateToNextQuestion();
    }
}

function gameIsOver(){
  return currentQuestion >= questions.length;
}

function answer(selection){
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idofRightAnswer = `answer_${question['right_answer']}`;

    if(rightAnswerSelected(selectedQuestionNumber, question)) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        AUDIO_SUCCESS.play();
        rightQuestions++;
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idofRightAnswer).parentNode.classList.add('bg-success');
        AUDIO_FAIL.play();
    }
    document.getElementById('next-button').disabled = false;
}

function rightAnswerSelected(selectedQuestionNumber, question) {
  return selectedQuestionNumber == question['right_answer'];
}

function nextQuestion() {
  currentQuestion++;
  document.getElementById('next-button').disabled = true;
  resetAnswerButtons();
  showQuestion();
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

function showEndScreen() {
  document.getElementById('endScreen').style = '';
  document.getElementById('questionBody').style = 'display: none';
  document.getElementById('amount-of-questions').innerHTML = questions.length;
  document.getElementById('amount-of-right-questions').innerHTML = rightQuestions;
}

function updateToNextQuestion() {
  let question = questions[currentQuestion];

  document.getElementById('question-number').innerHTML = currentQuestion+1
  document.getElementById('questiontext').innerHTML = question['question'];
  document.getElementById('answer_1').innerHTML = `<span class="letter">A</span> ${question['answer_1']}`;
  document.getElementById('answer_2').innerHTML = `<span class="letter">B</span> ${question['answer_2']}`;
  document.getElementById('answer_3').innerHTML = `<span class="letter">C</span> ${question['answer_3']}`;
  document.getElementById('answer_4').innerHTML = `<span class="letter">D</span> ${question['answer_4']}`;
}