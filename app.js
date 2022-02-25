const scorelimit = document.querySelector("#scorelimit");
const score1 = document.querySelector("#score1");
const score2 = document.querySelector("#score2");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");

const image = document.querySelector("img");



let i = 0;
button1.addEventListener('click', function (e) {
    i++;

    score1.innerText = `${i}`;

    if (score1.innerText === scorelimit.value) {
        console.log("player 1 won");
        image.src = "https://img.itch.zone/aW1nLzI2MjcwNDkuanBn/original/sKumwl.jpg";
        document.body.style.backgroundColor = "#e07a5f";
        button4.disabled = false;
        button1.disabled = true;
        button2.disabled = true;
        button3.disabled = true;
        // i = 0;
        // j = 0;
        // score1.innerText = `${i}`;
        // score2.innerText = `${j}`;
    }

});



let j = 0;
button2.addEventListener('click', function (e) {
    j++;
    score2.innerText = `${j}`;
    if (score2.innerText === scorelimit.value) {
        image.src = "https://img.itch.zone/aW1nLzI2MjcwNTAuanBn/original/Cc4rDR.jpg";
        console.log("player 2 won");
        document.body.style.backgroundColor = "#81b29a";
        button4.disabled = false;
        button1.disabled = true;
        button2.disabled = true;
        button3.disabled = true;
        // i = 0;
        // j = 0;
        // score1.innerText = `${i}`;
        // score2.innerText = `${j}`;
    }

});



button3.addEventListener('click', function (e) {

    i = 0;
    j = 0;
    score1.innerText = `${i}`;
    score2.innerText = `${j}`;
});


button4.addEventListener('click', function (e) {

    image.src = "https://media.istockphoto.com/photos/two-children-boy-brothers-playing-rock-scissors-paper-game-picture-id1221055207?k=20&m=1221055207&s=612x612&w=0&h=L-uzBiYSIopmR5I_mA3JCoB6CVz2QAgJTvz8jHIbz38=";
    i = 0;
    j = 0;
    score1.innerText = `${i}`;
    score2.innerText = `${j}`;
    button1.disabled = false;
    button2.disabled = false;
    button3.disabled = false;
});

