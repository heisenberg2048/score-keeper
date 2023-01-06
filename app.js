const score1 = document.querySelector('#score1');
const score2 = document.querySelector('#score2');
const select = document.querySelector('#playTo');
const button1 = document.querySelector('#player1');
const button2 = document.querySelector('#player2');
const button3 = document.querySelector('#reset');
const image = document.querySelector('img');

let winningscore = 5;
let player1S = 0;
let player2S = 0;
select.addEventListener('change', function (e) {
    winningscore = parseInt(select.value);
    player1S = 0;
    player2S = 0;
    score1.innerText = 0;
    score2.innerText = 0;
})
button1.addEventListener('click', function () {
    score1.innerText = player1S + 1;
    player1S++;
    if (score1.innerText == winningscore) {
        image.src = "https://img.itch.zone/aW1nLzI2MjcwNDkuanBn/original/sKumwl.jpg";
        button1.disabled = true;
        button2.disabled = true;
        score1.classList.add('winner');
        score2.classList.add('loser');
    }
})
button2.addEventListener('click', function () {
    score2.innerText = player2S + 1;
    player2S++;
    if (score2.innerText == winningscore) {
        image.src = "https://img.itch.zone/aW1nLzI2MjcwNTAuanBn/original/Cc4rDR.jpg";
        button1.disabled = true;
        button2.disabled = true;
        score2.classList.add('winner');
        score1.classList.add('loser');
    }
})
button3.addEventListener('click', function () {
    player1S = 0;
    player2S = 0;
    score1.innerText = 0;
    score2.innerText = 0;
    button1.disabled = false;
    button2.disabled = false;
    score1.classList.remove('winner', 'loser');
    score2.classList.remove('loser', 'winner');
    image.src = "https://images.unsplash.com/photo-1534158914592-062992fbe900?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2398&q=80";
})