// common function


// document.getElementById('donate-btn').addEventListener('click', function(){
//     this.classList.add('bg-[#B4F461]')
//     document.getElementById('history-btn').classList.remove('bg-[#B4F461]')
// })
// document.getElementById('history-btn').addEventListener('click', function(){
//     this.classList.add('bg-[#B4F461]')
//     document.getElementById('donate-btn').classList.remove('bg-primary')
// })


// donate button and history button
function showSection(id){
    document.getElementById('donate').classList.add('hidden');
    document.getElementById('history').classList.add('hidden');

    // show section by id
    document.getElementById(id).classList.remove('hidden')
}

document.getElementById('donate-btn').addEventListener('click', function(){
    showSection('donate');
    
})
document.getElementById('history-btn').addEventListener('click', function(){
    showSection('history');
})


// for Blog
document.getElementById('blog').addEventListener('click', function(){
    window.location.href = 'faq.html';
})