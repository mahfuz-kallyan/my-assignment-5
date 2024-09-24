document.getElementById('donate-btn-feni').addEventListener('click', function () {
    const inputValue = getInputFieldValueById('input-feni');
    const textValue = getTextFieldValueById('amount-feni');
    const mainAccount = getTextFieldValueById('main-balance');

    if (isNaN(inputValue) || inputValue < 0 || inputValue > mainAccount) {
        alert('Amount is not valid');
        return;
    }
    else {
        const inputValueNumber = parseFloat(inputValue);
        const textValueNumber = parseFloat(textValue);
        const balance = parseFloat(mainAccount);
        const donateAccount = inputValueNumber + textValueNumber;
        document.getElementById('amount-feni').innerText = donateAccount;
        const newBalance = balance - inputValueNumber;
        document.getElementById('main-balance').innerText = newBalance;

        // Add history
        const div = document.createElement('div');
        div.classList.add('border-2');
        div.innerHTML = `
          <h4 class="text-xl">${inputValue} TAKA is Donated for Flood in Feni, Bangladesh</h4>
        `
        document.getElementById('history').appendChild(div);
    }
})

