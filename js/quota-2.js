document.getElementById('btn-quota-2').addEventListener('click', function () {
    const inputValue = Number(getInputFieldValueById('quota-2'));
    const textValue = Number(getTextFieldValueById('amount-quota-2'));
    const mainAccount = Number(getTextFieldValueById('main-balance'));

    if (!isNaN(inputValue) && inputValue > 0 && inputValue < mainAccount) {
        const donateAccount = inputValue + textValue;
        document.getElementById('amount-quota-2').innerText = donateAccount;
        const newBalance = mainAccount - inputValue;
        document.getElementById('main-balance').innerText = newBalance;

        // Add history
        const div = document.createElement('div');
        div.classList.add('border-2', 'p-2', 'space-y-2');
        div.innerHTML = `
          <h4 class="text-xl">${inputValue} TAKA is Donated for Died in quota movement, Bangladesh</h4>
          <p>Date: ${new Date()}</p>
        `
        document.getElementById('history').appendChild(div);
        document.getElementById('quota-2').value = '';
    }
    else {
       alert('Amount is not Valid');
       return;
    }

     // Show modal
     const modal = document.getElementById('modal');
     const button = document.getElementById('btn-quota-2');
     const close = document.getElementById('btn');

     button.onclick = function(){
        modal.style.display = 'block'
     }

     close.onclick = function(){
        modal.style.display = 'none';
     }
})





