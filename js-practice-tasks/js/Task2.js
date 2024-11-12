document.getElementById('askQuestionButton').addEventListener('click', () => {
    // Define the question and correct answer
    const question = "What is the capital of France?";
    const correctAnswer = "Paris";

    // Prompt the user for their answer
    const userAnswer = prompt(question);

    // Check the answer and display the message
    if (userAnswer !== null) { // Check if the user didn't cancel the prompt
        if (userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
            document.getElementById('message').innerText = "Success! That's correct.";
        } else {
            document.getElementById('message').innerText = "Error! That's incorrect.";
        }
    } else {
        document.getElementById('message').innerText = "You cancelled the question.";
    }
});
