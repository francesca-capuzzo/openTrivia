function loadTrivia() {
    fetch('https://opentdb.com/api.php?amount=10')
    .then(response => response.json())
    .then(createTrivias)
    .catch(error => console.log(error));
}


function createTrivias(data) {                     
    const results = data.results;                  
    const triviaArray = [];                        
    for (const res of results) {                  
        const trivia = new Trivia(res.category, res.type, res.difficulty, res.question, res.correct_answer, res.incorrect_answers); 
        triviaArray.push(trivia);
    }
    displayTrivia(triviaArray);                      
}


function createDivQuestion(trivia) {
    let question = document.createElement('div');
    question.className = 'question-div'

    let span = document.createElement('span');
    span.className = 'question-span';
    span.style.display = 'block';

    let textNode = document.createTextNode(trivia.question.replace(/&quot/g, '"').replace(/&#039/g, '"').replace(/;/g, ""));
    
    span.appendChild(textNode);
    question.appendChild(span);

    for (const answer of trivia.getAllAnswers()) {
        let buttonAnswer = createButtonAnswer(answer, trivia);
        question.appendChild(buttonAnswer);
    }
    return question;
}


function displayTrivia(triviaArray) {
    let mainDiv = document.getElementById('main-container');

    for (const question of triviaArray) {
        let divQuestion = createDivQuestion(question);
        mainDiv.appendChild(divQuestion);
    }
    return mainDiv;
}



let flag = false;

function createButtonAnswer(answer, trivia) {
    let answerButton = document.createElement('button');
    
    let textNode = document.createTextNode(answer);
    answerButton.appendChild(textNode);
    
    if (flag === false) {
        answerButton.addEventListener('click',(event) => buttonClick(event, trivia));
    }else {
        answerButton.removeEventListener('click',(event) => buttonClick(event, trivia));
    }
    

    return answerButton;
}


let points = 0;

function buttonClick(event, trivia) {
    let text = event.originalTarget.firstChild.textContent;
    console.log(text);
    console.log(event);
    let correct = trivia.checkAnswer(text);
    console.log(correct);
    if (correct === 1) {
        points++;
        // event.originalTarget.style.backgroundImage = 'linear-gradient(to left, violet, indigo, blue, green, orange, red)';
        event.originalTarget.style.backgroundColor = 'green';
        event.originalTarget.style.color = 'white';
        flag = true;
        //event.originalTarget.removeEventListener('click', (event) => buttonClick(event, trivia));
      
    }
    else{
        points = points;
        event.originalTarget.style.backgroundColor = 'red';
        event.originalTarget.style.color = 'black';
        flag = true;
        //event.originalTarget.removeEventListener('click', (event) => buttonClick(event, trivia)); 
    }
}


