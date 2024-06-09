document.getElementById('yesButton').addEventListener('click', function() {
    document.querySelector('.container').classList.add('hidden');
    document.getElementById('response').classList.remove('hidden');
});

document.getElementById('noButton').addEventListener('click', function() {
    document.querySelector('.container').classList.add('hidden');
    alert("Okay, maybe next time!");
});
