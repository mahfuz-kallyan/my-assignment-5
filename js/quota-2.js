document.getElementById('btn-quota-2').addEventListener('click', function () {
    const inputValue = getInputFieldValueById('quota-2');
    const textValue = getTextFieldValueById('amount-quota-2');
    const mainAccount = getTextFieldValueById('main-balance');

    if (isNaN(inputValue) || inputValue < 0 || inputValue > mainAccount) {
        alert('Amount not valid');
        return;
    }
    else {
        const newValue = inputValue + textValue;
        document.getElementById('amount-quota-2').innerText = newValue;
        const balance = mainAccount - inputValue;
        document.getElementById('main-balance').innerText = balance;

        // Add history
        const div = document.createElement('div');
        div.classList.add('border-2');
        div.innerHTML = `
          <h4 class="text-xl">${inputValue} TAKA is Donated for Died in Quota movement, Bangladesh</h4>
        `
        document.getElementById('history').appendChild(div);
    }
})