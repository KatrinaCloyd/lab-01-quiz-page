// import functions and grab DOM elements

// initialize state
const quizBtn = document.getElementById('takeQuizBtn');
// set event listeners to update state and DOM

quizBtn.addEventListener('click', () => {
    alert('Welcome to the Sea Otter Quizzz!');

    const quizConfirm = confirm('Do you really feel ready for this?');
    if (!quizConfirm) return;

    const firstName = prompt('What is your first name?');
    console.log(firstName);

    const secondName = prompt('What is your last name?');
    console.log(secondName);

    const ansOne = prompt('Do sea otters eat sea urchins?');
    console.log(ansOne);

    const ansTwo = prompt('Do otters hold hands to stay near one another?');
    console.log(ansTwo);

    const ansThree = prompt('Are sea otter pups able to feed themselves?');
    console.log(ansThree);

});