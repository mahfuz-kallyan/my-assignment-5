document.getElementById('donate-btn-noakhali').addEventListener('click', function () {
    const inputValue = Number(getInputFieldValueById('input-noakhali'));
    const textValue = Number(getTextFieldValueById('amount-noakhali'));
    const mainAccount = Number(getTextFieldValueById('main-balance'));

    if (!isNaN(inputValue) && inputValue > 0 && inputValue < mainAccount) {
        const donateAccount = inputValue + textValue;
        document.getElementById('amount-noakhali').innerText = donateAccount;
        const newBalance = mainAccount - inputValue;
        document.getElementById('main-balance').innerText = newBalance;

        // Add history
        const div = document.createElement('div');
        div.classList.add('border-2', 'p-2', 'space-y-2');
        div.innerHTML = `
          <h4 class="text-xl">${inputValue} TAKA is Donated for Flood in Noakhali, Bangladesh</h4>
          <p>Date: ${new Date()}</p>
        `
        document.getElementById('history').appendChild(div);
        document.getElementById('input-noakhali').value = '';
    }
    else {
       alert('Amount is not Valid');
       return;
    }

     // Show modal
     const modal = document.getElementById('modal');
     const button = document.getElementById('donate-btn-noakhali');
     const close = document.getElementById('btn');

     button.onclick = function(){
        modal.style.display = 'block'
     }

     close.onclick = function(){
        modal.style.display = 'none';
     }
})







