let CurrentValue, Guess;
for (let i = 0; i < 2; i++) {
    Guess = Math.floor(Math.random() * 6) + 1;
    let PictureChoice = "./Images/dice" + Guess + ".png";
    if (i === 0)
        CurrentValue = Guess;
    document.querySelectorAll("img")[i].setAttribute("src", PictureChoice);

}

if (CurrentValue > Guess)
    document.querySelector("h1").innerText = "🥇Player 1 WINS!!!";
else if (Guess > CurrentValue)
    document.querySelector("h1").innerText = "Player 2 WINS!!!🥇";
else
    document.querySelector("h1").innerText = "DRAW!";
