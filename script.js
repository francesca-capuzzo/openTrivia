function loadTrivia() {
    fetch('https://opentdb.com/api.php?amount=10')
    .then(response => response.json())
    .then(createTrivias)
    .catch(error => console.log(error));
}

//APRI LINK API PER VEDERE CONTENUTO E CAPIRE LE VARIABILI UTILIZZATE!!


function createTrivias(data) {                     //data per adesso è l'API in json all'url https://opentdb.com/api.php?amount=10
    const results = data.results;                  //metto tutti i risultati dell'API nella costante RESULTS
    const triviaArray = [];                        //creo un array vuoto per poi ciclare sulle domande e infilarle nell'array
    for (const res of results) {                   //ciclo sulla costante results che è un oggetto (vedi API)
        const trivia = new Trivia(res.category, res.type, res.difficulty, res.question, res.correct_answer, res.incorrect_answers); //creo un nuovo oggetto TRIVIA dalla classe TRIVIA (creata nello script)
        triviaArray.push(trivia);                  //pusho nell'array tutti gli oggetti creati 
    }

    // let firstTrivia = triviaArray[0];              //prendo il primo trivia dell'array
    // console.log(firstTrivia.question);             //loggo la domanda
    // console.log(firstTrivia.getAllAnswers());      //loggo tutte le risposte
    // console.log("All trivia objects",triviaArray); //loggo l'intero array con i 10 oggetti

    displayTrivia(triviaArray);
}

function displayTrivia(triviaArray) {
    console.log(triviaArray);
    
    const list = document.getElementById("trivia-list");
    const title = document.getElementsByClassName("main-title")[0]; //senza [0] restituisce una collection con tutti i tag appartenenti a quella classe
    const title2 = document.getElementsByClassName("main-title")[1];
    const body = document.getElementsByTagName("body")[0];
    const list2 = document.querySelector("#trivia-list");           //utilizza il selezionatore del CSS (# per id)(. per classe) e poi il nome dato al tag!
    const title3 = document.querySelector(".main-title");           //NON PRENDE UNA COLLECTION MA PRENDE SOLO IL PRIMO TAG CHE TROVA CON QUELLA CLASSE (quindi restituisce solo il primo)
    const body2 = document.querySelector("body");

    console.log(list);
    console.log(title);
    console.log(title2);
    console.log(body);
    console.log(list2);
    console.log(title3);
    console.log(body2);
}


