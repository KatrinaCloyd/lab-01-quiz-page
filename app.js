// import functions and grab DOM elements
import { countsAsYes } from './utils.js';
import { percentage } from './utils.js';

// initialize state
const quizBtn = document.getElementById('takeQuizBtn');
const results = document.getElementById('quizResults');
// set event listeners to update state and DOM

quizBtn.addEventListener('click', () => {
    alert('Welcome to the Sea Otter Quizzz!');

    const quizConfirm = confirm('Do you really feel ready for this?');
    if (!quizConfirm) return;

    const firstName = prompt('What is your first name?');
    const secondName = prompt('What is your last name?');
    let correctAnswers = 0;

    const ansOne = prompt('Do sea otters eat sea urchins?');
    if (countsAsYes(ansOne)) {
        correctAnswers++;
    }

    const ansTwo = prompt('Do otters hold hands to stay near one another?');
    if (!countsAsYes(ansTwo)) {
        correctAnswers++;
    }

    const ansThree = prompt('Are sea otter pups able to feed themselves?');
    if (!countsAsYes(ansThree)) {
        correctAnswers++;
    }

    const grade = percentage(correctAnswers, 3);

    results.textContent = `Hi. ${firstName} ${secondName}! You got ${correctAnswers} out of 3 questions right. That's a ${grade}%!`;
});