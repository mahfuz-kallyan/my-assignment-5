// common function
function getInputFieldValueById(id){
    const value = document.getElementById(id).value;
    const valueNumber = parseFloat(value);
    return valueNumber
}

function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textValueNumber = parseFloat(textValue);
    return textValueNumber;
}


// donate and history button
function showSection(id){
    document.getElementById('donate').classList.add('hidden');
    document.getElementById('history').classList.add('hidden');

    // show section by id
    document.getElementById(id).classList.remove('hidden')
}


