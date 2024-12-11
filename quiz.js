function checkAnswer(questionNumber, isCorrect) {
    const questionDiv = document.querySelectorAll('.question')[questionNumber - 1];
    const feedback = document.createElement('p');
    feedback.className = 'feedback';
    if (isCorrect) {
        feedback.textContent = "Riktig svar! Flott jobbet!";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Feil svar. Prøv igjen!";
        feedback.style.color = "red";
    }
    if (!questionDiv.querySelector('.feedback')) {
        questionDiv.appendChild(feedback);
    }
}
