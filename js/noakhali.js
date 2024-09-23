document.getElementById('donate-btn-noakhali').addEventListener('click', function () {
    const inputValue = getInputFieldValueById('input-noakhali');
    const donateValue = getTextFieldValueById('amount-noakhali');
    const mainAmount = getTextFieldValueById('main-balance');
    console.log(mainAmount);

    if (isNaN(inputValue) || inputValue < 0 || mainAmount < inputValue) {
        alert('Amount not valid');
        return;
    }
    else {
        const newValue = inputValue + donateValue;
        document.getElementById('amount-noakhali').innerText = newValue;
        const balance = mainAmount - inputValue;
        document.getElementById('main-balance').innerText = balance;

        // Add to history
        const div = document.createElement('div');
        div.classList.add('border-2');
        div.innerHTML = `
           <h4 class="text-xl">${inputValue} TAKA is Donated for Flood at Noakhali, Bangladesh</h4>
        `
        document.getElementById('history').appendChild(div)
        console.log(div);

    }

})