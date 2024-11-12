let sum = 0;

document.getElementById('submitButton').addEventListener('click', () => {
    const input = document.getElementById('numberInput').value;
    const number = parseFloat(input);

    if (!isNaN(number)) {
        if (number === 0) {
            document.getElementById('result').innerText = `Sum: ${sum}`;
            document.getElementById('numberInput').value="";
        } else {
            sum += number;
            document.getElementById('numberInput').value = ''; // Clear the input
        }
    } else {
        alert('Please enter a valid number');
    }
});
