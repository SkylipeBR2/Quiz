const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");

import question from "./question"; /* importar perguntas */

let currentIndex = 0;
let questionCorrect = 0;

function loadQuestion()
{
    spnQtd.innerHTML = `${currentIndex + 1}/${question.length}`;
    const item = question[currentIndex];
    answers.innerHTML = "";
    question.innerHTML = item.question;
}

loadQuestion();