const questions = [

    {
        question: "On the free plan you can add ______ location/s",
        answers: [

            {text: "2", correct: true},
            {text: "3", correct: false},
            {text: "0", correct: false},
            {text: "1", correct: false}

        ]



    },


    {
        question: "For more than 3 Kiosks, you need the ____ plan",
        answers: [

            {text: "Ultimate", correct: true},
            {text: "Premium", correct: false},
            {text: "Enterprise", correct: false},
            {text: "Regular", correct: false}

        ]



    },

    {
        question: "A client says they want live location tracking, what plan do you suggest?",
        answers: [

            {text: "Premium", correct: false},
            {text: "Basic", correct: false},
            {text: "Ultimate", correct: true},
            {text: "Any will work", correct: false}

        ]



    },

    {
        question: "Is the Kiosk mode available on Landscape as well as on Portrait?",
        answers: [

            {text: "Portrait", correct: true},
            {text: "Landscape", correct: false},
            {text: "None", correct: false},
            {text: "Both", correct: false}

        ]



    },

    {
        question: "Custom breaks are a/an _____ feature that allows for organizations to set up specific slots to analyze and monitor how their team uses breaks",
        answers: [

            {text: "Free", correct: false},
            {text: "unPaid", correct: false},
            {text: "Ultimate", correct: false},
            {text: "Premium", correct: true}

        ]



    },

    {
        question: "The work schedule feature can only be used by ___________ ",
        answers: [

            {text: "Admins & Users", correct: false},
            {text: "Managers & Admins", correct: true},
            {text: "Just Users", correct: false},
            {text: "All of the above ", correct: false}

        ]



    }

];

//creating variables 

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

//create variables to store question index and the score 

let currentQuestionIndex = 0;
let score = 0;

//then we write a function called start quizz that will start the quizz and set the current
//score to 0 


function startQuizz () {

    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestions();


}


function  showQuestions() {

    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + " . " + currentQuestion.question;
    
    //code to display the answer 

    currentQuestion.answers.forEach(answer =>{ 

        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);

        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    } );

}


function resetState() {

    nextButton.style.display = "none";
    while(answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}


function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score ++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButton.children).forEach(button => {

        if(button.dataset.correct ==="true") {
            button.classList.add("correct"); 
        }
        button.disabled = true;

    });

    nextButton.style.display = "block";



}


function showScore() {

    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Retry Quizz";
    nextButton.style.display = "block";

}


function handleNextButton() {
    currentQuestionIndex ++;
    if(currentQuestionIndex < questions.length){
        showQuestions();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", ()=> {
    if(currentQuestionIndex < questions.length) {
        handleNextButton()
    } else {

        startQuizz();


    }
})
startQuizz ();