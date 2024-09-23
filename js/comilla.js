document.getElementById('donate-btn-comilla').addEventListener('click', function () {
    const inputValue = getInputFieldValueById('input-comilla');
    const textValue = getTextFieldValueById('amount-comilla');
    const mainAccount = getTextFieldValueById('main-balance');

    if (isNaN(inputValue) || inputValue < 0 || inputValue > mainAccount) {
        alert('Amount not valid');
        return;
    }
    else {
        const newValue = inputValue + textValue;
        document.getElementById('amount-comilla').innerText = newValue;
        const balance = mainAccount - inputValue;
        document.getElementById('main-balance').innerText = balance;

        // Add history
        const div = document.createElement('div');
        div.classList.add('border-2');
        div.innerHTML = `
          <h4 class="text-xl">${inputValue} TAKA is Donated for Flood at Comilla, Bangladesh</h4>
        `
        document.getElementById('history').appendChild(div);
    }
})