// common function
function getInputFieldValueById(id){
    const value = document.getElementById(id).value;
    return value;
}

function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    return textValue;
}


// donate and history button
function showSection(id){
    document.getElementById('donate').classList.add('hidden');
    document.getElementById('history').classList.add('hidden');

    // show section by id
    document.getElementById(id).classList.remove('hidden')
}


