document.getElementById('repeatMessageButton').addEventListener('click', () => {
    // Prompt user for the number of times to repeat
    const timesInput = prompt("How many times would you like to display the message?");
    const times = parseInt(timesInput);

    if (isNaN(times) || times <= 0) {
        alert("Please enter a valid positive number.");
        return;
    }

    // Prompt user for the message to display
    const message = prompt("Enter the message you want to display:");

    // Clear previous output
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';

    // Display the message the specified number of times
    for (let i = 0; i < times; i++) {
        const messageElement = document.createElement('div');
        messageElement.innerText = message;
        outputDiv.appendChild(messageElement);
    }
});
