
let score = 0;
let u_win = 0;
let c_win = 0;
let m_draw = 0;
let com_img = "🎮";
let user_img = "🎮";

let highscore =
    Number(localStorage.getItem("highscore")) || 0;
let result = 'Best of Luck';
dispResult();
console.log("current score:", score);
console.log("high score:", highscore);

function playGame(playerMove) {
    const computerMove = pickComputerMove();

    if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'Computer win.';
        } else if (computerMove === 'paper') {
            result = 'You win.';
        } else if (computerMove === 'scissors') {
            result = 'Tie.';
        }
    }
    else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You win.';
        } else if (computerMove === 'paper') {
            result = 'Tie.';
        } else if (computerMove === 'scissors') {
            result = 'Computer win.';
        }
    }
    else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie.';
        }
        else if (computerMove === 'paper') {
            result = 'Computer win.';
        }
        else if (computerMove === 'scissors') {
            result = 'You win.';
        }
    }
    shuffle(computerMove)
    if (playerMove == 'rock') {

        user_img = "✊"
    }
    else if (playerMove == 'paper') {
        user_img = "📄"
    }
    else if (playerMove == 'scissors') {
        user_img = "✂"
    }
    document.querySelector(".user_img").innerHTML = user_img;
    if (result === 'You win.') {
        score++;
        u_win++;
    }
    else if (result === 'Computer win.') {
        score--;
        c_win++;
    }
    else {
        m_draw++;
    }
    if (score > highscore) {
        highscore = score;
    }
    // localStorage.setItem("score", score);
    localStorage.setItem("highscore", highscore);
    console.log("current score:", score);
    console.log("high score:", highscore);
}
function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = '';
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
    }
    return computerMove;
}
function resetAll() {
    score = 0;
    highscore = 0;
    u_win = 0;
    c_win = 0;
    m_draw = 0;
    com_img = "";
    user_img = "";
    result = "Let's Play Again"
    dispResult();
    localStorage.clear();
    document.querySelector('.current').innerText = `Current Score: ${score}`;
    document.querySelector('.high').innerText = `High Score: ${highscore}`;
    alert("score reset!");
}
function resetScore() {
    score = 0;
    u_win = 0;
    c_win = 0;
    m_draw = 0;
    com_img = "";
    user_img = "";
    result = "Let's Play Again"
    dispResult();
}
function dispResult() {
    document.querySelector('.current').innerText = `Current Score: ${score}`;
    document.querySelector('.high').innerHTML = `High Score : ${highscore}`;
    document.querySelector('.u_win').innerText = `You : ${u_win}`;
    document.querySelector('.c_win').innerText = `Computer : ${c_win}`;
    document.querySelector('.m_draw').innerText = `Draw : ${m_draw}`;
    document.querySelector('.com_img').innerHTML = `${com_img}`;
    document.querySelector('.user_img').innerHTML = `${user_img}`;
    document.querySelector('.result').innerText = `${result}`;
}
function shuffle(finalMove,) {

    let moves = ["✊", "📄", "✂"]
    let i = 0;
    let timer = setInterval(function () {
        
        com_img = moves[i];
        document.querySelector('.com_img').innerHTML = `${com_img}`;
        i++
        if (i == 3) {
            i = 0;
        }
    }, 110
    )
    setTimeout(function () {

        clearInterval(timer);

        if (finalMove == "rock") {
            com_img = "✊";
        }
        else if (finalMove == "paper") {
            com_img = "📄";
        }
        else {
            com_img = "✂";
        }

        dispResult();

    }, 1000);
}
